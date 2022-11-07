import apisauce, { ApiResponse } from 'apisauce';
import { ApiError, GatewayResponseAwaited, GatewayResponseError, GatewayResponseStatus, GatewayResponseSuccess } from './types';

const api = apisauce.create({
    baseURL: 'https://cwt-server.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const processApiCall = <T>(response: ApiResponse<T | ApiError>): GatewayResponseAwaited<T> => {
    const { ok, problem, data, status, originalError } = response;

    if (!ok || problem) {
        return {
            status: GatewayResponseStatus.Error,
            code: status,
            name: problem,
            message: originalError.message,
        } as GatewayResponseError;
    }

    return {
        status: GatewayResponseStatus.Success,
        data,
    } as GatewayResponseSuccess<T>;
};

export default api;
