interface TargetItf{
    show():void
}

interface AdapterItf{
    adapt(Source):TargetItf
}

class Target implements TargetItf{
    show(){
        console.log("i am target1");
    }
}

class Source{
    display(){
        console.log('oh...i use display method');
    }
}

class Adapter implements AdapterItf{
    adapt(source:Source){
        return {
            show(){
                source.display()
            }
        }
    }
} 

let source=new Source();
let adapter=new Adapter();
let adaptee=adapter.adapt(source);
adaptee.show();




