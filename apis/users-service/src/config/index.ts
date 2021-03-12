export default {
  authentication: {
    secret: process.env.SECRET || 'top-secret',
    expiresIn: '1d',
  },

  channels: {
    grpc: {
      host: '0.0.0.0',
      port: Number(process.env.GRPC_PORT) || 6560,
    },
  },

  database: {
    postgres: {
      address: process.env.POSTGRES_ADDRESS || '',
    },
  },

  logging: {
    redirect: 'console', // 'console' / 'file'
    filePath: 'logs/error.log',
  },

  security: {
    algorithm: process.env.ALGORITHM || 'sha512',
    salt: process.env.SALT || 'salt',
  },
};
