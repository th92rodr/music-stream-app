package playlistsService

import (
	"fmt"

	c "playlists-service/internal/constants"
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
	playlist, err := s.playlistsRepository.FindById(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.Id,
	})
	if err != nil {
		return nil, err
	}

	return playlist, nil
}

func (s playlistsService) GetAll(request GetAllPlaylistsRequest) ([]e.Playlist, error) {
	return s.playlistsRepository.FindAll(r.FindAllPlaylistsRequest{
		UserId: request.UserId,
	})
}

func (s playlistsService) Create(request CreatePlaylistRequest) (*e.Playlist, error) {
	playlistExists, _ := s.playlistsRepository.FindByName(r.FindPlaylistByNameRequest{
		UserId: request.UserId,
		Name:   request.Name,
	})
	if playlistExists != nil {
		customError := c.ErrorPlaylistAlreadyExists
		customError.Message = fmt.Sprintf("A playlist entity from the user %s with the name %s already exists.", request.UserId, request.Name)
		return nil, customError
	}

	playlist := &e.Playlist{
		Id:     s.idProvider.Generate(),
		UserId: request.UserId,
		Name:   request.Name,
	}

	if err := s.playlistsRepository.Store(r.StorePlaylistRequest{
		Id:     playlist.Id,
		UserId: playlist.UserId,
		Name:   playlist.Name,
	}); err != nil {
		return nil, err
	}

	return playlist, nil
}

func (s playlistsService) Update(request UpdatePlaylistRequest) (*e.Playlist, error) {
	playlist, err := s.playlistsRepository.FindById(r.FindPlaylistByIdRequest{
		UserId: request.UserId,
		Id:     request.Id,
	})
	if err != nil {
		return nil, err
	}

	newPlaylist := &e.Playlist{
		Id:     playlist.Id,
		UserId: playlist.UserId,
		Name:   request.Name,
	}

	if err = s.playlistsRepository.Update(r.UpdatePlaylistRequest{
		UserId: newPlaylist.UserId,
		Id:     newPlaylist.Id,
		Name:   newPlaylist.Name,
	}); err != nil {
		return nil, err
	}

	return newPlaylist, nil
}

func (s playlistsService) Delete(request DeletePlaylistRequest) error {
	return s.playlistsRepository.Delete(r.DeletePlaylistRequest{
		UserId: request.UserId,
		Id:     request.Id,
	})
}
