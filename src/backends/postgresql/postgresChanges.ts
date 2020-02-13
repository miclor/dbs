import * as commands from "../../changes";
import { Table, Column, VARCHAR, TableBuilder } from "../../../src/backends/postgresql/postgresElements"
import { readFileSync } from "fs";
import { Metabase } from "../../../src/backends/postgresql/metabase"
// export class CreateTableCommand extends commands.CreateTableCommand {
//     constructor() {
//         super();
//     }

//     execute(): void {

//     }
// }

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

        switch (change["change_type"]) {
            case "create": {
                const builder = BuilderFactory.create_builder(change["change_target"])
            }
        }
            case "modify": {
            break;
        }
            case "remove": {
            this.metabase.getObject(change["changeType"]).get("schema", "objectName")
        }
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