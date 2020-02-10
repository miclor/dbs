import { readFileSync } from "fs";


it("Read create table statement", () => {
  const file = readFileSync(__dirname + "/test_data/create_table.json", "utf-8");
  // console.log(file)
  const change = JSON.parse(file);
  // console.log(change);
  const columns = change.parameters.columns;
  // console.log(columns);
  // console.log(parameters);
  expect(change.parameters.columns[0].name === "col1").toBe(true);
});

it("Create Postgresql table", () => {
  let result;


  expect(result typeof Table).toBe(true);
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

