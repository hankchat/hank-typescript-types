// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/send_message_output.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

/** [Internal] Output from a send message request to Hank. */
export interface SendMessageOutput {
  /** An error message, if there was an error. */
  error?: string | undefined;
}

function createBaseSendMessageOutput(): SendMessageOutput {
  return { error: undefined };
}

export const SendMessageOutput: MessageFns<SendMessageOutput> = {
  encode(message: SendMessageOutput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.error !== undefined) {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SendMessageOutput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMessageOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendMessageOutput {
    return { error: isSet(object.error) ? globalThis.String(object.error) : undefined };
  },

  toJSON(message: SendMessageOutput): unknown {
    const obj: any = {};
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendMessageOutput>, I>>(base?: I): SendMessageOutput {
    return SendMessageOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendMessageOutput>, I>>(object: I): SendMessageOutput {
    const message = createBaseSendMessageOutput();
    message.error = object.error ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string; value: unknown } ? { $case: T["$case"]; value?: DeepPartial<T["value"]> }
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
