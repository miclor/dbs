import { PostgresTypes } from "../../../src/backends/postgresql/types";

it("Create PostgreSQL table", () => {
  let pgf = new PostgresTypes.PostgresTypeFactory();
  let len: number = 20;
  let pg_text = pgf.createVarchar(len);

  let pgTableFac = new PostgresTable.PostgresTableFactory();

  let pgColumnFac = new PostgresColumns.PostgresColumnFactory();

  let testTableInstance = pgTableFac.createSimpleTable(
    "SomeTestTable",
    [stringColInstance],
    []
  );

  expect(testTableInstance instanceof Postgres.Table).toBe(true);
});
