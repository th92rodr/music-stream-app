# MUSIC STREAMING APP

[![NodeJS](https://img.shields.io/badge/Node.JS-JS--runtime-green.svg?logo=node.js)](https://nodejs.org/en/)
[![Docker](https://img.shields.io/badge/Docker-container-blue.svg?logo=docker)](https://www.docker.com/)
[![Express](https://img.shields.io/badge/Express-framework-yellow.svg?logo=JavaScript)](https://expressjs.com/)

## RUNNING THE APPLICATION

just run `docker compose`

```sh
docker-compose up
```

get into the container:

```sh
docker exec -it music-app-server sh
```

## PostreSQL database

- connect to PostreSQL database running in docker

```sh
psql postgres://<POSTGRES_USER>:<POSTGRES_PASSWORD>@localhost:<PORT>/<POSTGRES_DB>
psql postgres://user:1234@localhost:35432/music-stream-app
```

```sh
npx sequelize db:create

npx sequelize migration:create --name:create-artist

npx sequelize db:migrate
```

## References

[Sequelize Data Validator](https://sequelize.org/master/manual/models-definition.html#validations)
