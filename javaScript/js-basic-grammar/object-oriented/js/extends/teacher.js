class Teacher extends Person{
	stageSubject;
	
	constructor(name,location,stageSubject){
		super(name,location);
		this.stageSubject = stageSubject;
	}
	
	teach(){
		console.info(`i teach ${this.stageSubject},i live in ${this.location}`)
	}
	
	
}

const teacher = new Teacher("法正",["四川省","成都市"],"法律");
teacher.introduceSelf();  // my name is 法正,i live in undefined
teacher.teach();  // i teach 法律,i live in undefined
console.info(teacher.location);  // undefined
// console.info(teacher.#location);  // 报错
// 此处赋值location,可以看作是teacher这个类单独扩展了一个location字段,和父类私有的location属性没有关系
teacher.location = ["重庆市"];
// console.info(teacher.#location); // 报错
teacher.teach();   // i teach 法律,i live in 重庆市