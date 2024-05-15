// DOMContentLoaded事件用于不等外部资源加载完成，只要dom树构建完成即可交互的事件，可提升用户体验和流畅度
document.addEventListener("DOMContentLoaded",()=>{
	// alert("文档加载已完成");
	const changeStyleDiv = document.querySelector(".changeStyleDiv");
	changeStyleDiv.style.backgroundColor = "#00FFFF";
	
})