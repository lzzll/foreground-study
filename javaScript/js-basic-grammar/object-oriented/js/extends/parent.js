class Person {
	name = "诸葛亮";
	// 用#修饰的属性为私有属性,定义的私有属性在构造函数中赋值和使用也需要使用私有属性的标识"#location",如果未使用该标识,那私有属性效果不生效
	// 定义了私有属性之后除了当前类,其它地方访问该属性会报错或者获取到undefined的值
	#location;
	
	// 因为js中一个类只有一个构造函数,所以没有参数的时候创建的实体类也无法获取到默认值
	constructor(name,location){
		this.name = name;
		this.#location = location
	}
	
	introduceSelf() {
		console.info(`my name is ${this.name},i live in ${this.#location}`);
	}
	
	// 私有方法和私有属性一样,只能在当前类中调用
	#eat(){
		console.info(" this is a private function");
	}
	
}

const person = new Person("孙权",["江苏省","南京市"]);
const person1 = new Person();
person.introduceSelf();   // my name is 孙权,i live in 江苏省,南京市
person1.introduceSelf();  // my name is undefined,i live in undefined
