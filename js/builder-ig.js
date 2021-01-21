// 建造者模式 -- 省略指挥者角色
// 题目：用户选择电脑配件
class Computer {
	constructor() {
		this.cpu = "default";
		this.memory = "default";
		this.videoCard = "default";
		this.motherboard = "default";
		this.hardDisk = "default";
		this.monitor = "default";
		this.keyboard = "default";
		this.mouse = "default";
	}
	setCpu(s) { this.cpu = s }
	setMemory(s) { this.memory = s }
	setVideoCard(s) { this.videoCard = s }
	setMotherboard(s) { this.motherboard = s }
	setHardDisk(s) { this.hardDisk = s }
	setMonitor(s) { this.monitor = s }
	setKeyboard(s) { this.keyboard = s }
	setMouse(s) { this.mouse = s}
	show() {
		return  `
			选的电脑配件是
			cpu:  ${this.cpu};
			内存条:  ${this.memory};
			显卡:  ${this.videoCard};
			主板:  ${this.motherboard};
			硬盘:  ${this.hardDisk};
			显示器:  ${this.monitor};
			键盘:  ${this.keyboard};
			鼠标:  ${this.mouse};
		`;
	}
}

class ComputerBuilder {
	constructor(Fittings) {
		if(new.target == ComputerBuilder) {
			throw new Error('不能实例化抽象类ComputerBuilder');  
		}
		this.fittings = Fittings;
		this.computer = new Computer();
	}
	buildCpu(s) {}
	buildMemory(s) {}
	buildVideoCard(s) {}
	buildMotherboard(s) {}
	buildHardDisk(s) {}
	buildMonitor(s) {}
	buildKeyboard(s) {}
	buildMouse(s) {}
	getComputer() {}
	construct() {}
}

class User1 extends ComputerBuilder {
	constructor(Fittings) {
		super(Fittings);
	}
	buildCpu(s) {
		return this.computer.setCpu(s);
	}
	buildMemory(s) {
		return this.computer.setMemory(s);
	}
	buildVideoCard(s) {
		return this.computer.setVideoCard(s);
	}
	buildMotherboard(s) {
		return this.computer.setMotherboard(s);
	}
	buildHardDisk(s) {
		return this.computer.setHardDisk(s);
	}
	buildMonitor(s) {
		return this.computer.setMonitor(s);
	}
	buildKeyboard(s) {
		return this.computer.setKeyboard(s);
	}
	buildMouse(s) {
		return this.computer.setMouse(s);
	}
	getComputer() {
		return this.computer;
	}
	construct() {   // 这里必须强制输入8个参数
		this.buildCpu(this.fittings[0]);
		this.buildMemory(this.fittings[1]); 
		this.buildVideoCard(this.fittings[2]);
		this.buildMotherboard(this.fittings[3]);
		this.buildHardDisk(this.fittings[4]); 
		this.buildMonitor(this.fittings[5]); 
		this.buildKeyboard(this.fittings[6]); 
		this.buildMouse(this.fittings[7]); 
		return this.getComputer();
	}
}