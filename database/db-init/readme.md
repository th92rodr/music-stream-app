- Start database docker container:

```
docker-compose up -d
```

- Get in the database running docker container:

```sh
docker exec -it musics_stream_app_database /bin/bash
```

- Get in the PostgreSQL database:

```sh
psql -U <POSTGRES_USER> <POSTGRES_DATABASE>
```
