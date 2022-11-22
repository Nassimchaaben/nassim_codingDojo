class Ninja {
    constructor (name){
    this.name = name;
    this.health= 0;
    this.speed = 3;
    this.strength = 3 ; 
 }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name,this.health,this.speed,this.strength);
    }

    drinkSake(){
        this.health += 10
    //    console.log(this.health);  
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.wisdom=10;
        this.health= 200;
        this.speed = 10;
        this.strength = 10; 
    }
    drinkSake(){
       this.health += 10;
       console.log(this.health);  
    }
    
    speakWisdom(msg){
        console.log(msg);

    }
    showStats(){
        console.log('***********');
        console.log(this.name,this.health,this.speed,this.strength);
    }
}


const ninja1 = new Ninja('Shifu');
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.drinkSake();
superSensei.speakWisdom("What one programmer can do in one month, two programmers can do in two months.");
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
