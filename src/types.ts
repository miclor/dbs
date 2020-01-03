//https://en.wikibooks.org/wiki/Structured_Query_Language/Data_Types
export module SQLTypes {
  export interface TypeFactory {
    createChar(len: number): CHAR;
    createVarchar(len: number): VARCHAR;
    createClob(): CLOB;
    createBinary(precision: number): BINARY;
    createVarBinary(precision: number): VARBINARY;
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
    createTimeStamp(precision: number): TIMESTAMP;
    createInterval(from: string, to: string): INTERVAL;
    createBoolean(): BOOLEAN;
    createXML(): XML;
  }

  export interface CHAR {
    getLength(): number;
  }

  export interface VARCHAR {
    getLength(): number;
  }

  export interface CLOB {}

  export interface BINARY {
    getLength(): number;
  }

  export interface VARBINARY {
    getLength(): number;
  }
  export interface BLOB {}

  export interface NUMERIC {
    getPrecision(): number;
    getScale(): number;
  }

  export interface DECIMAL {
    getPrecision(): number;
    getScale(): number;
  }

  export interface SMALLINT {}

  export interface BIGINT {
    getLength(): number;
  }

  export interface INTEGER {}

  export interface FLOAT {
    getPrecision(): number;
  }

  export interface REAL {}

  export interface DOUBLE_PRECISION {}

  export interface DATE {}

  export interface TIME {}

  export interface TIMESTAMP {
    getWithTimeZone(): boolean;
  }

  export interface INTERVAL {
    getFrom(): string;
    getTo(): string;
  }

  export interface BOOLEAN {}

  export interface XML {}
}
