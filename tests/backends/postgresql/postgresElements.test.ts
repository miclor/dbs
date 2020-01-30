// import { PostgresTypes } from "../../../src/backends/postgresql/postgresTypes";
import {
  Column,
  Table,
  PrimaryKeyConstraint,
  NotNullConstraint,
  UniqueConstraint,
  ForeignKeyConstraint,
  CheckConstraint,
  PostgresElementFactory,
  VARCHAR
} from "../../../src/backends/postgresql/postgresElements";

it("Create PostgreSQL table", () => {
  let pg_fac = new PostgresElementFactory();

  let col1 = new Column("Col1", new VARCHAR(20));
  let col2 = new Column("Col1", new VARCHAR(20));
  let pkConstraint = new PrimaryKeyConstraint("PK1", "namespace");
  let uConstraint = new UniqueConstraint("uk1", "namespace");
  let nnConstraint = new NotNullConstraint("nn1", "namespace");

  let test_table = pg_fac.makeTable("TestTable", [col1, col2], [pkConstraint, uConstraint, nnConstraint]);

  expect(test_table instanceof Table).toBe(true);
});

it("Create PostgreSQL a column with VARCHAR type", () => {
  let pg_fac = new PostgresElementFactory();

  let col = pg_fac.makeColumn("SomeCol", "VARCHAR", 20);

  expect(col instanceof Column).toBe(true);
});


