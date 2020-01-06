import { RelationalContainer } from "../../src/dataStructures/containers";
import { SQLTypes } from "../../src/types";

it("Create generic string column", () => {
  class StringCol extends RelationalContainer.Column {
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

  expect(string_col_instance instanceof RelationalContainer.Column).toBe(true);
});

it("Create generic table", () => {
  class StringCol extends RelationalContainer.Column {
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

  let stringColInstance = new StringCol(
    "SomeStringColumn",
    new StringType(len)
  );

  class GenericConstraint extends RelationalContainer.Constraint {
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  class TestTable extends RelationalContainer.Table {
    name: string;
    columns: Array<StringCol>;
    constraints: Array<GenericConstraint>;
    constructor(
      name: string,
      columns: Array<StringCol>,
      constraints: Array<GenericConstraint>
    ) {
      super();
      this.name = name;
      this.columns = columns;
      this.constraints = constraints;
    }
  }

  let testTableInstance = new TestTable(
    "SomeTestTable",
    [stringColInstance],
    []
  );

  expect(testTableInstance instanceof RelationalContainer.Table).toBe(true);
});

// it("Create generic table", () => {
//   let len: number = 20;
//   let pgf = new RelationalContainer.Table();
//   let pg_char = pgf.createChar(len);
//   expect(pg_char instanceof PostgresCHAR).toBe(true);
// });
