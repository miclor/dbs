import {
  PostgresTypeFactory,
  PostgresCHAR,
  PostgresVARCHAR,
  PostgresCLOB,
  PostgresBINARY,
  PostgresVARBINARY,
  PostgresBLOB,
  PostgresNUMERIC,
  PostgresDECIMAL,
  PostgresSMALLINT,
  PostgresINTEGER,
  PostgresBIGINT,
  PostgresFLOAT,
  PostgresREAL,
  PostgresDOUBLE_PRECISION,
  PostgresDATE,
  PostgresTIME,
  PostgresTIMESTAMP,
  PostgresINTERVAL,
  PostgresBOOLEAN,
  PostgresXML
} from "../src/backends/postgresql/types";

it("Create PostgreSQL char type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_char = pgf.createChar(len);
  expect(pg_char instanceof PostgresCHAR).toBe(true);
});

it("Create PostgreSQL varchar type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createVarchar(len);
  expect(pg_text instanceof PostgresVARCHAR).toBe(true);
});

it("Create PostgreSQL clob type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createClob();
  expect(pg_text instanceof PostgresCLOB).toBe(true);
});

it("Create PostgreSQL binary type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_char = pgf.createBinary(len);
  expect(pg_char instanceof PostgresBINARY).toBe(true);
});

it("Create PostgreSQL varbinary type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createVarbinary(len);
  expect(pg_text instanceof PostgresVARBINARY).toBe(true);
});

it("Create PostgreSQL blob type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createBlob();
  expect(pg_text instanceof PostgresBLOB).toBe(true);
});

it("Create PostgreSQL numeric type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createNumeric(1, 0);
  expect(pg_text instanceof PostgresNUMERIC).toBe(true);
});

it("Create PostgreSQL decimal type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createDecimal(1, 2);
  expect(pg_text instanceof PostgresDECIMAL).toBe(true);
});

it("Create PostgreSQL smallint type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createSmallInt();
  expect(pg_text instanceof PostgresSMALLINT).toBe(true);
});

it("Create PostgreSQL integer type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createIntger();
  expect(pg_text instanceof PostgresINTEGER).toBe(true);
});

it("Create PostgreSQL bigint type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createBigInt();
  expect(pg_text instanceof PostgresBIGINT).toBe(true);
});

it("Create PostgreSQL float type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createFloat(32);
  expect(pg_text instanceof PostgresFLOAT).toBe(true);
});

it("Create PostgreSQL real type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createReal();
  expect(pg_text instanceof PostgresREAL).toBe(true);
});

it("Create PostgreSQL double_precision type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createDoublePrecision();
  expect(pg_text instanceof PostgresDOUBLE_PRECISION).toBe(true);
});

it("Create PostgreSQL date type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createDate();
  expect(pg_text instanceof PostgresDATE).toBe(true);
});

it("Create PostgreSQL time type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createTime();
  expect(pg_text instanceof PostgresTIME).toBe(true);
});

it("Create PostgreSQL timestamp type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createTimeStamp("");
  expect(pg_text instanceof PostgresTIMESTAMP).toBe(true);
});

it("Create PostgreSQL interval day type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createInterval("month", "day");
  expect(pg_text instanceof PostgresINTERVAL).toBe(true);
});

it("Create PostgreSQL interval second type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createInterval("day", "second");
  expect(pg_text instanceof PostgresINTERVAL).toBe(true);
});

it("Create PostgreSQL boolean type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createBoolean();
  expect(pg_text instanceof PostgresBOOLEAN).toBe(true);
});

it("Create PostgreSQL xml type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createXML();
  expect(pg_text instanceof PostgresXML).toBe(true);
});
