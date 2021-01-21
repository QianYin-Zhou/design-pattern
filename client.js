// client
let pocketAggregate = new ConcreteAggregate();
pocketAggregate.in("钥匙");
pocketAggregate.in("纸巾");
pocketAggregate.in("口红");
pocketAggregate.in("身份证");
let it = pocketAggregate.createIterator();
console.log(`--- 第一个是${it.first()} ---`);
console.log(`--- 开始遍历我的口袋：`);
while(it.hasNext()) {
	console.log(it.next());
}
console.log(`--- 遍历结束！`);
console.log(`--- 当前是${it.currentItem()} ---`);
