// package: proto
// file: users_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        username: string,
        email: string,
        password: string,
    }
}

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

export class CreateUserRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): CreateUserRequest;
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        username: string,
        email: string,
        password: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateUserRequest;
    getUsername(): string;
    setUsername(value: string): UpdateUserRequest;
    getEmail(): string;
    setEmail(value: string): UpdateUserRequest;
    getPassword(): string;
    setPassword(value: string): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        id: string,
        username: string,
        email: string,
        password: string,
    }
}

export class AuthenticateUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): AuthenticateUserRequest;
    getPassword(): string;
    setPassword(value: string): AuthenticateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateUserRequest): AuthenticateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserRequest;
    static deserializeBinaryFromReader(message: AuthenticateUserRequest, reader: jspb.BinaryReader): AuthenticateUserRequest;
}

export namespace AuthenticateUserRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class AuthenticateUserResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthenticateUserResponse;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): AuthenticateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateUserResponse): AuthenticateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateUserResponse;
    static deserializeBinaryFromReader(message: AuthenticateUserResponse, reader: jspb.BinaryReader): AuthenticateUserResponse;
}

export namespace AuthenticateUserResponse {
    export type AsObject = {
        token: string,
        user?: User.AsObject,
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
