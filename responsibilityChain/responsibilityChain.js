/*
    责任连模式：
        定义：使多个对象都有机会处理请求，从而避免了请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有对象处理它为止。
    责任链结构：
        抽象处理类：抽象处理类中主要包含一个指向下一处理类的成员变量nextHandler和一个处理请求的方法handRequest，handRequest方法的主要主要思想是，如果满足处理的条件，则有本处理类来进行处理，否则由nextHandler来处理。
        具体处理类：具体处理类主要是对具体的处理逻辑和处理的适用条件进行实现。
*/
var CPU1 = (function () {
    function CPU1() {
    }
    CPU1.prototype.handle = function (type) {
        if (type == 1) {
            console.log('handled by cpu1');
        }
        else {
            this.nextHandler.handle(type);
        }
    };
    CPU1.prototype.setNextHandler = function (handler) {
        return this.nextHandler = handler;
    };
    return CPU1;
}());
var CPU2 = (function () {
    function CPU2() {
    }
    CPU2.prototype.handle = function (type) {
        if (type == 2) {
            console.log('handled by cpu2');
        }
        else {
            this.nextHandler.handle(type);
        }
    };
    CPU2.prototype.setNextHandler = function (handler) {
        return this.nextHandler = handler;
    };
    return CPU2;
}());
function client() {
    var cpu1 = new CPU1(), cpu2 = new CPU2();
    cpu1.setNextHandler(cpu2);
    cpu1.handle(1);
    cpu1.handle(2);
}
client();
