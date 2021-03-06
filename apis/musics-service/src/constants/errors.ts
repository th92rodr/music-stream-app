import { StatusCode } from './index';
import BaseError from '@errors/BaseError';

export class ErrorMusicNotFound extends BaseError {
  constructor(id: string) {
    super({
      name: 'NOT FOUND',
      statusCode: StatusCode.NOT_FOUND,
      isOperational: true,
      message: `A music entity with the id ${id} was not found.`,
    });
  }
}

export class ErrorAlbumNotFound extends BaseError {
  constructor(id: string) {
    super({
      name: 'NOT FOUND',
      statusCode: StatusCode.NOT_FOUND,
      isOperational: true,
      message: `An album entity with the id ${id} was not found.`,
    });
  }
}

export class ErrorArtistNotFound extends BaseError {
  constructor(id: string) {
    super({
      name: 'NOT FOUND',
      statusCode: StatusCode.NOT_FOUND,
      isOperational: true,
      message: `An artist entity with the id ${id} was not found.`,
    });
  }
}

export class InternalError extends BaseError {
  constructor() {
    super({
      name: 'INTERNAL ERROR',
      statusCode: StatusCode.INTERNAL_SERVER,
      isOperational: false,
      message: `An unexpected error occur.`,
    });
  }
}
