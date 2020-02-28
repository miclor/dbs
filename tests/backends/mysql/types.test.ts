import { CHAR, VARCHAR, CLOB, BINARY, VARBINARY, BLOB, NUMERIC, DECIMAL, SMALLINT, INTEGER, BIGINT, FLOAT, REAL, DOUBLE_PRECISION, DATE, TIME, TIMESTAMP, INTERVAL, BOOLEAN, XML } from "../../../src/backends/mysql/types";

it("Create PostgreSQL char type", () => {
  let len: number = 20;
  let pg_type = new CHAR(len);
  expect(pg_type instanceof CHAR).toBe(true);
});

it("Create PostgreSQL varchar type", () => {
  let len: number = 20;
  let pg_type = new VARCHAR(len);
  expect(pg_type instanceof VARCHAR).toBe(true);
});

it("Create PostgreSQL clob type", () => {
  let pg_type = new CLOB();
  expect(pg_type instanceof CLOB).toBe(true);
});

it("Create PostgreSQL binary type", () => {
  let len: number = 20;
  let pg_char = new BINARY(len);
  expect(pg_char instanceof BINARY).toBe(true);
});

it("Create PostgreSQL varbinary type", () => {
  let len: number = 20;
  let pg_type = new VARBINARY(len);
  expect(pg_type instanceof VARBINARY).toBe(true);
});

it("Create PostgreSQL blob type", () => {
  let pg_type = new BLOB();
  expect(pg_type instanceof BLOB).toBe(true);
});

it("Create PostgreSQL numeric type", () => {
  let pg_type = new NUMERIC(1, 0);
  expect(pg_type instanceof NUMERIC).toBe(true);
});

it("Create PostgreSQL decimal type", () => {
  let pg_type = new DECIMAL(1, 2);
  expect(pg_type instanceof DECIMAL).toBe(true);
});

it("Create PostgreSQL smallint type", () => {
  let pg_type = new SMALLINT();
  expect(pg_type instanceof SMALLINT).toBe(true);
});

it("Create PostgreSQL integer type", () => {
  let pg_type = new INTEGER();
  expect(pg_type instanceof INTEGER).toBe(true);
});

it("Create PostgreSQL bigint type", () => {
  let pg_type = new BIGINT();
  expect(pg_type instanceof BIGINT).toBe(true);
});

it("Create PostgreSQL float type", () => {
  let pg_type = new FLOAT(32);
  expect(pg_type instanceof FLOAT).toBe(true);
});

it("Create PostgreSQL real type", () => {
  let pg_type = new REAL();
  expect(pg_type instanceof REAL).toBe(true);
});

it("Create PostgreSQL double_precision type", () => {
  let pg_type = new DOUBLE_PRECISION();
  expect(pg_type instanceof DOUBLE_PRECISION).toBe(true);
});

it("Create PostgreSQL date type", () => {
  let pg_type = new DATE();
  expect(pg_type instanceof DATE).toBe(true);
});

it("Create PostgreSQL time type", () => {
  let pg_type = new TIME();
  expect(pg_type instanceof TIME).toBe(true);
});

it("Create PostgreSQL timestamp type", () => {
  let pg_type = new TIMESTAMP("");
  expect(pg_type instanceof TIMESTAMP).toBe(true);
});

it("Create PostgreSQL interval day type", () => {
  let pg_type = new INTERVAL("month", "day");
  expect(pg_type instanceof INTERVAL).toBe(true);
});

it("Create PostgreSQL interval second type", () => {
  let pg_type = new INTERVAL("day", "second");
  expect(pg_type instanceof INTERVAL).toBe(true);
});

it("Create PostgreSQL boolean type", () => {
  let pg_type = new BOOLEAN();
  expect(pg_type instanceof BOOLEAN).toBe(true);
});

it("Create PostgreSQL xml type", () => {
  let pg_type = new XML();
  expect(pg_type instanceof XML).toBe(true);
});
