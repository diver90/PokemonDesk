export interface IStateRequest<T> {
    isLoading: false,
    data: null | T[],
    error: null | object,
}