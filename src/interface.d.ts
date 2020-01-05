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
