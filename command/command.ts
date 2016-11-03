interface Command {
    execute(): void
}

/*
    命令类
    每个命令类都有一个excute方法
*/
class DanceCommand implements Command {
    /**命令的执行者
     * @param  {} receiver
     */
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

/*命令执行者*/
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

/*用命令模式优化回调函数模式*/
let btn=document.getElementById('command-btn');
btn.onclick=function(){
    switcher.do(dance)
}

