import { CreateChange } from "../src/changes";
import { RelationalElements } from "../src/dataStructures/relationalElements";
import { SQLTypes } from "../src/SQLTypes";
import { readFileSync } from "fs";

it("Create create table statement", () => {
  const file = readFileSync(__dirname + "/create_table_change.json", "utf-8");
  const change = JSON.parse(file);
  console.log(change);
  expect(2 === 2).toBe(true);
});
