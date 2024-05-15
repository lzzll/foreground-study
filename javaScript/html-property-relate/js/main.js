// 获取label标签下内容
const input = document.getElementById("inputTest");
const inputSubmit = document.querySelector(".inputSubmit");
// 获取相同class属性下内容,使用querySelector方法查询首个class属性
const sameClassProp = document.querySelector(".sameClass");
inputSubmit.addEventListener("click",clearInputContent);
// 获取相同class属性下内容,使用querySelector方法查询所有相同class的属性
const allSameClass = document.querySelectorAll(".sameClass");
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click",clearOtherLabelContent);


// 清除内容
function clearInputContent(){
	// 清除input标签包括的内容,需要使用value属性
	input.value = "";
	// 清除<p>、<div>、<span>标签登内容使用textContent属性
	// sameClassProp.textContent = "";
}


// 清除其它标签内容
function clearOtherLabelContent(){
	if(allSameClass != null && allSameClass.size != 0){
		allSameClass.forEach(sameClass=>{
			sameClass.textContent = "";
		})
	}
}

// 打开网页会要求用户输入内容
// let type = prompt("请输入要追加的内容:");
const inputClass = document.getElementById("inputClass");
// 追加内容
const appendContent = document.querySelector(".appendContent");
// 传参的错误写法
// appendContent.addEventListener("click",appendProperty(type));
// 原始写法
// appendContent.addEventListener("click",function(){
// 	appendProperty(inputClass);
// })
// 箭头表达式写法
appendContent.addEventListener("click",()=>appendProperty(inputClass));


function appendProperty(inputType){
	let type = Number(inputType.value);
	// console.info("typeof type:"+typeof type)
	if(typeof type !== "number"){
		alert("参数只能为数字");
		return;
	}
	if(type !== 1 && type !== 2 && type !== 3){
		alert("参数范围不对");
		return;
	}
	const appendDiv = document.querySelector(".appendDiv");
	if(type === 1){
		const p = document.createElement("p");
		p.textContent = "新增p标签";
		appendDiv.appendChild(p);
	}
	if(type === 2){
		const h4 = document.createElement("h4");
		h4.textContent = "新增h4标签";
		appendDiv.appendChild(h4)
	}
	if(type === 3){
		const div = document.createElement("div");
		div.textContent = "新增div标签";
		appendDiv.appendChild(div);
	}
	// 清空输入元素
	inputClass.value = "";
	
}