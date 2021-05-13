package grpc

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"

	"playlists-service/internal/channels/grpc/proto"
	"playlists-service/internal/config"
	"playlists-service/internal/constants"
	e "playlists-service/internal/handlers/errorHandler"
	l "playlists-service/internal/providers/loggerProvider"
	s "playlists-service/internal/services/playlistsService"
)

type grpcChannel struct {
	server           *grpc.Server
	errorHandler     e.IErrorHandler
	loggerProvider   l.ILoggerProvider
	playlistsService s.IPlaylistsService
}

func New(errorHandler e.IErrorHandler, loggerProvider l.ILoggerProvider, playlistsService s.IPlaylistsService) IGrpcChannel {
	return grpcChannel{
		errorHandler:     errorHandler,
		loggerProvider:   loggerProvider,
		playlistsService: playlistsService,
	}
}

func (c grpcChannel) Start() {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%s", config.GrpcPort))
	if err != nil {
		panic(err)
	}

	c.server = grpc.NewServer()
	proto.RegisterPlaylistsServer(c.server, c)
	reflection.Register(c.server)

	if err := c.server.Serve(listener); err != nil {
		panic(err)
	}

	c.loggerProvider.Info(fmt.Sprintf("gRPC Channel running on port %s", config.GrpcPort))
}

func (c grpcChannel) Stop() {
	c.server.Stop()
}

func (c grpcChannel) handleError(err error) error {
	c.errorHandler.HandleError(err)

	var customError *constants.BaseError

	if !c.errorHandler.IsTrustedError(err) {
		customError = constants.InternalError
	} else {
		var ok bool
		customError, ok = err.(*constants.BaseError)
		if !ok {
			customError = constants.InternalError
		}
	}

	return status.Error(translateGrpcError(customError.StatusCode), customError.Message)
}
