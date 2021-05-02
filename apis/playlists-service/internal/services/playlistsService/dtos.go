package playlistsService

type GetPlaylistRequest struct {
	Id     string
	UserId string
}

type GetAllPlaylistsRequest struct {
	UserId string
}

type CreatePlaylistRequest struct {
	UserId string
	Name   string
}

type UpdatePlaylistRequest struct {
	Id     string
	UserId string
	Name   string
}

type DeletePlaylistRequest struct {
	Id     string
	UserId string
}
