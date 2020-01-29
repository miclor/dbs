// import { PostgresTypes } from "../../../src/backends/postgresql/postgresTypes";
import { PostgresElements } from "../../../src/backends/postgresql/postgresElements";


it("Create PostgreSQL table", () => {

  // let pg_type_fac = new PostgresTypes.PostgresTypeFactory();
  let pg_fac = new PostgresElements.PostgresElementFactory();

  let col1 = pg_fac.makeColumn("Col1", pg_type_fac.varchar(20))
  let col2 = pg_fac.makeColumn("Col1", pg_type_fac.varchar(20))
  let con1 = pg_fac.makePrimaryKeyConstraint("PK1", "namespace")

  let test_table = pg_fac.makeTable("TestTable", [col1, col2], [con1])


  expect(test_table instanceof PostgresElements.Table).toBe(true);
});
