import {
  PostgresString,
  PostgresTypeFactory
} from "../src/backends/postgresql/types";
// import {TypeFactory} from "../src/types";

it("Create PostgreSQL text type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_text: PostgresString = pgf.createStringType(len);
  expect(pg_text instanceof PostgresString).toBe(true);
});

it("Create PostgreSQL integer type", () => {
  let precision: number = 64;
  let pgf = new PostgresTypeFactory();
  let pg_text: PostgresString = pgf.createIntegerType(precision);
  expect(pg_text instanceof PostgresString).toBe(true);
});

it("Create PostgreSQL float type", () => {
  let precision: number = 64;
  let pgf = new PostgresTypeFactory();
  let pg_text: PostgresString = pgf.createFloatType(precision);
  expect(pg_text instanceof PostgresString).toBe(true);
});
