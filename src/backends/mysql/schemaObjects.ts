import {
  CHAR,
  VARCHAR,
  CLOB,
  BINARY,
  VARBINARY,
  BLOB,
  NUMERIC,
  DECIMAL,
  SMALLINT,
  INTEGER,
  BIGINT,
  FLOAT,
  REAL,
  DOUBLE_PRECISION,
  DATE,
  TIME,
  TIMESTAMP,
  INTERVAL,
  BOOLEAN,
  XML,
  Type
} from "./types";

export {
  CHAR,
  VARCHAR,
  CLOB,
  BINARY,
  VARBINARY,
  BLOB,
  NUMERIC,
  DECIMAL,
  SMALLINT,
  INTEGER,
  BIGINT,
  FLOAT,
  REAL,
  DOUBLE_PRECISION,
  DATE,
  TIME,
  TIMESTAMP,
  INTERVAL,
  BOOLEAN,
  XML,
  Type
};

import * as RelationalElements from "../../dataStructures/relationalElements";

export class Column extends RelationalElements.Column {
  name: string;
  type: Type;

  constructor(
    name: string,
    type: Type,
    length?: number,
    scale?: number,
    precision?: number,
    tz?: string,
    from?: string,
    to?: string
  ) {
    super();
    this.name = name;
    this.type = type;
  }
}

export class UniqueConstraint extends RelationalElements.UniqueConstraint {
  name: string;
  table: Table;
  column: Column;
  constructor(name: string, table: Table, column: Column) {
    super();
    this.name = name;
    this.table = table;
    this.column = column;
  }
}

export class PrimaryKeyConstraint extends RelationalElements.PrimaryKeyConstraint {
  name: string;
  table: Table;
  columns: [Column];
  constructor(name: string, table: Table, columns: [Column]) {
    super();
    this.name = name;
    this.table = table;
    this.columns = columns;
  }
}

export class ForeignKeyConstraint extends RelationalElements.ForeignKeyConstraint {
  name: string;
  table: Table;
  columnNames: [string];
  referencedTable: Table;
  referencedColumnNames: [string];
  onDelete: RelationalElements.OnDelete;
  onUpdate: RelationalElements.OnDelete;

  constructor(
    name: string,
    table: Table,
    columnNames: [string],
    referencedTable: Table,
    referencedColumnNames: [string],
    onDelete: RelationalElements.OnDelete,
    onUpdate: RelationalElements.OnDelete
  ) {
    super();
    this.name = name;
    this.table = table;
    this.columnNames = columnNames;
    this.referencedTable = referencedTable;
    this.referencedColumnNames = referencedColumnNames;
    this.onDelete = onDelete;
    this.onUpdate = onUpdate;
  }
}

export class NotNullConstraint extends RelationalElements.NotNullConstraint {
  name: string;
  table: Table;
  column: Column;
  constructor(name: string, table: Table, column: Column) {
    super();
    this.name = name;
    this.table = table;
    this.column = column;
  }
}

export class CheckConstraint extends RelationalElements.CheckConstraint {
  name: string;
  table: Table;
  column: Column;
  checkCondition: string;
  constructor(
    name: string,
    table: Table,
    column: Column,
    checkCondition: string
  ) {
    super();
    this.name = name;
    this.table = table;
    this.column = column;
    this.checkCondition = checkCondition;
  }
}

export class DefaultConstraint extends RelationalElements.DefaultConstraint {
  name: string;
  table: Table;
  column: Column;
  defaultValue: string | number;
  constructor(
    name: string,
    table: Table,
    column: Column,
    defaultValue: string
  ) {
    super();
    this.name = name;
    this.table = table;
    this.column = column;
    this.defaultValue = defaultValue;
  }
}

export type Constraint =
  | UniqueConstraint
  | PrimaryKeyConstraint
  | ForeignKeyConstraint
  | NotNullConstraint
  | CheckConstraint
  | DefaultConstraint;

export class Table extends RelationalElements.Table {
  name: string;
  schema: string;
  columns: Array<Column>;
  primaryKeyConstraint?: PrimaryKeyConstraint;
  uniqueConstraints?: Array<UniqueConstraint>;
  notNullConstraints?: Array<NotNullConstraint>;
  checkConstraints?: Array<CheckConstraint>;
  defaultConstraints?: Array<DefaultConstraint>;
  foreignKeyConstraints?: Array<ForeignKeyConstraint>;
  temp?: boolean;
  unlogged?: boolean;
  ifNotExists?: boolean;
  tablespace?: string;
  indexTablespace?: string;

  constructor(
    name: string,
    schema: string,
    columns: Array<Column>,
    primaryKeyConstraint?: PrimaryKeyConstraint,
    uniqueConstraints?: Array<UniqueConstraint>,
    notNullConstraints?: Array<NotNullConstraint>,
    checkConstraints?: Array<CheckConstraint>,
    defaultConstraints?: Array<DefaultConstraint>,
    foreignKeyConstraint?: Array<ForeignKeyConstraint>,
    temp?: boolean,
    unlogged?: boolean,
    ifNotExists?: boolean,
    tablespace?: string,
    indexTablespace?: string
  ) {
    super();
    this.name = name;
    this.schema = schema;
    this.columns = columns;
    this.primaryKeyConstraint = primaryKeyConstraint;
    this.uniqueConstraints = uniqueConstraints;
    this.notNullConstraints = notNullConstraints;
    this.checkConstraints = checkConstraints;
    this.defaultConstraints = defaultConstraints;
    this.foreignKeyConstraints = foreignKeyConstraint;
    this.temp = temp;
    this.unlogged = unlogged;
    this.ifNotExists = ifNotExists;
    this.tablespace = tablespace;
    this.indexTablespace = indexTablespace;
  }

}

export class TableBuilder {
  name: string = "";
  schema: string = "";
  columns: Array<Column> = [];
  primaryKeyConstraint?: PrimaryKeyConstraint;
  uniqueConstraints?: Array<UniqueConstraint>;
  notNullConstraints?: Array<NotNullConstraint>;
  checkConstraints?: Array<CheckConstraint>;
  defaultConstraints?: Array<DefaultConstraint>;
  foreignKeyConstraints?: Array<ForeignKeyConstraint>;
  temp?: boolean;
  unlogged?: boolean;
  ifNotExists?: boolean;
  tablespace?: string;
  indexTablespace?: string;

  public static create(): TableBuilder {
    return new TableBuilder();
  }

  public setName(name: string): TableBuilder {
    this.name = name;
    return this;
  }

  public setSchema(schema: string): TableBuilder {
    this.schema = schema;
    return this;
  }

  public setColumns(columns: Array<Column>): TableBuilder {
    this.columns = columns;
    return this;
  }

  public setPrimaryKey(pk: PrimaryKeyConstraint): TableBuilder {
    this.primaryKeyConstraint = pk;
    return this;
  }

  public addUniqueConstraint(nn: UniqueConstraint): TableBuilder {
    if (this.uniqueConstraints) {
      this.uniqueConstraints.push(nn);
    }
    return this;
  }

  public addNotNullConstraint(nn: NotNullConstraint): TableBuilder {
    if (this.notNullConstraints) {
      this.notNullConstraints.push(nn);
    }
    return this;
  }

  public addCheckConstraint(cc: CheckConstraint): TableBuilder {
    if (this.checkConstraints) {
      this.checkConstraints.push(cc);
    }
    return this;
  }

  public addDefaultConstraint(dc: DefaultConstraint): TableBuilder {
    if (this.defaultConstraints) {
      this.defaultConstraints.push(dc);
    }
    return this;
  }

  public addNotForeignkeyConstraint(fk: ForeignKeyConstraint): TableBuilder {
    if (this.foreignKeyConstraints) {
      this.foreignKeyConstraints.push(fk);
    }
    return this;
  }

  // public setConstraints(constraints: Array<Constraint>): TableBuilder {
  //   this.constraints = constraints;
  //   return this;
  // }

  public setTemp(temp: boolean): TableBuilder {
    this.temp = temp;
    return this;
  }
  public setUnlogged(unlogged: boolean): TableBuilder {
    this.unlogged = unlogged;
    return this;
  }
  public setIfNotExists(ifNotExists: boolean): TableBuilder {
    this.ifNotExists = ifNotExists;
    return this;
  }
  public setTablespace(tablespace: string): TableBuilder {
    this.tablespace = tablespace;
    return this;
  }
  public setIndexTablespace(indexTablespace: string): TableBuilder {
    this.indexTablespace = indexTablespace;
    return this;
  }

  public build(): Table {
    return new Table(
      this.name,
      this.schema,
      this.columns,
      this.primaryKeyConstraint,
      this.uniqueConstraints,
      this.notNullConstraints,
      this.checkConstraints,
      this.defaultConstraints,
      this.foreignKeyConstraints,
      this.temp,
      this.unlogged,
      this.ifNotExists,
      this.tablespace,
      this.indexTablespace
    );
  }
}

export class View extends RelationalElements.View {
  name: string;
  schema: string;
  columns?: Array<string>;
  query: string;
  checkOption?: RelationalElements.ViewCheckOption;
  temp?: boolean;

  constructor(
    name: string,
    schema: string,
    query: string,
    columns?: Array<string>,
    checkOption?: RelationalElements.ViewCheckOption,
    temp?: boolean
  ) {
    super();
    this.name = name;
    this.schema = schema;
    this.query = query;
    this.columns = columns;
    this.checkOption = checkOption;
    this.temp = temp;
  }
}

export class ViewBuilder {
  name: string = "";
  schema: string = "";
  columns?: Array<string>;
  query: string = "";
  checkOption?: RelationalElements.ViewCheckOption;
  temp?: boolean;

  public static create(): ViewBuilder {
    return new ViewBuilder();
  }

  public setName(name: string): ViewBuilder {
    this.name = name;
    return this;
  }

  public setSchema(schema: string): ViewBuilder {
    this.schema = schema;
    return this;
  }

  public setTemp(temp: boolean): ViewBuilder {
    this.temp = temp;
    return this;
  }

  public setColumns(columns: Array<string>): ViewBuilder {
    this.columns = columns;
    return this;
  }

  public setQuery(query: string): ViewBuilder {
    this.query = query;
    return this;
  }

  public setCheckOption(
    checkOption: RelationalElements.ViewCheckOption
  ): ViewBuilder {
    this.checkOption = checkOption;
    return this;
  }

  public build(): View {
    return new View(
      this.name,
      this.schema,
      this.query,
      this.columns,
      this.checkOption,
      this.temp
    );
  }
}

export class Sequence extends RelationalElements.Sequence {
  name: string;
  schema: string;
  temp?: boolean;
  increment?: number;
  minvalue?: number;
  maxvalue?: number;
  noMaxvalue?: boolean;
  start?: number;
  cache?: boolean;
  cycle?: boolean;
  ownedBy?: string;

  constructor(
    name: string,
    schema: string,
    temp?: boolean,
    increment?: number,
    minvalue?: number,
    maxvalue?: number,
    noMaxvalue?: boolean,
    start?: number,
    cache?: boolean,
    cycle?: boolean,
    ownedBy?: string
  ) {
    super();
    this.name = name;
    this.schema = schema;
    this.temp = temp;
    this.increment = increment;
    this.minvalue = minvalue;
    this.maxvalue = maxvalue;
    this.noMaxvalue = noMaxvalue;
    this.start = start;
    this.cache = cache;
    this.cycle = cycle;
    this.ownedBy = ownedBy;
  }
}

export class SequenceBuilder {
  name: string = "";
  schema: string = "";
  temp?: boolean;
  increment?: number;
  minvalue?: number;
  maxvalue?: number;
  noMaxvalue?: boolean;
  start?: number;
  cache?: boolean;
  cycle?: boolean;
  ownedBy?: string;

  public static create(): SequenceBuilder {
    return new SequenceBuilder();
  }

  public setName(name: string): SequenceBuilder {
    this.name = name;
    return this;
  }

  public setSchema(schema: string): SequenceBuilder {
    this.schema = schema;
    return this;
  }

  public setTemp(temp: boolean): SequenceBuilder {
    this.temp = temp;
    return this;
  }

  public setIncrement(increment: number): SequenceBuilder {
    this.increment = increment;
    return this;
  }

  public setMinvalue(minvalue: number): SequenceBuilder {
    this.minvalue = minvalue;
    return this;
  }

  public setMaxvalue(maxvalue: number): SequenceBuilder {
    this.maxvalue = maxvalue;
    return this;
  }

  public setNoMaxvalue(noMaxvalue: boolean): SequenceBuilder {
    this.noMaxvalue = noMaxvalue;
    return this;
  }

  public setStart(start: number): SequenceBuilder {
    this.start = start;
    return this;
  }

  public setcache(cache: boolean): SequenceBuilder {
    this.cache = cache;
    return this;
  }

  public setCycle(cycle: boolean): SequenceBuilder {
    this.cycle = cycle;
    return this;
  }

  public setOwnedby(ownedBy: string): SequenceBuilder {
    this.ownedBy = ownedBy;
    return this;
  }

  public build(): Sequence {
    return new Sequence(
      this.name,
      this.schema,
      this.temp,
      this.increment,
      this.minvalue,
      this.maxvalue,
      this.noMaxvalue,
      this.start,
      this.cache,
      this.cycle,
      this.ownedBy
    );
  }
}

