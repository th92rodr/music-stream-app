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

export class Album extends jspb.Message { 
    getId(): string;
    setId(value: string): Album;
    getName(): string;
    setName(value: string): Album;
    getYear(): string;
    setYear(value: string): Album;
    getCover(): string;
    setCover(value: string): Album;
    getStudio(): string;
    setStudio(value: string): Album;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): Album;
    addProducers(value: string, index?: number): string;
    clearMusicsList(): void;
    getMusicsList(): Array<Music>;
    setMusicsList(value: Array<Music>): Album;
    addMusics(value?: Music, index?: number): Music;
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
        year: string,
        cover: string,
        studio: string,
        producersList: Array<string>,
        musicsList: Array<Music.AsObject>,
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
    clearAlbumsList(): void;
    getAlbumsList(): Array<Album>;
    setAlbumsList(value: Array<Album>): Artist;
    addAlbums(value?: Album, index?: number): Album;

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
        albumsList: Array<Album.AsObject>,
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
