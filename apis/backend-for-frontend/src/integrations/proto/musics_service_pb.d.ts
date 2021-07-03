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
    getDuration(): number;
    setDuration(value: number): Music;
    getFile(): string;
    setFile(value: string): Music;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): Music;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): Music;
    getAlbumId(): string;
    setAlbumId(value: string): Music;
    getArtistId(): string;
    setArtistId(value: string): Music;
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
        duration: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumId: string,
        artistId: string,
        views: number,
    }
}

export class MusicsList extends jspb.Message { 
    clearMusicsList(): void;
    getMusicsList(): Array<Music>;
    setMusicsList(value: Array<Music>): MusicsList;
    addMusics(value?: Music, index?: number): Music;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MusicsList.AsObject;
    static toObject(includeInstance: boolean, msg: MusicsList): MusicsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MusicsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MusicsList;
    static deserializeBinaryFromReader(message: MusicsList, reader: jspb.BinaryReader): MusicsList;
}

export namespace MusicsList {
    export type AsObject = {
        musicsList: Array<Music.AsObject>,
    }
}

export class CreateMusicRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateMusicRequest;
    getDuration(): number;
    setDuration(value: number): CreateMusicRequest;
    getFile(): string;
    setFile(value: string): CreateMusicRequest;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): CreateMusicRequest;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): CreateMusicRequest;
    getAlbumId(): string;
    setAlbumId(value: string): CreateMusicRequest;
    getArtistId(): string;
    setArtistId(value: string): CreateMusicRequest;

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
        duration: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumId: string,
        artistId: string,
    }
}

export class UpdateMusicRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateMusicRequest;
    getTitle(): string;
    setTitle(value: string): UpdateMusicRequest;
    getDuration(): number;
    setDuration(value: number): UpdateMusicRequest;
    getFile(): string;
    setFile(value: string): UpdateMusicRequest;
    clearComposersList(): void;
    getComposersList(): Array<string>;
    setComposersList(value: Array<string>): UpdateMusicRequest;
    addComposers(value: string, index?: number): string;
    getLyrics(): string;
    setLyrics(value: string): UpdateMusicRequest;
    getAlbumId(): string;
    setAlbumId(value: string): UpdateMusicRequest;
    getArtistId(): string;
    setArtistId(value: string): UpdateMusicRequest;

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
        duration: number,
        file: string,
        composersList: Array<string>,
        lyrics: string,
        albumId: string,
        artistId: string,
    }
}

export class GetMusicsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetMusicsRequest;
    getOffset(): number;
    setOffset(value: number): GetMusicsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMusicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMusicsRequest): GetMusicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMusicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMusicsRequest;
    static deserializeBinaryFromReader(message: GetMusicsRequest, reader: jspb.BinaryReader): GetMusicsRequest;
}

export namespace GetMusicsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class GetMostViewedMusicsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetMostViewedMusicsRequest;
    getOffset(): number;
    setOffset(value: number): GetMostViewedMusicsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMostViewedMusicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMostViewedMusicsRequest): GetMostViewedMusicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMostViewedMusicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMostViewedMusicsRequest;
    static deserializeBinaryFromReader(message: GetMostViewedMusicsRequest, reader: jspb.BinaryReader): GetMostViewedMusicsRequest;
}

export namespace GetMostViewedMusicsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class Album extends jspb.Message { 
    getId(): string;
    setId(value: string): Album;
    getName(): string;
    setName(value: string): Album;
    getReleaseDate(): number;
    setReleaseDate(value: number): Album;
    getCover(): string;
    setCover(value: string): Album;
    getStudio(): string;
    setStudio(value: string): Album;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): Album;
    addProducers(value: string, index?: number): string;
    getArtistId(): string;
    setArtistId(value: string): Album;
    clearTracksList(): void;
    getTracksList(): Array<Music>;
    setTracksList(value: Array<Music>): Album;
    addTracks(value?: Music, index?: number): Music;

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
        releaseDate: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistId: string,
        tracksList: Array<Music.AsObject>,
    }
}

export class AlbumsList extends jspb.Message { 
    clearAlbumsList(): void;
    getAlbumsList(): Array<Album>;
    setAlbumsList(value: Array<Album>): AlbumsList;
    addAlbums(value?: Album, index?: number): Album;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlbumsList.AsObject;
    static toObject(includeInstance: boolean, msg: AlbumsList): AlbumsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlbumsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlbumsList;
    static deserializeBinaryFromReader(message: AlbumsList, reader: jspb.BinaryReader): AlbumsList;
}

export namespace AlbumsList {
    export type AsObject = {
        albumsList: Array<Album.AsObject>,
    }
}

export class CreateAlbumRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateAlbumRequest;
    getReleaseDate(): number;
    setReleaseDate(value: number): CreateAlbumRequest;
    getCover(): string;
    setCover(value: string): CreateAlbumRequest;
    getStudio(): string;
    setStudio(value: string): CreateAlbumRequest;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): CreateAlbumRequest;
    addProducers(value: string, index?: number): string;
    getArtistId(): string;
    setArtistId(value: string): CreateAlbumRequest;

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
        releaseDate: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistId: string,
    }
}

export class UpdateAlbumRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateAlbumRequest;
    getName(): string;
    setName(value: string): UpdateAlbumRequest;
    getReleaseDate(): number;
    setReleaseDate(value: number): UpdateAlbumRequest;
    getCover(): string;
    setCover(value: string): UpdateAlbumRequest;
    getStudio(): string;
    setStudio(value: string): UpdateAlbumRequest;
    clearProducersList(): void;
    getProducersList(): Array<string>;
    setProducersList(value: Array<string>): UpdateAlbumRequest;
    addProducers(value: string, index?: number): string;
    getArtistId(): string;
    setArtistId(value: string): UpdateAlbumRequest;

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
        releaseDate: number,
        cover: string,
        studio: string,
        producersList: Array<string>,
        artistId: string,
    }
}

export class GetAlbumsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetAlbumsRequest;
    getOffset(): number;
    setOffset(value: number): GetAlbumsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAlbumsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAlbumsRequest): GetAlbumsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAlbumsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAlbumsRequest;
    static deserializeBinaryFromReader(message: GetAlbumsRequest, reader: jspb.BinaryReader): GetAlbumsRequest;
}

export namespace GetAlbumsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class GetMostRecentAlbumsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetMostRecentAlbumsRequest;
    getOffset(): number;
    setOffset(value: number): GetMostRecentAlbumsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMostRecentAlbumsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMostRecentAlbumsRequest): GetMostRecentAlbumsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMostRecentAlbumsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMostRecentAlbumsRequest;
    static deserializeBinaryFromReader(message: GetMostRecentAlbumsRequest, reader: jspb.BinaryReader): GetMostRecentAlbumsRequest;
}

export namespace GetMostRecentAlbumsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class Artist extends jspb.Message { 
    getId(): string;
    setId(value: string): Artist;
    getName(): string;
    setName(value: string): Artist;
    getCountry(): string;
    setCountry(value: string): Artist;
    getFoundationDate(): number;
    setFoundationDate(value: number): Artist;
    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): Artist;
    addMembers(value: string, index?: number): string;
    getDescription(): string;
    setDescription(value: string): Artist;
    getGenre(): Genre;
    setGenre(value: Genre): Artist;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): Artist;
    addPhotos(value: string, index?: number): string;
    getFacebookUrl(): string;
    setFacebookUrl(value: string): Artist;
    getTwitterUrl(): string;
    setTwitterUrl(value: string): Artist;
    getInstagramUrl(): string;
    setInstagramUrl(value: string): Artist;
    getWikipediaUrl(): string;
    setWikipediaUrl(value: string): Artist;
    getFont(): string;
    setFont(value: string): Artist;
    getFavorites(): number;
    setFavorites(value: number): Artist;
    getFollowers(): number;
    setFollowers(value: number): Artist;
    clearAlbumsList(): void;
    getAlbumsList(): Array<Album>;
    setAlbumsList(value: Array<Album>): Artist;
    addAlbums(value?: Album, index?: number): Album;
    clearPopularTracksList(): void;
    getPopularTracksList(): Array<Music>;
    setPopularTracksList(value: Array<Music>): Artist;
    addPopularTracks(value?: Music, index?: number): Music;

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
        country: string,
        foundationDate: number,
        membersList: Array<string>,
        description: string,
        genre: Genre,
        photosList: Array<string>,
        facebookUrl: string,
        twitterUrl: string,
        instagramUrl: string,
        wikipediaUrl: string,
        font: string,
        favorites: number,
        followers: number,
        albumsList: Array<Album.AsObject>,
        popularTracksList: Array<Music.AsObject>,
    }
}

export class ArtistsList extends jspb.Message { 
    clearArtistsList(): void;
    getArtistsList(): Array<Artist>;
    setArtistsList(value: Array<Artist>): ArtistsList;
    addArtists(value?: Artist, index?: number): Artist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArtistsList.AsObject;
    static toObject(includeInstance: boolean, msg: ArtistsList): ArtistsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArtistsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArtistsList;
    static deserializeBinaryFromReader(message: ArtistsList, reader: jspb.BinaryReader): ArtistsList;
}

export namespace ArtistsList {
    export type AsObject = {
        artistsList: Array<Artist.AsObject>,
    }
}

export class CreateArtistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateArtistRequest;
    getCountry(): string;
    setCountry(value: string): CreateArtistRequest;
    getFoundationDate(): number;
    setFoundationDate(value: number): CreateArtistRequest;
    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): CreateArtistRequest;
    addMembers(value: string, index?: number): string;
    getDescription(): string;
    setDescription(value: string): CreateArtistRequest;
    getGenre(): Genre;
    setGenre(value: Genre): CreateArtistRequest;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): CreateArtistRequest;
    addPhotos(value: string, index?: number): string;
    getFacebookUrl(): string;
    setFacebookUrl(value: string): CreateArtistRequest;
    getTwitterUrl(): string;
    setTwitterUrl(value: string): CreateArtistRequest;
    getInstagramUrl(): string;
    setInstagramUrl(value: string): CreateArtistRequest;
    getWikipediaUrl(): string;
    setWikipediaUrl(value: string): CreateArtistRequest;
    getFont(): string;
    setFont(value: string): CreateArtistRequest;

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
        country: string,
        foundationDate: number,
        membersList: Array<string>,
        description: string,
        genre: Genre,
        photosList: Array<string>,
        facebookUrl: string,
        twitterUrl: string,
        instagramUrl: string,
        wikipediaUrl: string,
        font: string,
    }
}

export class UpdateArtistRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateArtistRequest;
    getName(): string;
    setName(value: string): UpdateArtistRequest;
    getCountry(): string;
    setCountry(value: string): UpdateArtistRequest;
    getFoundationDate(): number;
    setFoundationDate(value: number): UpdateArtistRequest;
    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): UpdateArtistRequest;
    addMembers(value: string, index?: number): string;
    getDescription(): string;
    setDescription(value: string): UpdateArtistRequest;
    getGenre(): Genre;
    setGenre(value: Genre): UpdateArtistRequest;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): UpdateArtistRequest;
    addPhotos(value: string, index?: number): string;
    getFacebookUrl(): string;
    setFacebookUrl(value: string): UpdateArtistRequest;
    getTwitterUrl(): string;
    setTwitterUrl(value: string): UpdateArtistRequest;
    getInstagramUrl(): string;
    setInstagramUrl(value: string): UpdateArtistRequest;
    getWikipediaUrl(): string;
    setWikipediaUrl(value: string): UpdateArtistRequest;
    getFont(): string;
    setFont(value: string): UpdateArtistRequest;

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
        country: string,
        foundationDate: number,
        membersList: Array<string>,
        description: string,
        genre: Genre,
        photosList: Array<string>,
        facebookUrl: string,
        twitterUrl: string,
        instagramUrl: string,
        wikipediaUrl: string,
        font: string,
    }
}

export class GetArtistsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetArtistsRequest;
    getOffset(): number;
    setOffset(value: number): GetArtistsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArtistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArtistsRequest): GetArtistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArtistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArtistsRequest;
    static deserializeBinaryFromReader(message: GetArtistsRequest, reader: jspb.BinaryReader): GetArtistsRequest;
}

export namespace GetArtistsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class GetArtistsByGenreRequest extends jspb.Message { 
    getGenre(): Genre;
    setGenre(value: Genre): GetArtistsByGenreRequest;
    getLimit(): number;
    setLimit(value: number): GetArtistsByGenreRequest;
    getOffset(): number;
    setOffset(value: number): GetArtistsByGenreRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArtistsByGenreRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArtistsByGenreRequest): GetArtistsByGenreRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArtistsByGenreRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArtistsByGenreRequest;
    static deserializeBinaryFromReader(message: GetArtistsByGenreRequest, reader: jspb.BinaryReader): GetArtistsByGenreRequest;
}

export namespace GetArtistsByGenreRequest {
    export type AsObject = {
        genre: Genre,
        limit: number,
        offset: number,
    }
}

export class GetMostFollowedArtistsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): GetMostFollowedArtistsRequest;
    getOffset(): number;
    setOffset(value: number): GetMostFollowedArtistsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMostFollowedArtistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMostFollowedArtistsRequest): GetMostFollowedArtistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMostFollowedArtistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMostFollowedArtistsRequest;
    static deserializeBinaryFromReader(message: GetMostFollowedArtistsRequest, reader: jspb.BinaryReader): GetMostFollowedArtistsRequest;
}

export namespace GetMostFollowedArtistsRequest {
    export type AsObject = {
        limit: number,
        offset: number,
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
