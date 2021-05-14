CREATE TABLE "users" (
  "id" varchar PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "artists" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "country" varchar NOT NULL,
  "foundation_date" date NOT NULL,
  "members" text[],
  "description" varchar,
  "genre" int NOT NULL,
  "photos" text[],
  "facebook_url" varchar,
  "twitter_url" varchar,
  "instagram_url" varchar,
  "wikipedia_url" varchar,
  "favorites" int NOT NULL,
  "followers" int NOT NULL
);

CREATE TABLE "albums" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "release_date" date NOT NULL,
  "cover" varchar NOT NULL,
  "studio" varchar,
  "producers" text[],
  "artist_id" varchar NOT NULL
);

CREATE TABLE "musics" (
  "id" varchar PRIMARY KEY,
  "title" varchar NOT NULL,
  "duration" int NOT NULL,
  "file" varchar NOT NULL,
  "composers" text[],
  "lyrics" varchar,
  "views" int NOT NULL,
  "album_id" varchar NOT NULL
);

CREATE TABLE "playlists" (
  "id" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "user_id" varchar NOT NULL
);

CREATE TABLE "playlists_musics" (
  "id" varchar PRIMARY KEY,
  "index" int NOT NULL,
  "playlist_id" varchar NOT NULL,
  "music_id" varchar NOT NULL
);

CREATE TABLE "users_artists" (
  "id" varchar PRIMARY KEY,
  "user_id" varchar NOT NULL,
  "artist_id" varchar NOT NULL
);

CREATE TABLE "users_musics" (
  "id" varchar PRIMARY KEY,
  "views" int NOT NULL,
  "user_id" varchar NOT NULL,
  "music_id" varchar NOT NULL
);

ALTER TABLE "albums" ADD FOREIGN KEY ("artist_id") REFERENCES "artists" ("id");

ALTER TABLE "musics" ADD FOREIGN KEY ("album_id") REFERENCES "albums" ("id");

ALTER TABLE "playlists" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "playlists_musics" ADD FOREIGN KEY ("playlist_id") REFERENCES "playlists" ("id");

ALTER TABLE "playlists_musics" ADD FOREIGN KEY ("music_id") REFERENCES "musics" ("id");

ALTER TABLE "users_artists" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_artists" ADD FOREIGN KEY ("artist_id") REFERENCES "artists" ("id");

ALTER TABLE "users_musics" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users_musics" ADD FOREIGN KEY ("music_id") REFERENCES "musics" ("id");
