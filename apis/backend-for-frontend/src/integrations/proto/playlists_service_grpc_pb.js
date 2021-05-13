// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var playlists_service_pb = require('./playlists_service_pb.js');
var musics_service_pb = require('./musics_service_pb.js');

function serialize_proto_AddTrackRequest(arg) {
  if (!(arg instanceof playlists_service_pb.AddTrackRequest)) {
    throw new Error('Expected argument of type proto.AddTrackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AddTrackRequest(buffer_arg) {
  return playlists_service_pb.AddTrackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  if (!(arg instanceof musics_service_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return musics_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_GetPlaylistsRequest(arg) {
  if (!(arg instanceof playlists_service_pb.GetPlaylistsRequest)) {
    throw new Error('Expected argument of type proto.GetPlaylistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetPlaylistsRequest(buffer_arg) {
  return playlists_service_pb.GetPlaylistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_RemoveTrackRequest(arg) {
  if (!(arg instanceof playlists_service_pb.RemoveTrackRequest)) {
    throw new Error('Expected argument of type proto.RemoveTrackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_RemoveTrackRequest(buffer_arg) {
  return playlists_service_pb.RemoveTrackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Track(arg) {
  if (!(arg instanceof playlists_service_pb.Track)) {
    throw new Error('Expected argument of type proto.Track');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Track(buffer_arg) {
  return playlists_service_pb.Track.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_UpdateTrackRequest(arg) {
  if (!(arg instanceof playlists_service_pb.UpdateTrackRequest)) {
    throw new Error('Expected argument of type proto.UpdateTrackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateTrackRequest(buffer_arg) {
  return playlists_service_pb.UpdateTrackRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: playlists_service_pb.GetPlaylistsRequest,
    responseType: playlists_service_pb.PlaylistsList,
    requestSerialize: serialize_proto_GetPlaylistsRequest,
    requestDeserialize: deserialize_proto_GetPlaylistsRequest,
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
    responseType: musics_service_pb.Empty,
    requestSerialize: serialize_proto_DeletePlaylistRequest,
    requestDeserialize: deserialize_proto_DeletePlaylistRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  addTrack: {
    path: '/proto.Playlists/AddTrack',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.AddTrackRequest,
    responseType: playlists_service_pb.Track,
    requestSerialize: serialize_proto_AddTrackRequest,
    requestDeserialize: deserialize_proto_AddTrackRequest,
    responseSerialize: serialize_proto_Track,
    responseDeserialize: deserialize_proto_Track,
  },
  updateTrack: {
    path: '/proto.Playlists/UpdateTrack',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.UpdateTrackRequest,
    responseType: playlists_service_pb.Track,
    requestSerialize: serialize_proto_UpdateTrackRequest,
    requestDeserialize: deserialize_proto_UpdateTrackRequest,
    responseSerialize: serialize_proto_Track,
    responseDeserialize: deserialize_proto_Track,
  },
  removeTrack: {
    path: '/proto.Playlists/RemoveTrack',
    requestStream: false,
    responseStream: false,
    requestType: playlists_service_pb.RemoveTrackRequest,
    responseType: musics_service_pb.Empty,
    requestSerialize: serialize_proto_RemoveTrackRequest,
    requestDeserialize: deserialize_proto_RemoveTrackRequest,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.PlaylistsClient = grpc.makeGenericClientConstructor(PlaylistsService);
