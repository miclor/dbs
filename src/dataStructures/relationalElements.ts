import { Domains, SQLTypes } from "../SQLTypes";

export module RelationalElements {
  export abstract class Column {
    abstract name: string;
    abstract type: SQLTypes.SQLType;
  }

  export abstract class UniqueConstraint {
    abstract name: string;
    abstract namespace: string;
    abstract tableName: string;
    abstract columName: string;
  }

  export abstract class PrimaryKeyConstraint {
    abstract name: string;
    abstract namespace: string;
    abstract tableName: string;
    abstract columNames: [string];
  }

  export abstract class ForeignKeyConstraint {
    abstract name: string;
    abstract namespace: string;
    abstract tableName: string; // use table instead?
    abstract columNames: [string];
    abstract referencedTable: string;
    abstract referencedColumnNames: [string];
    abstract onDelete: OnDelete;
    abstract onUpdate: OnDelete;
  }

  type OnDelete = "CASCADE" | "RESTRICT" | "SET NULL" | "SET DEFAULT";

  export abstract class NotNullConstraint {
    abstract name: string;
    abstract namespace: string;
    abstract tableName: string;
    abstract columName: string;
  }

  export abstract class CheckConstraint {
    abstract name: string;
    abstract namespace: string;
    abstract tableName: string;
    abstract columName: string;
    abstract checkCondition: string;
  }

  export type Constraint =
    | UniqueConstraint
    | PrimaryKeyConstraint
    | ForeignKeyConstraint
    | NotNullConstraint
    | CheckConstraint;

  export abstract class Table {
    abstract name: string;
    abstract columns: Array<Column>;
    abstract constraints: Array<Constraint>;
  }

  export abstract class Sequence {
    abstract name: string;
    abstract start?: number;
    abstract maxvalue?: number;
    abstract increment?: number;
    abstract minvalue?: number;
    abstract noMaxvalue?: boolean;
    abstract cache?: boolean;
    abstract cycle?: boolean;
  }

  // export interface RelationalElementFactory {
  //   //makeColumn(name: string, type: string, length?: number, scale?: number, precision?: number): RelationalElements.Column;
  //   makeUniqueConstraint(name: string, namespace: string): RelationalElements.UniqueConstraint;
  //   makePrimaryKeyConstraint(name: string, namespace: string): RelationalElements.PrimaryKeyConstraint;
  //   makeForeignKeyConstraint(name: string, namespace: string): RelationalElements.ForeignKeyConstraint;
  //   makeNotNullConstraint(name: string, namespace: string): RelationalElements.NotNullConstraint;
  //   makeCheckConstraint(name: string, namespace: string): RelationalElements.CheckConstraint;
  // }
}
