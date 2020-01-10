import { SQLTypes } from "../../types";

export module PostgresTypes {
  export class PostgresTypeFactory implements SQLTypes.SQLTypeFactory {
    public createChar(len: number): SQLTypes.CHAR {
      return new CHAR(len);
    }
    public createVarchar(len: number): SQLTypes.VARCHAR {
      return new VARCHAR(len);
    }
    public createClob(): SQLTypes.CLOB {
      return new CLOB();
    }
    public createBinary(precision: number): SQLTypes.BINARY {
      return new BINARY(precision);
    }
    public createVarbinary(precision: number): SQLTypes.VARBINARY {
      return new VARBINARY(precision);
    }
    public createBlob(): SQLTypes.BLOB {
      return new BLOB();
    }
    public createNumeric(precision: number, scale: number): SQLTypes.NUMERIC {
      return new NUMERIC(precision, scale);
    }
    public createDecimal(precision: number, scale: number): SQLTypes.DECIMAL {
      return new DECIMAL(precision, scale);
    }
    public createSmallInt(): SQLTypes.SMALLINT {
      return new SMALLINT();
    }
    public createIntger(): SQLTypes.INTEGER {
      return new INTEGER();
    }
    public createBigInt(): SQLTypes.BIGINT {
      return new BIGINT();
    }
    public createFloat(precision: number): SQLTypes.FLOAT {
      return new FLOAT(precision);
    }
    public createReal(): SQLTypes.REAL {
      return new REAL();
    }
    public createDoublePrecision(): SQLTypes.DOUBLE_PRECISION {
      return new DOUBLE_PRECISION();
    }
    public createDate(): SQLTypes.DATE {
      return new DATE();
    }
    public createTime(): SQLTypes.TIME {
      return new TIME();
    }
    public createTimeStamp(tz: string): SQLTypes.TIMESTAMP {
      return new TIMESTAMP(tz);
    }
    public createInterval(from: string, to: string): SQLTypes.INTERVAL {
      return new INTERVAL(from, to);
    }
    public createBoolean(): SQLTypes.BOOLEAN {
      return new BOOLEAN();
    }
    public createXML(): SQLTypes.XML {
      return new XML();
    }
  }

  export type Type = CHAR | VARCHAR | CLOB | BINARY | VARBINARY | BLOB | NUMERIC | DECIMAL | SMALLINT | INTEGER | BIGINT | FLOAT | REAL | DOUBLE_PRECISION | DATE | TIME |TIMESTAMP | INTERVAL | BOOLEAN | XML;

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
}
