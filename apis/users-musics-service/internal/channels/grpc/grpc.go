package grpc

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"

	"users-musics-service/internal/channels/grpc/proto"
	"users-musics-service/internal/config"
	"users-musics-service/internal/constants"
	e "users-musics-service/internal/handlers/errorHandler"
	l "users-musics-service/internal/providers/loggerProvider"
	sa "users-musics-service/internal/services/usersArtistsService"
	sm "users-musics-service/internal/services/usersMusicsService"
)

type grpcChannel struct {
	server              *grpc.Server
	errorHandler        e.IErrorHandler
	loggerProvider      l.ILoggerProvider
	usersArtistsService sa.IUsersArtistsService
	usersMusicsService  sm.IUsersMusicsService
}

func New(errorHandler e.IErrorHandler, loggerProvider l.ILoggerProvider, usersArtistsService sa.IUsersArtistsService, usersMusicsService sm.IUsersMusicsService) IGrpcChannel {
	return grpcChannel{
		errorHandler:        errorHandler,
		loggerProvider:      loggerProvider,
		usersArtistsService: usersArtistsService,
		usersMusicsService:  usersMusicsService,
	}
}

func (c grpcChannel) Start() {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%s", config.GrpcPort))
	if err != nil {
		panic(err)
	}

	c.server = grpc.NewServer()
	proto.RegisterUsersMusicsServer(c.server, c)
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
