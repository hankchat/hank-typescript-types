import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type AccessCheckChain as AccessCheckChainType, AccessCheckChain as GeneratedAccessCheckChain, AccessCheck } from "./access_check/access_check";
import { accessCheckOperatorFromJSON } from "./access_check/access_check_operator";

// @@proto-exports-begin
export * from "./access_check/access_check";
export * from "./access_check/access_check_operator";
export * from "./cron/cron_job";
export * from "./cron/one_shot_job";
export * from "./database/prepared_statement";
export * from "./database/results";
export * from "./io/cron_input";
export * from "./io/cron_output";
export * from "./io/one_shot_input";
export * from "./io/one_shot_output";
export * from "./io/db_query_input";
export * from "./io/db_query_output";
export * from "./io/react_input";
export * from "./io/react_output";
export * from "./io/send_message_input";
export * from "./io/send_message_output";
export * from "./message/message";
export * from "./message/reaction";
export * from "./plugin/metadata";
export * from "./hank";
// @@proto-exports-end

// Override the json ser/de for AccessCheckChain to use our custom format.
export const AccessCheckChain: MessageFns<AccessCheckChainType> = {
  ...GeneratedAccessCheckChain,

  fromJSON(object: any): AccessCheckChainType {
    let [operator, checks] = Object.entries(object)[0];
    return {
      operator: accessCheckOperatorFromJSON(operator),
      checks: globalThis.Array.isArray(checks) ? checks.map((e: any) => AccessCheck.fromJSON(e)) : [],
    };
  },

  toJSON(message: AccessCheckChainType): unknown {
    let chain: any = GeneratedAccessCheckChain.toJSON(message);
    let obj: any = {};

    obj[chain.operator] = chain.checks;
    return obj;
  },
};

// Generated code which appears in every generated message file. It's not
// exported, so we need to copy it here so we can alter the json ser/de for
// access checks/chains.
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
interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
