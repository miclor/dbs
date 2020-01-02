import { Types } from "../../types";

export class PostgresTypeFactory implements Types.TypeFactory {
  //   constructor(t: string) {}

  public createStringType(n: number) {
    return new PostgresString(n);
  }
}

export class PostgresString implements Types.AbstractString {
  length: number;
  constructor(s: number) {
    this.length = s;
  }
  public getLength() {
    return this.length;
  }
}
