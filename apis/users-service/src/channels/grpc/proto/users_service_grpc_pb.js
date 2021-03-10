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

function serialize_proto_CreateUserResponse(arg) {
  if (!(arg instanceof users_service_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type proto.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateUserResponse(buffer_arg) {
  return users_service_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteUserRequest(arg) {
  if (!(arg instanceof users_service_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type proto.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteUserRequest(buffer_arg) {
  return users_service_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteUserResponse(arg) {
  if (!(arg instanceof users_service_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type proto.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteUserResponse(buffer_arg) {
  return users_service_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetUserRequest(arg) {
  if (!(arg instanceof users_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type proto.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetUserRequest(buffer_arg) {
  return users_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetUserResponse(arg) {
  if (!(arg instanceof users_service_pb.GetUserResponse)) {
    throw new Error('Expected argument of type proto.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetUserResponse(buffer_arg) {
  return users_service_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_proto_UpdateUserResponse(arg) {
  if (!(arg instanceof users_service_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type proto.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_UpdateUserResponse(buffer_arg) {
  return users_service_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  get: {
    path: '/proto.Users/Get',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.GetUserRequest,
    responseType: users_service_pb.GetUserResponse,
    requestSerialize: serialize_proto_GetUserRequest,
    requestDeserialize: deserialize_proto_GetUserRequest,
    responseSerialize: serialize_proto_GetUserResponse,
    responseDeserialize: deserialize_proto_GetUserResponse,
  },
  create: {
    path: '/proto.Users/Create',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.CreateUserRequest,
    responseType: users_service_pb.CreateUserResponse,
    requestSerialize: serialize_proto_CreateUserRequest,
    requestDeserialize: deserialize_proto_CreateUserRequest,
    responseSerialize: serialize_proto_CreateUserResponse,
    responseDeserialize: deserialize_proto_CreateUserResponse,
  },
  update: {
    path: '/proto.Users/Update',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.UpdateUserRequest,
    responseType: users_service_pb.UpdateUserResponse,
    requestSerialize: serialize_proto_UpdateUserRequest,
    requestDeserialize: deserialize_proto_UpdateUserRequest,
    responseSerialize: serialize_proto_UpdateUserResponse,
    responseDeserialize: deserialize_proto_UpdateUserResponse,
  },
  delete: {
    path: '/proto.Users/Delete',
    requestStream: false,
    responseStream: false,
    requestType: users_service_pb.DeleteUserRequest,
    responseType: users_service_pb.DeleteUserResponse,
    requestSerialize: serialize_proto_DeleteUserRequest,
    requestDeserialize: deserialize_proto_DeleteUserRequest,
    responseSerialize: serialize_proto_DeleteUserResponse,
    responseDeserialize: deserialize_proto_DeleteUserResponse,
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
