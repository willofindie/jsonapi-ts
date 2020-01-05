import { ErrorUtils } from './utils/error';
import { IError } from './interface';

export class JSONAPIError {
  errors: IError[];

  constructor(opts?: IError | IError[]) {
    const _opts = opts || [];
    this.errors = Array.isArray(_opts) ? ErrorUtils(_opts) : ErrorUtils([_opts]);
  }
}
