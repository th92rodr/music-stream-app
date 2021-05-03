package playlistsService

import (
	"sync"

	e "playlists-service/internal/entities"
	m "playlists-service/internal/integrations/musicsIntegration"
	r "playlists-service/internal/repositories/playlistsRepository"
)

func (s playlistsService) AddTrack(request AddTrackRequest) error {
	// Verify if there is a playlist with this id, from this user
	if _, err := s.playlistsRepository.FindById(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.PlaylistId,
	}); err != nil {
		return err
	}

	return s.playlistsRepository.StoreTrack(r.StoreTrackRequest{
		Id:         s.idProvider.Generate(),
		Index:      request.Index,
		PlaylistId: request.PlaylistId,
		MusicId:    request.MusicId,
	})
}

func (s playlistsService) UpdateTrack(request UpdateTrackRequest) error {
	// Verify if there is a playlist with this id, from this user
	if _, err := s.playlistsRepository.FindById(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.PlaylistId,
	}); err != nil {
		return err
	}

	return s.playlistsRepository.UpdateTrack(r.UpdateTrackRequest{
		Id:    request.Id,
		Index: request.Index,
	})
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

func (s playlistsService) getTracks(t map[int32]string) (map[int32]*e.Music, []error) {
	var waitGroup sync.WaitGroup
	waitGroup.Add(len(t))

	defer waitGroup.Wait()

	tracks := make(map[int32]*e.Music)
	var errors []error

	for index, musicId := range t {
		go func(index int32, musicId string) {
			defer waitGroup.Done()

			music, err := s.musicsIntegration.GetMusic(m.GetMusicRequest{
				Id: musicId,
			})

			if err != nil {
				errors = append(errors, err)
			} else {
				tracks[index] = music
			}
		}(index, musicId)
	}

	return tracks, errors
}
