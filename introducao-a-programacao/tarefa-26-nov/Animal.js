class Animal {
    constructor(name, type){
        this.name = name
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }
}

class Cat extends Animal {
    constructor(name, cuteness){
        super(name)
        this.cuteness = cuteness
    }
}

export default Animal