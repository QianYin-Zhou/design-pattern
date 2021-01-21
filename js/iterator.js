// 迭代器模式
// example: aggregate pocket
// 例子： 聚合“口袋”

class Aggregate {
	constructor() {
		if(new.target == Aggregate) {
			throw new Error("You can not new a interface");
		}
	}
	in() {}  // put into the pocket
	out() {}  // take out the pocket
	createIterator() {}
}

class ConcreteAggregate extends Aggregate {
 constructor() {
	 super();
	 this.pocket = [];
 }

 in(obj) {
	this.pocket.push(obj);
 }

 out() {
	this.pocket.pop();
 }

 createIterator() {
	 return new ConcreteIterator(this.pocket);
 }

}

class Iterator {
	constructor() {
		if(new.target == Aggregate) {
			throw new Error("You can not new a interface");
		}
	}

	first() {}
	next() {}
	hasNext() {}
  currentItem() {}
}

class ConcreteIterator extends Iterator {
	constructor(pocket) {
		super();
		this.index = -1;
		this.pocket = pocket;
	}

	hasNext() {
		return this.index < this.pocket.length-1 ? true : false;
	} 

	first() {
		return this.pocket[0];
	}

	next() {
		if(this.hasNext()) {
			return this.pocket[++this.index];
		} else {
			return null;
		}
	}

	currentItem() {
		return this.pocket[this.index];
	}
}