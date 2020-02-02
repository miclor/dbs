import {
  Column,
  Table,
  PrimaryKeyConstraint,
  NotNullConstraint,
  UniqueConstraint,
  ForeignKeyConstraint,
  CheckConstraint,
  CHAR,
  VARCHAR,
  CLOB,
  BINARY,
  VARBINARY,
  BLOB,
  NUMERIC,
  DECIMAL,
  SMALLINT,
  INTEGER,
  BIGINT,
  FLOAT,
  REAL,
  DOUBLE_PRECISION,
  DATE,
  TIME,
  TIMESTAMP,
  INTERVAL,
  BOOLEAN,
  XML,
  Sequence,
  SequenceBuilder
} from "../../../src/backends/postgresql/postgresElements";

it("Create columns of CHAR", () => {
  const col = new Column("col1", new CHAR(23));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof CHAR).toBe(true);
});

it("Create columns of varchar", () => {
  const col = new Column("col1", new VARCHAR(23));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof VARCHAR).toBe(true);
});

it("Create columns of clob", () => {
  const col = new Column("col1", new CLOB());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof CLOB).toBe(true);
});

it("Create columns of BINARY", () => {
  const col = new Column("col1", new BINARY(16));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof BINARY).toBe(true);
});

it("Create columns of VARBINARY", () => {
  const col = new Column("col1", new VARBINARY(16));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof VARBINARY).toBe(true);
});

it("Create columns of BLOB", () => {
  const col = new Column("col1", new BLOB());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof BLOB).toBe(true);
});

it("Create columns of NUMERIC", () => {
  const col = new Column("col1", new NUMERIC(2, 2));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof NUMERIC).toBe(true);
});

it("Create columns of DECIMAL", () => {
  const col = new Column("col1", new DECIMAL(2, 2));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof DECIMAL).toBe(true);
});

it("Create columns of SMALLINT", () => {
  const col = new Column("col1", new SMALLINT());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof SMALLINT).toBe(true);
});

it("Create columns of INTEGER", () => {
  const col = new Column("col1", new INTEGER());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof INTEGER).toBe(true);
});

it("Create columns of BIGINT", () => {
  const col = new Column("col1", new BIGINT());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof BIGINT).toBe(true);
});

it("Create columns of FLOAT", () => {
  const col = new Column("col1", new FLOAT(16));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof FLOAT).toBe(true);
});

it("Create columns of REAL", () => {
  const col = new Column("col1", new REAL());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof REAL).toBe(true);
});

it("Create columns of DOUBLE_PRECISION", () => {
  const col = new Column("col1", new DOUBLE_PRECISION());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof DOUBLE_PRECISION).toBe(true);
});

it("Create columns of DATE", () => {
  const col = new Column("col1", new DATE());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof DATE).toBe(true);
});

it("Create columns of TIME", () => {
  const col = new Column("col1", new TIME());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof TIME).toBe(true);
});

it("Create columns of TIMESTAMP", () => {
  const tz = "CET";
  const col = new Column("col1", new TIMESTAMP(tz));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof TIMESTAMP).toBe(true);
});

it("Create columns of INTERVAL", () => {
  const col = new Column("col1", new INTERVAL("YEAR", "DAY"));
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof INTERVAL).toBe(true);
});

it("Create columns of BOOLEAN", () => {
  const col = new Column("col1", new BOOLEAN());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof BOOLEAN).toBe(true);
});

it("Create columns of XML", () => {
  const col = new Column("col1", new XML());
  expect(col instanceof Column).toBe(true);
  expect(col.type instanceof XML).toBe(true);
});

// tables
it("Create PostgreSQL table", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const pkConstraint = new PrimaryKeyConstraint("PK1", "namespace");
  const uConstraint = new UniqueConstraint("uk1", "namespace");
  const nnConstraint = new NotNullConstraint("nn1", "namespace");
  const test_table = new Table(
    "TestTable",
    [col1, col2],
    [pkConstraint, uConstraint, nnConstraint]
  );

  expect(test_table instanceof Table).toBe(true);
});

it("Create two PG tables with all kinds of constraints", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const pkConstraint = new PrimaryKeyConstraint("PK1", "namespace");
  const uConstraint = new UniqueConstraint("uk1", "namespace");
  const nnConstraint = new NotNullConstraint("nn1", "namespace");
  const test_table = new Table(
    "TestTable",
    [col1, col2],
    [pkConstraint, uConstraint, nnConstraint]
  );

  const col12 = new Column("Col1", new VARCHAR(20));
  const col22 = new Column("Col2", new VARCHAR(20));

  const col3 = new Column("Col3", "VARCHAR", 20);
  const col4 = new Column("Col3", "VARCHAR", 20);

  const pkConstraint2 = new PrimaryKeyConstraint("PK1", "namespace");
  const uConstraint2 = new UniqueConstraint("uk1", "namespace");
  const nnConstraint2 = new NotNullConstraint("nn1", "namespace");
  const checkConstraint = new CheckConstraint("cc1", "namespace");

  const fkContstraint = new ForeignKeyConstraint("fk_test", "namespace");

  const test_table2 = new Table(
    "TestTable2",
    [col12, col22, col3, col4],
    [pkConstraint2, uConstraint2, nnConstraint2, checkConstraint, fkContstraint]
  );

  expect(test_table instanceof Table).toBe(true);
  expect(test_table2 instanceof Table).toBe(true);
});

// sequences
it("Create sequence with start 1", () => {
  const seq = SequenceBuilder.create()
    .setName("Seq1")
    .setStart(1)
    .setMaxvalue(10)
    .build();
  expect(seq instanceof Sequence).toBe(true);
  expect(seq.name === "Seq1").toBe(true);
  expect(seq.maxvalue === 10).toBe(true);
});
