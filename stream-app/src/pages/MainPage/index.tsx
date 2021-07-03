import React from 'react';

import { AlbumsList, BandsList, Carousel, CurrentTrack, Header, Sidebar } from '../../components';

// styles
import './styles.scss';

export const MainPage: React.FC = () => {
  return (
    <div className='page main__page'>
      <Header />

      <section className='main__page__wrapper'>
        <Sidebar />

        <section className='main__page__main'>
          <header className='main__header'>Home</header>

          <nav className='main__nav'>
            <a className='link active' href='#'>
              Overview
            </a>
            <a className='link' href='#artists'>
              Artists
            </a>
            <a className='link' href='#'>
              Genres and Moods
            </a>
            <a className='link' href='#new__releases'>
              New Releases
            </a>
            <a className='link' href='#'>
              Discover
            </a>
            <a className='link' href='#'>
              More
            </a>
          </nav>

          <section className='main__content'>
            <Carousel />

            <div id='artists'>
              <BandsList />
            </div>

            <div id='new__releases'>
              <AlbumsList />
            </div>
          </section>
        </section>
      </section>

      <CurrentTrack />
    </div>
  );
};
