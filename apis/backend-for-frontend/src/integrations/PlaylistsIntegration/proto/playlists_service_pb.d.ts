// package: proto
// file: playlists_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Id extends jspb.Message { 
    getId(): string;
    setId(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
    export type AsObject = {
        id: string,
    }
}

export class Playlist extends jspb.Message { 
    getId(): string;
    setId(value: string): Playlist;
    getName(): string;
    setName(value: string): Playlist;
    getUserid(): string;
    setUserid(value: string): Playlist;
    clearTracksList(): void;
    getTracksList(): Array<Playlist.Track>;
    setTracksList(value: Array<Playlist.Track>): Playlist;
    addTracks(value?: Playlist.Track, index?: number): Playlist.Track;

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
        userid: string,
        tracksList: Array<Playlist.Track.AsObject>,
    }


    export class Track extends jspb.Message { 
        getIndex(): number;
        setIndex(value: number): Track;

        hasMusic(): boolean;
        clearMusic(): void;
        getMusic(): Music | undefined;
        setMusic(value?: Music): Track;

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
            index: number,
            music?: Music.AsObject,
        }
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
    getUserid(): string;
    setUserid(value: string): GetPlaylistRequest;

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
        userid: string,
    }
}

export class CreatePlaylistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreatePlaylistRequest;
    getUserid(): string;
    setUserid(value: string): CreatePlaylistRequest;

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
        userid: string,
    }
}

export class UpdatePlaylistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdatePlaylistRequest;
    getName(): string;
    setName(value: string): UpdatePlaylistRequest;
    getUserid(): string;
    setUserid(value: string): UpdatePlaylistRequest;

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
        userid: string,
    }
}

export class DeletePlaylistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeletePlaylistRequest;
    getUserid(): string;
    setUserid(value: string): DeletePlaylistRequest;

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
        userid: string,
    }
}

export class Music extends jspb.Message { 
    getId(): string;
    setId(value: string): Music;
    getTitle(): string;
    setTitle(value: string): Music;
    getDurationinseconds(): number;
    setDurationinseconds(value: number): Music;
    getFile(): string;
    setFile(value: string): Music;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): Music;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): Music;
    getAlbumid(): string;
    setAlbumid(value: string): Music;
    getViews(): number;
    setViews(value: number): Music;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Music.AsObject;
    static toObject(includeInstance: boolean, msg: Music): Music.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Music, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Music;
    static deserializeBinaryFromReader(message: Music, reader: jspb.BinaryReader): Music;
}

export namespace Music {
    export type AsObject = {
        id: string,
        title: string,
        durationinseconds: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumid: string,
        views: number,
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
