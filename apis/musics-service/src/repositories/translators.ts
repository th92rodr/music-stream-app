import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';

export function translateArtist(artist: Artist, albums: Array<Album>): Artist {
  const newArtist = new Artist({
    id: artist.id,
    name: artist.name,
    description: artist.description,
    genre: artist.genre,
    photos: artist.photos,
  });

  newArtist.setAlbums(albums.map(album => translateAlbum(album, [])));

  return newArtist;
}

export function translateArtistsList(artists: Array<Artist>): Array<Artist> {
  return artists.map(artist => translateArtist(artist, []));
}

export function translateAlbum(album: Album, tracks: Array<Music>): Album {
  const newAlbum = new Album({
    id: album.id,
    name: album.name,
    year: album.year,
    cover: album.cover,
    studio: album.studio,
    producers: album.producers,
    artistId: album.artistId,
  });

  newAlbum.setTracks(tracks.map(track => translateMusic(track)));

  return newAlbum;
}

export function translateAlbumsList(albums: Array<Album>): Array<Album> {
  return albums.map(album => translateAlbum(album, []));
}

export function translateMusic(music: Music): Music {
  return new Music({
    id: music.id,
    title: music.title,
    durationInSeconds: music.durationInSeconds,
    file: music.file,
    composers: music.composers,
    lyrics: music.lyrics,
    albumId: music.albumId,
  });
}

export function translateMusicsList(musics: Array<Music>): Array<Music> {
  return musics.map(music => translateMusic(music));
}
