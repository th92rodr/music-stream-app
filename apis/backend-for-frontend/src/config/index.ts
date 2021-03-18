import path from 'path';

export default {
  authentication: {
    secret: process.env.SECRET || 'top-secret',
    expiresIn: '1d',
  },

  channels: {
    rest: {
      host: '0.0.0.0',
      port: Number(process.env.REST_PORT) || 8080,
    },
  },

  integrations: {
    musics_service: process.env.MUSICS_SERVICE_ADDRESS || 'localhost:6565',
    users_service: process.env.USERS_SERVICE_ADDRESS || 'localhost:6560',
  },

  logging: {
    redirect: 'console', // 'console' / 'file'
    filePath: 'logs/error.log',
  },

  storage: {
    path: path.resolve(__dirname, '..', '..', '..', '..', 'storage'),
  },
};