class Cosmetic {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
} 

class People {
	buy(name) {
		console.log('请帮我代购'+ name);
	}
}

class Purchasing extends People {
	constructor(name) {
		super(name);
	}
} 
