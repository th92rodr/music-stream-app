import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { AlbumModal } from '../../components/AlbumModal';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Sidebar } from '../../components/Sidebar';
import { api, staticFilesAddress } from '../../services/api';
import { Artist } from '../../types';

// styles
import './styles.scss';

// icons
import { ReactComponent as IconHeart } from '../../assets/icons/icon-heart.svg';
import { ReactComponent as IconFootSteps } from '../../assets/icons/icon-foot-steps.svg';
import { ReactComponent as IconFacebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as IconInstagram } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as IconWikipedia } from '../../assets/icons/icon-wikipedia.svg';
import { ReactComponent as IconPlayFilled } from '../../assets/icons/icon-play-filled.svg';
import { ReactComponent as IconSync } from '../../assets/icons/icon-sync.svg';
import { ReactComponent as IconClock } from '../../assets/icons/icon-clock.svg';
import { ReactComponent as IconPlayOutline } from '../../assets/icons/icon-play-outline.svg';

interface ArtistPageParams {
  artist: string;
}

export const ArtistPage: React.FC = () => {
  const { params } = useRouteMatch<ArtistPageParams>();

  const [artist, setArtist] = useState<Artist | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);

  useEffect(() => {
    api
      .get(`/artists/${params.artist}`)
      .then(response => setArtist(response.data));
  }, [params.artist]);

  function handleFavoriteArtist() {}

  function handleFollowArtist() {}

  function handlePlay() {}

  function handlePlayMix() {}

  function handlePlayMusic(musicId: string) {}

  function handleOpenAlbumModal(albumId: string) {
    setSelectedAlbum(albumId);
  }

  function handleCloseAlbumModal() {
    setSelectedAlbum(null);
  }

  return (
    <>
      {artist ? (
        <div className='page artist__page'>
          <Header />

          <section className='artist__page__wrapper'>
            <div className='artist__page__full__img'>
              <div className='artist__page__full__img__wrapper'>
                <img
                  src={`${staticFilesAddress}/files/?file=${artist.full_img}`}
                  alt={artist.name}
                  loading='lazy'
                />
              </div>
            </div>

            <Sidebar />

            <section className='artist__page__main'>
              <div className='band__header'>
                <div className='band__header__favorite'>
                  <div className='favorite' onClick={handleFavoriteArtist}>
                    <IconHeart />
                    <span>Favorite</span>
                  </div>
                  <div className='follow' onClick={handleFollowArtist}>
                    <IconFootSteps />
                    <span>Follow</span>
                  </div>
                </div>

                <div className='band__header__name__wrapper'>
                  <div className='band__header__name'>
                    <p>{artist.name}</p>
                  </div>

                  <div className='band__see__more'>
                    <a
                      className='facebook'
                      href={artist.facebook_url}
                      target='_blank'
                    >
                      <IconFacebook />
                      <span>Facebook</span>
                    </a>
                    <a
                      className='twitter'
                      href={artist.twitter_url}
                      target='_blank'
                    >
                      <IconTwitter />
                      <span>Twitter</span>
                    </a>
                    <a
                      className='instagram'
                      href={artist.instagram_url}
                      target='_blank'
                    >
                      <IconInstagram />
                      <span>Instagram</span>
                    </a>
                    <a
                      className='wikipedia'
                      href={artist.wikipedia_url}
                      target='_blank'
                    >
                      <IconWikipedia />
                      <span>Wikipedia</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='band__subheader'>
                <div className='band__actions'>
                  <button className='band__actions__play' onClick={handlePlay}>
                    <IconPlayFilled />
                    <span>Play</span>
                  </button>
                  <button
                    className='band__actions__mix'
                    onClick={handlePlayMix}
                  >
                    <IconSync />
                    <span>Mix</span>
                  </button>
                </div>

                <div className='band__stats'>
                  <div className='band__stats__card'>
                    <div className='stats__card__content country'>
                      <p>{artist.country}</p>
                    </div>
                    <span className='stats__card__title'>Country</span>
                  </div>

                  <div className='band__stats__card'>
                    <div className='stats__card__content genre'>
                      <p>{artist.genre}</p>
                    </div>
                    <span className='stats__card__title'>Genre</span>
                  </div>

                  <div className='band__stats__card'>
                    <div className='stats__card__content date'>
                      <p>{artist.foundation_date_str}</p>
                    </div>
                    <span className='stats__card__title'>Foundation Date</span>
                  </div>
                </div>
              </div>

              <div className='band__popular__tracks'>
                <div className='band__popular__tracks__header'>
                  <h2>Popular Tracks</h2>
                </div>

                <div className='tracks__header'>
                  <div className='tracks__header__title'>Song</div>
                  <div className='tracks__header__length'>
                    <IconClock />
                  </div>
                </div>

                <div className='tracks'>
                  {artist.popular_tracks.map(track => (
                    <div
                      className='track'
                      key={track.id}
                      onClick={() => handlePlayMusic(track.id)}
                    >
                      <div className='track__play'>
                        <IconPlayOutline />
                      </div>
                      <div className='track__title'>{track.title}</div>
                      <div className='track__length'>{track.duration_str}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='band__discography'>
                <div className='band__discography__header'>
                  <h2>Discography</h2>
                </div>

                <ul className='albums__list'>
                  {artist.albums.map(album => (
                    <li
                      className='albums__list__item'
                      key={album.id}
                      onClick={() => handleOpenAlbumModal(album.id)}
                    >
                      <img
                        src={`${staticFilesAddress}/files/?file=${album.cover}`}
                        alt={album.name}
                        loading='lazy'
                      />
                      <div className='albums__list__item__info'>
                        <span className='album__title'>{album.name}</span>
                        <span className='album__year'>
                          {album.release_date_str}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {selectedAlbum && (
                  <AlbumModal
                    albumId={selectedAlbum}
                    closeAlbumModal={handleCloseAlbumModal}
                  />
                )}
              </div>

              <div className='band__info__wrapper'>
                <div className='band__info__img'>
                  <div className='band__info__img__wrapper'>
                    <img
                      src={`${staticFilesAddress}/files/?file=${artist.vertical_img}`}
                      alt={artist.name}
                      loading='lazy'
                    />
                    <svg viewBox='0, 0, 100, 100'>
                      <path d='M 100,310 C -30,310 -30,-215 100,-215' />
                    </svg>
                  </div>
                </div>

                <div className='band__description__wrapper'>
                  <div className='band__description'>{artist.description}</div>
                </div>
              </div>
            </section>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
