export default {
  authentication: {
    secret: process.env.SECRET || 'top-secret',
    expiresIn: '1d',
  },

  security: {
    algorithm: process.env.ALGORITHM || 'sha512',
    salt: process.env.SALT || 'salt',
  },
};
