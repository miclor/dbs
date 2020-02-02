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

// constraints
it("Create primary key constraint", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const con = new PrimaryKeyConstraint("pk1", testTable, [col1]);
  expect(con instanceof PrimaryKeyConstraint).toBe(true);
});

it("Create foreign key constraint", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable1 = new Table("TestTable", [col1, col2], []);
  const con1 = new PrimaryKeyConstraint("pk1", testTable1, [col1]);

  const col3 = new Column("Col1", new VARCHAR(20));
  const col4 = new Column("Col2", new VARCHAR(20));
  const testTable2 = new Table("TestTable", [col3, col4], []);
  const con2 = new PrimaryKeyConstraint("pk1", testTable2, [col3]);

  const fk = new ForeignKeyConstraint(
    "fk1",
    testTable1,
    [col1],
    testTable2,
    [col3],
    "CASCADE",
    "CASCADE"
  );
  expect(fk instanceof ForeignKeyConstraint).toBe(true);
});

it("Create unique constraint", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const con = new UniqueConstraint("pk1", testTable, col1);
  expect(con instanceof UniqueConstraint).toBe(true);
});

it("Create not null constraint", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const con = new NotNullConstraint("pk1", testTable, col1);
  expect(con instanceof NotNullConstraint).toBe(true);
});

it("Create check constraint", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const con = new CheckConstraint("pk1", testTable, col1, " != 'foo' ");
  expect(con instanceof CheckConstraint).toBe(true);
});

// tables
it("Create PostgreSQL table", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const pk = new PrimaryKeyConstraint("pk1", testTable, [col1]);
  const uConstraint = new UniqueConstraint("uk1", testTable, col2);
  const nnConstraint = new NotNullConstraint("uk1", testTable, col2);

  expect(testTable instanceof Table).toBe(true);
});

it("Create two PG tables with all kinds of constraints", () => {
  const col1 = new Column("Col1", new VARCHAR(20));
  const col2 = new Column("Col2", new VARCHAR(20));
  const testTable = new Table("TestTable", [col1, col2], []);
  const pkConstraint = new PrimaryKeyConstraint("PK1", testTable, [col1]);
  const uConstraint = new UniqueConstraint("uk1", testTable, col2);
  const nnConstraint = new NotNullConstraint("nn1", testTable, col2);

  const col12 = new Column("Col1", new VARCHAR(20));
  const col22 = new Column("Col2", new VARCHAR(20));

  const col3 = new Column("Col3", "VARCHAR", 20);
  const col4 = new Column("Col4", "VARCHAR", 20);

  const testTable2 = new Table("TestTable2", [col12, col22, col3, col4], []);

  const pkConstraint2 = new PrimaryKeyConstraint("PK1", testTable2, [col1]);
  const uConstraint2 = new UniqueConstraint("uk1", testTable2, col2);
  const nnConstraint2 = new NotNullConstraint("nn1", testTable2, col2);
  const checkConstraint = new CheckConstraint("cc1", testTable2, col2, " > 2");

  const fkContstraint = new ForeignKeyConstraint(
    "fkTest",
    testTable,
    [col1],
    testTable2,
    [col1],
    "CASCADE",
    "CASCADE"
  );

  expect(testTable instanceof Table).toBe(true);
  expect(testTable2 instanceof Table).toBe(true);
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
