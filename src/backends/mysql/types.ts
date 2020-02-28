import { SQLTypes } from "../../SQLTypes";

//export module MysqlTypes {

export class MysqlTypeFactory implements SQLTypes.SQLTypeFactory {
  public char(len: number): SQLTypes.CHAR {
    return new CHAR(len);
  }
  public varchar(len: number): SQLTypes.VARCHAR {
    return new VARCHAR(len);
  }
  public clob(): SQLTypes.CLOB {
    return new CLOB();
  }
  public binary(precision: number): SQLTypes.BINARY {
    return new BINARY(precision);
  }
  public varbinary(precision: number): SQLTypes.VARBINARY {
    return new VARBINARY(precision);
  }
  public blob(): SQLTypes.BLOB {
    return new BLOB();
  }
  public numeric(precision: number, scale: number): SQLTypes.NUMERIC {
    return new NUMERIC(precision, scale);
  }
  public decimal(precision: number, scale: number): SQLTypes.DECIMAL {
    return new DECIMAL(precision, scale);
  }
  public smallInt(): SQLTypes.SMALLINT {
    return new SMALLINT();
  }
  public integer(): SQLTypes.INTEGER {
    return new INTEGER();
  }
  public bigInt(): SQLTypes.BIGINT {
    return new BIGINT();
  }
  public float(precision: number): SQLTypes.FLOAT {
    return new FLOAT(precision);
  }
  public real(): SQLTypes.REAL {
    return new REAL();
  }
  public doublePrecision(): SQLTypes.DOUBLE_PRECISION {
    return new DOUBLE_PRECISION();
  }
  public date(): SQLTypes.DATE {
    return new DATE();
  }
  public time(): SQLTypes.TIME {
    return new TIME();
  }
  public timeStamp(tz: string): SQLTypes.TIMESTAMP {
    return new TIMESTAMP(tz);
  }
  public interval(from: string, to: string): SQLTypes.INTERVAL {
    return new INTERVAL(from, to);
  }
  public boolean(): SQLTypes.BOOLEAN {
    return new BOOLEAN();
  }
  public xml(): SQLTypes.XML {
    return new XML();
  }
}

export type Type =
  | CHAR
  | VARCHAR
  | CLOB
  | BINARY
  | VARBINARY
  | BLOB
  | NUMERIC
  | DECIMAL
  | SMALLINT
  | INTEGER
  | BIGINT
  | FLOAT
  | REAL
  | DOUBLE_PRECISION
  | DATE
  | TIME
  | TIMESTAMP
  | INTERVAL
  | BOOLEAN
  | XML;

export class CHAR extends SQLTypes.CHAR {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class VARCHAR extends SQLTypes.VARCHAR {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class CLOB extends SQLTypes.CLOB {
  constructor() {
    super();
  }
}

export class BINARY extends SQLTypes.BINARY {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class VARBINARY extends SQLTypes.VARBINARY {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class BLOB extends SQLTypes.BLOB {
  constructor() {
    super();
  }
}

export class NUMERIC extends SQLTypes.NUMERIC {
  precision: number;
  scale: number;
  constructor(p: number, s: number) {
    super();
    this.precision = p;
    this.scale = s;
  }
  public getPrecision() {
    return this.precision;
  }
  public getScale() {
    return this.scale;
  }
}

export class DECIMAL extends SQLTypes.DECIMAL {
  precision: number;
  scale: number;
  constructor(p: number, s: number) {
    super();
    this.precision = p;
    this.scale = s;
  }
  public getPrecision() {
    return this.precision;
  }
  public getScale() {
    return this.scale;
  }
}

export class SMALLINT extends SQLTypes.SMALLINT {
  constructor() {
    super();
  }
}

export class INTEGER extends SQLTypes.INTEGER {
  constructor() {
    super();
  }
}

export class BIGINT extends SQLTypes.BIGINT {
  constructor() {
    super();
  }
}

export class FLOAT extends SQLTypes.FLOAT {
  precision: number;
  constructor(l: number) {
    super();
    this.precision = l;
  }
  getPrecision(): number {
    return this.precision;
  }
}

export class REAL extends SQLTypes.REAL {
  constructor() {
    super();
  }
}

export class DOUBLE_PRECISION extends SQLTypes.DOUBLE_PRECISION {
  constructor() {
    super();
  }
}

export class DATE extends SQLTypes.DATE {
  constructor() {
    super();
  }
}

export class TIME extends SQLTypes.TIME {
  constructor() {
    super();
  }
}

export class TIMESTAMP extends SQLTypes.TIMESTAMP {
  tz: string | null;
  constructor(tz: string | null) {
    super();
    this.tz = tz;
  }

  getWithTimeZone(): boolean {
    if (this.tz !== null) {
      if (this.tz.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export class INTERVAL extends SQLTypes.INTERVAL {
  from: string;
  to: string;
  constructor(from: string, to: string) {
    super();
    this.from = from;
    this.to = to;
  }
  getFrom(): string {
    return this.from;
  }
  getTo(): string {
    return this.to;
  }
}

export class BOOLEAN extends SQLTypes.BOOLEAN {
  constructor() {
    super();
  }
}

export class XML extends SQLTypes.XML {
  constructor() {
    super();
  }
}
//}
