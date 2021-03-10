// package: proto
// file: musics_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as musics_service_pb from "./musics_service_pb";

interface IMusicsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMusic: IMusicsService_IGetMusic;
    getAlbum: IMusicsService_IGetAlbum;
    getArtist: IMusicsService_IGetArtist;
}

interface IMusicsService_IGetMusic extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Music> {
    path: "/proto.Musics/GetMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Music>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Music>;
}
interface IMusicsService_IGetAlbum extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Album> {
    path: "/proto.Musics/GetAlbum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Album>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Album>;
}
interface IMusicsService_IGetArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/GetArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}

export const MusicsService: IMusicsService;

export interface IMusicsServer {
    getMusic: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Music>;
    getAlbum: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Album>;
    getArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
}

export interface IMusicsClient {
    getMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
}

export class MusicsClient extends grpc.Client implements IMusicsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
}
