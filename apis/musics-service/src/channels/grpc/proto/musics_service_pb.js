// source: musics_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.Album', null, global);
goog.exportSymbol('proto.proto.Artist', null, global);
goog.exportSymbol('proto.proto.Genre', null, global);
goog.exportSymbol('proto.proto.Id', null, global);
goog.exportSymbol('proto.proto.Music', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Id.displayName = 'proto.proto.Id';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Music = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Music.repeatedFields_, null);
};
goog.inherits(proto.proto.Music, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Music.displayName = 'proto.proto.Music';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Album = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Album.repeatedFields_, null);
};
goog.inherits(proto.proto.Album, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Album.displayName = 'proto.proto.Album';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Artist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.Artist.repeatedFields_, null);
};
goog.inherits(proto.proto.Artist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Artist.displayName = 'proto.proto.Artist';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Id}
 */
proto.proto.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Id;
  return proto.proto.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Id}
 */
proto.proto.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.proto.Id.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Id} returns this
 */
proto.proto.Id.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Music.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Music.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Music.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Music} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Music.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    durationinseconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    file: jspb.Message.getFieldWithDefault(msg, 4, ""),
    composersList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    lyrics: jspb.Message.getFieldWithDefault(msg, 6, ""),
    albumid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Music}
 */
proto.proto.Music.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Music;
  return proto.proto.Music.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Music} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Music}
 */
proto.proto.Music.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDurationinseconds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addComposers(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLyrics(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlbumid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Music.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Music.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Music} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Music.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDurationinseconds();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComposersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getLyrics();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAlbumid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.Music.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.proto.Music.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 durationInSeconds = 3;
 * @return {number}
 */
proto.proto.Music.prototype.getDurationinseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setDurationinseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string file = 4;
 * @return {string}
 */
proto.proto.Music.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string composers = 5;
 * @return {!Array<string>}
 */
proto.proto.Music.prototype.getComposersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setComposersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.addComposers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.clearComposersList = function() {
  return this.setComposersList([]);
};


/**
 * optional string lyrics = 6;
 * @return {string}
 */
proto.proto.Music.prototype.getLyrics = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setLyrics = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string albumId = 7;
 * @return {string}
 */
proto.proto.Music.prototype.getAlbumid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Music} returns this
 */
proto.proto.Music.prototype.setAlbumid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Album.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Album.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Album.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Album} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Album.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    year: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 4, ""),
    studio: jspb.Message.getFieldWithDefault(msg, 5, ""),
    producersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    musicsList: jspb.Message.toObjectList(msg.getMusicsList(),
    proto.proto.Music.toObject, includeInstance),
    artistid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Album}
 */
proto.proto.Album.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Album;
  return proto.proto.Album.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Album} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Album}
 */
proto.proto.Album.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setYear(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudio(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addProducers(value);
      break;
    case 7:
      var value = new proto.proto.Music;
      reader.readMessage(value,proto.proto.Music.deserializeBinaryFromReader);
      msg.addMusics(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtistid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Album.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Album.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Album} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Album.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getYear();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStudio();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getProducersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getMusicsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.proto.Music.serializeBinaryToWriter
    );
  }
  f = message.getArtistid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.Album.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.Album.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string year = 3;
 * @return {string}
 */
proto.proto.Album.prototype.getYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setYear = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cover = 4;
 * @return {string}
 */
proto.proto.Album.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string studio = 5;
 * @return {string}
 */
proto.proto.Album.prototype.getStudio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setStudio = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string producers = 6;
 * @return {!Array<string>}
 */
proto.proto.Album.prototype.getProducersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setProducersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.addProducers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.clearProducersList = function() {
  return this.setProducersList([]);
};


/**
 * repeated Music musics = 7;
 * @return {!Array<!proto.proto.Music>}
 */
proto.proto.Album.prototype.getMusicsList = function() {
  return /** @type{!Array<!proto.proto.Music>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Music, 7));
};


/**
 * @param {!Array<!proto.proto.Music>} value
 * @return {!proto.proto.Album} returns this
*/
proto.proto.Album.prototype.setMusicsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.proto.Music=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Music}
 */
proto.proto.Album.prototype.addMusics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.proto.Music, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.clearMusicsList = function() {
  return this.setMusicsList([]);
};


/**
 * optional string artistId = 8;
 * @return {string}
 */
proto.proto.Album.prototype.getArtistid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Album} returns this
 */
proto.proto.Album.prototype.setArtistid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.Artist.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Artist.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Artist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Artist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Artist.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    genre: jspb.Message.getFieldWithDefault(msg, 4, 0),
    photosList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    albumsList: jspb.Message.toObjectList(msg.getAlbumsList(),
    proto.proto.Album.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Artist}
 */
proto.proto.Artist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Artist;
  return proto.proto.Artist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Artist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Artist}
 */
proto.proto.Artist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.Genre} */ (reader.readEnum());
      msg.setGenre(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhotos(value);
      break;
    case 6:
      var value = new proto.proto.Album;
      reader.readMessage(value,proto.proto.Album.deserializeBinaryFromReader);
      msg.addAlbums(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Artist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Artist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Artist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Artist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGenre();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPhotosList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getAlbumsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.proto.Album.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.proto.Artist.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.Artist.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.proto.Artist.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Genre genre = 4;
 * @return {!proto.proto.Genre}
 */
proto.proto.Artist.prototype.getGenre = function() {
  return /** @type {!proto.proto.Genre} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.Genre} value
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.setGenre = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated string photos = 5;
 * @return {!Array<string>}
 */
proto.proto.Artist.prototype.getPhotosList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.setPhotosList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.addPhotos = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.clearPhotosList = function() {
  return this.setPhotosList([]);
};


/**
 * repeated Album albums = 6;
 * @return {!Array<!proto.proto.Album>}
 */
proto.proto.Artist.prototype.getAlbumsList = function() {
  return /** @type{!Array<!proto.proto.Album>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Album, 6));
};


/**
 * @param {!Array<!proto.proto.Album>} value
 * @return {!proto.proto.Artist} returns this
*/
proto.proto.Artist.prototype.setAlbumsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.proto.Album=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Album}
 */
proto.proto.Artist.prototype.addAlbums = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.proto.Album, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.Artist} returns this
 */
proto.proto.Artist.prototype.clearAlbumsList = function() {
  return this.setAlbumsList([]);
};


/**
 * @enum {number}
 */
proto.proto.Genre = {
  HEAVY_METAL: 0,
  FOLK_METAL: 1,
  POWER_METAL: 2,
  DEATH_METAL: 3,
  THRASH_METAL: 4,
  BLACK_METAL: 5
};

goog.object.extend(exports, proto.proto);