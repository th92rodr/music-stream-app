// package: proto
// file: users_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_service_pb from "./users_service_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUsersService_IGet;
    create: IUsersService_ICreate;
    update: IUsersService_IUpdate;
    delete: IUsersService_IDelete;
    authenticate: IUsersService_IAuthenticate;
}

interface IUsersService_IGet extends grpc.MethodDefinition<users_service_pb.GetUserRequest, users_service_pb.GetUserResponse> {
    path: "/proto.Users/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_service_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<users_service_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<users_service_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<users_service_pb.GetUserResponse>;
}
interface IUsersService_ICreate extends grpc.MethodDefinition<users_service_pb.CreateUserRequest, users_service_pb.CreateUserResponse> {
    path: "/proto.Users/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_service_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<users_service_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<users_service_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<users_service_pb.CreateUserResponse>;
}
interface IUsersService_IUpdate extends grpc.MethodDefinition<users_service_pb.UpdateUserRequest, users_service_pb.UpdateUserResponse> {
    path: "/proto.Users/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_service_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<users_service_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<users_service_pb.UpdateUserResponse>;
    responseDeserialize: grpc.deserialize<users_service_pb.UpdateUserResponse>;
}
interface IUsersService_IDelete extends grpc.MethodDefinition<users_service_pb.DeleteUserRequest, users_service_pb.DeleteUserResponse> {
    path: "/proto.Users/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_service_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<users_service_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<users_service_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<users_service_pb.DeleteUserResponse>;
}
interface IUsersService_IAuthenticate extends grpc.MethodDefinition<users_service_pb.AuthenticateUserRequest, users_service_pb.AuthenticateUserResponse> {
    path: "/proto.Users/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_service_pb.AuthenticateUserRequest>;
    requestDeserialize: grpc.deserialize<users_service_pb.AuthenticateUserRequest>;
    responseSerialize: grpc.serialize<users_service_pb.AuthenticateUserResponse>;
    responseDeserialize: grpc.deserialize<users_service_pb.AuthenticateUserResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    get: grpc.handleUnaryCall<users_service_pb.GetUserRequest, users_service_pb.GetUserResponse>;
    create: grpc.handleUnaryCall<users_service_pb.CreateUserRequest, users_service_pb.CreateUserResponse>;
    update: grpc.handleUnaryCall<users_service_pb.UpdateUserRequest, users_service_pb.UpdateUserResponse>;
    delete: grpc.handleUnaryCall<users_service_pb.DeleteUserRequest, users_service_pb.DeleteUserResponse>;
    authenticate: grpc.handleUnaryCall<users_service_pb.AuthenticateUserRequest, users_service_pb.AuthenticateUserResponse>;
}

export interface IUsersClient {
    get(request: users_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    get(request: users_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    get(request: users_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    create(request: users_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    create(request: users_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    create(request: users_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    update(request: users_service_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    update(request: users_service_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    update(request: users_service_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: users_service_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: users_service_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: users_service_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: users_service_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: users_service_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticate(request: users_service_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: users_service_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: users_service_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public get(request: users_service_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: users_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: users_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: users_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_service_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_service_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: users_service_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: users_service_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: users_service_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: users_service_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: users_service_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: users_service_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticate(request: users_service_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_service_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
}
