// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var musics_service_pb = require('./musics_service_pb.js');

function serialize_proto_Album(arg) {
  if (!(arg instanceof musics_service_pb.Album)) {
    throw new Error('Expected argument of type proto.Album');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Album(buffer_arg) {
  return musics_service_pb.Album.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AlbumsList(arg) {
  if (!(arg instanceof musics_service_pb.AlbumsList)) {
    throw new Error('Expected argument of type proto.AlbumsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AlbumsList(buffer_arg) {
  return musics_service_pb.AlbumsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Artist(arg) {
  if (!(arg instanceof musics_service_pb.Artist)) {
    throw new Error('Expected argument of type proto.Artist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Artist(buffer_arg) {
  return musics_service_pb.Artist.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ArtistsList(arg) {
  if (!(arg instanceof musics_service_pb.ArtistsList)) {
    throw new Error('Expected argument of type proto.ArtistsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ArtistsList(buffer_arg) {
  return musics_service_pb.ArtistsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateAlbumRequest(arg) {
  if (!(arg instanceof musics_service_pb.CreateAlbumRequest)) {
    throw new Error('Expected argument of type proto.CreateAlbumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateAlbumRequest(buffer_arg) {
  return musics_service_pb.CreateAlbumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateArtistRequest(arg) {
  if (!(arg instanceof musics_service_pb.CreateArtistRequest)) {
    throw new Error('Expected argument of type proto.CreateArtistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateArtistRequest(buffer_arg) {
  return musics_service_pb.CreateArtistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateMusicRequest(arg) {
  if (!(arg instanceof musics_service_pb.CreateMusicRequest)) {
    throw new Error('Expected argument of type proto.CreateMusicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateMusicRequest(buffer_arg) {
  return musics_service_pb.CreateMusicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof musics_service_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return musics_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetArtistsByGenreRequest(arg) {
  if (!(arg instanceof musics_service_pb.GetArtistsByGenreRequest)) {
    throw new Error('Expected argument of type proto.GetArtistsByGenreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetArtistsByGenreRequest(buffer_arg) {
  return musics_service_pb.GetArtistsByGenreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMostFollowedArtistsRequest(arg) {
  if (!(arg instanceof musics_service_pb.GetMostFollowedArtistsRequest)) {
    throw new Error('Expected argument of type proto.GetMostFollowedArtistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMostFollowedArtistsRequest(buffer_arg) {
  return musics_service_pb.GetMostFollowedArtistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMostRecentAlbumsRequest(arg) {
  if (!(arg instanceof musics_service_pb.GetMostRecentAlbumsRequest)) {
    throw new Error('Expected argument of type proto.GetMostRecentAlbumsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMostRecentAlbumsRequest(buffer_arg) {
  return musics_service_pb.GetMostRecentAlbumsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetMostViewedMusicsRequest(arg) {
  if (!(arg instanceof musics_service_pb.GetMostViewedMusicsRequest)) {
    throw new Error('Expected argument of type proto.GetMostViewedMusicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetMostViewedMusicsRequest(buffer_arg) {
  return musics_service_pb.GetMostViewedMusicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Id(arg) {
  if (!(arg instanceof musics_service_pb.Id)) {
    throw new Error('Expected argument of type proto.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Id(buffer_arg) {
  return musics_service_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Music(arg) {
  if (!(arg instanceof musics_service_pb.Music)) {
    throw new Error('Expected argument of type proto.Music');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Music(buffer_arg) {
  return musics_service_pb.Music.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_MusicsList(arg) {
  if (!(arg instanceof musics_service_pb.MusicsList)) {
    throw new Error('Expected argument of type proto.MusicsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_MusicsList(buffer_arg) {
  return musics_service_pb.MusicsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateAlbumRequest(arg) {
  if (!(arg instanceof musics_service_pb.UpdateAlbumRequest)) {
    throw new Error('Expected argument of type proto.UpdateAlbumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateAlbumRequest(buffer_arg) {
  return musics_service_pb.UpdateAlbumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateArtistRequest(arg) {
  if (!(arg instanceof musics_service_pb.UpdateArtistRequest)) {
    throw new Error('Expected argument of type proto.UpdateArtistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateArtistRequest(buffer_arg) {
  return musics_service_pb.UpdateArtistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateMusicRequest(arg) {
  if (!(arg instanceof musics_service_pb.UpdateMusicRequest)) {
    throw new Error('Expected argument of type proto.UpdateMusicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateMusicRequest(buffer_arg) {
  return musics_service_pb.UpdateMusicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MusicsService = exports.MusicsService = {
  getMusic: {
    path: '/proto.Musics/GetMusic',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Music,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Music,
    responseDeserialize: deserialize_proto_Music,
  },
  getMusics: {
    path: '/proto.Musics/GetMusics',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Empty,
    responseType: musics_service_pb.MusicsList,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_MusicsList,
    responseDeserialize: deserialize_proto_MusicsList,
  },
  createMusic: {
    path: '/proto.Musics/CreateMusic',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.CreateMusicRequest,
    responseType: musics_service_pb.Music,
    requestSerialize: serialize_proto_CreateMusicRequest,
    requestDeserialize: deserialize_proto_CreateMusicRequest,
    responseSerialize: serialize_proto_Music,
    responseDeserialize: deserialize_proto_Music,
  },
  updateMusic: {
    path: '/proto.Musics/UpdateMusic',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.UpdateMusicRequest,
    responseType: musics_service_pb.Music,
    requestSerialize: serialize_proto_UpdateMusicRequest,
    requestDeserialize: deserialize_proto_UpdateMusicRequest,
    responseSerialize: serialize_proto_Music,
    responseDeserialize: deserialize_proto_Music,
  },
  deleteMusic: {
    path: '/proto.Musics/DeleteMusic',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Empty,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  viewMusic: {
    path: '/proto.Musics/ViewMusic',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Music,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Music,
    responseDeserialize: deserialize_proto_Music,
  },
  getMostViewedMusics: {
    path: '/proto.Musics/GetMostViewedMusics',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.GetMostViewedMusicsRequest,
    responseType: musics_service_pb.MusicsList,
    requestSerialize: serialize_proto_GetMostViewedMusicsRequest,
    requestDeserialize: deserialize_proto_GetMostViewedMusicsRequest,
    responseSerialize: serialize_proto_MusicsList,
    responseDeserialize: deserialize_proto_MusicsList,
  },
  getAlbum: {
    path: '/proto.Musics/GetAlbum',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Album,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Album,
    responseDeserialize: deserialize_proto_Album,
  },
  getAlbums: {
    path: '/proto.Musics/GetAlbums',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Empty,
    responseType: musics_service_pb.AlbumsList,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_AlbumsList,
    responseDeserialize: deserialize_proto_AlbumsList,
  },
  createAlbum: {
    path: '/proto.Musics/CreateAlbum',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.CreateAlbumRequest,
    responseType: musics_service_pb.Album,
    requestSerialize: serialize_proto_CreateAlbumRequest,
    requestDeserialize: deserialize_proto_CreateAlbumRequest,
    responseSerialize: serialize_proto_Album,
    responseDeserialize: deserialize_proto_Album,
  },
  updateAlbum: {
    path: '/proto.Musics/UpdateAlbum',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.UpdateAlbumRequest,
    responseType: musics_service_pb.Album,
    requestSerialize: serialize_proto_UpdateAlbumRequest,
    requestDeserialize: deserialize_proto_UpdateAlbumRequest,
    responseSerialize: serialize_proto_Album,
    responseDeserialize: deserialize_proto_Album,
  },
  deleteAlbum: {
    path: '/proto.Musics/DeleteAlbum',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Empty,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  getMostRecentAlbums: {
    path: '/proto.Musics/GetMostRecentAlbums',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.GetMostRecentAlbumsRequest,
    responseType: musics_service_pb.AlbumsList,
    requestSerialize: serialize_proto_GetMostRecentAlbumsRequest,
    requestDeserialize: deserialize_proto_GetMostRecentAlbumsRequest,
    responseSerialize: serialize_proto_AlbumsList,
    responseDeserialize: deserialize_proto_AlbumsList,
  },
  getArtist: {
    path: '/proto.Musics/GetArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  getArtists: {
    path: '/proto.Musics/GetArtists',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Empty,
    responseType: musics_service_pb.ArtistsList,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_ArtistsList,
    responseDeserialize: deserialize_proto_ArtistsList,
  },
  getArtistsByGenre: {
    path: '/proto.Musics/GetArtistsByGenre',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.GetArtistsByGenreRequest,
    responseType: musics_service_pb.ArtistsList,
    requestSerialize: serialize_proto_GetArtistsByGenreRequest,
    requestDeserialize: deserialize_proto_GetArtistsByGenreRequest,
    responseSerialize: serialize_proto_ArtistsList,
    responseDeserialize: deserialize_proto_ArtistsList,
  },
  createArtist: {
    path: '/proto.Musics/CreateArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.CreateArtistRequest,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_CreateArtistRequest,
    requestDeserialize: deserialize_proto_CreateArtistRequest,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  updateArtist: {
    path: '/proto.Musics/UpdateArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.UpdateArtistRequest,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_UpdateArtistRequest,
    requestDeserialize: deserialize_proto_UpdateArtistRequest,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  deleteArtist: {
    path: '/proto.Musics/DeleteArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Empty,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  favoriteArtist: {
    path: '/proto.Musics/FavoriteArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  unfavoriteArtist: {
    path: '/proto.Musics/UnfavoriteArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  followArtist: {
    path: '/proto.Musics/FollowArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  unfollowArtist: {
    path: '/proto.Musics/UnfollowArtist',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.Id,
    responseType: musics_service_pb.Artist,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Artist,
    responseDeserialize: deserialize_proto_Artist,
  },
  getMostFollowedArtists: {
    path: '/proto.Musics/GetMostFollowedArtists',
    requestStream: false,
    responseStream: false,
    requestType: musics_service_pb.GetMostFollowedArtistsRequest,
    responseType: musics_service_pb.ArtistsList,
    requestSerialize: serialize_proto_GetMostFollowedArtistsRequest,
    requestDeserialize: deserialize_proto_GetMostFollowedArtistsRequest,
    responseSerialize: serialize_proto_ArtistsList,
    responseDeserialize: deserialize_proto_ArtistsList,
  },
};

exports.MusicsClient = grpc.makeGenericClientConstructor(MusicsService);
