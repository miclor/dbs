import { RelationalContainer } from "../src/dataStructures/containers";
import { SQLTypes } from "../src/types";

export function concatColumnArray(theList: Array<string>) {
  let result: string = "";
  for (let chunk of theList) {
    result = result + chunk + ", ";
  }
  return result.slice(0, -2);
}

export class CreateChange {
  createTable(table: RelationalContainer.Table): string {
    let result: string = "";
    return result;
  }

  createSequence(sequence_name: string): string {
    let result = "CREATE SEQUENCE " + sequence_name;
    return result;
  }

  createView(view_name: string): string {
    let result = "CREATE SEQUENCE " + view_name;
    return result;
  }

  createIndex(index_name: string): string {
    let result = "CREATE SEQUENCE " + index_name;
    return result;
  }
}

export class AlterChange {
  alterTable(table_name: string): string {
    let result = "ALTER TABLE " + table_name;
    return result;
  }
  alterSequence(sequence_name: string): string {
    let result = "ALTER SEQUENCE " + sequence_name;
    return result;
  }

  alterView(view_name: string): string {
    let result = "ALTER SEQUENCE " + view_name;
    return result;
  }

  alterIndex(index_name: string): string {
    let result = "ALTER SEQUENCE " + index_name;
    return result;
  }
}
