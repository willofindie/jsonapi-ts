import { IError } from './interface';
export declare class JSONAPIError {
    errors: IError[];
    constructor(opts?: IError | IError[]);
}
