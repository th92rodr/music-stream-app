package playlistsService

import (
	"sync"

	e "playlists-service/internal/entities"
	m "playlists-service/internal/integrations/musicsIntegration"
	i "playlists-service/internal/providers/idProvider"
	r "playlists-service/internal/repositories/playlistsRepository"
)

type playlistsService struct {
	idProvider          i.IIdProvider
	musicsIntegration   m.IMusicsIntegration
	playlistsRepository r.IPlaylistsRepository
}

func New(idProvider i.IIdProvider, musicsIntegration m.IMusicsIntegration, playlistsRepository r.IPlaylistsRepository) IPlaylistsService {
	return playlistsService{
		idProvider:          idProvider,
		musicsIntegration:   musicsIntegration,
		playlistsRepository: playlistsRepository,
	}
}

func (s playlistsService) Get(request GetPlaylistRequest) (*e.Playlist, error) {
	playlist, tracks, err := s.playlistsRepository.Find(request.Id)

	if err != nil {
		return nil, err
	}

	playlist.Tracks, _ = s.getTracks(tracks)

	return playlist, nil
}

func (s playlistsService) GetAll(request GetAllPlaylistsRequest) ([]e.Playlist, error) {
	return s.playlistsRepository.FindAll(request.UserId)
}

func (s playlistsService) Create(request CreatePlaylistRequest) (*e.Playlist, error) {
	playlist := &e.Playlist{
		Id:     s.idProvider.Generate(),
		Name:   request.Name,
		UserId: request.UserId,
	}

	if err := s.playlistsRepository.Store(r.StorePlaylistRequest{
		Id:     playlist.Id,
		Name:   playlist.Name,
		UserId: playlist.UserId,
	}); err != nil {
		return nil, err
	}

	return playlist, nil
}

func (s playlistsService) Update(request UpdatePlaylistRequest) (*e.Playlist, error) {
	playlist, _, err := s.playlistsRepository.Find(request.Id)

	if err != nil {
		return nil, err
	}

	newPlaylist := &e.Playlist{
		Id:     playlist.Id,
		UserId: playlist.UserId,
		Name:   request.Name,
	}

	if err = s.playlistsRepository.Update(r.UpdatePlaylistRequest{
		Id:   newPlaylist.Id,
		Name: newPlaylist.Name,
	}); err != nil {
		return nil, err
	}

	return newPlaylist, nil
}

func (s playlistsService) Delete(request DeletePlaylistRequest) error {
	return s.playlistsRepository.Delete(request.Id)
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
