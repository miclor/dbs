import { PostgresTypes } from "../../../src/backends/postgresql/types";

it("Create PostgreSQL char type", () => {
  let len: number = 20;
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_char = pgf.char(len);
  expect(pg_char instanceof PostgresTypes.CHAR).toBe(true);
});

it("Create PostgreSQL varchar type", () => {
  let len: number = 20;
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.varchar(len);
  expect(pg_text instanceof PostgresTypes.VARCHAR).toBe(true);
});

it("Create PostgreSQL clob type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.clob();
  expect(pg_text instanceof PostgresTypes.CLOB).toBe(true);
});

it("Create PostgreSQL binary type", () => {
  let len: number = 20;
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_char = pgf.binary(len);
  expect(pg_char instanceof PostgresTypes.BINARY).toBe(true);
});

it("Create PostgreSQL varbinary type", () => {
  let len: number = 20;
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.varbinary(len);
  expect(pg_text instanceof PostgresTypes.VARBINARY).toBe(true);
});

it("Create PostgreSQL blob type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.blob();
  expect(pg_text instanceof PostgresTypes.BLOB).toBe(true);
});

it("Create PostgreSQL numeric type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.numeric(1, 0);
  expect(pg_text instanceof PostgresTypes.NUMERIC).toBe(true);
});

it("Create PostgreSQL decimal type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.decimal(1, 2);
  expect(pg_text instanceof PostgresTypes.DECIMAL).toBe(true);
});

it("Create PostgreSQL smallint type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.smallInt();
  expect(pg_text instanceof PostgresTypes.SMALLINT).toBe(true);
});

it("Create PostgreSQL integer type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.integer();
  expect(pg_text instanceof PostgresTypes.INTEGER).toBe(true);
});

it("Create PostgreSQL bigint type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.bigInt();
  expect(pg_text instanceof PostgresTypes.BIGINT).toBe(true);
});

it("Create PostgreSQL float type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.float(32);
  expect(pg_text instanceof PostgresTypes.FLOAT).toBe(true);
});

it("Create PostgreSQL real type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.real();
  expect(pg_text instanceof PostgresTypes.REAL).toBe(true);
});

it("Create PostgreSQL double_precision type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.doublePrecision();
  expect(pg_text instanceof PostgresTypes.DOUBLE_PRECISION).toBe(true);
});

it("Create PostgreSQL date type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.date();
  expect(pg_text instanceof PostgresTypes.DATE).toBe(true);
});

it("Create PostgreSQL time type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.time();
  expect(pg_text instanceof PostgresTypes.TIME).toBe(true);
});

it("Create PostgreSQL timestamp type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.timeStamp("");
  expect(pg_text instanceof PostgresTypes.TIMESTAMP).toBe(true);
});

it("Create PostgreSQL interval day type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.interval("month", "day");
  expect(pg_text instanceof PostgresTypes.INTERVAL).toBe(true);
});

it("Create PostgreSQL interval second type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.interval("day", "second");
  expect(pg_text instanceof PostgresTypes.INTERVAL).toBe(true);
});

it("Create PostgreSQL boolean type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.boolean();
  expect(pg_text instanceof PostgresTypes.BOOLEAN).toBe(true);
});

it("Create PostgreSQL xml type", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let pg_text = pgf.xml();
  expect(pg_text instanceof PostgresTypes.XML).toBe(true);
});
