// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        return "VROOM!";
    }
    toString(){
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        //super의 장점이 무엇인가.. this.make 같은 redundant 코드들을 재작성하지 않아도 된다.
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype