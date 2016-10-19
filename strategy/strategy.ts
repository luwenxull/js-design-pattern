/*
    策略模式的思想：
    定义一系列的算法，把他们一个个封装起来，并且是他们可以相互替换。
    具体的说法也就是，由一个Context接收请求，然后由这个Context分发给不同的策略
*/
/**
 * 策略对象
 * @param  {string} publictype 策略类型
 * @param  {} action 策略算法
 */
class Strategy{
    constructor(public type:string,public action){}
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

/*表单验证*/
let isNonEmpty=new Strategy('isNonEmpty',(val,errMsg)=>{
    if(val==='') return errMsg
});

let minLength=new Strategy('minLength',(val,errMsg)=>{
    if(val.length<6) return errMsg
});

let isMobile=new Strategy('isMobile',(val,errMsg)=>{
    if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(val)) return errMsg
});

interface validateFieldItf{
    val:any,
    strategy:Strategy,
    errMsg:string
}

class Validator{
    constructor(public toBeValidate:validateFieldItf[]=[]){}
    add(val,strategy:Strategy,errMsg:string){
        let obj:validateFieldItf={val,strategy,errMsg}
        this.toBeValidate.push(obj);
    }
    start(){
        let errMsgs=[];
        for(let v of this.toBeValidate){
            if(v.strategy.action(v.val,v.errMsg)){
                errMsgs.push(v.errMsg)
            }
        }
        return errMsgs;
    }
}

function validate(){
    let validator=new Validator();
    validator.add('luwenxu',isNonEmpty,'用户名不能为空');
    validator.add('12456',minLength,'密码长度不能小于6位');
    validator.add('136454321',isMobile,'手机号码格式不正确');
    console.log(validator.start()); 
}

validate()