export type ResponseData<T> = {
    status: string;
    message: string;
    data?: T;
};
