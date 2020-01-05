import * as pluralize from 'pluralize';

import { ISerializeOptions, IResource, IAttribute } from '../interface';

export class SerializerUtils {
  private resourceName = '';
  private opts: ISerializeOptions = { attributes: [] };

  get id(): string {
    return this.opts.id || 'id';
  }

  get type(): string {
    return pluralize.plural(this.resourceName);
  }

  withName(resourceName: string): SerializerUtils {
    this.resourceName = resourceName;
    return this;
  }

  withOptions(opts: ISerializeOptions): SerializerUtils {
    this.opts = opts;
    return this;
  }

  private getAttributes(record: Record<string, any>): IAttribute {
    return Object.keys(record)
      .filter(key => this.opts.attributes.includes(key))
      .reduce((_record, key) => ({ ..._record, ...{ [key]: record[key] } }), {});
  }

  build(record: Record<string, any>): IResource {
    return {
      id: record[this.id],
      type: this.type,
      attributes: this.getAttributes(record)
    };
  }
}
