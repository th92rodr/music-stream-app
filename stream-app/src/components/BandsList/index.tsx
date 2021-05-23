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

  useEffect(() => {
    api.get('/artists').then(response => setBands(response.data));
  }, []);

  function handleBandClick(bandId: string) {
    history.push(`/artists/${bandId}`);
  }

  return (
    <div className='bands'>
      <div className='bands__header'>
        <h2>Bands</h2>
      </div>

      <ul className='bands__list'>
        {bands.map(band => (
          <li
            className='bands__list__item'
            key={band.id}
            onClick={() => handleBandClick(band.id)}
            style={{
              backgroundImage: `url(${staticFilesUrl(band.profile_img)}`,
            }}
          >
            <div className='bands__list__item__info'>
              <span className='band__name'>{band.name}</span>
              <span className='band__genre'>{band.genre}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
