import { SQLTypes } from "../../types";
import { threadId } from "worker_threads";

export class PostgresTypeFactory implements SQLTypes.TypeFactory {
  public createChar(len: number): SQLTypes.CHAR {
    return new PostgresCHAR(len);
  }
  public createVarchar(len: number): SQLTypes.VARCHAR {
    return new PostgresVARCHAR(len);
  }
  public createClob(): SQLTypes.CLOB {
    return new PostgresCLOB();
  }
  public createBinary(precision: number): SQLTypes.BINARY {
    return new PostgresBINARY(precision);
  }
  public createVarbinary(precision: number): SQLTypes.VARBINARY {
    return new PostgresVARBINARY(precision);
  }
  public createBlob(): SQLTypes.BLOB {
    return new PostgresBLOB();
  }
  public createNumeric(precision: number, scale: number): SQLTypes.NUMERIC {
    return new PostgresNUMERIC(precision, scale);
  }
  public createDecimal(precision: number, scale: number): SQLTypes.DECIMAL {
    return new PostgresDECIMAL(precision, scale);
  }
  public createSmallInt(): SQLTypes.SMALLINT {
    return new PostgresSMALLINT();
  }
  public createIntger(): SQLTypes.INTEGER {
    return new PostgresINTEGER();
  }
  public createBigInt(): SQLTypes.BIGINT {
    return new PostgresBIGINT();
  }
  public createFloat(precision: number): SQLTypes.FLOAT {
    return new PostgresFLOAT(precision);
  }
  public createReal(): SQLTypes.REAL {
    return new PostgresREAL();
  }
  public createDoublePrecision(): SQLTypes.DOUBLE_PRECISION {
    return new PostgresDOUBLE_PRECISION();
  }
  public createDate(): SQLTypes.DATE {
    return new PostgresDATE();
  }
  public createTime(): SQLTypes.TIME {
    return new PostgresTIME();
  }
  public createTimeStamp(tz: string): SQLTypes.TIMESTAMP {
    return new PostgresTIMESTAMP(tz);
  }
  public createInterval(from: string, to: string): SQLTypes.INTERVAL {
    return new PostgresINTERVAL(from, to);
  }
  public createBoolean(): SQLTypes.BOOLEAN {
    return new PostgresBOOLEAN();
  }
  public createXML(): SQLTypes.XML {
    return new PostgresXML();
  }
}

export class PostgresCHAR extends SQLTypes.CHAR {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresVARCHAR extends SQLTypes.VARCHAR {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresCLOB extends SQLTypes.CLOB {
  constructor() {
    super();
  }
}

export class PostgresBINARY extends SQLTypes.BINARY {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresVARBINARY extends SQLTypes.VARBINARY {
  length: number;
  constructor(s: number) {
    super();
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresBLOB extends SQLTypes.BLOB {
  constructor() {
    super();
  }
}

export class PostgresNUMERIC extends SQLTypes.NUMERIC {
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

export class PostgresDECIMAL extends SQLTypes.DECIMAL {
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

export class PostgresSMALLINT extends SQLTypes.SMALLINT {
  constructor() {
    super();
  }
}

export class PostgresINTEGER extends SQLTypes.INTEGER {
  constructor() {
    super();
  }
}

export class PostgresBIGINT extends SQLTypes.BIGINT {
  constructor() {
    super();
  }
}

export class PostgresFLOAT extends SQLTypes.FLOAT {
  precision: number;
  constructor(l: number) {
    super();
    this.precision = l;
  }
  getPrecision(): number {
    return this.precision;
  }
}

export class PostgresREAL extends SQLTypes.REAL {
  constructor() {
    super();
  }
}

export class PostgresDOUBLE_PRECISION extends SQLTypes.DOUBLE_PRECISION {
  constructor() {
    super();
  }
}

export class PostgresDATE extends SQLTypes.DATE {
  constructor() {
    super();
  }
}

export class PostgresTIME extends SQLTypes.TIME {
  constructor() {
    super();
  }
}

export class PostgresTIMESTAMP extends SQLTypes.TIMESTAMP {
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

export class PostgresINTERVAL extends SQLTypes.INTERVAL {
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

export class PostgresBOOLEAN extends SQLTypes.BOOLEAN {
  constructor() {
    super();
  }
}

export class PostgresXML extends SQLTypes.XML {
  constructor() {
    super();
  }
}
