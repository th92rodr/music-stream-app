package usersArtistsService

type FollowRequest struct {
	UserId   string
	ArtistId string
}

type UnfollowRequest struct {
	UserId   string
	ArtistId string
}

type GetFollowingRequest struct {
	UserId   string
	ArtistId string
}

type GetAllFollowingRequest struct {
	UserId string
}
