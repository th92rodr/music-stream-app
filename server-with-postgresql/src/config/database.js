module.exports = {
  dialect: 'postgres',
  host: 'database', // name of the docker compose service where the postgres database is running
  port: 5432,
  username: 'root',
  password: '123456789',
  database: 'music-stream-app',
  // 'postgres://root:123456789@database:5432/music-stream-app'

  define: {
    timestamps: true,
    underscored: true
  }
};
