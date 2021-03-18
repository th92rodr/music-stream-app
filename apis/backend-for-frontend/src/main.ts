import 'dotenv/config';

import { restChannel } from '@channels/index';

restChannel.start();

async function shutdown(exitCode = 0): Promise<void> {
  await restChannel.stop();

  process.exit(exitCode);
}
