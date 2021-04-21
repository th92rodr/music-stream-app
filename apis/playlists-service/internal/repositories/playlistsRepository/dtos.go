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

type StoreTrackRequest struct {
	Id         string
	Index      int32
	PlaylistId string
	MusicId    string
}
