export enum CodResponse{
    OK, Created, Accepted, BadRequest, Unauthorized, Forbidden, NotFound, InternalServerError
}

export class InternResponse{
    constructor(){}
    codResponse: CodResponse;
    message:string;
    body: any;
}