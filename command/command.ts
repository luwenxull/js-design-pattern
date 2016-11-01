interface Command {
    execute(): void
}

class DanceCommand implements Command {
    constructor(public receiver) { }
    execute() {
        this.receiver.dance()
    }
}

class JumpCommand implements Command {
    constructor(public receiver) { }
    execute() {
        this.receiver.jump()
    }
}

let people = {
    name: 'luwenxu',
    dance() {
        console.log('dancing');
    },
    jump() {
        console.log('jumping');
    }
}

interface Invoker {
    do(command: Command): void
    [propName:string]:any
}

let switcher: Invoker = {
    commandList:[],
    do(command) {
        this.commandList.push(command)
        command.execute()
    }
}

let dance = new DanceCommand(people),
    jump = new JumpCommand(people);

switcher.do(dance);
switcher.do(jump);

console.log(switcher);
