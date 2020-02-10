import * as genericMetabase from "../../metabase"
import * as postgresElements from "./postgresElements"
import * as postgresTypes from "./postgresTypes"

export class Metabase extends genericMetabase.Metabase {
    columns: Array<postgresElements.Column>;
    sequences: Array<postgresElements.Sequence>;
    views: Array<postgresElements.View>;
    tables: Array<postgresElements.Table>;

    constructor() {
        super();
        this.tables = [];
        this.views = [];
        this.sequences = [];
        this.columns = [];

    }

    addTable(table: postgresElements.Table): void {
        throw new Error("Method not implemented.");
    }

    // alterTable(table: postgresElements.Table, changeType: changeType, parameters: object): void {
    //     throw new Error("Method not implemented.");
    // }    

    dropTable(table: postgresElements.Table): void {
        throw new Error("Method not implemented.");
    }

    addColumn(column: postgresElements.Column): void {
        throw new Error("Method not implemented.");
    }
    alterColumn(column: postgresElements.Column): void {
        throw new Error("Method not implemented.");
    }
    dropColumn(column: postgresElements.Column): void {
        throw new Error("Method not implemented.");
    }

    addSequence(sequence: postgresElements.Sequence): void {
        throw new Error("Method not implemented.");
    }
    alterSequence(sequence: postgresElements.Sequence): void {
        throw new Error("Method not implemented.");
    }
    dropSequence(sequence: postgresElements.Sequence): void {
        throw new Error("Method not implemented.");
    }
    addView(view: postgresElements.View): void {
        throw new Error("Method not implemented.");
    }
    dropView(view: postgresElements.View): void {
        throw new Error("Method not implemented.");
    }
    getTable(name: string, schema: string): postgresElements.Table {
        throw new Error("Method not implemented.");
    }
    getColumn(name: string, schema: string): postgresElements.Column {
        throw new Error("Method not implemented.");
    }
    getSequence(name: string, schema: string): postgresElements.Sequence {
        throw new Error("Method not implemented.");
    }
    getView(name: string, schema: string): postgresElements.View {
        throw new Error("Method not implemented.");
    }

}