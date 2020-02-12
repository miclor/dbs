

interface Command {
    execute(): void;
}

export abstract class CreateTableCommand implements Command {
    public execute(): void { };
}

export abstract class AlterTableCommand implements Command {
    public execute(): void { };
}

export abstract class DropTableCommand implements Command {
    public execute(): void { };
}

export abstract class CreateColumnCommand implements Command {
    public execute(): void { };
}

export abstract class AlterColumnCommand implements Command {
    public execute(): void { };
}

export abstract class DropColumnCommand implements Command {
    public execute(): void { };
}


export interface CommandCreator {
    readJSON(): void;
    createCommand(parameters: json): void;
}
