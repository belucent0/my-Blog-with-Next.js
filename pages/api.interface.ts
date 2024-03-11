export type ResponseData<T> = {
    status: string;
    message: string;
    data?: T;
};

export interface GuestbookList {
    _id: string;
    content: string;
    authorName: string;
}

export interface PasswordValidation {
    _id: string;
    email: string;
    password: string;
    name: string;
    role: string;
}
