// OOP - Object Oriented Programming 
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
console.log(squares.length)
let dice;

const player1 = {
	name: 'Bob',
	color: 'red',
	position: 0,
	cash: 1000,
	displayName: function () {
		return `my name is ${this.name}`
	},
	move: function () {
		console.log('moving 🙈')
		// this refers to the object that we are in
		console.log(this)
		dice = 1 + Math.floor(6 * Math.random())
		this.position = (this.position + dice) % squares.length
		this.cash += squares[this.position]
	},
	display: function () {
		console.log(`${this.name} has ${this.cash}`)
	}

}
player1.move()
player1.display()

const player2 = {
	name: 'Alice',
	color: 'blue',
	position: 0,
	cash: 1000,

}

// roll the dice

dice = 1 + Math.floor(6 * Math.random())

// moving the player
// player1.position = player1.position + dice
// if ((player1.position + dice) > squares.length - 1) {
// 	player1.position = player1.position + dice - squares.length
// } else {
// 	player1.position = player1.position + dice
// }

// or shorter using modulo
player1.position = (player1.position + dice) % squares.length

// change the cash
player1.cash += squares[player1.position]

// check the end condition
if (player1.cash < 0) {
	console.log(`Game over for ${player1.name}`)
}

// console.log(player1)

// we create a class - blueprint for objects
class Player {
	constructor(nameParam, colorParam) {
		this.name = nameParam
		this.color = colorParam
		this.cash = 1000
		this.position = 0
	}
	greet() {
		return 'hello'
	}
	displayName() {
		return `My name is ${this.name}`
	}
}

// use that class to create a new object - instantiate the class
const myPlayer = new Player('Bob', 'blue')
// calling a method on the object
const greeting = myPlayer.greet()
// access a property
console.log(myPlayer.name)
console.log(greeting)
myPlayer.age = 23
console.log(myPlayer)