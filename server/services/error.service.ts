import { HttpStatus } from "../utils/error";

export class BadrequestError extends Error{
    statusCode:number;
    constructor(message:string){
        super(message)
        this.statusCode= HttpStatus.Badrequest
        this.name= "BadrequestError"
    }
}

export class UnauthorizedError extends Error{
    statusCode:number;
    constructor(message:string){
        super(message)
        this.statusCode=HttpStatus.Unauthorized,
        this.name="UnauthorizedError"
    }
}

export class NotFoundError extends Error{
    statusCode:number;
    constructor(message:string){
        super(message)
        this.statusCode=HttpStatus.Notfound,
        this.name="NotFoundError"
    }
}