import ExpressRestChannel from './rest/express/Express';

import { errorHandler } from '@handlers/index';
import { musicsIntegration, usersIntegration } from '@integrations/index';
import { loggerProvider } from '@providers/index';

export const restChannel = new ExpressRestChannel(musicsIntegration, usersIntegration, errorHandler, loggerProvider);
