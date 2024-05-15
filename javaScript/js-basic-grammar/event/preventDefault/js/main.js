const inputName = document.querySelector("#name");
const age = document.querySelector("#age");
const submit = document.querySelector("#submit");
const showResult = document.querySelector(".showResult");


// 案例一
// 给提交按钮添加点击事件
// submit.addEventListener("click",()=>{
// 	checkInputInfo(inputName,age);
// })

function checkInputInfo(name,age){
	if(name === null || name.value === "" || age === null || age.value === ""){
		showResult.textContent = "用户信息不能为空";
	}else{
		showResult.textContent = "用户姓名为:"+`${inputName.value}`+"用户年龄为:"+age.value;
	}
	
}


const formSubmit = document.querySelector("form");
// 给表单添加提交事件，提交成功后会刷新页面，清除输入的内容；如果表单提交被组织，则不会刷新页面，填入的内容还会存在
formSubmit.addEventListener("submit",(e)=>{
	if(inputName === null || inputName.value === "" || age === null || age.value === ""){
		e.preventDefault();
		showResult.textContent = "用户信息不能为空";
	}else{
		showResult.textContent = "用户姓名为:"+`${inputName.value}`+"用户年龄为:"+age.value;
	}
	
})


// 案例二
// 测试阻止点击事件，点击五次，每次随机修改div颜色，超过五次点击事件失效，阻止发送
const disableDiv = document.querySelector(".changeDisable");
const changeDisableBtn = document.querySelector(".changeDisableBtn");
// 函数用到的常量
let clickNum = 0;
let totalClick = 2;

changeDisableBtn.addEventListener("click",changeDisable);

function changeDisable(event){
	// 超过五次阻止事件发送,阻止事件发送只能阻止诸如submit提交表单,a标签的href属性跳转等功能,并不能起到return的作用
	// if(clickNum >= totalClick){
	// 	event.preventDefault();
	// 	return;
	// }
	// 页面重定向
	// window.location.href = "http://www.baidu.com";
	clickNum++;
	// 因为css中的样式并不是内联样式，所以直接通过属性获取的值为空串，如果要获取属性只能获取计算之后的属性值
	console.info(disableDiv.style.visibility);  // 输出""
	var computedStyle = window.getComputedStyle(disableDiv, null);
	console.log(computedStyle.getPropertyValue('visibility')); // 输出：'hidden'

	if(computedStyle.getPropertyValue('visibility') === 'hidden'){
		disableDiv.style.visibility = 'visible';
	}else{
		disableDiv.style.backgroundColor = bgChange();
	}
	
}


// 随机给一个颜色
function bgChange() {
	const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
}

function random(number) {
	return Math.floor(Math.random() * number);
}