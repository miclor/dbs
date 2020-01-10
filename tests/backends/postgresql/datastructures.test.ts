import { PostgresTypes } from "../../../src/backends/postgresql/types";
import { PostgresStructures } from "../../../src/backends/postgresql/datastructures";

it("Create PostgreSQL table", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let len: number = 20;
  let pg_varchar20 = pgf.createVarchar(len);

  let col1 = new PostgresStructures.Column("col1", pg_varchar20);
  let col2 = new PostgresStructures.Column("col2", pg_varchar20);
  let con1 = new PostgresStructures.UniqueConstraint(
    "UniqueConstraint1",
    "schema1"
  );

  let test_table = new PostgresStructures.Table(
    "table1",
    [col1, col2],
    [con1]
  );

  expect(test_table instanceof PostgresStructures.Table).toBe(true);
});
