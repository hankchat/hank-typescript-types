// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: plugin/instruction.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

/** [Internal] Kinds of instructions that can be sent to hank plugins. */
export enum InstructionKind {
  /** Plugin - Plugin entry point. */
  Plugin = 0,
  /** GetMetadata - Get the plugins metadata. */
  GetMetadata = 1,
  /** Install - Call the plugins install function. (only happens once) */
  Install = 2,
  /** Initialize - Call the plugins initialize function. (happens on every load) */
  Initialize = 3,
  /** Shutdown - Call the plugins shutdown function. (happens on reload, unload, uninstall) */
  Shutdown = 4,
  /** ChatMessage - Call the plguins chat message handler. */
  ChatMessage = 5,
  /** ChatCommand - Call the plguins chat command handler. */
  ChatCommand = 6,
  /** ScheduledJob - Call the plguins scheduled job handler. */
  ScheduledJob = 7,
  UNRECOGNIZED = -1,
}

export function instructionKindFromJSON(object: any): InstructionKind {
  switch (object) {
    case 0:
    case "Plugin":
      return InstructionKind.Plugin;
    case 1:
    case "GetMetadata":
      return InstructionKind.GetMetadata;
    case 2:
    case "Install":
      return InstructionKind.Install;
    case 3:
    case "Initialize":
      return InstructionKind.Initialize;
    case 4:
    case "Shutdown":
      return InstructionKind.Shutdown;
    case 5:
    case "ChatMessage":
      return InstructionKind.ChatMessage;
    case 6:
    case "ChatCommand":
      return InstructionKind.ChatCommand;
    case 7:
    case "ScheduledJob":
      return InstructionKind.ScheduledJob;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstructionKind.UNRECOGNIZED;
  }
}

export function instructionKindToJSON(object: InstructionKind): string {
  switch (object) {
    case InstructionKind.Plugin:
      return "Plugin";
    case InstructionKind.GetMetadata:
      return "GetMetadata";
    case InstructionKind.Install:
      return "Install";
    case InstructionKind.Initialize:
      return "Initialize";
    case InstructionKind.Shutdown:
      return "Shutdown";
    case InstructionKind.ChatMessage:
      return "ChatMessage";
    case InstructionKind.ChatCommand:
      return "ChatCommand";
    case InstructionKind.ScheduledJob:
      return "ScheduledJob";
    case InstructionKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** [Internal] An instruction to send to hank plugin. */
export interface Instruction {
  /** The kind of instruction to send to the hank plugin. */
  kind: InstructionKind;
  /** An input to send to the hank plugin. */
  input: Buffer;
  /** An optional target plugin name to send the instruciton to. */
  target?: string | undefined;
}

function createBaseInstruction(): Instruction {
  return { kind: 0, input: Buffer.alloc(0), target: undefined };
}

export const Instruction: MessageFns<Instruction> = {
  encode(message: Instruction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.input.length !== 0) {
      writer.uint32(18).bytes(message.input);
    }
    if (message.target !== undefined) {
      writer.uint32(26).string(message.target);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Instruction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstruction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.input = Buffer.from(reader.bytes());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.target = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instruction {
    return {
      kind: isSet(object.kind) ? instructionKindFromJSON(object.kind) : 0,
      input: isSet(object.input) ? Buffer.from(bytesFromBase64(object.input)) : Buffer.alloc(0),
      target: isSet(object.target) ? globalThis.String(object.target) : undefined,
    };
  },

  toJSON(message: Instruction): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = instructionKindToJSON(message.kind);
    }
    if (message.input.length !== 0) {
      obj.input = base64FromBytes(message.input);
    }
    if (message.target !== undefined) {
      obj.target = message.target;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instruction>, I>>(base?: I): Instruction {
    return Instruction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instruction>, I>>(object: I): Instruction {
    const message = createBaseInstruction();
    message.kind = object.kind ?? 0;
    message.input = object.input ?? Buffer.alloc(0);
    message.target = object.target ?? undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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
