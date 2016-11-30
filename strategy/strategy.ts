/*
    策略模式的思想：
        定义一系列的算法，把他们一个个封装起来，并且是他们可以相互替换。
    策略模式的结构：
        封装类：也叫上下文，对策略进行二次封装，目的是避免高层模块对策略的直接调用。
        抽象策略：通常情况下为一个接口，当各个实现类中存在着重复的逻辑时，则使用抽象类来封装这部分公共的代码，此时，策略模式看上去更像是模版方法模式。
        具体策略：具体策略角色通常由一组封装了算法的类来担任，这些类之间可以根据需要自由替换。
*/

/**
 * 策略对象
 * @param  {string} publictype 策略类型
 * @param  {} action 策略算法
 */
class Strategy {
    constructor(public type: string, public action) { }
}

let strategies = {
    S: new Strategy('S', (salary) => { return salary * 4 }),
    A: new Strategy('A', (salary) => { return salary * 3 }),
    B: new Strategy('B', (salary) => { return salary * 2 })
};

/*
 *策略封装类
 *（环境类）    
 */
class Bonus {
    private strategy:Strategy;
    constructor(public salary: number,public level:string) {
            this.strategy=strategies[level]
    }
    getSalary() {
        return this.strategy.action(this.salary)
    }
}

/*客户端代码*/
function client_strategy() {
    let bonus1 = new Bonus(1200,'S');
    console.log(bonus1.getSalary());
    
    let bonus2 = new Bonus(2200,'A');
    console.log(bonus2.getSalary());

    let bonus3 = new Bonus(1400,'B');
    console.log(bonus3.getSalary());
}

client_strategy()

/*表单验证*/
let isNonEmpty = new Strategy('isNonEmpty', (val, errMsg) => {
    if (val === '') return errMsg
});

let minLength = new Strategy('minLength', (val, errMsg) => {
    if (val.length < 6) return errMsg
});

let isMobile = new Strategy('isMobile', (val, errMsg) => {
    if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(val)) return errMsg
});

interface validateFieldItf {
    val: any,
    strategy: Strategy,
    errMsg: string
}

class Validator {
    constructor(public toBeValidate: validateFieldItf[] = []) { }
    add(val, strategy: Strategy, errMsg: string) {
        let obj: validateFieldItf = { val, strategy, errMsg }
        this.toBeValidate.push(obj);
    }
    start() {
        let errMsgs = [];
        for (let v of this.toBeValidate) {
            if (v.strategy.action(v.val, v.errMsg)) {
                errMsgs.push(v.errMsg)
            }
        }
        return errMsgs;
    }
}

function validate() {
    let validator = new Validator();
    validator.add('luwenxu', isNonEmpty, '用户名不能为空');
    validator.add('12456', minLength, '密码长度不能小于6位');
    validator.add('136454321', isMobile, '手机号码格式不正确');
    console.log(validator.start());
}

// validate()