const requesURL = "http://localhost:8080/smart-book/apiGateway/getJson";

// 异步加载读取数据
document.addEventListener("DOMContentLoaded",()=>{
	loadHeroesJson();
})

// 异步请求获取数据的方法
async function loadHeroesJson(){
	const request = new Request(requesURL);
	const response = await fetch(request);
	const heroesJson = await response.json();
	console.info(heroesJson);
	packageHeaderInfo(heroesJson);
	packageSectionInfo(heroesJson);
}