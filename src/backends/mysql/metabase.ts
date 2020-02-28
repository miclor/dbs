import * as genericMetabase from "../../metabase"
import * as mysqlElements from "./schemaObjects"
import * as mysqlTypes from "./types"

export class Metabase extends genericMetabase.Metabase {
    sequences: Array<mysqlElements.Sequence>;
    views: Array<mysqlElements.View>;
    tables: Array<mysqlElements.Table>;

    constructor() {
        super();
        this.tables = [];
        this.views = [];
        this.sequences = [];

    }

    getTable(name: string, schema: string): mysqlElements.Table {
        return this.tables.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addTable(table: mysqlElements.Table): void {
        this.tables.push(table);
    }

    dropTable(table: mysqlElements.Table): void {
        for (let i = 0; i < this.tables.length; i++) {
            if (this.tables[i] === table) {
                this.tables.splice(i, 1);
            }
        }
    }

    getSequence(name: string, schema: string): mysqlElements.Sequence {
        return this.sequences.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addSequence(sequence: mysqlElements.Sequence): void {
        this.sequences.push(sequence);
    }

    dropSequence(sequence: mysqlElements.Sequence): void {
        for (let i = 0; i < this.sequences.length; i++) {
            if (this.sequences[i] === sequence) {
                this.sequences.splice(i, 1);
            }
        }
    }

    getView(name: string, schema: string): mysqlElements.View {
        return this.views.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addView(view: mysqlElements.View): void {
        this.views.push(view);
    }

    dropView(view: mysqlElements.View): void {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i] === view) {
                this.views.splice(i, 1);
            }
        }
    }


}