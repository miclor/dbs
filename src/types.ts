//https://en.wikibooks.org/wiki/Structured_Query_Language/Data_Types

// generic domains
export module Domains {
  abstract class GenericDomain {}
  abstract class StringType extends GenericDomain {}
  abstract class IntegerType extends GenericDomain {}
  abstract class FloatType extends GenericDomain {}
}

export module SQLTypes {
  export interface TypeFactory {
    createChar(len: number): CHAR;
    createVarchar(len: number): VARCHAR;
    createClob(): CLOB;
    createBinary(precision: number): BINARY;
    createVarbinary(precision: number): VARBINARY;
    createBlob(): BLOB;
    createNumeric(precision: number, scale: number): NUMERIC;
    createDecimal(precision: number, scale: number): DECIMAL;
    createSmallInt(): SMALLINT;
    createIntger(): INTEGER;
    createBigInt(): BIGINT;
    createFloat(precision: number): FLOAT;
    createReal(): REAL;
    createDoublePrecision(): DOUBLE_PRECISION;
    createDate(): DATE;
    createTime(): TIME;
    createTimeStamp(tz: string): TIMESTAMP;
    createInterval(from: string, to: string): INTERVAL;
    createBoolean(): BOOLEAN;
    createXML(): XML;
  }

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
