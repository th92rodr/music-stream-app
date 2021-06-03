package usersArtistsRepository

type StoreUserArtistRequest struct {
	Id       string
	UserId   string
	ArtistId string
}

type DeleteUserArtistRequest struct {
	Id string
}

type FindUserArtistRequest struct {
	UserId   string
	ArtistId string
}

type FindAllUserArtistsRequest struct {
	UserId string
}
