package playlistsRepository

type StorePlaylistRequest struct {
	Id     string
	Name   string
	UserId string
}

type UpdatePlaylistRequest struct {
	Id   string
	Name string
}
