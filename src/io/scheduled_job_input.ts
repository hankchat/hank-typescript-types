// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: io/scheduled_job_input.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CronJob } from "../cron/cron_job";
import { OneShotJob } from "../cron/one_shot_job";

/** [Internal] Input to a InstructionKind::SheduledJob request to Hank. */
export interface ScheduledJobInput {
  scheduledJob?: { $case: "cronJob"; value: CronJob } | { $case: "oneShotJob"; value: OneShotJob } | undefined;
}

function createBaseScheduledJobInput(): ScheduledJobInput {
  return { scheduledJob: undefined };
}

export const ScheduledJobInput: MessageFns<ScheduledJobInput> = {
  encode(message: ScheduledJobInput, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    switch (message.scheduledJob?.$case) {
      case "cronJob":
        CronJob.encode(message.scheduledJob.value, writer.uint32(10).fork()).join();
        break;
      case "oneShotJob":
        OneShotJob.encode(message.scheduledJob.value, writer.uint32(18).fork()).join();
        break;
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScheduledJobInput {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledJobInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scheduledJob = { $case: "cronJob", value: CronJob.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scheduledJob = { $case: "oneShotJob", value: OneShotJob.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScheduledJobInput {
    return {
      scheduledJob: isSet(object.cronJob)
        ? { $case: "cronJob", value: CronJob.fromJSON(object.cronJob) }
        : isSet(object.oneShotJob)
        ? { $case: "oneShotJob", value: OneShotJob.fromJSON(object.oneShotJob) }
        : undefined,
    };
  },

  toJSON(message: ScheduledJobInput): unknown {
    const obj: any = {};
    if (message.scheduledJob?.$case === "cronJob") {
      obj.cronJob = CronJob.toJSON(message.scheduledJob.value);
    }
    if (message.scheduledJob?.$case === "oneShotJob") {
      obj.oneShotJob = OneShotJob.toJSON(message.scheduledJob.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduledJobInput>, I>>(base?: I): ScheduledJobInput {
    return ScheduledJobInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduledJobInput>, I>>(object: I): ScheduledJobInput {
    const message = createBaseScheduledJobInput();
    if (
      object.scheduledJob?.$case === "cronJob" &&
      object.scheduledJob?.value !== undefined &&
      object.scheduledJob?.value !== null
    ) {
      message.scheduledJob = { $case: "cronJob", value: CronJob.fromPartial(object.scheduledJob.value) };
    }
    if (
      object.scheduledJob?.$case === "oneShotJob" &&
      object.scheduledJob?.value !== undefined &&
      object.scheduledJob?.value !== null
    ) {
      message.scheduledJob = { $case: "oneShotJob", value: OneShotJob.fromPartial(object.scheduledJob.value) };
    }
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
