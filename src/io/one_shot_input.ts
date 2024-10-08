// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/one_shot_input.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { OneShotJob } from "../cron/one_shot_job";

/** [Internal] Input to a one shot request to Hank. */
export interface OneShotInput {
  /** A one shot to send to Hank. */
  oneShotJob: OneShotJob | undefined;
}

function createBaseOneShotInput(): OneShotInput {
  return { oneShotJob: undefined };
}

export const OneShotInput: MessageFns<OneShotInput> = {
  encode(message: OneShotInput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.oneShotJob !== undefined) {
      OneShotJob.encode(message.oneShotJob, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OneShotInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneShotInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.oneShotJob = OneShotJob.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OneShotInput {
    return { oneShotJob: isSet(object.oneShotJob) ? OneShotJob.fromJSON(object.oneShotJob) : undefined };
  },

  toJSON(message: OneShotInput): unknown {
    const obj: any = {};
    if (message.oneShotJob !== undefined) {
      obj.oneShotJob = OneShotJob.toJSON(message.oneShotJob);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OneShotInput>, I>>(base?: I): OneShotInput {
    return OneShotInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OneShotInput>, I>>(object: I): OneShotInput {
    const message = createBaseOneShotInput();
    message.oneShotJob = (object.oneShotJob !== undefined && object.oneShotJob !== null)
      ? OneShotJob.fromPartial(object.oneShotJob)
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
