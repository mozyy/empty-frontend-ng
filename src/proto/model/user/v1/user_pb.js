// source: model/user/v1/user.proto
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
var gorm_options_gorm_pb = require('../../../gorm/options/gorm_pb.js');
goog.object.extend(proto, gorm_options_gorm_pb);
var gorm_types_types_pb = require('../../../gorm/types/types_pb.js');
goog.object.extend(proto, gorm_types_types_pb);
goog.exportSymbol('proto.model.user.v1.User', null, global);
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
proto.model.user.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.user.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.user.v1.User.displayName = 'proto.model.user.v1.User';
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
proto.model.user.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.model.user.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.user.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.user.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && gorm_types_types_pb.DeletedAt.toObject(includeInstance, f),
    mobile: jspb.Message.getFieldWithDefault(msg, 5, ""),
    passwordHash: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.model.user.v1.User}
 */
proto.model.user.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.user.v1.User;
  return proto.model.user.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.user.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.user.v1.User}
 */
proto.model.user.v1.User.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setMobile(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordHash(value);
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
proto.model.user.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.user.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.user.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.user.v1.User.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMobile();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPasswordHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 ID = 1;
 * @return {number}
 */
proto.model.user.v1.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.user.v1.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.user.v1.User} returns this
*/
proto.model.user.v1.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.user.v1.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.model.user.v1.User.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.model.user.v1.User} returns this
*/
proto.model.user.v1.User.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.user.v1.User.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional types.DeletedAt deleted_at = 4;
 * @return {?proto.types.DeletedAt}
 */
proto.model.user.v1.User.prototype.getDeletedAt = function() {
  return /** @type{?proto.types.DeletedAt} */ (
    jspb.Message.getWrapperField(this, gorm_types_types_pb.DeletedAt, 4));
};


/**
 * @param {?proto.types.DeletedAt|undefined} value
 * @return {!proto.model.user.v1.User} returns this
*/
proto.model.user.v1.User.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.user.v1.User.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string mobile = 5;
 * @return {string}
 */
proto.model.user.v1.User.prototype.getMobile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.setMobile = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password_hash = 6;
 * @return {string}
 */
proto.model.user.v1.User.prototype.getPasswordHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.model.user.v1.User} returns this
 */
proto.model.user.v1.User.prototype.setPasswordHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.model.user.v1);
