import { RelationalContainer } from "../../dataStructures/containers";

it("Create PostgreSQL char type", () => {
  let len: number = 20;
  let pgf = new PostgresTypeFactory();
  let pg_char = pgf.createChar(len);
  expect(pg_char instanceof PostgresCHAR).toBe(true);
});
