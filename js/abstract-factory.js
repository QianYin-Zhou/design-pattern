// 抽象工厂模式（Abstract Factory）
// 
class AbstractFactory {
	constructor() {
		if(new.target == AbstractFactory) {
			throw new Error('不能实例化抽象类');  
		}
	}
	createTShirt() { }
	createJacket() { }
}

class ConcreteFactory1 extends AbstractFactory {
	constructor() {
		super();
	}
}

class ConcreteFactory2 extends AbstractFactory {
	constructor() {
		super();
	}
}

class TShirtFactory { 
	constructor() {
    if (new.target === TShirtFactory) {
      throw new Error('不能实例化抽象类')
    }
  }
}
class TShirtA extends TShirtFactory { }
class TShirtB extends TShirtFactory { }

class JacketFactory { 
	constructor() {
    if (new.target === JacketFactory) {
      throw new Error('不能实例化抽象类')
    }
  }
}
class JacketA extends JacketFactory { }
class JacketB extends JacketFactory { }

