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
  let col2 = new Column("Col2", new VARCHAR(20));
  let pkConstraint = new PrimaryKeyConstraint("PK1", "namespace");
  let uConstraint = new UniqueConstraint("uk1", "namespace");
  let nnConstraint = new NotNullConstraint("nn1", "namespace");
  let test_table = pg_fac.makeTable("TestTable", [col1, col2], [pkConstraint, uConstraint, nnConstraint]);

  expect(test_table instanceof Table).toBe(true);

});

it("Create two PG tables with all kinds of constraints", () => {
  let pg_fac = new PostgresElementFactory();

  let col1 = new Column("Col1", new VARCHAR(20));
  let col2 = new Column("Col2", new VARCHAR(20));
  let pkConstraint = new PrimaryKeyConstraint("PK1", "namespace");
  let uConstraint = new UniqueConstraint("uk1", "namespace");
  let nnConstraint = new NotNullConstraint("nn1", "namespace");
  let test_table = pg_fac.makeTable("TestTable", [col1, col2], [pkConstraint, uConstraint, nnConstraint]);

  let col12 = new Column("Col1", new VARCHAR(20));
  let col22 = new Column("Col2", new VARCHAR(20));
  let pkConstraint2 = new PrimaryKeyConstraint("PK1", "namespace");
  let uConstraint2 = new UniqueConstraint("uk1", "namespace");
  let nnConstraint2 = new NotNullConstraint("nn1", "namespace");
  let checkConstraint = new CheckConstraint("cc1", "namespace");

  let fkContstraint = new ForeignKeyConstraint("fk_test", "namespace")

  let test_table2 = pg_fac.makeTable("TestTable2", [col12, col22], [pkConstraint2, uConstraint2, nnConstraint2, checkConstraint, fkContstraint]);

  expect(test_table instanceof Table).toBe(true);
  expect(test_table2 instanceof Table).toBe(true);
});


