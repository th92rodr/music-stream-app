package playlistsService

import (
	"sync"

	e "playlists-service/internal/entities"
	m "playlists-service/internal/integrations/musicsIntegration"
	r "playlists-service/internal/repositories/playlistsRepository"
)

func (s playlistsService) AddTrack(request AddTrackRequest) (*e.Track, error) {
	// Verify if there is a playlist with this id, from this user
	playlist, err := s.playlistsRepository.FindByIdWithTracks(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.PlaylistId,
	})
	if err != nil {
		return nil, err
	}

	newTrack := &e.Track{
		Id:      s.idProvider.Generate(),
		Index:   int32(len(playlist.Tracks) + 1),
		MusicId: request.MusicId,
	}

	if err = s.playlistsRepository.StoreTrack(r.StoreTrackRequest{
		Id:         newTrack.Id,
		Index:      newTrack.Index,
		PlaylistId: request.PlaylistId,
		MusicId:    newTrack.MusicId,
	}); err != nil {
		return nil, err
	}

	return newTrack, nil
}

func (s playlistsService) UpdateTrack(request UpdateTrackRequest) (*e.Track, error) {
	// Verify if there is a playlist with this id, from this user
	if _, err := s.playlistsRepository.FindByIdWithTracks(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.PlaylistId,
	}); err != nil {
		return nil, err
	}

	track, err := s.playlistsRepository.FindTrack(r.FindTrackRequest{
		Id: request.Id,
	})
	if err != nil {
		return nil, err
	}

	track.Index = request.Index

	if err = s.playlistsRepository.UpdateTrack(r.UpdateTrackRequest{
		Id:    track.Id,
		Index: track.Index,
	}); err != nil {
		return nil, err
	}

	return track, nil
}

func (s playlistsService) RemoveTrack(request RemoveTrackRequest) error {
	// Verify if there is a playlist with this id, from this user
	if _, err := s.playlistsRepository.FindById(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.PlaylistId,
	}); err != nil {
		return err
	}

	return s.playlistsRepository.DeleteTrack(r.DeleteTrackRequest{
		Id: request.Id,
	})
}

func (s playlistsService) getTracks(tracks []*e.Track) ([]*e.Track, []error) {
	var waitGroup sync.WaitGroup
	waitGroup.Add(len(tracks))

	defer waitGroup.Wait()

	var errors []error

	for _, track := range tracks {
		go func(track *e.Track) {
			defer waitGroup.Done()

			music, err := s.musicsIntegration.GetMusic(m.GetMusicRequest{
				Id: track.MusicId,
			})

			if err != nil {
				errors = append(errors, err)
			} else {
				track.Music = music
			}
		}(track)
	}

	return tracks, errors
}
