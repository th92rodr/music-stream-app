import Grpc from './grpc/Grpc';

import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';
import { usersService } from '@services/index';

export const grpcChannel = new Grpc(usersService, errorHandler, loggerProvider);
