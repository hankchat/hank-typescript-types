// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/db_query_output.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Results } from "../database/results";

/** [Internal] Output from a db query request to Hank. */
export interface DbQueryOutput {
  /** The database results from the query from Hank. */
  results:
    | Results
    | undefined;
  /** An error message, if there was an error. */
  error?: string | undefined;
}

function createBaseDbQueryOutput(): DbQueryOutput {
  return { results: undefined, error: undefined };
}

export const DbQueryOutput: MessageFns<DbQueryOutput> = {
  encode(message: DbQueryOutput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.results !== undefined) {
      Results.encode(message.results, writer.uint32(10).fork()).join();
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DbQueryOutput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDbQueryOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.results = Results.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): DbQueryOutput {
    return {
      results: isSet(object.results) ? Results.fromJSON(object.results) : undefined,
      error: isSet(object.error) ? globalThis.String(object.error) : undefined,
    };
  },

  toJSON(message: DbQueryOutput): unknown {
    const obj: any = {};
    if (message.results !== undefined) {
      obj.results = Results.toJSON(message.results);
    }
    if (message.error !== undefined) {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DbQueryOutput>, I>>(base?: I): DbQueryOutput {
    return DbQueryOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DbQueryOutput>, I>>(object: I): DbQueryOutput {
    const message = createBaseDbQueryOutput();
    message.results = (object.results !== undefined && object.results !== null)
      ? Results.fromPartial(object.results)
      : undefined;
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
