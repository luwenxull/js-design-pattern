/**
 * 最简单的单例示例
 * @param  {string} publicname
 * @returns Singleton
 */
class Singleton {
    constructor(public name: string) { };

    getName(): string {
        return this.name
    };

    static getInstance(name: string) {
        if (!this.instance) this.instance = new Singleton(name);
        return this.instance
    }

    static instance: Singleton
}

let a = Singleton.getInstance('even'),
    b = Singleton.getInstance('odd');

console.log(a==b);//true

/*通过闭包创建单例*/

let CreateDiv=(function(){
    let instance;
    let CreateDiv=function(html){
        if(instance) return instance;
        this.init(html);

        return instance=this;
    }

    CreateDiv.prototype.init=function(html){
        let div=document.createElement('div');
        div.innerHTML=html;
    }

    return CreateDiv
})()

/*用代理实现单例模式*/
let proxySingletonCreateDiv=(()=>{
    let instance;
    return function(html){
        if(instance) return instance;
        return instance = new CreateDiv2(html)
    }
})()

class CreateDiv2{
    /*同CreateDiv*/
    constructor(html){}
}

let singleton1=proxySingletonCreateDiv('good')
/*js中的单例模式*/
/*
    单例模式的核心是确保只有一个实例，并提供全局访问
*/

/**创建单例，
 * 并且是惰性单例。
 * 本质上是一个扩展的代理模式。
 * @param  {Function} fn
 */
let singletonCreator=function(fn){
    let instance;
    return function(){
        return instance || (instance=fn.apply(this,arguments))
    }
}

class Earth{
    constructor(public name:string){}
}

let getEarth=singletonCreator(()=>new Earth('地球'))

let earth=getEarth(),
earth2=getEarth();

console.log(earth==earth2);