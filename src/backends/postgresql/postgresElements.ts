import {
  CHAR,
  VARCHAR,
  CLOB,
  BINARY,
  VARBINARY,
  BLOB,
  NUMERIC,
  DECIMAL,
  SMALLINT,
  INTEGER,
  BIGINT,
  FLOAT,
  REAL,
  DOUBLE_PRECISION,
  DATE,
  TIME,
  TIMESTAMP,
  INTERVAL,
  BOOLEAN,
  XML,
  Type
} from "./postgresTypes";

export {
  CHAR,
  VARCHAR,
  CLOB,
  BINARY,
  VARBINARY,
  BLOB,
  NUMERIC,
  DECIMAL,
  SMALLINT,
  INTEGER,
  BIGINT,
  FLOAT,
  REAL,
  DOUBLE_PRECISION,
  DATE,
  TIME,
  TIMESTAMP,
  INTERVAL,
  BOOLEAN,
  XML,
  Type
};

import { RelationalElements } from "../../dataStructures/relationalElements";

//export module PostgresElements {
export class Column extends RelationalElements.Column {
  name: string;
  type: Type;
  constructor(name: string, type: Type) {
    super();
    this.name = name;
    this.type = type;
  }
}

export class UniqueConstraint extends RelationalElements.UniqueConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class PrimaryKeyConstraint extends RelationalElements.PrimaryKeyConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class ForeignKeyConstraint extends RelationalElements.ForeignKeyConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export class NotNullConstraint extends RelationalElements.NotNullConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}
export class CheckConstraint extends RelationalElements.CheckConstraint {
  name: string;
  namespace: string;
  constructor(name: string, namespace: string) {
    super();
    this.name = name;
    this.namespace = namespace;
  }
}

export type Constraint =
  | UniqueConstraint
  | PrimaryKeyConstraint
  | ForeignKeyConstraint
  | NotNullConstraint
  | CheckConstraint;

export class Table extends RelationalElements.Table {
  name: string;
  columns: Array<Column>;
  constraints: Array<Constraint>;
  constructor(
    name: string,
    columns: Array<Column>,
    constraints: Array<Constraint>
  ) {
    super();
    this.name = name;
    this.columns = columns;
    this.constraints = constraints;
  }
}

export class PostgresElementFactory
  implements RelationalElements.RelationalElementFactory {
  makeTable(
    name: string,
    columns: Array<RelationalElements.Column>,
    constraints: Array<RelationalElements.Constraint>
  ): RelationalElements.Table {
    return new Table(name, columns, constraints);
  }

  // makeColumn(
  //   name: string,
  //   type: string,
  //   length?: number,
  //   scale?: number,
  //   precision?: number
  // ): RelationalElements.Column {
  //   let postgresTypeFactory = new PostgresTypes.PostgresTypeFactory();

  //   const typeAttribute = Reflect.get(postgresTypeFactory, type);

  //   if (typeAttribute !== null) {
  //     postgresTypeFactory[typeAttribute]();
  //   }

  //   switch (type) {
  //     case "":
  //         console.log("It is a Sunday.");
  //         break;
  //     case 1:
  //         console.log("It is a Monday.");
  //         break;
  //     case 2:
  //         console.log("It is a Tuesday.");
  //         break;
  //     case 3:
  //         console.log("It is a Wednesday.");
  //         break;
  //     case 4:
  //         console.log("It is a Thursday.");
  //         break;
  //     case 5:
  //         console.log("It is a Friday.");
  //         break;
  //     case 6:
  //         console.log("It is a Saturday.");
  //         break;
  //     default:
  //         console.log("No such day exists!");
  //         break;
  // }

  //   return new Column(name, type);
  // }

  makeUniqueConstraint(
    name: string,
    namespace: string
  ): RelationalElements.UniqueConstraint {
    return new UniqueConstraint(name, namespace);
  }
  makePrimaryKeyConstraint(
    name: string,
    namespace: string
  ): RelationalElements.PrimaryKeyConstraint {
    return new PrimaryKeyConstraint(name, namespace);
  }
  makeForeignKeyConstraint(
    name: string,
    namespace: string
  ): RelationalElements.ForeignKeyConstraint {
    return new ForeignKeyConstraint(name, namespace);
  }
  makeNotNullConstraint(
    name: string,
    namespace: string
  ): RelationalElements.NotNullConstraint {
    return new NotNullConstraint(name, namespace);
  }
  makeCheckConstraint(
    name: string,
    namespace: string
  ): RelationalElements.CheckConstraint {
    return new CheckConstraint(name, namespace);
  }
}
//}
