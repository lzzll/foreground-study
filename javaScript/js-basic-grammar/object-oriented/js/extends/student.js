class Student extends Person{
	grade;
	
	// 一个类中只有一个构造方法,继承父类时,如果需要用到父类的属性,需要单独将父类的属性给初始化到构造方法中
	constructor(grade){
		super();
		this.grade = grade;
	}
	
	study(){
		console.info(`my name is ${super.name},i study in ${this.grade}`);
	}
	
}

// 子类中实例化对象如果不设置父类属性,即使父类属性设置了默认值子类也无法获取
const student = new Student("六年级");
student.introduceSelf();  // my name is 法正,i live in 四川省,成都市
student.study();  // my name is undefined,i study in 六年级
student.name = "孔明";
student.study();  // my name is undefined,i study in 六年级
