// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: plugin/command.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AccessCheckChain } from "../access_check/access_check";
import { Argument } from "./argument";

/** Plugin commands. */
export interface Command {
  /** Command name. */
  name: string;
  /** Command description. */
  description: string;
  /** Command author. */
  author?:
    | string
    | undefined;
  /**
   * A version string for the command. Should follow semver.
   *
   * @see: https://semver.org/
   */
  version?:
    | string
    | undefined;
  /** Command aliases. */
  aliases: string[];
  /** Command arguments. */
  arguments: Argument[];
  /** Command subcommands. */
  subcommands: Command[];
  /**
   * Access checks
   *
   * This command can optionally be gated by access checks.
   */
  accessChecks?: AccessCheckChain | undefined;
}

function createBaseCommand(): Command {
  return {
    name: "",
    description: "",
    author: undefined,
    version: undefined,
    aliases: [],
    arguments: [],
    subcommands: [],
    accessChecks: undefined,
  };
}

export const Command: MessageFns<Command> = {
  encode(message: Command, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.author !== undefined) {
      writer.uint32(26).string(message.author);
    }
    if (message.version !== undefined) {
      writer.uint32(34).string(message.version);
    }
    for (const v of message.aliases) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(50).fork()).join();
    }
    for (const v of message.subcommands) {
      Command.encode(v!, writer.uint32(58).fork()).join();
    }
    if (message.accessChecks !== undefined) {
      AccessCheckChain.encode(message.accessChecks, writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Command {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.author = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aliases.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.arguments.push(Argument.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.subcommands.push(Command.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.accessChecks = AccessCheckChain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      author: isSet(object.author) ? globalThis.String(object.author) : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : undefined,
      aliases: globalThis.Array.isArray(object?.aliases) ? object.aliases.map((e: any) => globalThis.String(e)) : [],
      arguments: globalThis.Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Argument.fromJSON(e))
        : [],
      subcommands: globalThis.Array.isArray(object?.subcommands)
        ? object.subcommands.map((e: any) => Command.fromJSON(e))
        : [],
      accessChecks: isSet(object.accessChecks) ? AccessCheckChain.fromJSON(object.accessChecks) : undefined,
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.author !== undefined) {
      obj.author = message.author;
    }
    if (message.version !== undefined) {
      obj.version = message.version;
    }
    if (message.aliases?.length) {
      obj.aliases = message.aliases;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Argument.toJSON(e));
    }
    if (message.subcommands?.length) {
      obj.subcommands = message.subcommands.map((e) => Command.toJSON(e));
    }
    if (message.accessChecks !== undefined) {
      obj.accessChecks = AccessCheckChain.toJSON(message.accessChecks);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Command>, I>>(base?: I): Command {
    return Command.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.author = object.author ?? undefined;
    message.version = object.version ?? undefined;
    message.aliases = object.aliases?.map((e) => e) || [];
    message.arguments = object.arguments?.map((e) => Argument.fromPartial(e)) || [];
    message.subcommands = object.subcommands?.map((e) => Command.fromPartial(e)) || [];
    message.accessChecks = (object.accessChecks !== undefined && object.accessChecks !== null)
      ? AccessCheckChain.fromPartial(object.accessChecks)
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
