package usersMusicsRepository

import e "users-musics-service/internal/entities"

type IUsersMusicsRepository interface {
	Store(request StoreUserMusicRequest) error
	Update(request UpdateUserMusicRequest) error
	Delete(request DeleteUserMusicRequest) error
	Find(request FindUserMusicRequest) (*e.UserMusic, error)
}
