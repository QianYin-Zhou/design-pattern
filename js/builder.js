//  建造者（Builder）模式
// 声明一个套餐Package
class Package {
	constructor() {
		this.hamburger = 0;
		this.coke = 0;
		this.fries = 0;
		this.friedChickenWings = 0;
	}
	addHamburger(count) {
		this.hamburger = count;
	}
	addCoke(count) {
		this.coke = count;
	}
	addFries(count) {
		this.fries = count;
	}
	addFriedChickenWings(count) {
		this.friedChickenWings = count;
	}
	show() {
		return `这个套餐有：${this.hamburger}个汉堡，${this.coke}瓶可乐，${this.fries}份薯条和${this.friedChickenWings}个炸鸡翅；`
	}
}

class Customer {
	constructor() {
		if(new.target == Customer) {
			throw new Error('不能实例化抽象类');  
		}
		this.package = new Package();
	}
	buildHamburger(count) {}
	buildCoke(count) {}
	buildFries(count) {}
	buildFriedChickenWings(count) {}
	getPackage() {
		return this.package;
	}
}

class Customer1 extends Customer {
	constructor() {
		super();
	}
	buildHamburger(count) {
		this.package.addHamburger(count);
	}
	buildCoke(count) {
		this.package.addCoke(count);
	}
	buildFries(count) {
		this.package.addFries(count);
	}
	buildFriedChickenWings(count) {
		this.package.addFriedChickenWings(count);
	}
}

class Customer2 extends Customer {}  //先玩着ConcreteBuilder1

class KFC {  //这是指挥者
	constructor(builder) {
		this.builder = builder;
	}
	construct(...counts) {  // 这里必须强制输入4个参数
		this.builder.buildHamburger(counts[0]);
		this.builder.buildCoke(counts[1]);
		this.builder.buildFries(counts[2]);
		this.builder.buildFriedChickenWings(counts[3]);
		return this.builder.getPackage();
	}
}