module.exports = {
  dialect: 'postgres',
  host: 'db', // name of the docker compose service where the postgres database is running
  port: 5432,
  //host: 'localhost',
  //port: 35432,
  username: 'user',
  password: '1234',
  database: 'music-stream-app',
  //'postgres://user:1234@db:5432/music-stream-app',

  define: {
    timestamps: true,
    underscored: true
  }
};
