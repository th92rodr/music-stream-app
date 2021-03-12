import 'dotenv/config';

import { grpcChannel } from '@channels/index';
import { database } from '@database/index';
import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';

grpcChannel.start();

async function shutdown(exitCode = 0): Promise<void> {
  await grpcChannel.stop();
  await database.close();

  process.exit(exitCode);
}
