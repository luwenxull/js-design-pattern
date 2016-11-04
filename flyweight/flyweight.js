var Computer = (function () {
    function Computer(name, memory, hardDisk) {
        this.name = name;
        this.memory = memory;
        this.hardDisk = hardDisk;
    }
    return Computer;
}());
var computerList = [];
function listComputer(num) {
    var i = 0;
    while (i++ < num) {
        computerList.push(new Computer('' + i, 8, 100));
    }
    // console.log(computerList);
}
listComputer(10000);
/*
    区分内部状态和外部状态
*/
var FlyweightComputer = (function () {
    function FlyweightComputer(memory, hardDisk) {
        this.memory = memory;
        this.hardDisk = hardDisk;
    }
    return FlyweightComputer;
}());
var getFlyweightComputer = (function () {
    var flyweightComputer;
    return function () {
        return flyweightComputer || (flyweightComputer = new FlyweightComputer(16, 500));
    };
})();
var Computer2 = (function () {
    function Computer2(name) {
        this.name = name;
        this.core = getFlyweightComputer();
    }
    return Computer2;
}());
var computerList2 = [];
function listComputer2(num) {
    var i = 0;
    while (i++ < num) {
        computerList2.push(new Computer2('' + i));
    }
}
listComputer2(10000);
