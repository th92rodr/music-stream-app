package musicsIntegration

import (
	"context"

	"google.golang.org/grpc"

	"playlists-service/internal/config"
	e "playlists-service/internal/entities"
	"playlists-service/internal/integrations/musicsIntegration/proto"
)

type musicsIntegration struct {
	client proto.MusicsClient
}

func New() IMusicsIntegration {
	connection, err := grpc.Dial(config.MusicsServiceAddress, grpc.WithInsecure())
	if err != nil {
		panic(err)
	}

	client := proto.NewMusicsClient(connection)

	return musicsIntegration{
		client: client,
	}
}

func (i musicsIntegration) GetMusic(request GetMusicRequest) (*e.Music, error) {
	music, err := i.client.GetMusic(context.Background(), &proto.Id{
		Id: request.Id,
	})
	if err != nil {
		return nil, err
	}

	return translateMusicEntity(music), nil
}
