import { Metabase } from "../../../src/backends/postgresql/metabase"
import { VARCHAR } from "../../../src/backends/postgresql/postgresTypes";
import { Table, TableBuilder, Column, Sequence, View, SequenceBuilder } from "../../../src/backends/postgresql/postgresElements";


it("Create Postgresql metabase", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("add table", () => {
    let metabase = new Metabase();
    const col1 = new Column("Col1", new VARCHAR(20));
    const col2 = new Column("Col2", new VARCHAR(20));
    let table = TableBuilder.create()
        .setName("ExampleTable")
        .setSchema("ExampleSchema")
        .setColumns([col1, col2])
        .build();

    metabase.addTable(table);
    expect(metabase.tables.length === 1).toBe(true);
});


it("get table, add column", () => {
    // arrange
    let metabase = new Metabase();
    const col1 = new Column("Col1", new VARCHAR(20));
    const col2 = new Column("Col2", new VARCHAR(20));
    let initialTable = TableBuilder.create()
        .setName("ExampleTable")
        .setSchema("ExampleSchema")
        .setColumns([col1, col2])
        .build();
    metabase.addTable(initialTable);

    let table = metabase.getTable("ExampleTable", "ExampleSchema");
    const col = new Column("Col3", VARCHAR, 24, undefined, undefined, undefined, undefined,
        undefined);

    // action
    table.addColumn(col);
    let result = metabase.getTable("ExampleTable", "ExampleSchema");

    // assert
    expect(result.columns.length === 3).toBe(true);
    expect(result instanceof Table).toBe(true);
});

it("get table, alter column", () => {
    // arrange
    let metabase = new Metabase();
    const col1 = new Column("Col1", new VARCHAR(20));
    const col2 = new Column("Col2", new VARCHAR(20));
    let initialTable = TableBuilder.create()
        .setName("ExampleTable")
        .setSchema("ExampleSchema")
        .setColumns([col1, col2])
        .build();
    metabase.addTable(initialTable);

    let table = metabase.getTable("ExampleTable", "ExampleSchema");
    let col = table.getColumn("col1")
    col.name = "Col11"

    let result = metabase.getTable("ExampleTable", "ExampleSchema").getColumn("Col11");
    // assert
    expect(result instanceof Column).toBe(true);
});

it("get table, drop column", () => {
    // arrange
    let metabase = new Metabase();
    const col1 = new Column("Col1", new VARCHAR(20));
    const col2 = new Column("Col2", new VARCHAR(20));
    let initialTable = TableBuilder.create()
        .setName("ExampleTable")
        .setSchema("ExampleSchema")
        .setColumns([col1, col2])
        .build();
    metabase.addTable(initialTable);

    let table = metabase.getTable("ExampleTable", "ExampleSchema");
    table.removeColumn("col1");

    let result = metabase.getTable("ExampleTable", "ExampleSchema");
    // assert
    expect(result.columns[0].name == "Col1").toBe(true);
    expect(result.columns[1].name == "Col2").toBe(true);
    expect(result.columns.length === 2).toBe(true);
});



it("drop table", () => {
    // arrage
    let metabase = new Metabase();
    const col1 = new Column("Col1", new VARCHAR(20));
    const col2 = new Column("Col2", new VARCHAR(20));
    let initialTable = TableBuilder.create()
        .setName("ExampleTable")
        .setSchema("ExampleSchema")
        .setColumns([col1, col2])
        .build();
    metabase.addTable(initialTable);
    expect(metabase.tables.length === 1).toBe(true);

    // action
    metabase.dropTable(metabase.tables[0]);

    // assert
    expect(metabase.tables.length === 0).toBe(true);
});


it("add sequence", () => {
    // arrange
    let metabase = new Metabase();
    // action
    let sequence = SequenceBuilder.create().setName("Seq1").setSchema("ExampleSchema").setStart(1).setMaxvalue(10).setCycle(true)
    metabase.addSequence(sequence);
    // assert
    expect(metabase.getSequence("Seq1", "ExampleSchema") instanceof Sequence).toBe(false);
    expect(metabase.sequences.length === 1).toBe(false);
});

it("alter sequence", () => {
    // arrange
    let metabase = new Metabase();
    let sequence = SequenceBuilder.create().setName("Seq1").setSchema("ExampleSchema").setStart(1).setMaxvalue(10).setCycle(true)
    metabase.addSequence(sequence);

    // action
    metabase.getSequence("Seq1", "ExampleSchema").name = "Seq11";
    // assert
    let result = metabase.getSequence("Seq11", "ExampleSchema");
    expect(result instanceof Sequence).toBe(true);
    expect(result.name === "Seq11").toBe(true);
});

it("drop sequence", () => {
    // arrange
    let metabase = new Metabase();
    let sequence = SequenceBuilder.create().setName("Seq1").setSchema("ExampleSchema").setStart(1).setMaxvalue(10).setCycle(true)
    metabase.addSequence(sequence);

    // action
    metabase.dropSequence(metabase.getSequence("Seq1", "ExampleSchema"));
    // assert
    expect(metabase.sequences.length === 0).toBe(true);
});

it("add view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});

it("drop view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});

it("get table", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});

it("get column", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});

it("get sequence", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});

it("get view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(false);
});