class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }

}

class Unit extends Card{ 
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res=target.res-this.power;
    }
    show(){
        console.log(this.power,this.res);
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }

    hardalgo(target){
        target.res+=this.magnitud;
        console.log(target.res);
    }

    hardpower(target){
        target.power+=this.magnitud;
        console.log(target.power);
    }


    play( target ) {
        if( target instanceof Unit ) {
            this.hardalgo(target)
            console.log(this.text);
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }


}

const unit1 = new Unit (`Red Belt Ninja`,3,3,4)
const unit2 = new Unit (`Black Belt Ninja`,4,5,4)
const algo = new Effect (`Hard Algorithm`,2,`increase targets resilience by 3`,`resilence`,+3)
const rejection = new Effect(`Unhandled Promise Rejection`,1,`increase targets resilience by 2`,`resilence`,-2)
const pair = new Effect (`Pair Programming`,3,`increase targets power by 2`,`power`,+2)
algo.hardalgo(unit1);
algo.play(unit1);
rejection.hardalgo(unit1);
rejection.play(unit1);
pair.hardpower(unit1);
pair.play(unit1);
unit2.attack(unit1);



    