package usersMusicsRepository

import "time"

type StoreUserMusicRequest struct {
	Id        string
	Views     int
	UserId    string
	MusicId   string
	CreatedAt time.Time
	UpdatedAt time.Time
}

type UpdateUserMusicRequest struct {
	Id        string
	Views     int
	UpdatedAt time.Time
}

type DeleteUserMusicRequest struct {
	Id string
}

type FindUserMusicRequest struct {
	UserId  string
	MusicId string
}

type FindLastUpdatedRequest struct {
	UserId string
	Limit  int32
}

type FindMostViewsRequest struct {
	UserId string
	Limit  int32
}
