// 定义一个构造函数,name传入字符串,age传入number,location传入数组
function Person(name,age,location){
	this.name = name;
	this.age = age;
	this.location = location;
	this.introduceSelf = function(){
		console.log(`My name is ${this.name},my age is ${this.age},my location is ${this.location[0]} ${this.location[1]}`);
	}
}

// 对象原型委派给对象,类似于java中被abtract关键字修饰的接口,提供公共方法
const personPrototype = {
	
	greet(){
		console.info(`嗨,请问你是:${this.name},年龄是: ${this.age},住址是: ${this.location[0]} ${this.location[1]}吗?`);
	}
	
}

// 新建两个person对象
const person1 = new Person("刘备",48,["山东省","枣庄市"]);
person1.introduceSelf();

const person2 = new Person("曹操",48,["河南省","信阳市"]);


// 将personPrototype原型方法赋给person1对象,此时person1就拥有了原型中的所有方法
Object.assign(person1,personPrototype);
person1.greet();
// person2未接收原型方法赋值,所以person2调用greet方法会报错
// person2.greet();
// 判断对象的属性是否是自有属性
console.info(Object.hasOwn(person1,"name"));  // true
console.info(Object.hasOwn(person1,"greet")); // fasle



