import { readFileSync } from "fs";
import { Table } from "../../../src/backends/postgresql/postgresElements"
import { CreateTableCommand } from "../../../src/backends/postgresql/changes";
import { Metabase } from "../../../src/backends/postgresql/metabase";


it("Read create table statement", () => {
  const file = readFileSync(__dirname + "/test_data/create_table.json", "utf-8");
  const change = JSON.parse(file);
  expect(change.parameters.columns[0].name === "col1").toBe(true);
});


it("Create Postgresql CreateTableCommand", () => {
  let command = new CreateTableCommand();

  expect(command instanceof CreateTableCommand).toBe(true);
});

it("Alter table, add column", () => {

});

it("Alter table, modify column", () => {

});

it("Alter table, drop column", () => {

});

it("Drop table", () => {

});

it("Create sequence", () => {

});

it("Alter sequence, modify maxvalue", () => {

});

it("Drop sequence", () => {

});


it("Create view", () => {

});

it("Drop view", () => {

});

