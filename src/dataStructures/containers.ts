import { Domains, SQLTypes } from "../types";

export module RelationalContainer {
  export abstract class Column {
    abstract name: string;
    abstract type: SQLTypes.SQLType;
  }

  export abstract class UniqueConstraint {
    abstract name: string;
    abstract namespace: string;
  }

  export abstract class PrimaryKeyConstraint {
    abstract name: string;
    abstract namespace: string;
  }

  export abstract class ForeignKeyConstraint {
    abstract name: string;
    abstract namespace: string;
  }

  export abstract class NotNullConstraint {
    abstract name: string;
    abstract namespace: string;
  }
  export abstract class CheckConstraint {
    abstract name: string;
    abstract namespace: string;
  }

  export type Constraint = UniqueConstraint | PrimaryKeyConstraint | ForeignKeyConstraint | NotNullConstraint | CheckConstraint;

  export abstract class Table {
    abstract name: string;
    abstract columns: Array<Column>;
    abstract constraints: Array<Constraint>;
  }

  export interface TableFactory {
    createTable(name: string, columns: Array<Column>, constraints:Array<Constraint>) : Table
  }

}

// export module DocumentContainer {
//   export abstract class Attribute {
//     abstract name: string;
//     abstract domain: Domains.GenericDomain;
//   }

//   export abstract class Document {
//     abstract name: string;
//     abstract attributes: Array<Attribute>;
//     abstract nestedDocuments: Array<Document>;
//   }

//   export abstract class Collection {
//     abstract name: string;
//     abstract documents: Array<Document>;
//   }
// }
