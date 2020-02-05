import { Domains, SQLTypes } from "../SQLTypes";

export module RelationalElements {
  export abstract class Column {
    abstract name: string;
    abstract type: SQLTypes.SQLType;
  }

  export abstract class UniqueConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
  }

  export abstract class PrimaryKeyConstraint {
    abstract name: string;
    abstract table: Table;
    abstract columns: [Column];
  }

  export abstract class ForeignKeyConstraint {
    abstract name: string;
    abstract table: Table;
    abstract columns: [Column];
    abstract referencedTable: Table;
    abstract referencedColumnNames: [Column];
    abstract onDelete: OnDelete;
    abstract onUpdate: OnDelete;
  }

  export type OnDelete = "CASCADE" | "RESTRICT" | "SET NULL" | "SET DEFAULT";

  export abstract class NotNullConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
  }

  export abstract class CheckConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
    abstract checkCondition: string;
  }

  export abstract class DefaultConstraint {
    abstract name: string;
    abstract table: Table;
    abstract column: Column;
    abstract defaultValue: string | number;
  }

  export type Constraint =
    | UniqueConstraint
    | PrimaryKeyConstraint
    | ForeignKeyConstraint
    | NotNullConstraint
    | CheckConstraint
    | DefaultConstraint;

  export abstract class Table {
    abstract name: string;
    abstract schema?: string;
    abstract columns: Array<Column>;
    abstract primaryKeyConstraint?: PrimaryKeyConstraint;
    abstract uniqueConstraints?: Array<UniqueConstraint>;
    abstract notNullConstraints?: Array<NotNullConstraint>;
    abstract checkConstraints?: Array<CheckConstraint>;
    abstract defaultConstraints?: Array<DefaultConstraint>;
    abstract foreignKeyConstraints?: Array<ForeignKeyConstraint>;

    public addPrimaryKeyConstraint(pk: PrimaryKeyConstraint): void {
      this.primaryKeyConstraint = pk;
    }
    public getPrimaryKeyConstraint(): PrimaryKeyConstraint | undefined {
      if (this.primaryKeyConstraint) {
        return this.primaryKeyConstraint;
      } else {
        return undefined;
      }
    }
    public removePrimaryKeyConstraint(): void {
      if (this.primaryKeyConstraint) {
        this.primaryKeyConstraint = undefined;
      }
    }

    public addUniqueConstraint(uc: UniqueConstraint): void {
      if (this.uniqueConstraints) {
        this.uniqueConstraints.push(uc);
      } else {
        this.uniqueConstraints = [uc];
      }
    }

    public getUniqueConstraint(name: string): UniqueConstraint | undefined {
      if (this.uniqueConstraints) {
        return this.uniqueConstraints.filter(x => x.column.name === name)[0];
      } else {
        return undefined;
      }
    }

    public removeUniqueConstraint(name: string): void {
      if (this.uniqueConstraints) {
        this.uniqueConstraints.splice(
          this.uniqueConstraints.findIndex(e => e.column.name === name),
          1
        );
      }
    }

    public addNotNullConstraint(nn: NotNullConstraint): void {
      if (this.notNullConstraints) {
        this.notNullConstraints.push(nn);
      } else {
        console.log("added nn constraints");
        this.notNullConstraints = [nn];
      }
    }

    public getNotNullConstraint(column: string): NotNullConstraint | undefined {
      if (this.notNullConstraints) {
        console.log("'nn constraints --->", this.notNullConstraints);
        return this.notNullConstraints.filter(x => x.column.name === column)[0];
      } else {
        return undefined;
      }
    }

    public removeNotNullConstraint(column: string): void {
      if (this.notNullConstraints) {
        this.notNullConstraints.splice(
          this.notNullConstraints.findIndex(e => e.column.name === column),
          1
        );
      }
    }

    public addCheckConstraint(uc: CheckConstraint): void {
      if (this.checkConstraints) {
        this.checkConstraints.push(uc);
        return;
      } else {
        return;
      }
    }

    public getCheckConstraint(name: string): CheckConstraint | undefined {
      if (this.checkConstraints) {
        return this.checkConstraints.filter(x => x.column.name === name)[0];
      } else {
        return undefined;
      }
    }

    public removeCheckConstraint(uk: CheckConstraint): void {
      if (this.checkConstraints) {
        this.checkConstraints.splice(
          this.checkConstraints.findIndex(e => e.column.name === name),
          1
        );
      }
    }

    public addDefaultConstraint(uc: DefaultConstraint): void {
      if (this.defaultConstraints) {
        this.defaultConstraints.push(uc);
        return;
      } else {
        return;
      }
    }

    public getDefaultConstraint(name: string): DefaultConstraint | undefined {
      if (this.defaultConstraints) {
        return this.defaultConstraints.filter(x => x.column.name === name)[0];
      } else {
        return undefined;
      }
    }
    public removeDefaultConstraint(uk: DefaultConstraint): void {
      if (this.defaultConstraints) {
        this.defaultConstraints.splice(
          this.defaultConstraints.findIndex(e => e.column.name === name),
          1
        );
      }
    }

    public addForeignKeyConstraint(uc: ForeignKeyConstraint): void {
      if (this.foreignKeyConstraints) {
        this.foreignKeyConstraints.push(uc);
        return;
      } else {
        return;
      }
    }

    public getForeignKeyConstraint(
      columns: [string]
    ): ForeignKeyConstraint | undefined {
      if (this.foreignKeyConstraints) {
        return this.foreignKeyConstraints.filter(x => x.columns === name)[0];
      } else {
        return undefined;
      }
    }
    public removeForeignKeyConstraint(columns: [string]): void {
      if (this.foreignKeyConstraints) {
        this.foreignKeyConstraints.splice(
          this.foreignKeyConstraints.findIndex(e => e.columns === name),
          1
        );
      }
    }

    public addColumn(column: Column): void {
      this.columns.push(column);
    }

    public getColumn(name: string): Column {
      return this.columns.filter(x => x.name === name)[0];
    }

    public removeColumn(name: string): void {
      this.columns.splice(
        this.columns.findIndex(e => e.name === name),
        1
      );
    }
  }

  export abstract class Sequence {
    abstract name: string;
    abstract start?: number;
    abstract maxvalue?: number;
    abstract increment?: number;
    abstract minvalue?: number;
    abstract noMaxvalue?: boolean;
    abstract cache?: boolean;
    abstract cycle?: boolean;
  }

  export abstract class View {
    abstract name: string;
    abstract columns?: Array<string>;
    abstract query: string;
    abstract checkOption?: ViewCheckOption;
  }

  export type ViewCheckOption = "LOCAL" | "CASCADE";

  // export interface RelationalElementFactory {
  //   //makeColumn(name: string, type: string, length?: number, scale?: number, precision?: number): RelationalElements.Column;
  //   makeUniqueConstraint(name: string, schema: string): RelationalElements.UniqueConstraint;
  //   makePrimaryKeyConstraint(name: string, schema: string): RelationalElements.PrimaryKeyConstraint;
  //   makeForeignKeyConstraint(name: string, schema: string): RelationalElements.ForeignKeyConstraint;
  //   makeNotNullConstraint(name: string, schema: string): RelationalElements.NotNullConstraint;
  //   makeCheckConstraint(name: string, schema: string): RelationalElements.CheckConstraint;
  // }
}
