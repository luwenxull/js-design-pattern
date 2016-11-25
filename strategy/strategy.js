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
var Strategy = (function () {
    function Strategy(type, action) {
        this.type = type;
        this.action = action;
    }
    return Strategy;
}());
var strategies = {
    S: new Strategy('S', function (salary) { return salary * 4; }),
    A: new Strategy('A', function (salary) { return salary * 3; }),
    B: new Strategy('B', function (salary) { return salary * 2; })
};
/*策略封装类*/
var Bonus = (function () {
    function Bonus(salary, level) {
        this.salary = salary;
        this.level = level;
        this.strategy = strategies[level];
    }
    Bonus.prototype.getSalary = function () {
        return this.strategy.action(this.salary);
    };
    return Bonus;
}());
/*客户端代码*/
function client() {
    var bonus1 = new Bonus(1200, 'S');
    console.log(bonus1.getSalary());
    var bonus2 = new Bonus(2200, 'A');
    console.log(bonus2.getSalary());
    var bonus3 = new Bonus(1400, 'B');
    console.log(bonus3.getSalary());
}
client();
/*表单验证*/
var isNonEmpty = new Strategy('isNonEmpty', function (val, errMsg) {
    if (val === '')
        return errMsg;
});
var minLength = new Strategy('minLength', function (val, errMsg) {
    if (val.length < 6)
        return errMsg;
});
var isMobile = new Strategy('isMobile', function (val, errMsg) {
    if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(val))
        return errMsg;
});
var Validator = (function () {
    function Validator(toBeValidate) {
        if (toBeValidate === void 0) { toBeValidate = []; }
        this.toBeValidate = toBeValidate;
    }
    Validator.prototype.add = function (val, strategy, errMsg) {
        var obj = { val: val, strategy: strategy, errMsg: errMsg };
        this.toBeValidate.push(obj);
    };
    Validator.prototype.start = function () {
        var errMsgs = [];
        for (var _i = 0, _a = this.toBeValidate; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.strategy.action(v.val, v.errMsg)) {
                errMsgs.push(v.errMsg);
            }
        }
        return errMsgs;
    };
    return Validator;
}());
function validate() {
    var validator = new Validator();
    validator.add('luwenxu', isNonEmpty, '用户名不能为空');
    validator.add('12456', minLength, '密码长度不能小于6位');
    validator.add('136454321', isMobile, '手机号码格式不正确');
    console.log(validator.start());
}
// validate() 
