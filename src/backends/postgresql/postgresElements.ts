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
} from "./postgresTypes";

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

import { RelationalElements } from "../../dataStructures/relationalElements";
import { DEFAULT_MIN_VERSION } from "tls";
import { SQLTypes } from "../../SQLTypes";
import { threadId } from "worker_threads";

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
  columns: [Column];
  referencedTable: Table;
  referencedColumnNames: [Column];
  onDelete: RelationalElements.OnDelete;
  onUpdate: RelationalElements.OnDelete;

  constructor(
    name: string,
    table: Table,
    columns: [Column],
    referencedTable: Table,
    referencedColumns: [Column],
    onDelete: RelationalElements.OnDelete,
    onUpdate: RelationalElements.OnDelete
  ) {
    super();
    this.name = name;
    this.table = table;
    this.columns = columns;
    this.referencedTable = referencedTable;
    this.referencedColumnNames = referencedColumns;
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
  schema?:string;
  columns: Array<Column>;
  primaryKeyConstraint?: PrimaryKeyConstraint,
    uniqueConstraints?: Array<UniqueConstraint>,
    notNullConstraints?: Array<NotNullConstraint>,
    checkConstraints?: Array<CheckConstraint>,
    defaultConstraints?: Array<DefaultConstraint>,
    foreignKeyConstraint?: Array<ForeignKeyConstraint>,
    
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
    this.schema = schema,
    this.columns = columns;
    this.primaryKeyConstraint = primaryKeyConstraint;
    this.uniqueConstraints = uniqueConstraints;
    this.notNullConstraints = notNullConstraints;
    this.checkConstraints = checkConstraints;
    this.defaultConstraints = defaultConstraints;
    this.foreignKeyConstraint = foreignKeyConstraint;
    this.temp = temp;
    this.unlogged = unlogged;
    this.tablespace = tablespace;
    this.indexTablespace = indexTablespace;
  }
}

export class TableBuilder {
  name: string = "";
  schema?: string;
  columns: Array<Column> = [];
  constraints: Array<Constraint> = [];
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
  public setConstraints(constraints: Array<Constraint>): TableBuilder {
    this.constraints = constraints;
    return this;
  }
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
      this.columns,
      this.constraints,
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
  columns?: Array<string>;
  query: string;
  checkOption?: RelationalElements.ViewCheckOption;
  temp?: boolean;

  constructor(
    name: string,
    query: string,
    columns?: Array<string>,
    checkOption?: RelationalElements.ViewCheckOption,
    temp?: boolean
  ) {
    super();
    this.name = name;
    this.query = query;
    this.columns = columns;
    this.checkOption = checkOption;
    this.temp = temp;
  }
}

export class ViewBuilder {
  name: string = "";
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
      this.query,
      this.columns,
      this.checkOption,
      this.temp
    );
  }
}

export class Sequence extends RelationalElements.Sequence {
  name: string;
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

// export class PostgresElementFactory
//   implements RelationalElements.RelationalElementFactory {
//   table(
//     name: string,
//     columns: Array<RelationalElements.Column>,
//     constraints: Array<RelationalElements.Constraint>
//   ): RelationalElements.Table {
//     return new Table(name, columns, constraints);
//   }

//   column(
//     name: string,
//     type: string,
//     length?: number,
//     scale?: number,
//     precision?: number,
//     tz?: string,
//     from?: string,
//     to?: string
//   ): RelationalElements.Column {
//     switch (type) {
//       case "CHAR":
//         if (length) {
//           return new Column(name, new CHAR(length));
//         }
//         break;
//       case "VARCHAR":
//         if (length) {
//           return new Column(name, new VARCHAR(length));
//         }
//         break;
//       case "CLOB":
//         return new Column(name, new BLOB());
//       case "BINARY":
//         if (length) {
//           return new Column(name, new BINARY(length));
//         }
//         break;
//       case "VARBINARY":
//         if (length) {
//           return new Column(name, new VARBINARY(length));
//         }
//         break;
//       case "BLOB":
//         return new Column(name, new BLOB());
//       case "NUMERIC":
//         if (precision && scale) {
//           return new Column(name, new NUMERIC(precision, scale));
//         }
//         break;
//       case "SMALLINT":
//         return new Column(name, new SMALLINT());
//       case "INTEGER":
//         return new Column(name, new INTEGER());
//       case "BIGINT":
//         return new Column(name, new BIGINT());
//       case "FLOAT":
//         if (precision) {
//           return new Column(name, new FLOAT(precision));
//         }
//         break;
//       case "REAL":
//         return new Column(name, new REAL());

//       case "DOUBLE_PRECISION":
//         return new Column(name, new DOUBLE_PRECISION());

//       case "DATE":
//         if (precision && scale) {
//           return new Column(name, new DATE());
//         }
//         break;
//       case "TIME":
//         return new Column(name, new TIME());
//       case "TIMESTAMP":
//         if (tz) {
//           return new Column(name, new TIMESTAMP(tz));
//         }
//         break;
//       case "INTERVAL":
//         if (from && to) {
//           return new Column(name, new INTERVAL(from, to));
//         }
//         break;
//       case "BOOLEAN":
//         return new Column(name, new BOOLEAN());
//       case "XML":
//         return new Column(name, new XML());

//       default:
//         console.log("No such day exists!");
//         break;
//     }
//     throw new TypeError();
//   }

//   makeUniqueConstraint(
//     name: string,
//     schema: string
//   ): RelationalElements.UniqueConstraint {
//     return new UniqueConstraint(name, schema);
//   }
//   makePrimaryKeyConstraint(
//     name: string,
//     schema: string
//   ): RelationalElements.PrimaryKeyConstraint {
//     return new PrimaryKeyConstraint(name, schema);
//   }
//   makeForeignKeyConstraint(
//     name: string,
//     schema: string
//   ): RelationalElements.ForeignKeyConstraint {
//     return new ForeignKeyConstraint(name, schema);
//   }
//   makeNotNullConstraint(
//     name: string,
//     schema: string
//   ): RelationalElements.NotNullConstraint {
//     return new NotNullConstraint(name, schema);
//   }
//   makeCheckConstraint(
//     name: string,
//     schema: string
//   ): RelationalElements.CheckConstraint {
//     return new CheckConstraint(name, schema);
//   }
// }
// //}
