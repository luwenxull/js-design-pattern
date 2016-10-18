/*
    策略模式的思想：
    定义一系列的算法，把他们一个个封装起来，并且是他们可以相互替换。
    具体的说法也就是，由一个Context接收请求，然后由这个Context分发给不同的策略
*/
/**
 * 策略对象
 * @param  {string} publictype 策略类型
 * @param  {(val)=>any} action 策略算法
 */
class Strategy{
    constructor(public type:string,public action:(val)=>any){}
}

let strategies={
    S:new Strategy('S',(salary)=>{return salary*4}),
    A:new Strategy('A',(salary)=>{return salary*3}),
    B:new Strategy('B',(salary)=>{return salary*2})
};

class Bonus{
    constructor(public salary:number,public strategy:Strategy){}
    getSalary(){
        return this.strategy.action(this.salary)
    }
}

let bonus1=new Bonus(1200,strategies.S);
console.log(bonus1.getSalary());