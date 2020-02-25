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