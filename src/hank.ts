// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: hank.proto

/* eslint-disable */
import { BinaryReader } from "@bufbuild/protobuf/wire";
import { ChatCommandInput } from "./io/chat_command_input";
import { ChatCommandOutput } from "./io/chat_command_output";
import { ChatMessageInput } from "./io/chat_message_input";
import { ChatMessageOutput } from "./io/chat_message_output";
import { CronInput } from "./io/cron_input";
import { CronOutput } from "./io/cron_output";
import { DbQueryInput } from "./io/db_query_input";
import { DbQueryOutput } from "./io/db_query_output";
import { GetMetadataInput } from "./io/get_metadata_input";
import { GetMetadataOutput } from "./io/get_metadata_output";
import { InitializeInput } from "./io/initialize_input";
import { InitializeOutput } from "./io/initialize_output";
import { InstallInput } from "./io/install_input";
import { InstallOutput } from "./io/install_output";
import { InstructPluginInput } from "./io/instruct_plugin_input";
import { InstructPluginOutput } from "./io/instruct_plugin_output";
import { LoadPluginInput } from "./io/load_plugin_input";
import { LoadPluginOutput } from "./io/load_plugin_output";
import { OneShotInput } from "./io/one_shot_input";
import { OneShotOutput } from "./io/one_shot_output";
import { ReactInput } from "./io/react_input";
import { ReactOutput } from "./io/react_output";
import { ReloadPluginInput } from "./io/reload_plugin_input";
import { ReloadPluginOutput } from "./io/reload_plugin_output";
import { ScheduledJobInput } from "./io/scheduled_job_input";
import { ScheduledJobOutput } from "./io/scheduled_job_output";
import { SendMessageInput } from "./io/send_message_input";
import { SendMessageOutput } from "./io/send_message_output";
import { ShutdownInput } from "./io/shutdown_input";
import { ShutdownOutput } from "./io/shutdown_output";

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
  /**
   * [Internal] Send an instruct plugin request to hank.
   *
   * Requires EscalatedPrivilege::INSTRUCT_PLUGIN
   */
  instruct_plugin(request: InstructPluginInput): Promise<InstructPluginOutput>;
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
    this.instruct_plugin = this.instruct_plugin.bind(this);
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

  instruct_plugin(request: InstructPluginInput): Promise<InstructPluginOutput> {
    const data = InstructPluginInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "instruct_plugin", data);
    return promise.then((data) => InstructPluginOutput.decode(new BinaryReader(data)));
  }
}

/** The underlying interface for a Hank plugin. */
export interface Plugin {
  /**
   * [Internal] Handle InstructionKind::GetMetadata
   *
   * This is the first function called after the entry point to retrieve the
   * plugins metadata.
   */
  handle_get_metadata(request: GetMetadataInput): Promise<GetMetadataOutput>;
  /**
   * [Internal] Handle InstructionKind::Install
   *
   * If the plugin registers an install handler, the plugin service will call
   * out to it.
   *
   * The install function is only called a single time when the plugin is
   * installed.
   *
   * The install function registered by the plugin should be used to create
   * database tables and other tasks that may only need to happen a single time
   * in a plugins lifetime.
   */
  handle_install(request: InstallInput): Promise<InstallOutput>;
  /**
   * [Internal] Handle InstructionKind::Initialize
   *
   * If the plugin registers an initialize handler, the plugin service will
   * call out to it.
   *
   * The initialize function registered by the plugin should be used to execute
   * any functionality that should be run every time the plugin is loaded by
   * hank, e.g. scheduling jobs, sending a message to a channel, etc.
   */
  handle_initialize(request: InitializeInput): Promise<InitializeOutput>;
  /**
   * [Internal] Handle InstructionKind::Shutdown
   *
   * If the plugin registers a shutdown handler, the plugin service will call
   * out to it.
   *
   * The shutdown function registered by the plugin should be used to execute
   * any functions necessary to gracefully shut down the plugin.
   */
  handle_shutdown(request: ShutdownInput): Promise<ShutdownOutput>;
  /**
   * [Internal] Handle InstructionKind::ChatMessage
   *
   * If the plugin registers a chat message handler, the plugin service will
   * call out to it.
   *
   * The message handler function registered by the plugin should be used to
   * execute functionality that functions on general chat messages. Plugins
   * should prefer registering chat commands in their metadata and using the
   * chat command handler over custom command parsing implementations.
   */
  handle_chat_message(request: ChatMessageInput): Promise<ChatMessageOutput>;
  /**
   * [Internal] Handle InstructionKind::ChatCommand
   *
   * If the plugin registers a chat command handler, the plugin service will
   * call out to it.
   *
   * The chat command handler function registered by the plugin should be used
   * to execute custom plugin commands. Plugins can register their commands in
   * the plugin metadata. See hank.plugin.Metadata for more information.
   */
  handle_chat_command(request: ChatCommandInput): Promise<ChatCommandOutput>;
  /**
   * [Internal] Handle InstructionKind::ScheduledJob
   *
   * If the plugin registers cron or one shot jobs, the plugin service will
   * receive instruction from hank to execute the scheduled job.
   *
   * See your PDK documentation for information on registering cron and one
   * shot jobs.
   */
  handle_scheduled_job(request: ScheduledJobInput): Promise<ScheduledJobOutput>;
}

export const PluginServiceName = "hank.Plugin";
export class PluginClientImpl implements Plugin {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || PluginServiceName;
    this.rpc = rpc;
    this.handle_get_metadata = this.handle_get_metadata.bind(this);
    this.handle_install = this.handle_install.bind(this);
    this.handle_initialize = this.handle_initialize.bind(this);
    this.handle_shutdown = this.handle_shutdown.bind(this);
    this.handle_chat_message = this.handle_chat_message.bind(this);
    this.handle_chat_command = this.handle_chat_command.bind(this);
    this.handle_scheduled_job = this.handle_scheduled_job.bind(this);
  }
  handle_get_metadata(request: GetMetadataInput): Promise<GetMetadataOutput> {
    const data = GetMetadataInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_get_metadata", data);
    return promise.then((data) => GetMetadataOutput.decode(new BinaryReader(data)));
  }

  handle_install(request: InstallInput): Promise<InstallOutput> {
    const data = InstallInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_install", data);
    return promise.then((data) => InstallOutput.decode(new BinaryReader(data)));
  }

  handle_initialize(request: InitializeInput): Promise<InitializeOutput> {
    const data = InitializeInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_initialize", data);
    return promise.then((data) => InitializeOutput.decode(new BinaryReader(data)));
  }

  handle_shutdown(request: ShutdownInput): Promise<ShutdownOutput> {
    const data = ShutdownInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_shutdown", data);
    return promise.then((data) => ShutdownOutput.decode(new BinaryReader(data)));
  }

  handle_chat_message(request: ChatMessageInput): Promise<ChatMessageOutput> {
    const data = ChatMessageInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_chat_message", data);
    return promise.then((data) => ChatMessageOutput.decode(new BinaryReader(data)));
  }

  handle_chat_command(request: ChatCommandInput): Promise<ChatCommandOutput> {
    const data = ChatCommandInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_chat_command", data);
    return promise.then((data) => ChatCommandOutput.decode(new BinaryReader(data)));
  }

  handle_scheduled_job(request: ScheduledJobInput): Promise<ScheduledJobOutput> {
    const data = ScheduledJobInput.encode(request).finish();
    const promise = this.rpc.request(this.service, "handle_scheduled_job", data);
    return promise.then((data) => ScheduledJobOutput.decode(new BinaryReader(data)));
  }
}

export interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
