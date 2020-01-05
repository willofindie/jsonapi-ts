import { ISerializeOptions, IResource } from '../interface';
export declare class SerializerUtils {
    private resourceName;
    private opts;
    get id(): string;
    get type(): string;
    withName(resourceName: string): SerializerUtils;
    withOptions(opts: ISerializeOptions): SerializerUtils;
    private getAttributes;
    build(record: Record<string, any>): IResource;
}
