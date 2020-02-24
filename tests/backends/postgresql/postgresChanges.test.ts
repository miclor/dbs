import { readFileSync } from "fs";
import {
  Table,
  TableBuilder
} from "../../../src/backends/postgresql/postgresElements";
import { ChangeReader } from "../../../src/backends/postgresql/postgresChanges";
import { Metabase } from "../../../src/backends/postgresql/metabase";
import {
  VARCHAR,
  Column
} from "../../../src/backends/postgresql/postgresElements";

it("Read change an parameters", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  let metabase = new Metabase();
  const chgReader = new ChangeReader(metabase);
  const change = chgReader.readChangeFromDisk(file_path);

  console.log("change read from dist--->", change);

  //   for (let result in change) {
  //     console.log("result->", result);
  //     if (result typeof Array) {
  //   -> recurse
  // }
  //   }

  // const col1 = new Column("Col1", new VARCHAR(20));
  // const col2 = new Column("Col2", new VARCHAR(20));
  // const cols = [col1, col2];
  // let testTable = TableBuilder.create()
  //   .setName("ExampleTable")
  //   .setSchema("ExampleSchema")
  //   .setColumns(cols)
  //   .build();

  expect(change.columns[0].name === "Col1").toBe(true);
});
