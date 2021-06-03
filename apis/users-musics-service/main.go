package main

import (
	"users-musics-service/internal/channels/grpc"
	"users-musics-service/internal/config"
	db "users-musics-service/internal/database/sql"
	e "users-musics-service/internal/handlers/errorHandler"
	m "users-musics-service/internal/integrations/musicsIntegration"
	i "users-musics-service/internal/providers/idProvider"
	l "users-musics-service/internal/providers/loggerProvider"
	ra "users-musics-service/internal/repositories/usersArtistsRepository"
	rm "users-musics-service/internal/repositories/usersMusicsRepository"
	sa "users-musics-service/internal/services/usersArtistsService"
	sm "users-musics-service/internal/services/usersMusicsService"
)

func main() {
	config.Initialize()

	idProvider := i.New()
	loggerProvider := l.New()

	errorHandler := e.New(loggerProvider)

	database := db.New(loggerProvider)

	musicsIntegration := m.New()

	usersArtistsRepository := ra.New(database.GetConnection())
	usersMusicsRepository := rm.New(database.GetConnection())

	usersArtistsService := sa.New(idProvider, musicsIntegration, usersArtistsRepository)
	usersMusicsService := sm.New(idProvider, musicsIntegration, usersMusicsRepository)

	grpcChannel := grpc.New(errorHandler, loggerProvider, usersArtistsService, usersMusicsService)

	grpcChannel.Start()
}
