// package: proto
// file: users_musics_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FollowArtistRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FollowArtistRequest;
    getArtistId(): string;
    setArtistId(value: string): FollowArtistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowArtistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FollowArtistRequest): FollowArtistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowArtistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowArtistRequest;
    static deserializeBinaryFromReader(message: FollowArtistRequest, reader: jspb.BinaryReader): FollowArtistRequest;
}

export namespace FollowArtistRequest {
    export type AsObject = {
        userId: string,
        artistId: string,
    }
}

export class UnfollowArtistRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UnfollowArtistRequest;
    getArtistId(): string;
    setArtistId(value: string): UnfollowArtistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnfollowArtistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnfollowArtistRequest): UnfollowArtistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnfollowArtistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnfollowArtistRequest;
    static deserializeBinaryFromReader(message: UnfollowArtistRequest, reader: jspb.BinaryReader): UnfollowArtistRequest;
}

export namespace UnfollowArtistRequest {
    export type AsObject = {
        userId: string,
        artistId: string,
    }
}

export class GetFollowingArtistRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetFollowingArtistRequest;
    getArtistId(): string;
    setArtistId(value: string): GetFollowingArtistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFollowingArtistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFollowingArtistRequest): GetFollowingArtistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFollowingArtistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFollowingArtistRequest;
    static deserializeBinaryFromReader(message: GetFollowingArtistRequest, reader: jspb.BinaryReader): GetFollowingArtistRequest;
}

export namespace GetFollowingArtistRequest {
    export type AsObject = {
        userId: string,
        artistId: string,
    }
}

export class GetAllFollowingArtistsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetAllFollowingArtistsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllFollowingArtistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllFollowingArtistsRequest): GetAllFollowingArtistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllFollowingArtistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllFollowingArtistsRequest;
    static deserializeBinaryFromReader(message: GetAllFollowingArtistsRequest, reader: jspb.BinaryReader): GetAllFollowingArtistsRequest;
}

export namespace GetAllFollowingArtistsRequest {
    export type AsObject = {
        userId: string,
    }
}

export class FollowingArtist extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FollowingArtist;
    getArtistId(): string;
    setArtistId(value: string): FollowingArtist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowingArtist.AsObject;
    static toObject(includeInstance: boolean, msg: FollowingArtist): FollowingArtist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowingArtist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowingArtist;
    static deserializeBinaryFromReader(message: FollowingArtist, reader: jspb.BinaryReader): FollowingArtist;
}

export namespace FollowingArtist {
    export type AsObject = {
        userId: string,
        artistId: string,
    }
}

export class FollowingArtists extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FollowingArtists;
    clearArtistsIdList(): void;
    getArtistsIdList(): Array<string>;
    setArtistsIdList(value: Array<string>): FollowingArtists;
    addArtistsId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowingArtists.AsObject;
    static toObject(includeInstance: boolean, msg: FollowingArtists): FollowingArtists.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowingArtists, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowingArtists;
    static deserializeBinaryFromReader(message: FollowingArtists, reader: jspb.BinaryReader): FollowingArtists;
}

export namespace FollowingArtists {
    export type AsObject = {
        userId: string,
        artistsIdList: Array<string>,
    }
}

export class ViewMusicRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ViewMusicRequest;
    getMusicId(): string;
    setMusicId(value: string): ViewMusicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewMusicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ViewMusicRequest): ViewMusicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewMusicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewMusicRequest;
    static deserializeBinaryFromReader(message: ViewMusicRequest, reader: jspb.BinaryReader): ViewMusicRequest;
}

export namespace ViewMusicRequest {
    export type AsObject = {
        userId: string,
        musicId: string,
    }
}

export class GetViewsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetViewsRequest;
    getMusicId(): string;
    setMusicId(value: string): GetViewsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetViewsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetViewsRequest): GetViewsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetViewsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetViewsRequest;
    static deserializeBinaryFromReader(message: GetViewsRequest, reader: jspb.BinaryReader): GetViewsRequest;
}

export namespace GetViewsRequest {
    export type AsObject = {
        userId: string,
        musicId: string,
    }
}

export class GetLastViewsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetLastViewsRequest;
    getLimit(): number;
    setLimit(value: number): GetLastViewsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastViewsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastViewsRequest): GetLastViewsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastViewsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastViewsRequest;
    static deserializeBinaryFromReader(message: GetLastViewsRequest, reader: jspb.BinaryReader): GetLastViewsRequest;
}

export namespace GetLastViewsRequest {
    export type AsObject = {
        userId: string,
        limit: number,
    }
}

export class GetMostViewsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetMostViewsRequest;
    getLimit(): number;
    setLimit(value: number): GetMostViewsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMostViewsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMostViewsRequest): GetMostViewsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMostViewsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMostViewsRequest;
    static deserializeBinaryFromReader(message: GetMostViewsRequest, reader: jspb.BinaryReader): GetMostViewsRequest;
}

export namespace GetMostViewsRequest {
    export type AsObject = {
        userId: string,
        limit: number,
    }
}

export class UserMusic extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UserMusic;
    getMusicId(): string;
    setMusicId(value: string): UserMusic;
    getViews(): number;
    setViews(value: number): UserMusic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMusic.AsObject;
    static toObject(includeInstance: boolean, msg: UserMusic): UserMusic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMusic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMusic;
    static deserializeBinaryFromReader(message: UserMusic, reader: jspb.BinaryReader): UserMusic;
}

export namespace UserMusic {
    export type AsObject = {
        userId: string,
        musicId: string,
        views: number,
    }
}

export class UserMusicsList extends jspb.Message { 
    clearUserMusicsList(): void;
    getUserMusicsList(): Array<UserMusic>;
    setUserMusicsList(value: Array<UserMusic>): UserMusicsList;
    addUserMusics(value?: UserMusic, index?: number): UserMusic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMusicsList.AsObject;
    static toObject(includeInstance: boolean, msg: UserMusicsList): UserMusicsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMusicsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMusicsList;
    static deserializeBinaryFromReader(message: UserMusicsList, reader: jspb.BinaryReader): UserMusicsList;
}

export namespace UserMusicsList {
    export type AsObject = {
        userMusicsList: Array<UserMusic.AsObject>,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
