import 'dotenv/config';

import { grpcChannel } from '@channels/index';
import { database } from '@database/index';
import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';

grpcChannel.start();

process.on('unhandledRejection', (error: Error, promise: Promise<any>) => {
  loggerProvider.info('Unhandled rejection caught.');
  throw error;
});

process.on('uncaughtException', (error: Error) => {
  loggerProvider.info('Unhandled exception caught.');

  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    shutdown(1);
  }
});

async function shutdown(exitCode = 0): Promise<void> {
  await grpcChannel.stop();
  await database.close();

  process.exit(exitCode);
}
