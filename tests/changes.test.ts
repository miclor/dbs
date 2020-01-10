import { CreateTableStatement } from "../src/changes";


it("Create create table statement", () => {
  
    
  let col1 = "foo"

  let expected_result = new CreateTableStatement("CREATE TABLE example_table (col1 varchar(20), col2 numeric(1,2))")

  expect(pg_char instanceof PostgresTypes.CHAR).toBe(true);
});
