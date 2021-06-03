// package: proto
// file: users_musics_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_musics_service_pb from "./users_musics_service_pb";

interface IUsersMusicsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    followArtist: IUsersMusicsService_IFollowArtist;
    unfollowArtist: IUsersMusicsService_IUnfollowArtist;
    getFollowingArtist: IUsersMusicsService_IGetFollowingArtist;
    getAllFollowingArtists: IUsersMusicsService_IGetAllFollowingArtists;
    viewMusic: IUsersMusicsService_IViewMusic;
    getViews: IUsersMusicsService_IGetViews;
    getLastViews: IUsersMusicsService_IGetLastViews;
    getMostViews: IUsersMusicsService_IGetMostViews;
}

interface IUsersMusicsService_IFollowArtist extends grpc.MethodDefinition<users_musics_service_pb.FollowArtistRequest, users_musics_service_pb.Empty> {
    path: "/proto.UsersMusics/FollowArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.FollowArtistRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.FollowArtistRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.Empty>;
}
interface IUsersMusicsService_IUnfollowArtist extends grpc.MethodDefinition<users_musics_service_pb.UnfollowArtistRequest, users_musics_service_pb.Empty> {
    path: "/proto.UsersMusics/UnfollowArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.UnfollowArtistRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.UnfollowArtistRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.Empty>;
}
interface IUsersMusicsService_IGetFollowingArtist extends grpc.MethodDefinition<users_musics_service_pb.GetFollowingArtistRequest, users_musics_service_pb.FollowingArtist> {
    path: "/proto.UsersMusics/GetFollowingArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.GetFollowingArtistRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.GetFollowingArtistRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.FollowingArtist>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.FollowingArtist>;
}
interface IUsersMusicsService_IGetAllFollowingArtists extends grpc.MethodDefinition<users_musics_service_pb.GetAllFollowingArtistsRequest, users_musics_service_pb.FollowingArtists> {
    path: "/proto.UsersMusics/GetAllFollowingArtists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.GetAllFollowingArtistsRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.GetAllFollowingArtistsRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.FollowingArtists>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.FollowingArtists>;
}
interface IUsersMusicsService_IViewMusic extends grpc.MethodDefinition<users_musics_service_pb.ViewMusicRequest, users_musics_service_pb.UserMusic> {
    path: "/proto.UsersMusics/ViewMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.ViewMusicRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.ViewMusicRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.UserMusic>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.UserMusic>;
}
interface IUsersMusicsService_IGetViews extends grpc.MethodDefinition<users_musics_service_pb.GetViewsRequest, users_musics_service_pb.UserMusic> {
    path: "/proto.UsersMusics/GetViews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.GetViewsRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.GetViewsRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.UserMusic>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.UserMusic>;
}
interface IUsersMusicsService_IGetLastViews extends grpc.MethodDefinition<users_musics_service_pb.GetLastViewsRequest, users_musics_service_pb.UserMusicsList> {
    path: "/proto.UsersMusics/GetLastViews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.GetLastViewsRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.GetLastViewsRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.UserMusicsList>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.UserMusicsList>;
}
interface IUsersMusicsService_IGetMostViews extends grpc.MethodDefinition<users_musics_service_pb.GetMostViewsRequest, users_musics_service_pb.UserMusicsList> {
    path: "/proto.UsersMusics/GetMostViews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_musics_service_pb.GetMostViewsRequest>;
    requestDeserialize: grpc.deserialize<users_musics_service_pb.GetMostViewsRequest>;
    responseSerialize: grpc.serialize<users_musics_service_pb.UserMusicsList>;
    responseDeserialize: grpc.deserialize<users_musics_service_pb.UserMusicsList>;
}

export const UsersMusicsService: IUsersMusicsService;

export interface IUsersMusicsServer {
    followArtist: grpc.handleUnaryCall<users_musics_service_pb.FollowArtistRequest, users_musics_service_pb.Empty>;
    unfollowArtist: grpc.handleUnaryCall<users_musics_service_pb.UnfollowArtistRequest, users_musics_service_pb.Empty>;
    getFollowingArtist: grpc.handleUnaryCall<users_musics_service_pb.GetFollowingArtistRequest, users_musics_service_pb.FollowingArtist>;
    getAllFollowingArtists: grpc.handleUnaryCall<users_musics_service_pb.GetAllFollowingArtistsRequest, users_musics_service_pb.FollowingArtists>;
    viewMusic: grpc.handleUnaryCall<users_musics_service_pb.ViewMusicRequest, users_musics_service_pb.UserMusic>;
    getViews: grpc.handleUnaryCall<users_musics_service_pb.GetViewsRequest, users_musics_service_pb.UserMusic>;
    getLastViews: grpc.handleUnaryCall<users_musics_service_pb.GetLastViewsRequest, users_musics_service_pb.UserMusicsList>;
    getMostViews: grpc.handleUnaryCall<users_musics_service_pb.GetMostViewsRequest, users_musics_service_pb.UserMusicsList>;
}

export interface IUsersMusicsClient {
    followArtist(request: users_musics_service_pb.FollowArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    followArtist(request: users_musics_service_pb.FollowArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    followArtist(request: users_musics_service_pb.FollowArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    viewMusic(request: users_musics_service_pb.ViewMusicRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    viewMusic(request: users_musics_service_pb.ViewMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    viewMusic(request: users_musics_service_pb.ViewMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    getViews(request: users_musics_service_pb.GetViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    getViews(request: users_musics_service_pb.GetViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    getViews(request: users_musics_service_pb.GetViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    getLastViews(request: users_musics_service_pb.GetLastViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    getLastViews(request: users_musics_service_pb.GetLastViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    getLastViews(request: users_musics_service_pb.GetLastViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    getMostViews(request: users_musics_service_pb.GetMostViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    getMostViews(request: users_musics_service_pb.GetMostViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    getMostViews(request: users_musics_service_pb.GetMostViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
}

export class UsersMusicsClient extends grpc.Client implements IUsersMusicsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public followArtist(request: users_musics_service_pb.FollowArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public followArtist(request: users_musics_service_pb.FollowArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public followArtist(request: users_musics_service_pb.FollowArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: users_musics_service_pb.UnfollowArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    public getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    public getFollowingArtist(request: users_musics_service_pb.GetFollowingArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtist) => void): grpc.ClientUnaryCall;
    public getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    public getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    public getAllFollowingArtists(request: users_musics_service_pb.GetAllFollowingArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.FollowingArtists) => void): grpc.ClientUnaryCall;
    public viewMusic(request: users_musics_service_pb.ViewMusicRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public viewMusic(request: users_musics_service_pb.ViewMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public viewMusic(request: users_musics_service_pb.ViewMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public getViews(request: users_musics_service_pb.GetViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public getViews(request: users_musics_service_pb.GetViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public getViews(request: users_musics_service_pb.GetViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusic) => void): grpc.ClientUnaryCall;
    public getLastViews(request: users_musics_service_pb.GetLastViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    public getLastViews(request: users_musics_service_pb.GetLastViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    public getLastViews(request: users_musics_service_pb.GetLastViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    public getMostViews(request: users_musics_service_pb.GetMostViewsRequest, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    public getMostViews(request: users_musics_service_pb.GetMostViewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
    public getMostViews(request: users_musics_service_pb.GetMostViewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_musics_service_pb.UserMusicsList) => void): grpc.ClientUnaryCall;
}
