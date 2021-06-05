import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Album } from '../../types';
import { formatReleaseDate, staticFilesUrl } from '../../utils';

// styles
import './styles.scss';

export const AlbumsList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    api.get('/albums?limit=5&offset=0').then(response => setAlbums(response.data));
  }, []);

  return (
    <div className='albums'>
      <div className='albums__header'>
        <h2>Recent Releases</h2>
      </div>

      <ul className='albums__list'>
        {albums.map(album => (
          <li
            className='albums__list__item'
            key={album.id}
            // onClick={() => selectArtist(band.id)}
          >
            {/* prettier-ignore */}
            <img
                src={staticFilesUrl(album.cover)}
                alt={album.name}
                loading='lazy'
              />
            <div className='albums__list__item__info'>
              <span className='album__title'>{album.name}</span>
              <span className='album__year'>{formatReleaseDate(album.release_date)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
