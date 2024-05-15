// 元素选择器，根据class来选择单个元素，格式为：（".class属性"）
const testP = document.querySelector(".testp");
// 点击修改p标签样式
const styleButton = document.querySelector(".styleButton");
// 给全局添加点击事件
// document.addEventListener("click",changeStyle);
// 给按钮添加点击事情
styleButton.addEventListener("click",changeStyle);

function changeStyle(){
	testP.textContent = "执行js代码之后的值";
	// 修改字体颜色
	testP.style.color = "red";
	// 修改背景色
	testP.style.backgroundColor = "green";
}


// 数组选择器，批量选择指定class下的所有p标签元素，格式为：（".class属性 p"）
const containPTagDivList = document.querySelectorAll(".containPTagDiv p");
const classArrayButton = document.querySelector(".classArrayButton");
classArrayButton.addEventListener("click",testClassArraySelector);

// 元素数组选择器测试函数
function  testClassArraySelector(){
	if(containPTagDivList != null && containPTagDivList.size != 0){
		for (const containp of containPTagDivList) {
		   console.log(containp.textContent);
		   containp.textContent = containp.textContent += "选择之后的值";
		   containp.style.color = "green";
		}
	}
	
}


// id选择器，按照指定的id选择元素
// 写法一
// const idTagDiv = document.getElementById("idTagDiv");
// 写法二
const idTagDiv = document.querySelector("#idTagDiv");
const idSelectorButton = document.getElementById("idSelectorButton");
idSelectorButton.addEventListener("click",idSelectorTest);

function idSelectorTest(){
	if(idTagDiv != null){
		idTagDiv.textContent = "<p>id选择器测试</P>";
		
	}
	
	
}


// 标签选择器(不常用)
const h1 = document.querySelector("h1");
const tagSeletorBtn = document.querySelector(".tagSeletorBtn");
tagSeletorBtn.addEventListener("click",()=>{
	h1.textContent = "点击标签选择器之后的变化";
	h1.style.color = "green";
	
})


