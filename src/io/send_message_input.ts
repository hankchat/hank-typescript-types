// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/send_message_input.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Message } from "../message/message";

export const protobufPackage = "hank";

export interface SendMessageInput {
  message: Message | undefined;
}

function createBaseSendMessageInput(): SendMessageInput {
  return { message: undefined };
}

export const SendMessageInput: MessageFns<SendMessageInput> = {
  encode(message: SendMessageInput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SendMessageInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMessageInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendMessageInput {
    return { message: isSet(object.message) ? Message.fromJSON(object.message) : undefined };
  },

  toJSON(message: SendMessageInput): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendMessageInput>, I>>(base?: I): SendMessageInput {
    return SendMessageInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendMessageInput>, I>>(object: I): SendMessageInput {
    const message = createBaseSendMessageInput();
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
