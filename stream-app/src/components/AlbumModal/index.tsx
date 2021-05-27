import React, { createRef, useCallback, useEffect, useState } from 'react';

import { Loading } from '../Loading';
import { usePlayer } from '../../contexts/PlayerContext';
import { api } from '../../services/api';
import { Album } from '../../types';
import { staticFilesUrl } from '../../utils';

// styles
import './styles.scss';

// icons
import { ReactComponent as IconCircle } from '../../assets/icons/icon-circle.svg';
import { ReactComponent as IconClock } from '../../assets/icons/icon-clock.svg';

interface AlbumModalProps {
  albumId: string;
  closeAlbumModal: () => void;
}

export const AlbumModal: React.FC<AlbumModalProps> = ({ albumId, closeAlbumModal }) => {
  const [album, setAlbum] = useState<Album | null>(null);

  const albumModalContentRef = createRef<HTMLDivElement>();

  const { play } = usePlayer();

  useEffect(() => {
    api.get(`/albums/${albumId}`).then(response => setAlbum(response.data));
  }, [albumId]);

  // prettier-ignore
  const checkWetherToCloseAlbumModal = useCallback((event: Event) => {
    // close album modal when there is a click outside of it
    if (albumModalContentRef.current && !albumModalContentRef.current.contains(event.target as Node)) {
      closeModal();
    }

    function closeModal() {
      if (albumModalContentRef.current) {
        albumModalContentRef.current.classList.remove('open');
      }

      document.removeEventListener('click', checkWetherToCloseAlbumModal);
      closeAlbumModal();
    }
  }, [albumModalContentRef, closeAlbumModal]);

  useEffect(() => {
    if (albumModalContentRef.current) {
      albumModalContentRef.current.classList.add('open');

      // check if album modal should be closed
      document.addEventListener('click', checkWetherToCloseAlbumModal);
    }
  }, [album, albumModalContentRef, checkWetherToCloseAlbumModal]);

  return (
    <>
      {album ? (
        <section className='album__modal'>
          <div className='album__modal__content' ref={albumModalContentRef}>
            <div className='album__modal__content__area'>
              <div className='album__info'>
                <div className='album__info__img'>
                  <img src={staticFilesUrl(album.cover)} alt={album.name} loading='lazy' />
                </div>

                <div className='album__info__data'>
                  <div className='album__info__data__wrapper'>
                    <div className='album__year'>{album.release_date_str}</div>
                    <div className='album__name'>{album.name}</div>
                    <div className='album__producers'>Producers: {album.producers_str}</div>
                    <div className='album__studio'>Studio: {album.studio}</div>
                  </div>

                  <div className='album__duration'>
                    <span className='album__duration__number__tracks'>
                      {album.number_of_tracks} songs
                    </span>
                    <IconCircle />
                    <span className='album__duration__time'>{album.full_duration}</span>
                  </div>
                </div>
              </div>

              <div className='album__tracks'>
                <div className='album__tracks__header'>
                  <div className='tracks__header__number'>#</div>
                  <div className='tracks__header__title'>Song</div>
                  <div className='tracks__header__length'>
                    <IconClock />
                  </div>
                </div>

                <div className='tracks'>
                  {album.tracks.map((track, index) => (
                    <div key={track.id} className='track' onClick={() => play(album.tracks, index)}>
                      <div className='track__number'>{index + 1}</div>
                      <div className='track__title'>{track.title}</div>
                      <div className='track__length'>{track.duration_str}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};
