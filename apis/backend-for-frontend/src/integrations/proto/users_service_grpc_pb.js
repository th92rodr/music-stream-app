// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_service_pb = require('./users_service_pb.js');

function serialize_proto_AuthenticateUserRequest(arg) {
  if (!(arg instanceof users_service_pb.AuthenticateUserRequest)) {
    throw new Error('Expected argument of type proto.AuthenticateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AuthenticateUserRequest(buffer_arg) {
  return users_service_pb.AuthenticateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_AuthenticateUserResponse(arg) {
  if (!(arg instanceof users_service_pb.AuthenticateUserResponse)) {
    throw new Error('Expected argument of type proto.AuthenticateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_AuthenticateUserResponse(buffer_arg) {
  return users_service_pb.AuthenticateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateUserRequest(arg) {
  if (!(arg instanceof users_service_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type proto.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateUserRequest(buffer_arg) {
  return users_service_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof users_service_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return users_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Id(arg) {
  if (!(arg instanceof users_service_pb.Id)) {
    throw new Error('Expected argument of type proto.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Id(buffer_arg) {
  return users_service_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_UpdateUserRequest(arg) {
  if (!(arg instanceof users_service_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type proto.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateUserRequest(buffer_arg) {
  return users_service_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_User(arg) {
  if (!(arg instanceof users_service_pb.User)) {
    throw new Error('Expected argument of type proto.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_User(buffer_arg) {
  return users_service_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  get: {
    path: '/proto.Users/Get',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.Id,
    responseType: users_service_pb.User,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User,
  },
  create: {
    path: '/proto.Users/Create',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.CreateUserRequest,
    responseType: users_service_pb.User,
    requestSerialize: serialize_proto_CreateUserRequest,
    requestDeserialize: deserialize_proto_CreateUserRequest,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User,
  },
  update: {
    path: '/proto.Users/Update',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.UpdateUserRequest,
    responseType: users_service_pb.User,
    requestSerialize: serialize_proto_UpdateUserRequest,
    requestDeserialize: deserialize_proto_UpdateUserRequest,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User,
  },
  delete: {
    path: '/proto.Users/Delete',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.Id,
    responseType: users_service_pb.Empty,
    requestSerialize: serialize_proto_Id,
    requestDeserialize: deserialize_proto_Id,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  authenticate: {
    path: '/proto.Users/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.AuthenticateUserRequest,
    responseType: users_service_pb.AuthenticateUserResponse,
    requestSerialize: serialize_proto_AuthenticateUserRequest,
    requestDeserialize: deserialize_proto_AuthenticateUserRequest,
    responseSerialize: serialize_proto_AuthenticateUserResponse,
    responseDeserialize: deserialize_proto_AuthenticateUserResponse,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
