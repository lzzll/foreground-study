const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const userArr = ["怪兽威利","大老爹","圣诞老人"];
const locationArr = ["肯德基","迪士尼乐园","白宫"];
const eventArr = ["自燃了","在人行道化成了一坨泥","变成一条鼻涕虫爬走了"];

// 绑定点击事件
randomize.addEventListener("click",()=>{
	generateStore(customName);
})


function generateStore(customName){
	let randomStore = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。"
	let randomPeople = randomValueFromArray(userArr);
	let randomLocation = randomValueFromArray(locationArr);
	let randomEvent = randomValueFromArray(eventArr);
	// 替换变量，替换之后需要用新的参数来接收替换之后的结果
	randomStore = randomStore.replace(":inserta:",randomPeople);
	randomStore = randomStore.replace(":insertb:",randomLocation);
	randomStore = randomStore.replace(":insertc:",randomEvent);
	randomStore = randomStore.replace(":inserta:",randomPeople);
	if(document.getElementById("american").checked){
		const weight = Math.round(140 * 2.20462) + ' 磅';
		const temperature =  Math.round(35 * 9 / 5 + 32) + ' 华氏度';
		randomStore = randomStore.replace("34 摄氏度",temperature)
		randomStore = randomStore.replace("130 公斤",weight)
	};
	if(customName !== null && customName.value !== ""){
		randomStore = randomStore.replace("李雷",customName.value)
	}
	story.textContent = randomStore;
	// 开启样式
	story.style.visibility = 'visible';
	
}

