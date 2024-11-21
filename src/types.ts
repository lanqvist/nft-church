export interface IResponseWithPayload<T = unknown> extends Response {
    payload?: T;
}
