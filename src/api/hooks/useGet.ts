import useSWR from 'swr';
import api from 'api';

interface UseGetParams<T> {
    path: string;
    swrKey: string;
    apiParams?: T;
}

interface UseGetResponse<T> {
    error: ApiError | undefined;
    data: T | undefined;
}

interface ApiError {
    code: number;
    message: string;
}

const useGet = <ResponseData, RequestBody = void>(params: UseGetParams<RequestBody>): UseGetResponse<ResponseData> => {
    const { path, swrKey, apiParams = {} } = params;

    const fetcher = async (): Promise<ResponseData> => {
        const response = await api.get(path, { ...apiParams });

        const { ok, problem, status, data } = response;

        if (!ok || problem) {
            const errorMessage = `[${problem}] - [${status}] - Sorry something went wrong. Please try again.`;

            const error: ApiError = {
                code: status || 0,
                message: errorMessage,
            };

            throw error;
        }

        return data as ResponseData;
    };

    const { data, error } = useSWR<ResponseData, ApiError>(swrKey, fetcher, { shouldRetryOnError: false });

    return {
        data,
        error,
    };
};

export default useGet;
