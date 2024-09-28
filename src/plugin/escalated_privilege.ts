// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: plugin/escalated_privilege.proto

/* eslint-disable */

export enum EscalatedPrivilege {
  ALL = 0,
  RELOAD_PLUGIN = 1,
  UNRECOGNIZED = -1,
}

export function escalatedPrivilegeFromJSON(object: any): EscalatedPrivilege {
  switch (object) {
    case 0:
    case "ALL":
      return EscalatedPrivilege.ALL;
    case 1:
    case "RELOAD_PLUGIN":
      return EscalatedPrivilege.RELOAD_PLUGIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EscalatedPrivilege.UNRECOGNIZED;
  }
}

export function escalatedPrivilegeToJSON(object: EscalatedPrivilege): string {
  switch (object) {
    case EscalatedPrivilege.ALL:
      return "ALL";
    case EscalatedPrivilege.RELOAD_PLUGIN:
      return "RELOAD_PLUGIN";
    case EscalatedPrivilege.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}