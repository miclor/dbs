import { PostgresTypes } from "./postgresTypes";
import { RelationalElements } from "../../dataStructures/relationalElements";

export module PostgresElements {

  export class Column extends RelationalElements.Column {
    name: string;
    type: PostgresTypes.Type;
    constructor(name: string, type: PostgresTypes.Type) {
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

  export type Constraint = UniqueConstraint | PrimaryKeyConstraint | ForeignKeyConstraint | NotNullConstraint | CheckConstraint;

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

  export class PostgresElementFactory implements RelationalElements.RelationalElementFactory {

    makeTable(name: string, columns: Array<RelationalElements.Column>, constraints: Array<RelationalElements.Constraint>): RelationalElements.Table {
      return new Table(name, columns, constraints);
    }

    makeColumn(name: string, type: PostgresTypes.Type): RelationalElements.Column {
      return new Column(name, type);
    }

    makeUniqueConstraint(name: string, namespace: string): RelationalElements.UniqueConstraint {
      return new UniqueConstraint(name, namespace);
    }
    makePrimaryKeyConstraint(name: string, namespace: string): RelationalElements.PrimaryKeyConstraint {
      return new PrimaryKeyConstraint(name, namespace);
    }
    makeForeignKeyConstraint(name: string, namespace: string): RelationalElements.ForeignKeyConstraint {
      return new ForeignKeyConstraint(name, namespace);
    }
    makeNotNullConstraint(name: string, namespace: string): RelationalElements.NotNullConstraint {
      return new NotNullConstraint(name, namespace);
    }
    makeCheckConstraint(name: string, namespace: string): RelationalElements.CheckConstraint {
      return new CheckConstraint(name, namespace);
    }
  }

}
