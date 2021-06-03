import React, { createRef, useEffect, useState } from 'react';
import Slider from 'rc-slider';

import { usePlayer } from '../../contexts';
import { convertDurationToTimeString, streamMusicUrl } from '../../utils';

// styles
import 'rc-slider/assets/index.css';
import './styles.scss';

// icons
import { ReactComponent as IconArrowBackward } from '../../assets/icons/icon-arrow-backward.svg';
import { ReactComponent as IconArrowForward } from '../../assets/icons/icon-arrow-forward.svg';
import { ReactComponent as IconList } from '../../assets/icons/icon-list.svg';
import { ReactComponent as IconPause } from '../../assets/icons/icon-pause.svg';
import { ReactComponent as IconPlay } from '../../assets/icons/icon-play-filled.svg';
import { ReactComponent as IconVolume } from '../../assets/icons/icon-volume.svg';

export const CurrentTrack: React.FC = () => {
  const [progress, setProgress] = useState(0);

  const audioRef = createRef<HTMLAudioElement>();

  const { musicsList, currentMusicIndex, isPlaying, togglePlay, setPlayingState, playPrevious, playNext } = usePlayer();

  const music = musicsList[currentMusicIndex];

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying]);

  function setupProgressListener() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;

      audioRef.current.addEventListener('timeupdate', event => {
        if (audioRef.current) {
          setProgress(Math.floor(audioRef.current.currentTime));
        }
      });
    }
  }

  function handleSeek(amount: number) {
    if (audioRef.current) {
      audioRef.current.currentTime = amount;
      setProgress(amount);
    }
  }

  return (
    <>
      {music ? (
        <section className='current__track'>
          <div className='current__track__name'>
            <div className='current__track__name__music'>{music.title}</div>
            <div className='current__track__name__band'>{music.title}</div>
          </div>

          <div className='current__track__progress__wrapper'>
            <div className='current__track__actions'>
              <a onClick={playPrevious}>
                <IconArrowBackward />
              </a>
              <a className='play' onClick={togglePlay}>
                {isPlaying ? <IconPause /> : <IconPlay />}
              </a>
              <a onClick={playNext}>
                <IconArrowForward />
              </a>
            </div>

            <div className='current__track__progress'>
              <div className='current__track__progress__start'>{convertDurationToTimeString(progress)}</div>
              <div className='current__track__progress__slider'>
                <Slider
                  value={progress}
                  max={music.duration}
                  onChange={handleSeek}
                  trackStyle={{ backgroundColor: '#176087' }}
                  railStyle={{ backgroundColor: '#8080804d' }}
                  handleStyle={{ borderColor: '#176087', borderWidth: 4 }}
                />
              </div>
              <div className='current__track__progress__finish'>{convertDurationToTimeString(music.duration)}</div>
            </div>
          </div>

          <audio
            src={streamMusicUrl(music.file)}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={playNext}
            onLoadedMetadata={setupProgressListener}
          />

          <div className='current__track__lyrics'>
            <button className='volume'>
              <IconVolume />
            </button>

            <button className='lyrics'>
              <IconList />
            </button>
          </div>
        </section>
      ) : (
        <section className='current__track'>
          <div className='current__track__name'>
            <div className='current__track__name__music'></div>
            <div className='current__track__name__band'></div>
          </div>

          <div className='current__track__progress__wrapper'>
            <div className='current__track__actions'>
              <a>
                <IconArrowBackward />
              </a>
              <a className='play'>
                <IconPlay />
              </a>
              <a>
                <IconArrowForward />
              </a>
            </div>

            <div className='current__track__progress'>
              <div className='current__track__progress__start'>--:--</div>
              <div className='current__track__progress__slider'>
                {/* prettier-ignore */}
                <Slider
                  trackStyle={{ backgroundColor: '#176087' }}
                  railStyle={{ backgroundColor: '#8080804d' }}
                  handleStyle={{ borderColor: '#176087', borderWidth: 4 }}
                />
              </div>
              <div className='current__track__progress__finish'>--:--</div>
            </div>
          </div>

          <div className='current__track__lyrics'>
            <button className='volume'>
              <IconVolume />
            </button>

            <button className='lyrics'>
              <IconList />
            </button>
          </div>
        </section>
      )}
    </>
  );
};
