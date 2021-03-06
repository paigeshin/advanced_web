function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    //using apply
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle(){
    //even better using apply with arguments
    Car.apply(this, arguments);
    this.numWheels;
}