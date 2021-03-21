// package: proto
// file: musics_service.proto

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
    }
}

export class CreateMusicRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateMusicRequest;
    getDurationinseconds(): number;
    setDurationinseconds(value: number): CreateMusicRequest;
    getFile(): string;
    setFile(value: string): CreateMusicRequest;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): CreateMusicRequest;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): CreateMusicRequest;
    getAlbumid(): string;
    setAlbumid(value: string): CreateMusicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMusicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMusicRequest): CreateMusicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMusicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMusicRequest;
    static deserializeBinaryFromReader(message: CreateMusicRequest, reader: jspb.BinaryReader): CreateMusicRequest;
}

export namespace CreateMusicRequest {
    export type AsObject = {
        title: string,
        durationinseconds: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumid: string,
    }
}

export class UpdateMusicRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateMusicRequest;
    getTitle(): string;
    setTitle(value: string): UpdateMusicRequest;
    getDurationinseconds(): number;
    setDurationinseconds(value: number): UpdateMusicRequest;
    getFile(): string;
    setFile(value: string): UpdateMusicRequest;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): UpdateMusicRequest;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): UpdateMusicRequest;
    getAlbumid(): string;
    setAlbumid(value: string): UpdateMusicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMusicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMusicRequest): UpdateMusicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMusicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMusicRequest;
    static deserializeBinaryFromReader(message: UpdateMusicRequest, reader: jspb.BinaryReader): UpdateMusicRequest;
}

export namespace UpdateMusicRequest {
    export type AsObject = {
        id: string,
        title: string,
        durationinseconds: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumid: string,
    }
}

export class Album extends jspb.Message { 
    getId(): string;
    setId(value: string): Album;
    getName(): string;
    setName(value: string): Album;
    getYear(): number;
    setYear(value: number): Album;
    getCover(): string;
    setCover(value: string): Album;
    getStudio(): string;
    setStudio(value: string): Album;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): Album;
    addProducers(value: string, index?: number): string;
    getArtistid(): string;
    setArtistid(value: string): Album;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Album.AsObject;
    static toObject(includeInstance: boolean, msg: Album): Album.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Album, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Album;
    static deserializeBinaryFromReader(message: Album, reader: jspb.BinaryReader): Album;
}

export namespace Album {
    export type AsObject = {
        id: string,
        name: string,
        year: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistid: string,
    }
}

export class CreateAlbumRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateAlbumRequest;
    getYear(): number;
    setYear(value: number): CreateAlbumRequest;
    getCover(): string;
    setCover(value: string): CreateAlbumRequest;
    getStudio(): string;
    setStudio(value: string): CreateAlbumRequest;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): CreateAlbumRequest;
    addProducers(value: string, index?: number): string;
    getArtistid(): string;
    setArtistid(value: string): CreateAlbumRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAlbumRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAlbumRequest): CreateAlbumRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAlbumRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAlbumRequest;
    static deserializeBinaryFromReader(message: CreateAlbumRequest, reader: jspb.BinaryReader): CreateAlbumRequest;
}

export namespace CreateAlbumRequest {
    export type AsObject = {
        name: string,
        year: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistid: string,
    }
}

export class UpdateAlbumRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateAlbumRequest;
    getName(): string;
    setName(value: string): UpdateAlbumRequest;
    getYear(): number;
    setYear(value: number): UpdateAlbumRequest;
    getCover(): string;
    setCover(value: string): UpdateAlbumRequest;
    getStudio(): string;
    setStudio(value: string): UpdateAlbumRequest;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): UpdateAlbumRequest;
    addProducers(value: string, index?: number): string;
    getArtistid(): string;
    setArtistid(value: string): UpdateAlbumRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAlbumRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAlbumRequest): UpdateAlbumRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAlbumRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAlbumRequest;
    static deserializeBinaryFromReader(message: UpdateAlbumRequest, reader: jspb.BinaryReader): UpdateAlbumRequest;
}

export namespace UpdateAlbumRequest {
    export type AsObject = {
        id: string,
        name: string,
        year: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistid: string,
    }
}

export class Artist extends jspb.Message { 
    getId(): string;
    setId(value: string): Artist;
    getName(): string;
    setName(value: string): Artist;
    getDescription(): string;
    setDescription(value: string): Artist;
    getGenre(): Genre;
    setGenre(value: Genre): Artist;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): Artist;
    addPhotos(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Artist.AsObject;
    static toObject(includeInstance: boolean, msg: Artist): Artist.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Artist, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Artist;
    static deserializeBinaryFromReader(message: Artist, reader: jspb.BinaryReader): Artist;
}

export namespace Artist {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        genre: Genre,
        photosList: Array<string>,
    }
}

export class ArtistList extends jspb.Message { 
    clearArtistsList(): void;
    getArtistsList(): Array<Artist>;
    setArtistsList(value: Array<Artist>): ArtistList;
    addArtists(value?: Artist, index?: number): Artist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtistList.AsObject;
    static toObject(includeInstance: boolean, msg: ArtistList): ArtistList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtistList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtistList;
    static deserializeBinaryFromReader(message: ArtistList, reader: jspb.BinaryReader): ArtistList;
}

export namespace ArtistList {
    export type AsObject = {
        artistsList: Array<Artist.AsObject>,
    }
}

export class GetArtistByGenreRequest extends jspb.Message { 
    getGenre(): Genre;
    setGenre(value: Genre): GetArtistByGenreRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArtistByGenreRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArtistByGenreRequest): GetArtistByGenreRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArtistByGenreRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArtistByGenreRequest;
    static deserializeBinaryFromReader(message: GetArtistByGenreRequest, reader: jspb.BinaryReader): GetArtistByGenreRequest;
}

export namespace GetArtistByGenreRequest {
    export type AsObject = {
        genre: Genre,
    }
}

export class CreateArtistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateArtistRequest;
    getDescription(): string;
    setDescription(value: string): CreateArtistRequest;
    getGenre(): Genre;
    setGenre(value: Genre): CreateArtistRequest;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): CreateArtistRequest;
    addPhotos(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateArtistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateArtistRequest): CreateArtistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateArtistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateArtistRequest;
    static deserializeBinaryFromReader(message: CreateArtistRequest, reader: jspb.BinaryReader): CreateArtistRequest;
}

export namespace CreateArtistRequest {
    export type AsObject = {
        name: string,
        description: string,
        genre: Genre,
        photosList: Array<string>,
    }
}

export class UpdateArtistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateArtistRequest;
    getName(): string;
    setName(value: string): UpdateArtistRequest;
    getDescription(): string;
    setDescription(value: string): UpdateArtistRequest;
    getGenre(): Genre;
    setGenre(value: Genre): UpdateArtistRequest;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): UpdateArtistRequest;
    addPhotos(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateArtistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateArtistRequest): UpdateArtistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateArtistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateArtistRequest;
    static deserializeBinaryFromReader(message: UpdateArtistRequest, reader: jspb.BinaryReader): UpdateArtistRequest;
}

export namespace UpdateArtistRequest {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        genre: Genre,
        photosList: Array<string>,
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

export enum Genre {
    HEAVY_METAL = 0,
    FOLK_METAL = 1,
    POWER_METAL = 2,
    DEATH_METAL = 3,
    THRASH_METAL = 4,
    BLACK_METAL = 5,
}
