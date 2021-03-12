export default {
  channels: {
    grpc: {
      host: '0.0.0.0',
      port: Number(process.env.GRPC_PORT) || 6565,
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
};
