package usersArtistsRepository

import e "users-musics-service/internal/entities"

type IUsersArtistsRepository interface {
	Store(request StoreUserArtistRequest) error
	Delete(request DeleteUserArtistRequest) error
	Find(request FindUserArtistRequest) (*e.UserArtist, error)
}
