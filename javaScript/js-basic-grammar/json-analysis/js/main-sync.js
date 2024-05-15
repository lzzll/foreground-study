// 加载英雄属性数据,浏览器不允许从本地读取文件,需要从服务器获取
// 异步加载数据.异步加载数据时,不影响页面dom树的构建
// let herosJsonData = null;
// async function onLoadJsonData(){
// 	const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
// 	const request = new Request(requestURL);
// 	const response = await fetch(request);
// 	herosJsonData = await response.json();
// 	// console.info(herosJsonData);
// }

// 同步加载数据
const requestURL = "http://localhost:8080/smart-book/apiGateway/getJson";
let request = new XMLHttpRequest();
request.open("GET",requestURL);
request.responseType = "text";
request.send();
request.onload = ()=>{
	const response = request.response;
	console.log(response);
	const heroesJson = JSON.parse(response);
	packageHeaderInfo(heroesJson);
	packageSectionInfo(heroesJson);
}





