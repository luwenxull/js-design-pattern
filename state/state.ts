/**
 * 状态接口
 * 
 * @interface State
 */
interface State{
    writeProgramma(person:WorkPerson):void   
}

class WorkState implements State{
    writeProgramma(wp:WorkPerson){
        console.log('writing...,later,have a rest');
        wp.setState(new RestState())
    }
}

class RestState implements State{
    writeProgramma(wp:WorkPerson){
        console.log('reset...,later,go to sleep');
        wp.setState(new SleepState())
    }
}

class SleepState implements State{
    writeProgramma(wp:WorkPerson){
        console.log('sleping...,programma fuck off');
        // wp.setState(new RestState())
    }
}


/**
 * Context环境类
 * 环境类负责与客户端的交互
 * 
 * @class WorkPerson
 */
class WorkPerson{
    public state:State
    setState(newState:State){
        this.state=newState;
    }
    write(){
        this.state.writeProgramma(this);
    }
}

(function(){
    let wp=new WorkPerson();
    wp.setState(new WorkState());
    wp.write();
    wp.write();
    wp.write();
})()

/*策略模式和状态模式的异同*/
/*一个在代码中体现的比较显著的不同是：状态模式中，状态类应当持有context环境类的引用，以实现状态的切换，而策略模式中则没有*/