'use strict';

import { IError } from '../interface';

export const ErrorUtils = (errors: IError[]) =>
  errors.reduce<IError[]>((_errors, error) => {
    _errors.push({
      ...(error.id && { id: error.id }),
      ...(error.status && { status: error.status }),
      ...(error.code && { code: error.code }),
      ...(error.title && { title: error.title }),
      ...(error.detail && { detail: error.detail }),
      ...(error.source && {
        source: {
          ...(error.source.pointer && { pointer: error.source.pointer }),
          ...(error.source.parameter && { parameter: error.source.parameter })
        }
      }),
      ...(error.links && { links: { about: error.links.about } }),
      ...(error.meta && { meta: error.meta })
    });
    return _errors;
  }, []);
