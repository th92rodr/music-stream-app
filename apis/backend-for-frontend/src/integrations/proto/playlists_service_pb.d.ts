// package: proto
// file: playlists_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as musics_service_pb from "./musics_service_pb";

export class Playlist extends jspb.Message { 
    getId(): string;
    setId(value: string): Playlist;
    getName(): string;
    setName(value: string): Playlist;
    getUserId(): string;
    setUserId(value: string): Playlist;
    clearTracksList(): void;
    getTracksList(): Array<Track>;
    setTracksList(value: Array<Track>): Playlist;
    addTracks(value?: Track, index?: number): Track;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Playlist.AsObject;
    static toObject(includeInstance: boolean, msg: Playlist): Playlist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Playlist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Playlist;
    static deserializeBinaryFromReader(message: Playlist, reader: jspb.BinaryReader): Playlist;
}

export namespace Playlist {
    export type AsObject = {
        id: string,
        name: string,
        userId: string,
        tracksList: Array<Track.AsObject>,
    }
}

export class Track extends jspb.Message { 
    getId(): string;
    setId(value: string): Track;
    getIndex(): number;
    setIndex(value: number): Track;

    hasMusic(): boolean;
    clearMusic(): void;
    getMusic(): musics_service_pb.Music | undefined;
    setMusic(value?: musics_service_pb.Music): Track;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Track.AsObject;
    static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Track;
    static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
    export type AsObject = {
        id: string,
        index: number,
        music?: musics_service_pb.Music.AsObject,
    }
}

export class PlaylistsList extends jspb.Message { 
    clearPlaylistsList(): void;
    getPlaylistsList(): Array<Playlist>;
    setPlaylistsList(value: Array<Playlist>): PlaylistsList;
    addPlaylists(value?: Playlist, index?: number): Playlist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaylistsList.AsObject;
    static toObject(includeInstance: boolean, msg: PlaylistsList): PlaylistsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaylistsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaylistsList;
    static deserializeBinaryFromReader(message: PlaylistsList, reader: jspb.BinaryReader): PlaylistsList;
}

export namespace PlaylistsList {
    export type AsObject = {
        playlistsList: Array<Playlist.AsObject>,
    }
}

export class GetPlaylistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetPlaylistRequest;
    getUserId(): string;
    setUserId(value: string): GetPlaylistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlaylistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlaylistRequest): GetPlaylistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlaylistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlaylistRequest;
    static deserializeBinaryFromReader(message: GetPlaylistRequest, reader: jspb.BinaryReader): GetPlaylistRequest;
}

export namespace GetPlaylistRequest {
    export type AsObject = {
        id: string,
        userId: string,
    }
}

export class GetPlaylistsRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetPlaylistsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlaylistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlaylistsRequest): GetPlaylistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlaylistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlaylistsRequest;
    static deserializeBinaryFromReader(message: GetPlaylistsRequest, reader: jspb.BinaryReader): GetPlaylistsRequest;
}

export namespace GetPlaylistsRequest {
    export type AsObject = {
        userId: string,
    }
}

export class CreatePlaylistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreatePlaylistRequest;
    getUserId(): string;
    setUserId(value: string): CreatePlaylistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlaylistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlaylistRequest): CreatePlaylistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlaylistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlaylistRequest;
    static deserializeBinaryFromReader(message: CreatePlaylistRequest, reader: jspb.BinaryReader): CreatePlaylistRequest;
}

export namespace CreatePlaylistRequest {
    export type AsObject = {
        name: string,
        userId: string,
    }
}

export class UpdatePlaylistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdatePlaylistRequest;
    getName(): string;
    setName(value: string): UpdatePlaylistRequest;
    getUserId(): string;
    setUserId(value: string): UpdatePlaylistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlaylistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlaylistRequest): UpdatePlaylistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlaylistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlaylistRequest;
    static deserializeBinaryFromReader(message: UpdatePlaylistRequest, reader: jspb.BinaryReader): UpdatePlaylistRequest;
}

export namespace UpdatePlaylistRequest {
    export type AsObject = {
        id: string,
        name: string,
        userId: string,
    }
}

export class DeletePlaylistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeletePlaylistRequest;
    getUserId(): string;
    setUserId(value: string): DeletePlaylistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePlaylistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePlaylistRequest): DeletePlaylistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePlaylistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePlaylistRequest;
    static deserializeBinaryFromReader(message: DeletePlaylistRequest, reader: jspb.BinaryReader): DeletePlaylistRequest;
}

export namespace DeletePlaylistRequest {
    export type AsObject = {
        id: string,
        userId: string,
    }
}

export class AddTrackRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): AddTrackRequest;
    getPlaylistId(): string;
    setPlaylistId(value: string): AddTrackRequest;
    getMusicId(): string;
    setMusicId(value: string): AddTrackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTrackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTrackRequest): AddTrackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTrackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTrackRequest;
    static deserializeBinaryFromReader(message: AddTrackRequest, reader: jspb.BinaryReader): AddTrackRequest;
}

export namespace AddTrackRequest {
    export type AsObject = {
        userId: string,
        playlistId: string,
        musicId: string,
    }
}

export class UpdateTrackRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateTrackRequest;
    getPlaylistId(): string;
    setPlaylistId(value: string): UpdateTrackRequest;
    getId(): string;
    setId(value: string): UpdateTrackRequest;
    getIndex(): number;
    setIndex(value: number): UpdateTrackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTrackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTrackRequest): UpdateTrackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTrackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTrackRequest;
    static deserializeBinaryFromReader(message: UpdateTrackRequest, reader: jspb.BinaryReader): UpdateTrackRequest;
}

export namespace UpdateTrackRequest {
    export type AsObject = {
        userId: string,
        playlistId: string,
        id: string,
        index: number,
    }
}

export class RemoveTrackRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): RemoveTrackRequest;
    getPlaylistId(): string;
    setPlaylistId(value: string): RemoveTrackRequest;
    getId(): string;
    setId(value: string): RemoveTrackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveTrackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveTrackRequest): RemoveTrackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveTrackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveTrackRequest;
    static deserializeBinaryFromReader(message: RemoveTrackRequest, reader: jspb.BinaryReader): RemoveTrackRequest;
}

export namespace RemoveTrackRequest {
    export type AsObject = {
        userId: string,
        playlistId: string,
        id: string,
    }
}
