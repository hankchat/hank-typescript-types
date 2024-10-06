// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: hank.proto

/* eslint-disable */
import { BinaryReader } from "@bufbuild/protobuf/wire";
import { CronInput } from "./io/cron_input";
import { CronOutput } from "./io/cron_output";
import { DbQueryInput } from "./io/db_query_input";
import { DbQueryOutput } from "./io/db_query_output";
import { LoadPluginInput } from "./io/load_plugin_input";
import { LoadPluginOutput } from "./io/load_plugin_output";
import { OneShotInput } from "./io/one_shot_input";
import { OneShotOutput } from "./io/one_shot_output";
import { ReactInput } from "./io/react_input";
import { ReactOutput } from "./io/react_output";
import { ReloadPluginInput } from "./io/reload_plugin_input";
import { ReloadPluginOutput } from "./io/reload_plugin_output";
import { SendMessageInput } from "./io/send_message_input";
import { SendMessageOutput } from "./io/send_message_output";

/** [Internal] The underlying core Hank service. Should only be used by internal code. */
export interface Hank {
  /** [Internal] Send a chat message to Hank. */
  send_message(request: SendMessageInput): Promise<SendMessageOutput>;
  /** [Internal] Send a reaction to Hank. */
  react(request: ReactInput): Promise<ReactOutput>;
  /** [Internal] Send a database query to hank. */
  db_query(request: DbQueryInput): Promise<DbQueryOutput>;
  /** [Internal] Send a cron job to hank. */
  cron(request: CronInput): Promise<CronOutput>;
  /** [Internal] Send a one shot job to hank. */
  one_shot(request: OneShotInput): Promise<OneShotOutput>;
  /**
   * [Internal] Send a reload plugin request to hank.
   *
   * Requires EscalatedPrivilege::RELOAD_PLUGIN
   */
  reload_plugin(request: ReloadPluginInput): Promise<ReloadPluginOutput>;
  /**
   * [Internal] Send a load plugin request to hank.
   *
   * Requires EscalatedPrivilege::LOAD_PLUGIN
   */
  load_plugin(request: LoadPluginInput): Promise<LoadPluginOutput>;
}

export const HankServiceName = "hank.Hank";
export class HankClientImpl implements Hank {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || HankServiceName;
    this.rpc = rpc;
    this.send_message = this.send_message.bind(this);
    this.react = this.react.bind(this);
    this.db_query = this.db_query.bind(this);
    this.cron = this.cron.bind(this);
    this.one_shot = this.one_shot.bind(this);
    this.reload_plugin = this.reload_plugin.bind(this);
    this.load_plugin = this.load_plugin.bind(this);
  }
  send_message(request: SendMessageInput): Promise<SendMessageOutput> {
    const data = SendMessageInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "send_message", data);
    return promise.then((data) => SendMessageOutput.decode(new BinaryReader(data)));
  }

  react(request: ReactInput): Promise<ReactOutput> {
    const data = ReactInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "react", data);
    return promise.then((data) => ReactOutput.decode(new BinaryReader(data)));
  }

  db_query(request: DbQueryInput): Promise<DbQueryOutput> {
    const data = DbQueryInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "db_query", data);
    return promise.then((data) => DbQueryOutput.decode(new BinaryReader(data)));
  }

  cron(request: CronInput): Promise<CronOutput> {
    const data = CronInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "cron", data);
    return promise.then((data) => CronOutput.decode(new BinaryReader(data)));
  }

  one_shot(request: OneShotInput): Promise<OneShotOutput> {
    const data = OneShotInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "one_shot", data);
    return promise.then((data) => OneShotOutput.decode(new BinaryReader(data)));
  }

  reload_plugin(request: ReloadPluginInput): Promise<ReloadPluginOutput> {
    const data = ReloadPluginInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "reload_plugin", data);
    return promise.then((data) => ReloadPluginOutput.decode(new BinaryReader(data)));
  }

  load_plugin(request: LoadPluginInput): Promise<LoadPluginOutput> {
    const data = LoadPluginInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "load_plugin", data);
    return promise.then((data) => LoadPluginOutput.decode(new BinaryReader(data)));
  }
}

export interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
