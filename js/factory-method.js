// 工厂方法模式（Factory Method）
// 抽象工厂
class WasherFactory {
	constructor() {
		if(new.target == WasherFactory) {
			throw new Error('不能实例化抽象类');  // js不像java,c#等语言，它没有接口、抽象类的概念
		}
	}
	newWasher() {}
}

// 具体工厂1
class Washer1Factory extends WasherFactory {
	constructor() {
		super();
	}
	newWasher() {
		return new Washer1Factory();
	}
}

// 具体工厂2
class Washer2Factory extends WasherFactory {
	constructor() {
		super();
	}
	newWasher() {
		return new Washer2Factory();
	}
}

// 抽象产品
class Washer {
	constructor() {
		if(new.target == Washer) {
			throw new Error('不能实例化抽象类');
		}
	}
	show() {}
}

// 具体产品1
class Washer1 extends Washer {
	constructor() {
		super();
	}
	show() {
		return "->工厂制作洗衣机1";
	}
}

// 具体产品1
class Washer2 extends Washer {
	constructor() {
		super();
	}
	show() {
		return "->工厂制作洗衣机2";
	}
}
