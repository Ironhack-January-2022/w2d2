// inheritance

// this is the parent class that holds the shared properties and functionalities 
// of cat and bird
class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}

	makeSound() {
		console.log(this.sound)
	}
}
// extends <name of the parent class>
class Cat extends Animal {
	constructor(name, sound, number) {
		super(name, sound)
		this.numberOfLives = number
	}
	// overriding the parent method -> this method gets used if we call
	// cat.makeSound()
	makeSound() {
		console.log('this is the cats sound method')
	}
	meow() {
		// we can use the 'super' keyword to call a function from the parent
		// class
		super.makeSound()
	}

}

class Bird extends Animal {
	constructor(name, sound) {
		// in a child class we need to refer to the parent constructor
		// here using 'super()'
		super(name, sound)
	}

	fly() {
		console.log('flying')
	}
}

const bird = new Bird('pete', 'peep')
console.log(bird)
const cat = new Cat('Tom', 'meooow', 7)
console.log(cat)
console.log(cat.makeSound())
cat.meow()