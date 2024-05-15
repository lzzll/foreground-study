const submitBtn = document.querySelector("#sumbit");
const eventBubbleDiv = document.querySelector("#eventBubble");
const body = document.querySelector("body");
const outputClass = document.querySelector("#outPutId");
// 换行标签
let brTag;

// 案例一: 子事件冒泡与阻止冒泡的演示
// 三个区域都绑定了点击事件
// submitBtn.addEventListener("click",bubbleClick);
// eventBubbleDiv.addEventListener("click",bubbleClick);
// body.addEventListener("click",bubbleClick);

// 处理点击事件
function bubbleClick(e){
	// outputClass.textContent += "你在"+`${e.currentTarget.tagName}`+"标签上进行了点击";
	brTag = document.createElement("h4");
	brTag.textContent = "你在"+e.currentTarget.tagName+"标签上进行了点击";
	outputClass.appendChild(brTag);
}

// 按钮点击事件阻止往上层冒泡
// submitBtn.addEventListener("click",(event)=>{
// 	// 添加此代码可以阻止事件往上冒泡，带到它的父节点上面
// 	event.stopPropagation();
// 	bubbleClick(event);
// })

// eventBubbleDiv.addEventListener("click",bubbleClick);
// body.addEventListener("click",bubbleClick);


// 案例二:冒泡属性的运用,只用给父元素加一个点击事件就运用到每一个子元素上
const parentContainer = document.querySelector(".container");

function changeColor(event){
	// 获取的是内层的子元素
	event.target.style.backgroundColor = randomColor();
	// 获取的是外层的容器
	// event.currentTarget.style.backgroundColor = randomColor();
}

// 添加绑定事件
parentContainer.addEventListener("click",changeColor);


// 获取一个随机颜色
function randomColor(){
	return "rgb("+random(255)+","+random(255)+","+random(255)+")";	
}

function random(number){
	return Math.floor(Math.random()*number)+1;
}

