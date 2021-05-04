package playlistsRepository

type FindPlaylistByIdRequest struct {
	UserId string
	Id     string
}

type FindPlaylistByNameRequest struct {
	UserId string
	Name   string
}

type FindAllPlaylistsRequest struct {
	UserId string
}

type StorePlaylistRequest struct {
	UserId string
	Id     string
	Name   string
}

type UpdatePlaylistRequest struct {
	UserId string
	Id     string
	Name   string
}

type DeletePlaylistRequest struct {
	UserId string
	Id     string
}

type FindTrackRequest struct {
	Id string
}

type StoreTrackRequest struct {
	Id         string
	Index      int32
	PlaylistId string
	MusicId    string
}

type UpdateTrackRequest struct {
	Id    string
	Index int32
}

type DeleteTrackRequest struct {
	Id string
}
