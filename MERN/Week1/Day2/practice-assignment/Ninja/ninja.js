class Ninja {
    constructor (name , speed=3,strength=3){
    this.name = name;
    this.health= 0;
    this.speed = speed;
    this.strength = strength ; 
 }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name,this.health,this.speed,this.strength);
    }

    drinkSake(){
        this.health += 10
       console.log(this.health);  
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
