var Singleton = (function () {
    function Singleton(name) {
        this.name = name;
    }
    ;
    Singleton.prototype.getName = function () {
        return this.name;
    };
    ;
    Singleton.getInstance = function (name) {
        if (!this.instance)
            this.instance = new Singleton(name);
        return this.instance;
    };
    return Singleton;
}());
var a = Singleton.getInstance('even'), b = Singleton.getInstance('odd');
console.log(a, b);
