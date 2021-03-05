export default {
  channels: {
    grpc: {
      host: '0.0.0.0',
      port: Number(process.env.GRPC_PORT) || 6560,
    },
  },

  authentication: {
    secret: process.env.SECRET || 'top-secret',
    expiresIn: '1d',
  },

  security: {
    algorithm: process.env.ALGORITHM || 'sha512',
    salt: process.env.SALT || 'salt',
  },
};
