// 策略模式

// 抽象策略类
class TravelStrategy {
	constructor() {
		if(new.target == TravelStrategy) {
			throw new Error('不能实例化抽象类TravelStrategy');  
		}
	}
	travel() {}   
}

// 环境类
class Person {
	constructor() { }
	setStrategy(strategy) {
		this.strategy = strategy;
	}
	travel() { 
		this.strategy.travel();
	}
}

// 具体策略类1
class AirplaneStrategy extends TravelStrategy {
	travel() {
		console.log("Travel use airplane...");
	}
}
// 具体策略类2
class TrainStrategy extends TravelStrategy {
	travel() {
		console.log("Travel use train...");
	}
}
class BicycleStrategy extends TravelStrategy { }