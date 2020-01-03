import { SQLTypes } from "../../types";

export class PostgresTypeFactory implements SQLTypes.TypeFactory {
  //   constructor(t: string) {}

  public createStringType(n: number): PostgresString {
    return new PostgresString(n);
  }
}

export class PostgresString implements SQLTypes.AbstractString {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}

export class PostgresInteger implements SQLTypes.AbstractInteger {
  precision: number;
  constructor(p: number) {
    this.precision = p;
  }
  public getPrecision() {
    return this.precision;
  }
}

export class PostgresFloat implements SQLTypes.AbstractFloat {
  precision: number;
  constructor(p: number) {
    this.precision = p;
  }
  public getPrecision() {
    return this.precision;
  }
}
