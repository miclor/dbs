import {
  PostgresTypeFactory,
  PostgresCHAR,
  PostgresVARCHAR,
  PostgresCLOB
} from "../src/backends/postgresql/types";

it("Create PostgreSQL char type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_char: PostgresCHAR = pgf.createChar(len);
  expect(pg_char instanceof PostgresCHAR).toBe(true);
});

it("Create PostgreSQL varchar type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_text: PostgresVARCHAR = pgf.createVarchar(len);
  expect(pg_text instanceof PostgresVARCHAR).toBe(true);
});

it("Create PostgreSQL clob type", () => {
  let pgf = new PostgresTypeFactory();
  let pg_text: PostgresCLOB = pgf.createClob();
  expect(pg_text instanceof PostgresCLOB).toBe(true);
});
