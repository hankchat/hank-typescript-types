// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: database/results.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export interface Results {
  rows: string[];
}

function createBaseResults(): Results {
  return { rows: [] };
}

export const Results: MessageFns<Results> = {
  encode(message: Results, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.rows) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Results {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rows.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Results {
    return { rows: globalThis.Array.isArray(object?.rows) ? object.rows.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: Results): unknown {
    const obj: any = {};
    if (message.rows?.length) {
      obj.rows = message.rows;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Results>, I>>(base?: I): Results {
    return Results.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Results>, I>>(object: I): Results {
    const message = createBaseResults();
    message.rows = object.rows?.map((e) => e) || [];
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

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
