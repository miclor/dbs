import { PostgresTypes } from "../../../src/backends/postgresql/types";
import { PostgresStructures } from "../../../src/backends/postgresql/datastructures";

it("Create PostgreSQL table", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let len: number = 20;
  let pg_varchar20 = pgf.createVarchar(len);

  let col1 = new PostgresStructures.PostgresColumn("col1", pg_varchar20);
  let col2 = new PostgresStructures.PostgresColumn("col2", pg_varchar20);
  let con1 = new PostgresStructures.PostgresConstraint(
    "constraint1",
    "schema1"
  );

  let test_table = new PostgresStructures.PostgresTable(
    "table1",
    [col1, col2],
    [con1]
  );

  expect(test_table instanceof PostgresStructures.PostgresTable).toBe(true);
});
