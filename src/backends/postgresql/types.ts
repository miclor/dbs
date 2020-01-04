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

export class PostgresCHAR implements SQLTypes.CHAR {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresVARCHAR implements SQLTypes.VARCHAR {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresCLOB implements SQLTypes.CLOB {
  constructor() {}
}

export class PostgresBINARY implements SQLTypes.BINARY {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresVARBINARY implements SQLTypes.VARBINARY {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresBLOB implements SQLTypes.BLOB {
  constructor() {}
}

export class PostgresNUMERIC implements SQLTypes.NUMERIC {
  precision: number;
  scale: number;
  constructor(p: number, s: number) {
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

export class PostgresDECIMAL implements SQLTypes.DECIMAL {
  precision: number;
  scale: number;
  constructor(p: number, s: number) {
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

export class PostgresSMALLINT implements SQLTypes.SMALLINT {
  constructor() {}
}

export class PostgresINTEGER implements SQLTypes.INTEGER {
  constructor() {}
}

export class PostgresBIGINT implements SQLTypes.BIGINT {
  constructor() {}
}

export class PostgresFLOAT implements SQLTypes.FLOAT {
  precision: number;
  constructor(l: number) {
    this.precision = l;
  }
  getPrecision(): number {
    return this.precision;
  }
}

export class PostgresREAL implements SQLTypes.REAL {
  constructor() {}
}

export class PostgresDOUBLE_PRECISION implements SQLTypes.DOUBLE_PRECISION {
  constructor() {}
}

export class PostgresDATE implements SQLTypes.DATE {
  constructor() {}
}

export class PostgresTIME implements SQLTypes.TIME {
  constructor() {}
}

export class PostgresTIMESTAMP implements SQLTypes.TIMESTAMP {
  tz: string | null;
  constructor(tz: string | null) {
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

export class PostgresINTERVAL implements SQLTypes.INTERVAL {
  from: string;
  to: string;
  constructor(from: string, to: string) {
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

export class PostgresBOOLEAN implements SQLTypes.BOOLEAN {
  constructor() {}
}

export class PostgresXML implements SQLTypes.XML {
  constructor() {}
}
