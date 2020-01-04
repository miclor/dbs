import { Domains } from "../types";

abstract class Attribute {
  abstract name: string;
  abstract domain: DataType;
}

abstract class Container {
  abstract name: string;
  abstract attributes: Array<Attribute>;
}
