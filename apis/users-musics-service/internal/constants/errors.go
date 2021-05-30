package constants

var ErrorUserArtistNotFound = &BaseError{
	Name:          "NOT FOUND",
	Message:       "A user_artist entity with the user (user_id) and the artist (artist_id) was not found.",
	StatusCode:    int32(NOT_FOUND),
	IsOperational: true,
}

var ErrorUserMusicNotFound = &BaseError{
	Name:          "NOT FOUND",
	Message:       "A user_music entity with the user (user_id) and the music (music_id) was not found.",
	StatusCode:    int32(NOT_FOUND),
	IsOperational: true,
}

var InternalError = &BaseError{
	Name:          "INTERNAL ERROR",
	Message:       "An unexpected error occur.",
	StatusCode:    int32(INTERNAL_SERVER_ERROR),
	IsOperational: false,
}
