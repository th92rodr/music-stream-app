import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import { Artist as Band } from '../../types';
import { staticFilesUrl } from '../../utils';

// styles
import './styles.scss';

export const BandsList: React.FC = () => {
  const history = useHistory();

  const [bands, setBands] = useState<Band[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const genres = ['Heavy Metal', 'Folk Metal', 'Power Metal', 'Death Metal', 'Thrash Metal', 'Black Metal'];

  useEffect(() => {
    api.get('/artists?limit=100').then(response => setBands(response.data));
  }, []);

  function selectArtist(id: string) {
    history.push(`/artists/${id}`);
  }

  function filterArtistsByGenre(genre: string) {
    if (genre == selectedGenre) {
      setSelectedGenre('');
    } else {
      setSelectedGenre(genre);
    }
  }

  return (
    <div className='bands'>
      <div className='bands__header'>
        <h2>Artists</h2>
      </div>

      <ul className='bands__genre__list'>
        {genres.map(genre => {
          return (
            // prettier-ignore
            <li
              className={genre == selectedGenre ? 'bands__genre__item active' : 'bands__genre__item'}
              key={genre}
            >
              <button onClick={() => filterArtistsByGenre(genre)}>
                {genre}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className='bands__list'>
        {bands.map(band => {
          if (selectedGenre != '' && band.genre != selectedGenre) {
            return;
          }

          return (
            <li
              className='bands__list__item'
              key={band.id}
              onClick={() => selectArtist(band.id)}
              style={{
                backgroundImage: `url(${staticFilesUrl(band.profile_img)}`,
              }}
            >
              <div className='bands__list__item__info'>
                <span className='band__name'>{band.name}</span>
                <span className='band__genre'>{band.genre}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
