import * as genericMetabase from "../../metabase"
import * as postgresElements from "./postgresElements"
import * as postgresTypes from "./postgresTypes"

class Metabase extends genericMetabase.Metabase {
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

    addTable(): void {
        throw new Error("Method not implemented.");
    }
    alterTable(): void {
        throw new Error("Method not implemented.");
    }
    dropTable(): void {
        throw new Error("Method not implemented.");
    }
    addColumn(): void {
        throw new Error("Method not implemented.");
    }
    alterColumn(): void {
        throw new Error("Method not implemented.");
    }
    dropColumn(): void {
        throw new Error("Method not implemented.");
    }
    addSequence(): void {
        throw new Error("Method not implemented.");
    }
    alterSequence(): void {
        throw new Error("Method not implemented.");
    }
    dropSequence(): void {
        throw new Error("Method not implemented.");
    }
    addView(): void {
        throw new Error("Method not implemented.");
    }
    dropView(): void {
        throw new Error("Method not implemented.");
    }
    getTable(name: string, schema: string) {
        throw new Error("Method not implemented.");
    }
    getColumn(name: string, schema: string) {
        throw new Error("Method not implemented.");
    }
    getSequence(name: string, schema: string) {
        throw new Error("Method not implemented.");
    }
    getView(name: string, schema: string) {
        throw new Error("Method not implemented.");
    }


}