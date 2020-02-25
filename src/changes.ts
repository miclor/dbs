import * as RelationalElements from "./dataStructures/relationalElements";


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