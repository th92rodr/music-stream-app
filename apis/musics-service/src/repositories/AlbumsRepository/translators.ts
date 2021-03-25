import Album from '@entities/Album';
import Music from '@entities/Music';

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

  newAlbum.setTracks(tracks);

  return newAlbum;
}

export function translateAlbumsList(albums: Array<Album>): Array<Album> {
  return albums.map(album => {
    return new Album({
      id: album.id,
      name: album.name,
      year: album.year,
      cover: album.cover,
      studio: album.studio,
      producers: album.producers,
      artistId: album.artistId,
    });
  });
}
