//THIS IS A TESTING FILE


class Car {
    name;
    speed;
    miles;
    lights;
    numberOfDoors;
    numberOfWheels;
    typeOfFuel;
    constructor(name, miles, numberOfDoors, numberOfWheels, typeOfFuel) {
        this.name = name;
        this.speed = 0;
        this.miles = miles;
        this.lights = false;
        this.numberOfDoors = numberOfDoors;
        this.numberOfWheels;
        this.typeOfFuel = typeOfFuel;
    }
    //getName this type of function is called a getter function. 
    getName() {
        return this.name;
    }
    //setName this type of function is called a setter function.
    setName(name) {
        this.name = name;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getMiles() {
        return this.miles;
    }
    setMiles(miles) {
        this.miles = miles;
    }
    getLights() {
        return this.lights;
    }
    toggleLights() {
        this.lights = !this.lights;
    }
    getNumberOfDoors() {
        return this.numberOfDoors;
    }
    getNumberOfWheels() {
        return this.numberOfWheels;
    }
    getTypeOfFuel() {
        return this.typeOfFuel;
    }
}