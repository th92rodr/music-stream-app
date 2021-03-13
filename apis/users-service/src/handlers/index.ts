import ErrorHandler from './ErrorHandler/ErrorHandler';

import { loggerProvider } from '@providers/index';

export const errorHandler = new ErrorHandler(loggerProvider);
