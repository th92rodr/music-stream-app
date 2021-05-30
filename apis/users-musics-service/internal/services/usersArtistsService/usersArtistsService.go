package usersArtistsService

import (
	e "users-musics-service/internal/entities"
	m "users-musics-service/internal/integrations/musicsIntegration"
	i "users-musics-service/internal/providers/idProvider"
	r "users-musics-service/internal/repositories/usersArtistsRepository"
)

type usersArtistsService struct {
	idProvider             i.IIdProvider
	musicsIntegration      m.IMusicsIntegration
	usersArtistsRepository r.IUsersArtistsRepository
}

func New(idProvider i.IIdProvider, musicsIntegration m.IMusicsIntegration, usersArtistsRepository r.IUsersArtistsRepository) IUsersArtistsService {
	return usersArtistsService{
		idProvider:             idProvider,
		musicsIntegration:      musicsIntegration,
		usersArtistsRepository: usersArtistsRepository,
	}
}

func (s usersArtistsService) Follow(request FollowRequest) (*e.UserArtist, error) {
	userArtist := &e.UserArtist{
		Id:       s.idProvider.Generate(),
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	}

	if err := s.usersArtistsRepository.Store(r.StoreUserArtistRequest{
		Id:       userArtist.Id,
		UserId:   userArtist.UserId,
		ArtistId: userArtist.ArtistId,
	}); err != nil {
		return nil, err
	}

	return userArtist, nil
}

func (s usersArtistsService) Unfollow(request UnfollowRequest) error {
	userArtist, err := s.usersArtistsRepository.Find(r.FindUserArtistRequest{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	})
	if err != nil {
		return err
	}

	return s.usersArtistsRepository.Delete(r.DeleteUserArtistRequest{
		Id: userArtist.Id,
	})
}

func (s usersArtistsService) GetFollowing(request GetFollowingRequest) (*e.UserArtist, error) {
	return s.usersArtistsRepository.Find(r.FindUserArtistRequest{
		UserId:   request.UserId,
		ArtistId: request.ArtistId,
	})
}

func (s usersArtistsService) GetAllFollowing(request GetAllFollowingRequest) ([]e.UserArtist, error) {
	return s.usersArtistsRepository.FindAll(r.FindAllUserArtistsRequest{
		UserId: request.UserId,
	})
}
