// 定义常量
const guessField = document.querySelector(".guessField");
// 按钮，绑定点击事件
const guessSubmit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const showGuessNum = document.querySelector(".guessNum");
// 使用let定义的变量才可以在代码中改变属性值
// 重置按钮
let randomNumber = Math.floor(Math.random()*100)+1;
let resetButton;
let guessNum = 0;
// 聚焦到输入框
guessField.focus();
console.info(randomNumber);

// 定义校验结果的函数
function checkNumber(){
	const userGuessNum = Number(guessField.value);
	if(guessNum === 0){
		guesses.textContent = "user guess result:";
	}
	// 代码中取值时要用EL表达式，EL表达式需要和``符号连用
	// guesses.textContent += `${userGuessNum} `;
	guesses.textContent += userGuessNum;
	guesses.textContent += ' ';
	// 展示猜测次数
	guessNum++;
	showGuessNum.textContent = "猜测次数:"+guessNum;
	if(userGuessNum === randomNumber){
		lastResult.textContent = "恭喜你，猜对了";
		lastResult.style.backgroundColor = "green";
		lowOrHi.textContent = "";
		// 清除input标签的内容不能用textContent属性，需要使用value属性
		guessField.value = "";
		// 游戏结束
		gameOver();
		return;
	}
	// console.info("guessNum:"+guessNum);
	// 判断猜测次数是否用完
	if(guessNum >= 10){
		lastResult.textContent = "猜测次数已用完";
		lastResult.style.background = "red";
		lowOrHi.textContent = "";
		// 游戏结束
		gameOver();
		return;
	}
	
	if (userGuessNum > randomNumber){
		lastResult.textContent = "不好意思，你猜错了";
		lastResult.style.backgroundColor = "red";
		lowOrHi.textContent = "你猜大了,请重新再猜";
	}else{
		lastResult.textContent = "不好意思，你猜错了";
		lastResult.style.backgroundColor = "red";
		lowOrHi.textContent = "你猜小了,请重新再猜";
	}
	
	// 清空猜测结果，聚焦到输入框
	guessField.value = "";
	guessField.focus();
	
}

// 添加点击事件
// document.addEventListener("click",checkNumber);
// 给按钮绑定点击事件
guessSubmit.addEventListener("click",checkNumber);


// 游戏结束的函数,展示重新开始的按钮,隐藏猜测输入框和提交按钮
function gameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "start new game";
	resetButton.addEventListener("click",reStart);
	document.body.appendChild(resetButton);
}

// 重新开始游戏，删除重新开始按钮，展示猜测输入框和提交按钮，重置猜测次数，重置随机数，隐藏提示结果
function reStart(){
	// 删除元素时需要用父节点进行删除
	resetButton.parentNode.removeChild(resetButton);
	// 清除输入框内容
	guessField.value = "";
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessNum = 0;
	randomNumber = Math.floor(Math.random()*100)+1;
	// 组合选择器，可以选取大的class下面所有指定的小标签
	const allResultPTags = document.querySelectorAll(".resultParas p");
	if(allResultPTags != null && allResultPTags.size != 0){
		allResultPTags.forEach(ptag=>{
			ptag.textContent = "";
		})
	}
	
}
