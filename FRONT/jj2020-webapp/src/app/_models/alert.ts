export enum AlertType{
    Success, Error, Info, Warning
}

export class Alert{

    idTimeOut: any;
    title: string;
    isOpen: boolean;
    message: string;
    type: AlertType;
}