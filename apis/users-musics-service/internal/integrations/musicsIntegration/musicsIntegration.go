package musicsIntegration

import (
	"context"

	"google.golang.org/grpc"

	"users-musics-service/internal/config"
	e "users-musics-service/internal/entities"
	"users-musics-service/internal/integrations/musicsIntegration/proto"
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

func (i musicsIntegration) GetArtist(request GetArtistRequest) (*e.Artist, error) {
	artist, err := i.client.GetArtist(context.Background(), &proto.Id{
		Id: request.Id,
	})
	if err != nil {
		return nil, err
	}

	return translateArtistEntity(artist), nil
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

func (i musicsIntegration) ViewMusic(request ViewMusicRequest) error {
	if _, err := i.client.ViewMusic(context.Background(), &proto.Id{
		Id: request.Id,
	}); err != nil {
		return err
	}

	return nil
}
