package usersMusicsService

import e "users-musics-service/internal/entities"

type IUsersMusicsService interface {
	GetViews(request GetViewsRequest) (*e.UserMusic, error)
	AddView(request AddViewRequest) (*e.UserMusic, error)
	GetLastViews(request GetLastViewsRequest) ([]e.UserMusic, error)
	GetMostViews(request GetMostViewsRequest) ([]e.UserMusic, error)
}
