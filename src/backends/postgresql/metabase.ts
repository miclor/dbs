import * as genericMetabase from "../../metabase"
import * as postgresElements from "./postgresElements"
import * as postgresTypes from "./postgresTypes"

export class Metabase extends genericMetabase.Metabase {
    sequences: Array<postgresElements.Sequence>;
    views: Array<postgresElements.View>;
    tables: Array<postgresElements.Table>;

    constructor() {
        super();
        this.tables = [];
        this.views = [];
        this.sequences = [];

    }

    getTable(name: string, schema: string): postgresElements.Table {
        return this.tables.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addTable(table: postgresElements.Table): void {
        this.tables.push(table);
    }

    dropTable(table: postgresElements.Table): void {
        for (let i = 0; i < this.tables.length; i++) {
            if (this.tables[i] === table) {
                this.tables.splice(i, 1);
            }
        }
    }

    getSequence(name: string, schema: string): postgresElements.Sequence {
        return this.sequences.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addSequence(sequence: postgresElements.Sequence): void {
        this.sequences.push(sequence);
    }

    dropSequence(sequence: postgresElements.Sequence): void {
        for (let i = 0; i < this.sequences.length; i++) {
            if (this.sequences[i] === sequence) {
                this.sequences.splice(i, 1);
            }
        }
    }

    getView(name: string, schema: string): postgresElements.View {
        return this.views.filter((x) => (x.name == name && x.schema == schema))[0];
    }

    addView(view: postgresElements.View): void {
        this.views.push(view);
    }

    dropView(view: postgresElements.View): void {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i] === view) {
                this.views.splice(i, 1);
            }
        }
    }


}