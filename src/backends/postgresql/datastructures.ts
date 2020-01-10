import { PostgresTypes } from "./types";
import { RelationalContainer } from "../../dataStructures/containers";

export module PostgresStructures {
  export class Column extends RelationalContainer.Column {
    name: string;
    type: PostgresTypes.Type;
    constructor(name: string, type: PostgresTypes.Type) {
      super();
      this.name = name;
      this.type = type;
    }
  }

  export class UniqueConstraint extends RelationalContainer.UniqueConstraint {
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  export class PrimaryKeyConstraint extends RelationalContainer.PrimaryKeyConstraint {
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  export class ForeignKeyConstraint extends RelationalContainer.ForeignKeyConstraint{
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  export class NotNullConstraint extends RelationalContainer.NotNullConstraint{
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }
  export class CheckConstraint extends RelationalContainer.CheckConstraint {
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  export type Constraint = UniqueConstraint | PrimaryKeyConstraint | ForeignKeyConstraint | NotNullConstraint | CheckConstraint;

  export class Table extends RelationalContainer.Table {
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
}
