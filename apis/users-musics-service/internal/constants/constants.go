package constants

const (
	UsersArtistsTable string = "users_artists"
	UsersMusicsTable  string = "users_musics"
)

type statusCode int32

const (
	OK                    statusCode = 200
	BAD_REQUEST           statusCode = 400
	NOT_FOUND             statusCode = 404
	INTERNAL_SERVER_ERROR statusCode = 500
)
