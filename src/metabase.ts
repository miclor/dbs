import { Table, Column, Sequence, View } from "./dataStructures/relationalElements";


export abstract class Metabase {

    abstract tables: Array<Table>;
    abstract columns: Array<Column>;
    abstract sequences: Array<Sequence>;
    abstract views: Array<View>;

    abstract addTable(): void;
    abstract alterTable(): void;
    abstract dropTable(): void;

    abstract addColumn(): void;
    abstract alterColumn(): void;
    abstract dropColumn(): void;

    abstract addSequence(): void;
    abstract alterSequence(): void;
    abstract dropSequence(): void;
    abstract addView(): void;
    abstract dropView(): void;

    abstract getTable(name: string, schema: string): Table;
    abstract getColumn(name: string, schema: string): Column;
    abstract getSequence(name: string, schema: string): Sequence;
    abstract getView(name: string, schema: string): View;
}