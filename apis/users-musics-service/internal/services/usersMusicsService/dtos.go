package usersMusicsService

type GetViewsRequest struct {
	UserId  string
	MusicId string
}

type AddViewRequest struct {
	UserId  string
	MusicId string
}
