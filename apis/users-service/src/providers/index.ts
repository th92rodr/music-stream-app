import BCryptHashProvider from './HashProvider/BCryptHashProvider';
import UuidIdProvider from './IdProvider/UuidIdProvider';
import WinstonLoggerProvider from './LoggerProvider/WinstonLoggerProvider';
import BCryptSaltProvider from './SaltProvider/BCryptSaltProvider';
import JwtTokenProvider from './TokenProvider/JwtTokenProvider';

export const hashProvider = new BCryptHashProvider();

export const idProvider = new UuidIdProvider();

export const loggerProvider = new WinstonLoggerProvider();

export const saltProvider = new BCryptSaltProvider();

export const tokenProvider = new JwtTokenProvider();
