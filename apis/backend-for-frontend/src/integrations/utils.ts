import { ServiceError } from 'grpc';

import { translateGrpcError } from './translators';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import { HttpStatusCode } from '@constants/index';

export function handleError(error: ServiceError): BaseError {
  const statusCode = translateGrpcError(error.code);

  if (statusCode == HttpStatusCode.INTERNAL_SERVER_ERROR) {
    return new InternalError();
  }

  return new BaseError({
    name: '',
    statusCode,
    message: error.details || '',
    isOperational: true,
  });
}
