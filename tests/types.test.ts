import {
  PostgresString,
  PostgresTypeFactory
} from "../src/backends/postgresql/types";
// import {TypeFactory} from "../src/types";

it("Create PostgreSQL text type", () => {
  // const sub = require("../sub").default;
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_text = pgf.createStringType(len);
  console.log("----->");
  console.log(typeof pg_text);
  expect(pg_text.length).toBe(20);
});
