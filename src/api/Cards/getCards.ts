import useGet from 'api/hooks/useGet';
import { ApiError } from 'api/types';
import { ICard } from 'entities/Card';

interface GetCardsResponse {
    cards: ICard[];
}

interface GetCardsHookResponse {
    data: GetCardsResponse | undefined;
    error: ApiError | undefined;
}

const useGetCards = (): GetCardsHookResponse => {
    const { data, error } = useGet<GetCardsResponse>({ path: '/cards/get', swrKey: 'Get Cards' });

    return {
        data,
        error,
    };
};

export default useGetCards;
