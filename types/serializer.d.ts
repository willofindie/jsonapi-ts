import { IJSON, ISerializeOptions } from './interface';
export declare class JSONAPISerializer {
    private resourceName;
    private opts;
    constructor(resourceName: string, opts: ISerializeOptions);
    private getResource;
    private getCollection;
    serialize(records: Record<string, any> | Record<string, any>[]): IJSON;
}
