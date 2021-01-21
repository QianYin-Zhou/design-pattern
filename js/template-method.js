// 模板方法模式

// 抽象类
class TestPaper {
	constructor() {
		if(new.target == TestPaper) {
			throw new Error('不能实例化抽象类TestPaper');
		}
	}
	TemplateMethod() {
		this.question1();
		this.question2();
		this.question3();
		this.answer1();
		this.answer2();
		this.answer3();
	}
	question1() {	console.log("going abstract question1 method");	}
	question2() {	console.log("going  abstract question2 method");	}
	question3() {	console.log("going abstract question3 method");	}
	answer1() {	console.log("going abstract answer1 method");	}
	answer2() {	console.log("going abstract answer2 method");	}
	answer3() {	console.log("going abstract answer3 method");	}
}

class TestPaperA extends TestPaper {
	answer1() {	console.log("I am Concrete TestPaperA answer1 method");	}
	answer2() {	console.log("I am Concrete TestPaperA answer2 method");	}
	answer3() {	console.log("I am Concrete TestPaperA answer3 method");	}
}

class TestPaperB extends TestPaper {
	answer1() {	console.log("I am Concrete TestPaperB answer1 method");	}
	answer2() {	console.log("I am Concrete TestPaperB answer2 method");	}
}

class TestPaperC extends TestPaper {}