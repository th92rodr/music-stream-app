export default {
  channels: {
    rest: {
      host: '0.0.0.0',
      port: Number(process.env.PORT) || 8080,
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
