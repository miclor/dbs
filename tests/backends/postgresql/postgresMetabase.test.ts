import { Metabase } from "../../../src/backends/postgresql/metabase"


it("Create Postgresql metabase", () => {
    let result = new Metabase();
    expect(result instanceof Metabase).toBe(true);
});
