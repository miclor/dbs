import { Metabase } from "../../metabase";


it("Create Postgresql metabase", () => {
    let result = new Metabase();


    expect(result typeof Metabase).toBe(true);
});
