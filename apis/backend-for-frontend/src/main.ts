import 'dotenv/config';

import { restChannel } from '@channels/index';
import { loggerProvider } from '@providers/index';

restChannel.start();

// Properly handle SIGINT and SIGTERM

process.on('SIGINT', function onSigint() {
  loggerProvider.info('Got SIGINT. Graceful shutdown.');
  shutdown();
});

process.on('SIGTERM', function onSigterm() {
  loggerProvider.info('Got SIGTERM. Graceful shutdown.');
  shutdown();
});

async function shutdown(exitCode = 0): Promise<void> {
  await restChannel.stop();

  process.exit(exitCode);
}
