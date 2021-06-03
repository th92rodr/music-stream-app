package usersMusicsService

type GetViewsRequest struct {
	UserId  string
	MusicId string
}

type AddViewRequest struct {
	UserId  string
	MusicId string
}

type GetLastViewsRequest struct {
	UserId string
	Limit  int32
}

type GetMostViewsRequest struct {
	UserId string
	Limit  int32
}
