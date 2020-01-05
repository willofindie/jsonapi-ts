import { IJSON, ISerializeOptions, IResource } from './interface';
import { SerializerUtils } from './utils/serializer';

export class JSONAPISerializer {
  private resourceName: string;
  private opts: ISerializeOptions;

  constructor(resourceName: string, opts: ISerializeOptions) {
    this.resourceName = resourceName;
    this.opts = opts;
  }

  private getResource(record: Record<string, any>): IResource {
    return new SerializerUtils()
      .withName(this.resourceName)
      .withOptions(this.opts)
      .build(record);
  }

  private getCollection(records: Record<string, any>[]): IJSON {
    return {
      data: records.map(record => this.getResource(record))
    };
  }

  public serialize(records: Record<string, any> | Record<string, any>[]): IJSON {
    if (Array.isArray(records)) {
      return this.getCollection(records);
    }
    return {
      data: this.getResource(records)
    };
  }
}
