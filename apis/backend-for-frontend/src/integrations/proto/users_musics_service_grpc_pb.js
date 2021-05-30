// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_musics_service_pb = require('./users_musics_service_pb.js');

function serialize_proto_Empty(arg) {
  if (!(arg instanceof users_musics_service_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return users_musics_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FollowArtistRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.FollowArtistRequest)) {
    throw new Error('Expected argument of type proto.FollowArtistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FollowArtistRequest(buffer_arg) {
  return users_musics_service_pb.FollowArtistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FollowingArtist(arg) {
  if (!(arg instanceof users_musics_service_pb.FollowingArtist)) {
    throw new Error('Expected argument of type proto.FollowingArtist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FollowingArtist(buffer_arg) {
  return users_musics_service_pb.FollowingArtist.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FollowingArtists(arg) {
  if (!(arg instanceof users_musics_service_pb.FollowingArtists)) {
    throw new Error('Expected argument of type proto.FollowingArtists');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FollowingArtists(buffer_arg) {
  return users_musics_service_pb.FollowingArtists.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetAllFollowingArtistsRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.GetAllFollowingArtistsRequest)) {
    throw new Error('Expected argument of type proto.GetAllFollowingArtistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetAllFollowingArtistsRequest(buffer_arg) {
  return users_musics_service_pb.GetAllFollowingArtistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetFollowingArtistRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.GetFollowingArtistRequest)) {
    throw new Error('Expected argument of type proto.GetFollowingArtistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetFollowingArtistRequest(buffer_arg) {
  return users_musics_service_pb.GetFollowingArtistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetViewsRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.GetViewsRequest)) {
    throw new Error('Expected argument of type proto.GetViewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetViewsRequest(buffer_arg) {
  return users_musics_service_pb.GetViewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UnfollowArtistRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.UnfollowArtistRequest)) {
    throw new Error('Expected argument of type proto.UnfollowArtistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UnfollowArtistRequest(buffer_arg) {
  return users_musics_service_pb.UnfollowArtistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UserMusic(arg) {
  if (!(arg instanceof users_musics_service_pb.UserMusic)) {
    throw new Error('Expected argument of type proto.UserMusic');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UserMusic(buffer_arg) {
  return users_musics_service_pb.UserMusic.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ViewMusicRequest(arg) {
  if (!(arg instanceof users_musics_service_pb.ViewMusicRequest)) {
    throw new Error('Expected argument of type proto.ViewMusicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ViewMusicRequest(buffer_arg) {
  return users_musics_service_pb.ViewMusicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersMusicsService = exports.UsersMusicsService = {
  followArtist: {
    path: '/proto.UsersMusics/FollowArtist',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.FollowArtistRequest,
    responseType: users_musics_service_pb.Empty,
    requestSerialize: serialize_proto_FollowArtistRequest,
    requestDeserialize: deserialize_proto_FollowArtistRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  unfollowArtist: {
    path: '/proto.UsersMusics/UnfollowArtist',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.UnfollowArtistRequest,
    responseType: users_musics_service_pb.Empty,
    requestSerialize: serialize_proto_UnfollowArtistRequest,
    requestDeserialize: deserialize_proto_UnfollowArtistRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  getFollowingArtist: {
    path: '/proto.UsersMusics/GetFollowingArtist',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.GetFollowingArtistRequest,
    responseType: users_musics_service_pb.FollowingArtist,
    requestSerialize: serialize_proto_GetFollowingArtistRequest,
    requestDeserialize: deserialize_proto_GetFollowingArtistRequest,
    responseSerialize: serialize_proto_FollowingArtist,
    responseDeserialize: deserialize_proto_FollowingArtist,
  },
  getAllFollowingArtists: {
    path: '/proto.UsersMusics/GetAllFollowingArtists',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.GetAllFollowingArtistsRequest,
    responseType: users_musics_service_pb.FollowingArtists,
    requestSerialize: serialize_proto_GetAllFollowingArtistsRequest,
    requestDeserialize: deserialize_proto_GetAllFollowingArtistsRequest,
    responseSerialize: serialize_proto_FollowingArtists,
    responseDeserialize: deserialize_proto_FollowingArtists,
  },
  viewMusic: {
    path: '/proto.UsersMusics/ViewMusic',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.ViewMusicRequest,
    responseType: users_musics_service_pb.UserMusic,
    requestSerialize: serialize_proto_ViewMusicRequest,
    requestDeserialize: deserialize_proto_ViewMusicRequest,
    responseSerialize: serialize_proto_UserMusic,
    responseDeserialize: deserialize_proto_UserMusic,
  },
  getViews: {
    path: '/proto.UsersMusics/GetViews',
    requestStream: false,
    responseStream: false,
    requestType: users_musics_service_pb.GetViewsRequest,
    responseType: users_musics_service_pb.UserMusic,
    requestSerialize: serialize_proto_GetViewsRequest,
    requestDeserialize: deserialize_proto_GetViewsRequest,
    responseSerialize: serialize_proto_UserMusic,
    responseDeserialize: deserialize_proto_UserMusic,
  },
};

exports.UsersMusicsClient = grpc.makeGenericClientConstructor(UsersMusicsService);
