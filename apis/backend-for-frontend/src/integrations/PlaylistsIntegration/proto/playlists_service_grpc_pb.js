// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var playlists_service_pb = require('./playlists_service_pb.js');

function serialize_proto_CreatePlaylistRequest(arg) {
  if (!(arg instanceof playlists_service_pb.CreatePlaylistRequest)) {
    throw new Error('Expected argument of type proto.CreatePlaylistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreatePlaylistRequest(buffer_arg) {
  return playlists_service_pb.CreatePlaylistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeletePlaylistRequest(arg) {
  if (!(arg instanceof playlists_service_pb.DeletePlaylistRequest)) {
    throw new Error('Expected argument of type proto.DeletePlaylistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeletePlaylistRequest(buffer_arg) {
  return playlists_service_pb.DeletePlaylistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof playlists_service_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return playlists_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetPlaylistRequest(arg) {
  if (!(arg instanceof playlists_service_pb.GetPlaylistRequest)) {
    throw new Error('Expected argument of type proto.GetPlaylistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetPlaylistRequest(buffer_arg) {
  return playlists_service_pb.GetPlaylistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Id(arg) {
  if (!(arg instanceof playlists_service_pb.Id)) {
    throw new Error('Expected argument of type proto.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Id(buffer_arg) {
  return playlists_service_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Playlist(arg) {
  if (!(arg instanceof playlists_service_pb.Playlist)) {
    throw new Error('Expected argument of type proto.Playlist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Playlist(buffer_arg) {
  return playlists_service_pb.Playlist.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PlaylistsList(arg) {
  if (!(arg instanceof playlists_service_pb.PlaylistsList)) {
    throw new Error('Expected argument of type proto.PlaylistsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PlaylistsList(buffer_arg) {
  return playlists_service_pb.PlaylistsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdatePlaylistRequest(arg) {
  if (!(arg instanceof playlists_service_pb.UpdatePlaylistRequest)) {
    throw new Error('Expected argument of type proto.UpdatePlaylistRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdatePlaylistRequest(buffer_arg) {
  return playlists_service_pb.UpdatePlaylistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PlaylistsService = exports.PlaylistsService = {
  getPlaylist: {
    path: '/proto.Playlists/GetPlaylist',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.GetPlaylistRequest,
    responseType: playlists_service_pb.Playlist,
    requestSerialize: serialize_proto_GetPlaylistRequest,
    requestDeserialize: deserialize_proto_GetPlaylistRequest,
    responseSerialize: serialize_proto_Playlist,
    responseDeserialize: deserialize_proto_Playlist,
  },
  getPlaylists: {
    path: '/proto.Playlists/GetPlaylists',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.Id,
    responseType: playlists_service_pb.PlaylistsList,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_PlaylistsList,
    responseDeserialize: deserialize_proto_PlaylistsList,
  },
  createPlaylist: {
    path: '/proto.Playlists/CreatePlaylist',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.CreatePlaylistRequest,
    responseType: playlists_service_pb.Playlist,
    requestSerialize: serialize_proto_CreatePlaylistRequest,
    requestDeserialize: deserialize_proto_CreatePlaylistRequest,
    responseSerialize: serialize_proto_Playlist,
    responseDeserialize: deserialize_proto_Playlist,
  },
  updatePlaylist: {
    path: '/proto.Playlists/UpdatePlaylist',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.UpdatePlaylistRequest,
    responseType: playlists_service_pb.Playlist,
    requestSerialize: serialize_proto_UpdatePlaylistRequest,
    requestDeserialize: deserialize_proto_UpdatePlaylistRequest,
    responseSerialize: serialize_proto_Playlist,
    responseDeserialize: deserialize_proto_Playlist,
  },
  deletePlaylist: {
    path: '/proto.Playlists/DeletePlaylist',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.DeletePlaylistRequest,
    responseType: playlists_service_pb.Empty,
    requestSerialize: serialize_proto_DeletePlaylistRequest,
    requestDeserialize: deserialize_proto_DeletePlaylistRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.PlaylistsClient = grpc.makeGenericClientConstructor(PlaylistsService);
