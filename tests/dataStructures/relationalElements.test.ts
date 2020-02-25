import * as RelationalElements from "../../src/dataStructures/relationalElements";
import { SQLTypes } from "../../src/SQLTypes";

it("Create generic string column", () => {
  class StringCol extends RelationalElements.Column {
    constructor(name: string, type: SQLTypes.VARCHAR) {
      super();
      this.name = name;
      this.type = type;
    }
    name: string;
    type: SQLTypes.VARCHAR;
  }

  let len: number = 20;

  class StringType extends SQLTypes.VARCHAR {
    length: number;
    constructor(length: number) {
      super();
      this.length = length;
    }
    getLength() {
      return this.length;
    }
  }

  let string_col_instance = new StringCol(
    "SomeStringColumn",
    new StringType(len)
  );

  expect(string_col_instance instanceof RelationalElements.Column).toBe(true);
});