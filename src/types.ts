//https://en.wikibooks.org/wiki/Structured_Query_Language/Data_Types

// generic domains
export module Domains {
  export abstract class GenericDomain {}
  export abstract class StringDomain extends GenericDomain {}
  export abstract class IntegerDomain extends GenericDomain {}
  export abstract class FloatDomain extends GenericDomain {}
}

export module SQLTypes {
  export interface SQLTypeFactory {
    char(len: number): CHAR;
    varchar(len: number): VARCHAR;
    clob(): CLOB;
    binary(precision: number): BINARY;
    varbinary(precision: number): VARBINARY;
    blob(): BLOB;
    numeric(precision: number, scale: number): NUMERIC;
    decimal(precision: number, scale: number): DECIMAL;
    smallInt(): SMALLINT;
    integer(): INTEGER;
    bigInt(): BIGINT;
    float(precision: number): FLOAT;
    real(): REAL;
    doublePrecision(): DOUBLE_PRECISION;
    date(): DATE;
    time(): TIME;
    timeStamp(tz: string): TIMESTAMP;
    interval(from: string, to: string): INTERVAL;
    boolean(): BOOLEAN;
    xml(): XML;
  }

  export type SQLType = CHAR | VARCHAR | CLOB | BINARY | VARBINARY | BLOB | NUMERIC | DECIMAL | SMALLINT | INTEGER | BIGINT | FLOAT | REAL | DOUBLE_PRECISION | DATE | TIME |TIMESTAMP | INTERVAL | BOOLEAN | XML;

  export abstract class CHAR {
    abstract length: number;
    abstract getLength(): number;
  }

  export abstract class VARCHAR {
    abstract length: number;
    abstract getLength(): number;
  }

  export abstract class CLOB {}

  export abstract class BINARY {
    abstract length: number;
    abstract getLength(): number;
  }

  export abstract class VARBINARY {
    abstract length: number;
    abstract getLength(): number;
  }
  export abstract class BLOB {}

  export abstract class NUMERIC {
    abstract precision: number;
    abstract scale: number;
    abstract getPrecision(): number;
    abstract getScale(): number;
  }

  export abstract class DECIMAL {
    abstract precision: number;
    abstract scale: number;
    abstract getPrecision(): number;
    abstract getScale(): number;
  }

  export abstract class SMALLINT {}

  export abstract class BIGINT {}

  export abstract class INTEGER {}

  export abstract class FLOAT {
    abstract precision: number;
    abstract getPrecision(): number;
  }

  export abstract class REAL {}

  export abstract class DOUBLE_PRECISION {}

  export abstract class DATE {}

  export abstract class TIME {}

  export abstract class TIMESTAMP {
    abstract tz: string | null;
    abstract getWithTimeZone(): boolean;
  }

  export abstract class INTERVAL {
    abstract from: string;
    abstract to: string;
    abstract getFrom(): string;
    abstract getTo(): string;
  }

  export abstract class BOOLEAN {}

  export abstract class XML {}
}
