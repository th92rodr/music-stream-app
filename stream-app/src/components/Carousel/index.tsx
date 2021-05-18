import React, { useEffect, useState } from 'react';

import { CarouselItem } from './types';
import { staticFilesAddress } from '../../services/api';

// styles
import './styles.scss';

// icons
import { ReactComponent as IconCaretLeft } from '../../assets/icons/icon-caret-left.svg';
import { ReactComponent as IconCaretRight } from '../../assets/icons/icon-caret-right.svg';
import { ReactComponent as IconMaximize } from '../../assets/icons/icon-maximize.svg';

export const Carousel: React.FC = () => {
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);

  useEffect(() => {
    setCarousel([
      {
        artist_id: '01',
        artist_name: 'Sabaton',
        album_name: 'The Art of War',
        image: 'sabaton/artist_full_sabaton_4.jpg',
      },
      {
        artist_id: '02',
        artist_name: 'Korpiklaani',
        album_name: '',
        image: 'korpiklaani/artist_full_korpiklaani_2.jpg',
      },
      {
        artist_id: '03',
        artist_name: 'Black Sabbath',
        album_name: '',
        image: 'black-sabbath/artist_full_black-sabbath_1.jpg',
      },
    ]);
  }, []);

  return (
    <div className='carousel__wrapper'>
      <div className='carousel__header'>
        <h2>Trending</h2>
      </div>

      <div className='carousel'>
        <ul className='carousel__viewport'>
          {carousel.map((carouselItem, index) => {
            let previous, next;

            if (index == 0) {
              previous = carousel.length - 1;
            } else {
              previous = index - 1;
            }

            if (index < carousel.length - 1) {
              next = index + 1;
            } else {
              next = 0;
            }

            return (
              <li
                key={carouselItem.artist_id}
                id={`carousel__slide__${index}`}
                className='carousel__slide'
              >
                <div className='carousel__snapper'>
                  <a
                    href={`#carousel__slide__${previous}`}
                    className='carousel__prev'
                  >
                    <IconCaretLeft />
                  </a>

                  <div className='carousel__bands'>
                    <div className='carousel__bands__unique'>
                      <img
                        src={`${staticFilesAddress}/web/files/?file=${carouselItem.image}`}
                        alt={carouselItem.artist_name}
                        loading='lazy'
                      />

                      <div className='carousel__bands__info'>
                        <span className='carousel__bands__info__band'>
                          {carouselItem.artist_name}
                        </span>
                        <span className='carousel__bands__info__album'>
                          {carouselItem.album_name}
                        </span>
                      </div>

                      <div className='carousel__bands__actions'>
                        <IconMaximize />
                      </div>
                    </div>
                  </div>

                  <a
                    href={`#carousel__slide__${next}`}
                    className='carousel__next'
                  >
                    <IconCaretRight />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className='carousel__navigation'>
          <ul className='carousel__navigation__list'>
            {carousel.map((carouselItem, index) => (
              <li
                key={carouselItem.artist_id}
                className='carousel__navigation__list__item'
              >
                <a
                  href={`#carousel__slide__${index}`}
                  className='carousel__navigation__button'
                ></a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};
