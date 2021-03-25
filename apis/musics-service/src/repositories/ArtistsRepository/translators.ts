import Album from '@entities/Album';
import Artist from '@entities/Artist';

export function translateArtist(artist: Artist, albums: Array<Album>): Artist {
  const newArtist = new Artist({
    id: artist.id,
    name: artist.name,
    description: artist.description,
    genre: artist.genre,
    photos: artist.photos,
  });

  newArtist.setAlbums(albums);

  return newArtist;
}

export function translateArtistsList(artists: Array<Artist>): Array<Artist> {
  return artists.map(artist => {
    return new Artist({
      id: artist.id,
      name: artist.name,
      description: artist.description,
      genre: artist.genre,
      photos: artist.photos,
    });
  });
}
