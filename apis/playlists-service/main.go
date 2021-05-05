package main

import (
	"playlists-service/internal/channels/grpc"
	"playlists-service/internal/config"
	db "playlists-service/internal/database/sql"
	m "playlists-service/internal/integrations/musicsIntegration"
	i "playlists-service/internal/providers/idProvider"
	l "playlists-service/internal/providers/loggerProvider"
	r "playlists-service/internal/repositories/playlistsRepository"
	s "playlists-service/internal/services/playlistsService"
)

func main() {
	config.Initialize()

	idProvider := i.New()
	loggerProvider := l.New()

	database := db.New(loggerProvider)

	musicsIntegration := m.New()

	playlistsRepository := r.New(database.GetConnection())

	playlistsService := s.New(idProvider, musicsIntegration, playlistsRepository)

	grpcChannel := grpc.New(loggerProvider, playlistsService)

	grpcChannel.Start()
}
