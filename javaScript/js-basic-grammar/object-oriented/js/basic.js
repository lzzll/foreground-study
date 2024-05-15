/**
	注意点:
		1,定义对象中每个属性后面都要跟一个逗号,否则会报下一个属性没初始化的错误;
		2,在对象内的函数属性可以用"this.属性名"的方式获取值,在外部方法内则要用"对象名.属性名"的方法获取值;
		3,将对象中的函数方法绑定到页面上时,必须使用"对象名.函数名()"的方式,直接使用"对象名.函数名"会无法调用方法,并且绑定点击事件后只会在页面初始化时调用一次方法;
		4,在对象外部定义方法可以通过"对象.函数名()"的方式来调用方法,此方法绑定点击事件可多次执行;
 */

// 设置一个初始化的用户,可以包括字符串,数字,数组,函数
const person = {
	"name":"张飞",
	"age":25,
	"location":["河北省","石家庄市"],
	introduceSelf(){
		console.log(`My name is ${this.name},my age is ${this.age},my location is ${this.location[0]} ${this.location[1]}`);
	}
}

function introduceUser(){
	// console.log(`My name is ${person.name},my age is ${person.age},my location is ${person.location[0]} ${person.location[1]}`);
	person.introduceSelf();
}

// 页面上展示元素
const personClass = document.querySelector("#personProp");
const nameEle = document.createElement("h2");
nameEle.textContent = person.name;
personClass.appendChild(nameEle);
const ageEle = document.createElement("h3");
ageEle.textContent = person.age;
personClass.appendChild(ageEle);
const btn = document.createElement("button");
btn.textContent = "自我介绍";
btn.addEventListener("click",person.introduceSelf());
// 错误写法  
// btn.addEventListener("click",person.introduceSelf);
personClass.appendChild(btn);
const btn1 = document.createElement("button");
btn1.textContent = "他人介绍";
btn1.addEventListener("click",introduceUser);
personClass.appendChild(btn1);




