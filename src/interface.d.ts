/**
 * Following are the JSON:API Spec interfaces
 */
export interface IError {
  id?: string;
  links?: {
    about: string;
  };
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: Partial<{
    pointer: string;
    parameter: string;
  }>;
  meta?: Partial<{
    copyright: string;
    authors: string[];
  }>;
}

export type IAttribute = Record<string, any>;

export interface IResource {
  type: string;
  /**
   * id member is not required when the resource object originates at the client
   * and represents a new resource to be created on the server.
   */
  id?: string;
  attributes?: Record<string, any>;
  relationships?: any;
  links?: any;
  meta?: any;
}

export interface IJSON {
  data?: IResource | IResource[];
  errors?: IError[];
  meta?: {};
}

/**
 * Following are Code related interfaces
 */
export interface ISerializeOptions {
  id?: string;
  attributes: string[];
}
