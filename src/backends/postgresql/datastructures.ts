import { PostgresTypes } from "./types";
import { RelationalContainer } from "../../dataStructures/containers";

export module PostgresStructures {
  export class PostgresColumn extends RelationalContainer.Column {
    name: string;
    type: PostgresTypes.PostgresType;
    constructor(name: string, type: PostgresTypes.PostgresType) {
      super();
      this.name = name;
      this.type = type;
    }
  }

  export class PostgresConstraint extends RelationalContainer.Constraint {
    name: string;
    namespace: string;
    constructor(name: string, namespace: string) {
      super();
      this.name = name;
      this.namespace = namespace;
    }
  }

  export class PostgresTable extends RelationalContainer.Table {
    name: string;
    columns: Array<PostgresColumn>;
    constraints: Array<PostgresConstraint>;
    constructor(
      name: string,
      columns: Array<PostgresColumn>,
      constraints: Array<PostgresConstraint>
    ) {
      super();
      this.name = name;
      this.columns = columns;
      this.constraints = constraints;
    }
  }
}
