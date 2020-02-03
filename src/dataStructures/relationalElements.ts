import { Domains, SQLTypes } from "../SQLTypes";

export module RelationalElements {
  export abstract class Column {
    abstract name: string;
    abstract type: SQLTypes.SQLType;

  }

  export abstract class UniqueConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
  }

  export abstract class PrimaryKeyConstraint {
    abstract name: string;
    abstract table: Table;
    abstract columns: [Column];
  }

  export abstract class ForeignKeyConstraint {
    abstract name: string;
    abstract table: Table;
    abstract columns: [Column];
    abstract referencedTable: Table;
    abstract referencedColumnNames: [Column];
    abstract onDelete: OnDelete;
    abstract onUpdate: OnDelete;
  }

  export type OnDelete = "CASCADE" | "RESTRICT" | "SET NULL" | "SET DEFAULT";

  export abstract class NotNullConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
  }

  export abstract class CheckConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
    abstract checkCondition: string;
  }

  export abstract class DefaultConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
    abstract defaultValue: SQLTypes.SQLType;
  }

  export type Constraint =
    | UniqueConstraint
    | PrimaryKeyConstraint
    | ForeignKeyConstraint
    | NotNullConstraint
    | CheckConstraint
    | DefaultConstraint;

  export abstract class Table {
    abstract name: string;
    abstract columns: Array<Column>;
    abstract constraints: Array<Constraint>;

    abstract addPrimaryKeyConstaint(pk: PrimaryKeyConstraint): void;
    abstract getPrimaryKeyConstaint(): PrimaryKeyConstraint;
    abstract removePrimaryKeyConstraint(pk: PrimaryKeyConstraint): void;

    abstract addUniqueConstraint(uk: UniqueConstraint): void;
    abstract getUniqueConstraint(column: Column): UniqueConstraint;
    abstract removeUniqueConstrtaint(uk: UniqueConstraint): void;

    abstract addNotNullConstraint(nn: NotNullConstraint): void;
    abstract getNotNullConstraint(column: Column): NotNullConstraint;
    abstract removeNotNullConstraint(nn: NotNullConstraint): void;

    abstract addCheckConstraint(cc: CheckConstraint): void;
    abstract getCheckConstraint(column: Column): CheckConstraint;
    abstract removeCheckConstraint(cc: CheckConstraint): void;

    abstract addDefaultConstraint(dc: DefaultConstraint): void;
    abstract getDefaultConstraint(column: Column): DefaultConstraint;
    abstract removeDefaultConstraint(dc: DefaultConstraint): void;

    abstract addForeignKeyConstraint(fk: ForeignKeyConstraint): void;
    abstract getForeignKeyConstraint(columns: [Column]): ForeignKeyConstraint;
    abstract removeForeignKeyConstraint(fk: ForeignKeyConstraint): void;

    abstract addColumn(column: Column): void;
    abstract getColumn(name: string): Column;
    abstract removeColumn(column: Column): void;
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

  export abstract class View {
    abstract name: string;
    abstract columns?: Array<string>;
    abstract query: string;
    abstract checkOption?: ViewCheckOption;
  }

  export type ViewCheckOption = "LOCAL" | "CASCADE";

  // export interface RelationalElementFactory {
  //   //makeColumn(name: string, type: string, length?: number, scale?: number, precision?: number): RelationalElements.Column;
  //   makeUniqueConstraint(name: string, schema: string): RelationalElements.UniqueConstraint;
  //   makePrimaryKeyConstraint(name: string, schema: string): RelationalElements.PrimaryKeyConstraint;
  //   makeForeignKeyConstraint(name: string, schema: string): RelationalElements.ForeignKeyConstraint;
  //   makeNotNullConstraint(name: string, schema: string): RelationalElements.NotNullConstraint;
  //   makeCheckConstraint(name: string, schema: string): RelationalElements.CheckConstraint;
  // }
}
