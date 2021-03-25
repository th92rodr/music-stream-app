import Music from '@entities/Music';

export function translateMusic(music: Music): Music {
  return new Music({
    id: music.id,
    title: music.title,
    durationInSeconds: music.durationInSeconds,
    file: music.file,
    composers: music.composers,
    lyrics: music.lyrics,
    albumId: music.albumId,
  });
}

export function translateMusicsList(musics: Array<Music>): Array<Music> {
  return musics.map(music => {
    return new Music({
      id: music.id,
      title: music.title,
      durationInSeconds: music.durationInSeconds,
      file: music.file,
      composers: music.composers,
      lyrics: music.lyrics,
      albumId: music.albumId,
    });
  });
}
