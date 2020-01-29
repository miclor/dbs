// import { PostgresTypes } from "../../../src/backends/postgresql/postgresTypes";
import {
  Column,
  Table,
  PrimaryKeyConstraint,
  PostgresElementFactory,
  makeColumn,
  VARCHAR
} from "../../../src/backends/postgresql/postgresElements";

it("Create PostgreSQL table", () => {
  let pg_fac = new PostgresElementFactory();

  let col1 = new Column("Col1", new VARCHAR(20));
  let col2 = new Column("Col1", new VARCHAR(20));
  let con1 = new PrimaryKeyConstraint("PK1", "namespace");

  let test_table = pg_fac.makeTable("TestTable", [col1, col2], [con1]);

  expect(test_table instanceof Table).toBe(true);
});
