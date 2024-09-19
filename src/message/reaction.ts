// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: message/reaction.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Message } from "./message";

/** A reaction to a message. */
export interface Reaction {
  /** A message to react to. */
  message:
    | Message
    | undefined;
  /** A utf-8 emoji to react with. */
  emoji: string;
}

function createBaseReaction(): Reaction {
  return { message: undefined, emoji: "" };
}

export const Reaction: MessageFns<Reaction> = {
  encode(message: Reaction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).join();
    }
    if (message.emoji !== "") {
      writer.uint32(18).string(message.emoji);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Reaction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.emoji = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reaction {
    return {
      message: isSet(object.message) ? Message.fromJSON(object.message) : undefined,
      emoji: isSet(object.emoji) ? globalThis.String(object.emoji) : "",
    };
  },

  toJSON(message: Reaction): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    if (message.emoji !== "") {
      obj.emoji = message.emoji;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Reaction>, I>>(base?: I): Reaction {
    return Reaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Reaction>, I>>(object: I): Reaction {
    const message = createBaseReaction();
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    message.emoji = object.emoji ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
