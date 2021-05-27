import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Music } from '../types';

type PlayerContextData = {
  musicsList: Array<Music>;
  currentMusicIndex: number;
  isPlaying: boolean;

  play: (list: Music[], index: number) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
  clearPlayerState: () => void;
  playPrevious: () => void;
  playNext: () => void;
};

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

// prettier-ignore
export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [musicsList, setMusicsList] = useState<Music[]>([]);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(list: Music[], index: number) {
    setMusicsList(list);
    setCurrentMusicIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function clearPlayerState() {
    setMusicsList([]);
    setCurrentMusicIndex(0);
  }

  function playPrevious() {
    if (currentMusicIndex > 0) {
      setCurrentMusicIndex(currentMusicIndex - 1);
    } else {
      setCurrentMusicIndex(musicsList.length - 1);
    }
  }

  function playNext() {
    if (currentMusicIndex + 1 < musicsList.length) {
      setCurrentMusicIndex(currentMusicIndex + 1);
    } else {
      setCurrentMusicIndex(0);
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        musicsList,
        currentMusicIndex,
        isPlaying,
        play,
        togglePlay,
        setPlayingState,
        clearPlayerState,
        playPrevious,
        playNext,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
