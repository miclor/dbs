import * as commands from "../../changes";
import { Table, Column, VARCHAR, TableBuilder, ViewBuilder } from "../../../src/backends/postgresql/postgresElements"
import { readFileSync } from "fs";
import { Metabase } from "../../../src/backends/postgresql/metabase"



export class ChangeReader {
    private metabase: Metabase;

    constructor(metabase: Metabase) {
        this.metabase = metabase;
    }

    readChangeFromDisk(filePath: string): any {
        const path = require("path");
        const file = readFileSync(path.resolve(filePath, "../../test_data/create_table.json"), "utf-8");
        const change = JSON.parse(file);
        // return change

        // collect parameters to find the correct function:
        // change_type: create | alter | drop
        // change_target: table | column | view | sequence
        // parameters: for create: pass attributes to XYZBuilder methods
        // parameters: for delete: call corresponding method
        // parameters:

        // simple first, the factor out switch with factory

        console.log("found change---->", change);
        switch (change["change_type"]) {
            case "create": {
                // const builder = BuilderFactory.create_builder(change["change_target"])
                switch (change["object_type"]) {
                    case "table": {

                    //                         const col1 = new Column("Col1", new VARCHAR(20));
                    //   const col2 = new Column("Col2", new VARCHAR(20));
                    //   const cols = [col1, col2];
                    //   let testTable = TableBuilder.create()
                    //     .setName("ExampleTable")
                    //     .setSchema("ExampleSxhema")
                    //     .setColumns(cols)
                    //     .build();
                        const parameters = change["parameters"];
                        let cols :Array<Column> = [];
                        // parse this to JSON schema?
                        for (let colJSON in parameters["columns"]) {
                            console.log("colJSON", colJSON);
                            let col : Column = JSON.parse(colJSON);
                            console.log("col-->", col)
                            cols.push(col);
                        }
                        const table = TableBuilder.create().setName(parameters["name"]).setSchema(parameters["schema"]).setColumns(cols).build();
                        // now let's distribute the parameters
                        console.log("my table---->", table)
                    }
                    case "view": {
                        const builder = ViewBuilder.create();
                        // now let's distribute the parameters
                    }
                    default: {
                        throw("Object type type not known.")
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
                throw("Change type not known.");
            }
        }

    }

}

export class PostgresChange {
    constructor() {

    }


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