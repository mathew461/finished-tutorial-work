class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
       return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `I am ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += `My major is ${this.major}.`;
        }
        
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    homeLocation() {
        return !!this.location
    }
    getGreeting() {
        let home = super.getGreeting();

        if (this.homeLocation()) {
            home += ` I'm visiting from ${this.location}.`;
        }

        return home;
    }
}




const me = new Traveller('Mathew Wrigley', 30, 'Blackpool');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());









// this is the command to run Babel - babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch