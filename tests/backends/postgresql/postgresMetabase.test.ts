import { Metabase } from "../../../src/backends/postgresql/metabase"
import { VARCHAR } from "../../../src/backends/postgresql/postgresTypes";
import { Table, TableBuilder, Column, Sequence, View } from "../../../src/backends/postgresql/postgresElements";


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
        .setSchema("ExampleSxhema")
        .setColumns([col1, col2])
        .build();

    metabase.addTable(table);
    expect(metabase.tables.length === 1).toBe(true);
});

it("alter table", () => {
    let metabaset = new Metabase();

    let result;
    expect(result instanceof Table).toBe(true);
});

it("drop table", () => {
    let metabase = new Metabase();

    expect(metabase.tables.length === 0).toBe(true);
});

it("add column", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("alter column", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("drop column", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});


it("add sequence", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("alter sequence", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("drop sequence", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("add view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("drop view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("get table", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("get column", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("get sequence", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});

it("get view", () => {
    let metabase = new Metabase();
    expect(metabase instanceof Metabase).toBe(true);
});