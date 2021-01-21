// 命令模式

class Command {
	constructor() {
		if(new.target == Command) {
			throw new Error("不能实例化抽象类！");
		}
	}

	execute() { }
}

class LightOnCommand extends Command {
	constructor() {
		super();
		this.receiver = new Light();
	}
	execute() {
		console.log(`executing '${this.receiver.on()}' command...`);
	}
}

class LightOffCommand extends Command {
	constructor() {
		super();
		this.receiver = new Light();
	}
	execute() {
		console.log(`executing '${this.receiver.off()}' command...`);
	}
}

class DVDOnCommand extends Command {
	constructor() {
		super();
		this.receiver = new DVD();
	}
	execute() {
		console.log(`executing '${this.receiver.on()}' command...`);
	}
}

class DVDOffCommand extends Command {
	constructor() {
		super();
		this.receiver = new DVD();
	}
	execute() {
		console.log(`executing '${this.receiver.off()}' command...`);
	}
}

class Receiver {
	constructor() {
		if(new.target == Receiver) {
			throw new Error("不能实例化抽象类！");
		}
	}
	on() {}
	off() {}
}

class Light extends Receiver {
	on() {
		return "Turn on the Light";
	}

	off() {
		return "Turn off the Light";
	}
}

class DVD extends Receiver {
	on() {
		return "Turn on the DVD";
	}

	off() {
		return "Turn off the DVD";
	}
}

class RemoteControl {
	constructor() { }

	setCommand(command) {
		this.command = command;
	}

	buttonPush() {
		this.command.execute();
	}
}
