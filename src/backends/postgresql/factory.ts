import { RelationalContainer } from "../../dataStructures/containers";
import { PostgresStructures } from "../../backends/postgresql/datastructures"
import { PostgresTypes } from "./types";


export class PostgresFactory implements RelationalContainer.RelationalFactory {
    
    table(name: string, columns: Array<PostgresStructures.Column>, constraints:Array<PostgresStructures.Constraint>) : PostgresStructures.Table {
        return new PostgresStructures.Table(name, columns, constraints);
    }

    column(name:string, type: PostgresTypes.Type) : PostgresStructures.Column {
        return new PostgresStructures.Column(name, type);
    }

    uniqueConstraint(name: string, namespace: string): PostgresStructures.UniqueConstraint {
        return new PostgresStructures.UniqueConstraint(name, namespace);
    }
    primaryKeyConstraint(name: string, namespace: string): PostgresStructures.PrimaryKeyConstraint {
        return new PostgresStructures.PrimaryKeyConstraint(name, namespace);
    }
    foreignKeyConstraint(name: string, namespace: string): PostgresStructures.ForeignKeyConstraint {
        return new PostgresStructures.ForeignKeyConstraint(name, namespace);
    }
    notNullConstraint(name: string, namespace: string): PostgresStructures.NotNullConstraint {
        return new PostgresStructures.NotNullConstraint(name, namespace);
    }
    checkConstraint(name: string, namespace: string): PostgresStructures.CheckConstraint    {
        return new PostgresStructures.CheckConstraint(name, namespace);
    }
      

}