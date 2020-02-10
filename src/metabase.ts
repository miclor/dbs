import { RelationalElements } from "./dataStructures/relationalElements";


export abstract class Metabase {

    abstract tables: Array<RelationalElements.Table>;
    abstract columns: Array<RelationalElements.Column>;
    abstract sequences: Array<RelationalElements.Sequence>;
    abstract views: Array<RelationalElements.View>;

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

    abstract getTable(name: string, schema: string): RelationalElements.Table;
    abstract getColumn(name: string, schema: string): RelationalElements.Column;
    abstract getSequence(name: string, schema: string): RelationalElements.Sequence;
    abstract getView(name: string, schema: string): RelationalElements.View;
}