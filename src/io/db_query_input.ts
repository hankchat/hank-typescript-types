// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/db_query_input.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PreparedStatement } from "../database/prepared_statement";

/** [Internal] Input to a db query request to Hank. */
export interface DbQueryInput {
  /** The prepared statement to send to Hank. */
  preparedStatement: PreparedStatement | undefined;
}

function createBaseDbQueryInput(): DbQueryInput {
  return { preparedStatement: undefined };
}

export const DbQueryInput: MessageFns<DbQueryInput> = {
  encode(message: DbQueryInput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.preparedStatement !== undefined) {
      PreparedStatement.encode(message.preparedStatement, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DbQueryInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDbQueryInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.preparedStatement = PreparedStatement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DbQueryInput {
    return {
      preparedStatement: isSet(object.preparedStatement)
        ? PreparedStatement.fromJSON(object.preparedStatement)
        : undefined,
    };
  },

  toJSON(message: DbQueryInput): unknown {
    const obj: any = {};
    if (message.preparedStatement !== undefined) {
      obj.preparedStatement = PreparedStatement.toJSON(message.preparedStatement);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DbQueryInput>, I>>(base?: I): DbQueryInput {
    return DbQueryInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DbQueryInput>, I>>(object: I): DbQueryInput {
    const message = createBaseDbQueryInput();
    message.preparedStatement = (object.preparedStatement !== undefined && object.preparedStatement !== null)
      ? PreparedStatement.fromPartial(object.preparedStatement)
      : undefined;
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
