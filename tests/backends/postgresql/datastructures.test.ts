import { PostgresTypes } from "../../../src/backends/postgresql/types";
import { PostgresStructures } from "../../../src/backends/postgresql/datastructures";
import {PostgresFactory} from "../../../src/backends/postgresql/factory";

it("Create PostgreSQL table", () => {
  
  let pg_type_fac = new PostgresTypes.PostgresTypeFactory();
  let pg_fac = new PostgresFactory();

  let col1 = pg_fac.column("Col1", pg_type_fac.varchar(20))
  let col2 = pg_fac.column("Col1", pg_type_fac.varchar(20))
  let con1 = pg_fac.primaryKeyConstraint("PK1", "namespace")

  let test_table = pg_fac.table("TestTable", [col1, col2], [con1])


  expect(test_table instanceof PostgresStructures.Table).toBe(true);
});
