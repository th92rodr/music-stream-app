package usersMusicsService

import (
	"time"

	c "users-musics-service/internal/constants"
	e "users-musics-service/internal/entities"
	m "users-musics-service/internal/integrations/musicsIntegration"
	i "users-musics-service/internal/providers/idProvider"
	r "users-musics-service/internal/repositories/usersMusicsRepository"
)

type usersMusicsService struct {
	idProvider            i.IIdProvider
	musicsIntegration     m.IMusicsIntegration
	usersMusicsRepository r.IUsersMusicsRepository
}

func New(idProvider i.IIdProvider, musicsIntegration m.IMusicsIntegration, usersMusicsRepository r.IUsersMusicsRepository) IUsersMusicsService {
	return usersMusicsService{
		idProvider:            idProvider,
		musicsIntegration:     musicsIntegration,
		usersMusicsRepository: usersMusicsRepository,
	}
}

func (s usersMusicsService) GetViews(request GetViewsRequest) (*e.UserMusic, error) {
	return s.usersMusicsRepository.Find(r.FindUserMusicRequest{
		UserId:  request.UserId,
		MusicId: request.MusicId,
	})
}

func (s usersMusicsService) AddView(request AddViewRequest) (*e.UserMusic, error) {
	userMusic, err := s.usersMusicsRepository.Find(r.FindUserMusicRequest{
		UserId:  request.UserId,
		MusicId: request.MusicId,
	})
	if err != nil {
		if err == c.ErrorUserMusicNotFound {
			userMusic = &e.UserMusic{
				Id:        s.idProvider.Generate(),
				Views:     1,
				UserId:    request.UserId,
				MusicId:   request.MusicId,
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			}

			if err := s.usersMusicsRepository.Store(r.StoreUserMusicRequest{
				Id:        userMusic.Id,
				Views:     userMusic.Views,
				UserId:    userMusic.UserId,
				MusicId:   userMusic.MusicId,
				CreatedAt: userMusic.CreatedAt,
				UpdatedAt: userMusic.UpdatedAt,
			}); err != nil {
				return nil, err
			}

			return userMusic, nil
		}

		return nil, err
	}

	newUserMusic := &e.UserMusic{
		Id:        userMusic.Id,
		Views:     userMusic.Views + 1,
		UserId:    userMusic.UserId,
		MusicId:   userMusic.MusicId,
		CreatedAt: userMusic.CreatedAt,
		UpdatedAt: time.Now(),
	}

	if err := s.usersMusicsRepository.Update(r.UpdateUserMusicRequest{
		Id:        newUserMusic.Id,
		Views:     newUserMusic.Views,
		UpdatedAt: newUserMusic.UpdatedAt,
	}); err != nil {
		return nil, err
	}

	return newUserMusic, nil
}
