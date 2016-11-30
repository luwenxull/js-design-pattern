/*
    定义：
        在不改变原类文件以及不使用继承的情况下，动态地将责任附加到对象上，从而实现动态拓展一个对象的功能。它是通过创建一个包装对象，也就是装饰来包裹真实的对象。
*/

/*组件基类*/
interface Person {
    eat(food: string): void
}

/**
 * 青少年
 * 实现Person接口
 * 
 * @class Teenager
 * @implements {Person}
 */
class Teenager implements Person {
    eat(food) {
        console.log(food + ' is nice');
    }
}


/**
 * 装饰接口
 * 
 * 
 * @interface PersonWithTablewaree
 * @extends {Person}
 */
interface PersonWithTablewaree extends Person {}

/**
 * 装饰类
 * 使用筷子 
 * 
 * @class UseChopsticks
 * @implements {PersonWithTablewaree}
 */
class UseChopsticks implements PersonWithTablewaree {
    constructor(public person: Person) { }
    eat(food) {
        this.person.eat(food);
        console.log('use chopsticks');
    }
}

/**
 * 装饰类
 * 使用刀叉
 * 
 * @class UseFork
 * @implements {PersonWithTablewaree}
 */
class UseFork implements PersonWithTablewaree {
    constructor(public person: Person) { }
    eat(food) {
        this.person.eat(food);
        console.log('use fork');
    }
}

function client_dec(){
    let teen=new Teenager(); 
    let forkUser=new UseFork(teen);
    let chopsticksUser=new UseChopsticks(teen);
    teen.eat('肉');
    forkUser.eat('鱼');
    chopsticksUser.eat('鸡肉');
}

client_dec()