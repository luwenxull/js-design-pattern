class Computer {
    constructor(public name: string, public memory: number, public hardDisk: number) {
    }
}

let computerList = [];
function listComputer(num: number) {
    let i = 0;
    while (i++ < num) {
        computerList.push(new Computer('' + i, 8, 100))
    }
    // console.log(computerList);
}

listComputer(10000);


/*
    区分内部状态和外部状态
*/

class FlyweightComputer{
    constructor(public memory:number,public hardDisk:number){}
}

let getFlyweightComputer=(function (){
    let flyweightComputer;
    return function(){
        return flyweightComputer || (flyweightComputer=new FlyweightComputer(16,500))
    }
})();

class Computer2{
    public name:string
    public core:FlyweightComputer
    constructor(name){
        this.name=name;
        this.core=getFlyweightComputer()
    }
}


let computerList2=[]
function listComputer2(num: number) {
    let i = 0;
    while (i++ < num) {
        computerList2.push(new Computer2('' + i))
    }
}

listComputer2(10000)