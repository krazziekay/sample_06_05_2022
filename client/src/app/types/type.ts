export type PasswordAddFormData = {
    domain: string,
    password: string,
    email: string
};

export enum AlertType {
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Error = 'error'
};

export type AlertObj = {
    visibility: boolean,
    type: AlertType,
    message: string
};