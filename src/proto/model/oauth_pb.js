// source: proto/model/oauth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var gorm_options_gorm_pb = require('../../gorm/options/gorm_pb.js');
goog.object.extend(proto, gorm_options_gorm_pb);
var gorm_types_types_pb = require('../../gorm/types/types_pb.js');
goog.object.extend(proto, gorm_types_types_pb);
goog.exportSymbol('proto.model.OAuthClient', null, global);
goog.exportSymbol('proto.model.OAuthToken', null, global);
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
proto.model.OAuthToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.OAuthToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.OAuthToken.displayName = 'proto.model.OAuthToken';
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
proto.model.OAuthClient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.OAuthClient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.OAuthClient.displayName = 'proto.model.OAuthClient';
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
proto.model.OAuthToken.prototype.toObject = function(opt_includeInstance) {
  return proto.model.OAuthToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.OAuthToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.OAuthToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && gorm_types_types_pb.DeletedAt.toObject(includeInstance, f),
    accessToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tokenType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refreshToken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    expiresSeconds: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
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
 * @return {!proto.model.OAuthToken}
 */
proto.model.OAuthToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.OAuthToken;
  return proto.model.OAuthToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.OAuthToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.OAuthToken}
 */
proto.model.OAuthToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = new gorm_types_types_pb.DeletedAt;
      reader.readMessage(value,gorm_types_types_pb.DeletedAt.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshToken(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setExpiresSeconds(value);
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
proto.model.OAuthToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.OAuthToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.OAuthToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.OAuthToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      gorm_types_types_pb.DeletedAt.serializeBinaryToWriter
    );
  }
  f = message.getAccessToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTokenType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefreshToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExpiresSeconds();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.model.OAuthToken.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.OAuthToken.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.OAuthToken} returns this
*/
proto.model.OAuthToken.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthToken.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.OAuthToken.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.OAuthToken} returns this
*/
proto.model.OAuthToken.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthToken.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional types.DeletedAt deleted_at = 4;
 * @return {?proto.types.DeletedAt}
 */
proto.model.OAuthToken.prototype.getDeletedAt = function() {
  return /** @type{?proto.types.DeletedAt} */ (
    jspb.Message.getWrapperField(this, gorm_types_types_pb.DeletedAt, 4));
};


/**
 * @param {?proto.types.DeletedAt|undefined} value
 * @return {!proto.model.OAuthToken} returns this
*/
proto.model.OAuthToken.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthToken.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string access_token = 5;
 * @return {string}
 */
proto.model.OAuthToken.prototype.getAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.setAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string token_type = 6;
 * @return {string}
 */
proto.model.OAuthToken.prototype.getTokenType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.setTokenType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refresh_token = 7;
 * @return {string}
 */
proto.model.OAuthToken.prototype.getRefreshToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.setRefreshToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double expires_seconds = 8;
 * @return {number}
 */
proto.model.OAuthToken.prototype.getExpiresSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.model.OAuthToken} returns this
 */
proto.model.OAuthToken.prototype.setExpiresSeconds = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





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
proto.model.OAuthClient.prototype.toObject = function(opt_includeInstance) {
  return proto.model.OAuthClient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.OAuthClient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.OAuthClient.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && gorm_types_types_pb.DeletedAt.toObject(includeInstance, f),
    secret: jspb.Message.getFieldWithDefault(msg, 5, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.model.OAuthClient}
 */
proto.model.OAuthClient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.OAuthClient;
  return proto.model.OAuthClient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.OAuthClient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.OAuthClient}
 */
proto.model.OAuthClient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = new gorm_types_types_pb.DeletedAt;
      reader.readMessage(value,gorm_types_types_pb.DeletedAt.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
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
proto.model.OAuthClient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.OAuthClient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.OAuthClient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.OAuthClient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      gorm_types_types_pb.DeletedAt.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.model.OAuthClient.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.OAuthClient.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.OAuthClient} returns this
*/
proto.model.OAuthClient.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthClient.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.OAuthClient.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.OAuthClient} returns this
*/
proto.model.OAuthClient.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthClient.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional types.DeletedAt deleted_at = 4;
 * @return {?proto.types.DeletedAt}
 */
proto.model.OAuthClient.prototype.getDeletedAt = function() {
  return /** @type{?proto.types.DeletedAt} */ (
    jspb.Message.getWrapperField(this, gorm_types_types_pb.DeletedAt, 4));
};


/**
 * @param {?proto.types.DeletedAt|undefined} value
 * @return {!proto.model.OAuthClient} returns this
*/
proto.model.OAuthClient.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.OAuthClient.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string secret = 5;
 * @return {string}
 */
proto.model.OAuthClient.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string domain = 6;
 * @return {string}
 */
proto.model.OAuthClient.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string userID = 7;
 * @return {string}
 */
proto.model.OAuthClient.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.OAuthClient} returns this
 */
proto.model.OAuthClient.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.model);
