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

function serialize_proto_Artist(arg) {
  if (!(arg instanceof musics_service_pb.Artist)) {
    throw new Error('Expected argument of type proto.Artist');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Artist(buffer_arg) {
  return musics_service_pb.Artist.deserializeBinary(new Uint8Array(buffer_arg));
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
};

exports.MusicsClient = grpc.makeGenericClientConstructor(MusicsService);
