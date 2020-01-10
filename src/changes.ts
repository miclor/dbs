

class CreateTableStatement{
    text: string
    constructor(text: string) {
        this.text = text;
    }
};
class CreateSequenceStatement{
    text: string
    constructor(text: string) {
        this.text = text;
    }
};
class CreateViewStatement{
    text: string
    constructor(text: string) {
        this.text = text;
    }
};
class CreateIndexStatement{
    text: string
    constructor(text: string) {
        this.text = text;
    }
};

export class CreateChange {

    createTable(table_name: string): CreateTableStatement {
        let result = "CREATE TABLE " + table_name;
        return new CreateTableStatement(result);
    };
    createSequence(sequence_name: string): CreateSequenceStatement { 
        let result = "CREATE SEQUENCE " + sequence_name;        
        return new CreateSequenceStatement(result);
    };

    createView(view_name: string): CreateViewStatement { 
        let result = "CREATE SEQUENCE " + view_name;                
        return new CreateViewStatement(result);
    };

    createIndex(index_name: string): CreateIndexStatement { 
        let result = "CREATE SEQUENCE " + index_name;        
        return new CreateSequenceStatement(result);        
    };

}

export class AlterChange {

    alterTable(table_name: string): AlterTableStatement {
        let result = "ALTER TABLE " + table_name;
        return new CreateTableStatement(result);
    };
    alterSequence(sequence_name: string): AlterSequenceStatement { 
        let result = "ALTER SEQUENCE " + sequence_name;        
        return new CreateSequenceStatement(result);
    };

    alterView(view_name: string): AlterViewStatement { 
        let result = "ALTER SEQUENCE " + view_name;                
        return new CreateViewStatement(result);
    };
    
    alterIndex(index_name: string): AlterIndexStatement { 
        let result = "ALTER SEQUENCE " + index_name;        
        return new CreateSequenceStatement(result);        
    };

}

