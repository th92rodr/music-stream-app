import { Music, Playlist, PlaylistsList } from './proto/playlists_service_pb';
import MusicEntity from '@entities/Music';
import PlaylistEntity from '@entities/Playlist';

export function translatePlaylistEntity(playlist: Playlist): PlaylistEntity {
  const tracks = new Map<number, MusicEntity>();

  playlist.getTracksList().map(track => {
    const music = track.getMusic();
    const index = track.getIndex();

    if (music) {
      tracks.set(index, translateMusicEntity(music));
    }
  });

  return new PlaylistEntity({
    id: playlist.getId(),
    name: playlist.getName(),
    userId: playlist.getUserid(),
    tracks,
  });
}

export function translatePlaylistEntityList(playlistsList: PlaylistsList): Array<PlaylistEntity> {
  return playlistsList.getPlaylistsList().map(playlist => translatePlaylistEntity(playlist));
}

export function translateMusicEntity(music: Music): MusicEntity {
  return new MusicEntity({
    id: music.getId(),
    title: music.getTitle(),
    durationInSeconds: music.getDurationinseconds(),
    file: music.getFile(),
    composers: music.getComposersList(),
    lyrics: music.getLyrics(),
    albumId: music.getAlbumid(),
    views: music.getViews(),
  });
}
