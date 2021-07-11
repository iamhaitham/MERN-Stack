class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name: " + this.name);
    }
    showStats() {
        console.log(`Name:  + ${this.name} +  Strength:  + ${this.strength} +  Speed:  + ${this.speed} +  Health:  + ${this.health}`);
    }
    drinkWater() {
        this.health += 10;
    }
}