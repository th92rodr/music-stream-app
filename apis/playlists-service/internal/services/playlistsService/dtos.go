package playlistsService

type GetPlaylistRequest struct {
	Id string
}

type GetAllPlaylistsRequest struct {
	UserId string
}

type CreatePlaylistRequest struct {
	Name   string
	UserId string
}

type UpdatePlaylistRequest struct {
	Id   string
	Name string
}

type DeletePlaylistRequest struct {
	Id string
}
