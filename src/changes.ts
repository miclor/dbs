import * as RelationalElements from "./dataStructures/relationalElements";
import { SQLType } from "./SQLTypes";


export interface Change {
    changeType: string;
    objectType: string;
    parameters: Parameters;
  }

export abstract class Parameters {}

export interface TableParameters extends Parameters {
    name: string;
    schema: string;
    columns: Array<RelationalElements.Column>;
    primaryKeyConstraint?: RelationalElements.PrimaryKeyConstraint;
    uniqueConstraints?: Array<RelationalElements.UniqueConstraint>;
    notNullConstraints?: Array<RelationalElements.NotNullConstraint>;
    checkConstraints?: Array<RelationalElements.CheckConstraint>;
    defaultConstraints?: Array<RelationalElements.DefaultConstraint>;
    foreignKeyConstraints?: Array<RelationalElements.ForeignKeyConstraint>;
}

export interface ViewParameters extends Parameters {
  name: string;
  schema: string;
  columns?: Array<string>;
  query: string;
  checkOption?: RelationalElements.ViewCheckOption;
}

export interface SequenceParameters extends Parameters {
  name: string;
  schema: string;
  start?: number;
  maxvalue?: number;
  increment?: number;
  minvalue?: number;
  noMaxvalue?: boolean;
  cache?: boolean;
  cycle?: boolean;
}

export interface TriggerParameters extends Parameters {
  name: string;
  schema: string;
  table: string;
  event?: | "INSERT" | "UPDATE" | "DELETE";
  when: "BEFORE" | "AFTER";
  procedure: string;
}

export interface IndexParameters extends Parameters {
  name: string;
  schema: string;
  table: string;
  columns: [string];
  unique: boolean;
  tablespace?: string;
}

export interface ProcedureParameters extends Parameters {
  name: string;
  schema: string;
  replace: boolean;
  routine: string;
}

export interface FunctionParameters extends Parameters {
  name: string;
  schema: string;
  replace: boolean;
  routine: string;
  returnValue: SQLType
}

export interface SchemaParameters extends Parameters {
  name: string;
  schema: string;
  location?: string;
}

export interface UserParameters extends Parameters {
  name: string;
  password: string;
}

export interface RolesParameters extends Parameters {
  name: string;
}
