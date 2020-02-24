import * as commands from "../../changes";
import {
  Table,
  Column,
  VARCHAR,
  TableBuilder,
  ViewBuilder,
  Constraint
} from "../../../src/backends/postgresql/postgresElements";
import { readFileSync } from "fs";
import { Metabase } from "../../../src/backends/postgresql/metabase";

export interface CreateTableParameters {
  name: string;
  schema: string;
  columns: Column[];
  constraints?: Constraint[];
  tablespace?: string;
}

export class ChangeReader {
  private metabase: Metabase;

  constructor(metabase: Metabase) {
    this.metabase = metabase;
  }

  readChangeFromDisk(filePath: string): any {
    const path = require("path");
    const file = readFileSync(
      path.resolve(filePath, "../../test_data/create_table.json"),
      "utf-8"
    );
    const change = JSON.parse(file);

    switch (change["change_type"]) {
      case "create": {
        switch (change["object_type"]) {
          case "table": {
            // console.log("this change-->", change["parameters"]);

            const pars = change["parameters"] as CreateTableParameters;

            console.log(" parameters--->", pars);

            const table = TableBuilder.create()
              .setName(pars.name)
              .setSchema(pars.schema)
              .setColumns(pars.columns)
              .build();

            // now let's distribute the parameters
            // console.log("parameters---->", pars);
            console.log("my table---->", table);
            return table;
            break;
          }
          case "view": {
            const builder = ViewBuilder.create();
            // now let's distribute the parameters
            break;
          }
          default: {
            console.log("did not find object type--->", change["object_type"]);

            throw "Object type type not known.";
          }
        }
      }
      case "modify": {
        break;
      }
      // case "remove": {
      //     this.metabase.getObject(change["changeType"]).get("schema", "objectName")
      // }
      default: {
        throw "Change type not known.";
      }
    }
  }
}

export class PostgresChange {
  constructor() {}

  // public createTable(): Table {

  //     const col1 = new Column("Col1", new VARCHAR(20));
  //     const col2 = new Column("Col2", new VARCHAR(20));
  //     const cols = [col1, col2];
  //     let testTable = TableBuilder.create()
  //         .setName("ExampleTable")
  //         .setSchema("ExampleSxhema")
  //         .setColumns(cols)
  //         .build();
  // }
}
