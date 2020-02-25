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

it("Read a change to interface", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  let metabase = new Metabase();
  const chgReader = new ChangeReader(metabase);
  const change = chgReader.readChangeFromDisk(file_path);
  expect(change.changeType === "create").toBe(true);
});


it("Read a change to interface2", () => {
  const path = require("path");
  const file_path = path.resolve(
    __dirname,
    "../../test_data/create_table.json"
  );

  let metabase = new Metabase();
  const chgReader = new ChangeReader(metabase);
  const change = chgReader.readChangeFromDisk(file_path);
  expect(change.changeType === "create").toBe(true);
});
