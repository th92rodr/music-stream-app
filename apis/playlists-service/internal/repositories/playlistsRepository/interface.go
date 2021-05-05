package playlistsRepository

import e "playlists-service/internal/entities"

type IPlaylistsRepository interface {
	FindById(request FindPlaylistByIdRequest) (*e.Playlist, error)
	FindByName(request FindPlaylistByNameRequest) (*e.Playlist, error)
	FindAll(request FindAllPlaylistsRequest) ([]e.Playlist, error)
	FindByIdWithTracks(request FindPlaylistByIdRequest) (*e.Playlist, error)
	Store(request StorePlaylistRequest) error
	Update(request UpdatePlaylistRequest) error
	Delete(request DeletePlaylistRequest) error

	FindTrack(request FindTrackRequest) (*e.Track, error)
	StoreTrack(request StoreTrackRequest) error
	UpdateTrack(request UpdateTrackRequest) error
	DeleteTrack(request DeleteTrackRequest) error
}
