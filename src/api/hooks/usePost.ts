import { useState } from 'react';
import api from 'api';

interface UsePostParams {
    path: string;
}

interface UsePostResponse<Body, T> {
    post: (payload: Body) => Promise<void>;
    loading: boolean;
    error: string | null;
    data: T | null;
}

const usePost = <RequestBody, T = void>(params: UsePostParams): UsePostResponse<RequestBody, T> => {
    const { path } = params;

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [responseData, setResponseData] = useState<T | null>(null);

    const post = async (postParams: RequestBody) => {
        setLoading(true);
        setError('');

        const response = await api.post<T | null>(path, { ...postParams });

        const { ok, problem, status, data } = response;

        if (!ok || problem) {
            const errorMessage = `[${problem}] - [${status}] - Sorry something went wrong. Please try again.`;

            setLoading(false);
            setError(errorMessage);

            return;
        }

        setLoading(false);
        setError('');

        if (data) setResponseData(data);
    };

    return {
        post,
        loading,
        error,
        data: responseData,
    };
};

export default usePost;
