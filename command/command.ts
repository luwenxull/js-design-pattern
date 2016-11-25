/*
    命令模式的结构
        顾名思义，命令模式就是对命令的封装，首先来看一下命令模式类图中的基本结构：

        Command类：是一个抽象类，类中对需要执行的命令进行声明，一般来说要对外公布一个execute方法用来执行命令。
        ConcreteCommand类：Command类的实现类，对抽象类中声明的方法进行实现。
        Client类：最终的客户端调用类。
        以上三个类的作用应该是比较好理解的，下面我们重点说一下Invoker类和Recevier类。

        Invoker类：调用者，负责调用命令。
        Receiver类：接收者，负责接收命令并且执行命令。
*/

interface Command {
    execute(): void
}

/*
    命令类
    每个命令类都有一个excute方法
*/

class DanceCommand implements Command {
    /**
     * @param {any} receiver：命令的接收者
     * 
     * @memberOf DanceCommand
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
    [propName: string]: any
}

let switcher: Invoker = {
    commandList: [],
    do(command) {
        this.commandList.push(command)
        command.execute()
    }
}


/*客户端逻辑*/
function clien() {
    let dance = new DanceCommand(people),
        jump = new JumpCommand(people);

        //客户端直接调用命令
        dance.execute();

        //通过调用者调用命令
        switcher.do(jump);
}
