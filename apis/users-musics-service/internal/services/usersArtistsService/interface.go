package usersArtistsService

import e "users-musics-service/internal/entities"

type IUsersArtistsService interface {
	Follow(request FollowRequest) (*e.UserArtist, error)
	Unfollow(request UnfollowRequest) error
	GetFollowing(request GetFollowingRequest) (*e.UserArtist, error)
	GetAllFollowing(request GetAllFollowingRequest) ([]e.UserArtist, error)
}
