# Music Streaming App

## Requirements

Before you begin, you will need to have the following tools installed on your machine:

- `Docker`:<br />
  Recommended version `20.10.7`<br />
  Can be installed from `https://docs.docker.com/get-docker/`

- `Node.js`<br />
  Recommended version `v12.22.2`<br />
  Can be installed from `https://nodejs.org/en/`

- `NPM`:<br />
  Recommended version `6.14.13`

- `Yarn`:<br />
  Recommended version `1.22.5`<br />
  Can be installed from `https://classic.yarnpkg.com/en/`

- `Golang`:<br />
  Recommended version `go1.16.3`<br />
  Can be installed from `https://golang.org/dl/`

---

## Run Locally

- Start the database:

```sh
cd database/db-init
docker-compose up -d
```

- Start the APIs:

```sh
cd apis/users-service
yarn install
yarn knex:migrate
yarn dev

cd apis/musics-service
yarn install
yarn knex:migrate
yarn dev

cd apis/backend-for-frontend
yarn install
yarn dev

cd apis/playlists-service
make deps
make init_db
make run

cd apis/users-musics-service
make deps
make init_db
make run
```

- Start the frontend:

```sh
cd stream-app
yarn install --production
yarn start
```

---

## Run on Docker

- Start the database:

```sh
cd database/db-init
docker-compose up -d
```

- Create a docker network:

```sh
docker network create <network_name>
```

- Connect database container to network:

```sh
docker network connect <network_name> musics_stream_app_database
```

- Start the APIs:

```sh
cd apis/users-service
docker build -t users-service:1.0 -f deploy/Dockerfile .
docker run -it --network <network_name> --name music_stream_app_users_service --rm users-service:1.0

cd apis/musics-service
docker build -t musics-service:1.0 -f deploy/Dockerfile .
docker run -it --network <network_name> --name music_stream_app_musics_service --rm musics-service:1.0

cd apis/backend-for-frontend
docker build -t backend-for-frontend:1.0 -f deploy/Dockerfile .
docker run -it --network <network_name> -p 8080:8080 -p 9090:9090 --name music_stream_app_backend_for_frontend --rm backend-for-frontend:1.0

cd apis/playlists-service
docker build -t playlists-service:1.0 -f deploy/Dockerfile .
docker run -it --network <network_name> --name music_stream_app_playlists_service --rm playlists-service:1.0

cd apis/users-musics-service
docker build -t users-musics-service:1.0 -f deploy/Dockerfile .
docker run -it --network <network_name> --name music_stream_app_users_musics_service --rm users-musics-service:1.0
```

---
