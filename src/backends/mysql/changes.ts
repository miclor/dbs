import * as commands from "../../changes";
import {
  Table,
  Column,
  VARCHAR,
  TableBuilder,
  ViewBuilder,
  Constraint
} from "../../../src/backends/mysql/schemaObjects";
import { readFileSync } from "fs";
import { Metabase } from "./metabase";
import * as RelationalChange from "../../changes";

export interface TableParameters extends RelationalChange.TableParameters{}

export interface ViewParameters extends RelationalChange.ViewParameters{  }

export interface SequenceParameters extends RelationalChange.SequenceParameters{}

export interface IndexParameters extends RelationalChange.IndexParameters{}

export interface TriggerParameters extends RelationalChange.TriggerParameters {}

export interface IndexParameters extends RelationalChange.IndexParameters {}

export interface ProcedureParameters extends RelationalChange.ProcedureParameters {}

export interface FunctionParameters extends RelationalChange.FunctionParameters {}

export interface SchemaParameters extends RelationalChange.SchemaParameters {}

export interface UserParameters extends RelationalChange.UserParameters {}

export interface RolesParameters extends RelationalChange.RolesParameters {}

export interface Change extends RelationalChange.Change{
  changeType: string;
  objectType: string;
  parameters: RelationalChange.Parameters;
}

export class ChangeReader {

  constructor() {
  }

  readChangeFromDisk(filePath: string): Change {
    const path = require("path");
    const file = readFileSync(
      path.resolve(filePath),
      "utf-8"
    );
    const change : Change = JSON.parse(file) as Change;

    return change;
  }

}

export class ChangeApplier {
  private metabase: Metabase;
  constructor(metabase: Metabase) {
    this.metabase = metabase;
  }

  public createTable(change: Change) : void {
      const params : TableParameters = change.parameters as TableParameters;
      const testTable = TableBuilder.create()
          .setName(params["name"])
          .setSchema(params["schema"])
          .setColumns(params["columns"])
          .build();
      this.metabase.addTable(testTable);
  }

}
