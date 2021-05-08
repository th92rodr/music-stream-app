import { AlbumsDb, ArtistsDb, MusicsDb } from './databaseEntities';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';

export function translateArtist(artist: ArtistsDb, albums: Array<AlbumsDb>): Artist {
  const newArtist = new Artist({
    id: artist.id,
    name: artist.name,
    country: artist.country,
    foundationDate: artist.foundation_date,
    members: artist.members,
    description: artist.description,
    genre: artist.genre,
    photos: artist.photos,
    facebookUrl: artist.facebook_url,
    twitterUrl: artist.twitter_url,
    instagramUrl: artist.instagram_url,
    wikipediaUrl: artist.wikipedia_url,
    favorites: artist.favorites,
    followers: artist.followers,
  });

  newArtist.setAlbums(albums.map(album => translateAlbum(album, [])));

  return newArtist;
}

export function translateArtistsList(artists: Array<ArtistsDb>): Array<Artist> {
  return artists.map(artist => translateArtist(artist, []));
}

export function translateAlbum(album: AlbumsDb, tracks: Array<MusicsDb>): Album {
  const newAlbum = new Album({
    id: album.id,
    name: album.name,
    releaseDate: album.release_date,
    cover: album.cover,
    studio: album.studio,
    producers: album.producers,
    artistId: album.artist_id,
  });

  newAlbum.setTracks(tracks.map(track => translateMusic(track)));

  return newAlbum;
}

export function translateAlbumsList(albums: Array<AlbumsDb>): Array<Album> {
  return albums.map(album => translateAlbum(album, []));
}

export function translateMusic(music: MusicsDb): Music {
  return new Music({
    id: music.id,
    title: music.title,
    durationInSeconds: music.duration,
    file: music.file,
    composers: music.composers,
    lyrics: music.lyrics,
    albumId: music.album_id,
    views: music.views,
  });
}

export function translateMusicsList(musics: Array<MusicsDb>): Array<Music> {
  return musics.map(music => translateMusic(music));
}
