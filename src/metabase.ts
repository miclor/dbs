import * as  RelationalElements from "./dataStructures/relationalElements";


export abstract class Metabase {

    abstract tables: Array<RelationalElements.Table>;
    abstract sequences: Array<RelationalElements.Sequence>;
    abstract views: Array<RelationalElements.View>;

    abstract addTable(table: RelationalElements.Table): void;
    abstract dropTable(table: RelationalElements.Table): void;

    abstract addSequence(sequence: RelationalElements.Sequence): void;
    abstract dropSequence(sequence: RelationalElements.Sequence): void;

    abstract addView(view: RelationalElements.View): void;
    abstract dropView(view: RelationalElements.View): void;

    abstract getTable(name: string, schema: string): RelationalElements.Table;
    abstract getSequence(name: string, schema: string): RelationalElements.Sequence;
    abstract getView(name: string, schema: string): RelationalElements.View;
}