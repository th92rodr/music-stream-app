import 'dotenv/config';

import { restChannel, staticFilesChannel } from '@channels/index';
import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';

restChannel.start();
staticFilesChannel.start();

// Properly handle SIGINT and SIGTERM

process.on('SIGINT', function onSigint() {
  loggerProvider.info('Got SIGINT. Graceful shutdown.');
  shutdown();
});

process.on('SIGTERM', function onSigterm() {
  loggerProvider.info('Got SIGTERM. Graceful shutdown.');
  shutdown();
});

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
  await restChannel.stop();
  await staticFilesChannel.stop();

  process.exitCode = exitCode;
  process.exit(exitCode);
}
