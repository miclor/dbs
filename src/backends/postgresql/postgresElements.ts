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
  Type,
  PostgresTypeFactory
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
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class PrimaryKeyConstraint extends RelationalElements.PrimaryKeyConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class ForeignKeyConstraint extends RelationalElements.ForeignKeyConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class NotNullConstraint extends RelationalElements.NotNullConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class CheckConstraint extends RelationalElements.CheckConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export type Constraint =
  | UniqueConstraint
  | PrimaryKeyConstraint
  | ForeignKeyConstraint
  | NotNullConstraint
  | CheckConstraint;

export class Table extends RelationalElements.Table {
  name: string;
  columns: Array<Column>;
  constraints: Array<Constraint>;
  constructor(
    name: string,
    columns: Array<Column>,
    constraints: Array<Constraint>
  ) {
    super();
    this.name = name;
    this.columns = columns;
    this.constraints = constraints;
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
//     namespace: string
//   ): RelationalElements.UniqueConstraint {
//     return new UniqueConstraint(name, namespace);
//   }
//   makePrimaryKeyConstraint(
//     name: string,
//     namespace: string
//   ): RelationalElements.PrimaryKeyConstraint {
//     return new PrimaryKeyConstraint(name, namespace);
//   }
//   makeForeignKeyConstraint(
//     name: string,
//     namespace: string
//   ): RelationalElements.ForeignKeyConstraint {
//     return new ForeignKeyConstraint(name, namespace);
//   }
//   makeNotNullConstraint(
//     name: string,
//     namespace: string
//   ): RelationalElements.NotNullConstraint {
//     return new NotNullConstraint(name, namespace);
//   }
//   makeCheckConstraint(
//     name: string,
//     namespace: string
//   ): RelationalElements.CheckConstraint {
//     return new CheckConstraint(name, namespace);
//   }
// }
// //}
