// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: cron/cron_job.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

/** A cron job to run a task at a scheduled interval in the background. */
export interface CronJob {
  /**
   * The cron schedule string to use for the cron job.
   *
   * Example (run every 5th minute):
   *  * /5 * * * *
   *
   * @see: https://crontab.guru/
   */
  cron: string;
  /** A function name to call for each scheduled cron execution. */
  job: string;
}

function createBaseCronJob(): CronJob {
  return { cron: "", job: "" };
}

export const CronJob: MessageFns<CronJob> = {
  encode(message: CronJob, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cron !== "") {
      writer.uint32(10).string(message.cron);
    }
    if (message.job !== "") {
      writer.uint32(18).string(message.job);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CronJob {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCronJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cron = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.job = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CronJob {
    return {
      cron: isSet(object.cron) ? globalThis.String(object.cron) : "",
      job: isSet(object.job) ? globalThis.String(object.job) : "",
    };
  },

  toJSON(message: CronJob): unknown {
    const obj: any = {};
    if (message.cron !== "") {
      obj.cron = message.cron;
    }
    if (message.job !== "") {
      obj.job = message.job;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CronJob>, I>>(base?: I): CronJob {
    return CronJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CronJob>, I>>(object: I): CronJob {
    const message = createBaseCronJob();
    message.cron = object.cron ?? "";
    message.job = object.job ?? "";
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
