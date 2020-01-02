export module Types {
  export interface TypeFactory {
    createStringType(len: number): AbstractString;
  }

  export interface AbstractString {
    getLength(): number;
  }
}
