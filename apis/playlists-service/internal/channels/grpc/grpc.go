package grpc

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"playlists-service/internal/channels/grpc/proto"
	"playlists-service/internal/config"
	l "playlists-service/internal/providers/loggerProvider"
	s "playlists-service/internal/services/playlistsService"
)

type grpcChannel struct {
	server           *grpc.Server
	loggerProvider   l.ILoggerProvider
	playlistsService s.IPlaylistsService
}

func New(loggerProvider l.ILoggerProvider, playlistsService s.IPlaylistsService) IGrpcChannel {
	return grpcChannel{
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

	c.loggerProvider.Info(fmt.Sprintf("gRPC Channel running on port %s", config.GrpcPort), nil)
}

func (c grpcChannel) Stop() {
	c.server.Stop()
}
