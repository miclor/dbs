import { readFileSync } from "fs";
import {
  Table,
  TableBuilder
} from "../../../src/backends/mysql/schemaObjects";
import { ChangeReader, ChangeApplier } from "../../../src/backends/mysql/changes";
import { Metabase } from "../../../src/backends/mysql/metabase";
import {
  VARCHAR,
  Column
} from "../../../src/backends/mysql/schemaObjects";

it("Read a change to interface", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  const chgReader = new ChangeReader();
  const change = chgReader.readChangeFromDisk(file_path);
  expect(change.changeType === "create").toBe(true);
});


it("Read a change to interface2", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  const chgReader = new ChangeReader();
  const change = chgReader.readChangeFromDisk(file_path);
  expect(change.changeType === "create").toBe(true);
});



it("Create table from change", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  const chgReader = new ChangeReader();
  const change = chgReader.readChangeFromDisk(file_path);

  let metabase = new Metabase();
  const changeAppl = new ChangeApplier(metabase);
  changeAppl.createTable(change);



  expect(metabase.tables.length === 1).toBe(true);
});

