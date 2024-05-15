const fullImg = document.querySelector(".full-img");
const displayedImg = document.querySelector(".displayed-img");
const overlay = document.querySelector(".overlay");
const darkButton = document.querySelector("#darkButton");
const thumbBar = document.querySelector(".thumb-bar");

// 轮播小图
let thumbImg;
// 初始化设置轮播图信息
for (let i = 1; i < 6; i++) {
	thumbImg = document.createElement("img");
	thumbImg.setAttribute("src","images/pic"+i+".jpg");
	// 方式一: 在新增轮播图元素时添加一个点击事件
	thumbImg.onclick = (event)=>{
		displayedImg.src = event.target.src;
	}
	thumbBar.appendChild(thumbImg);
}

// 方式二: 初始化轮播之后点击小图时将小图的src属性设置到displayedImg上,单独设置一个方法
// thumbBar.addEventListener("click",(event)=>{
// 	displayedImg.src = event.target.src;
// })

// 给按钮添加一个点击事件,点击按钮时设置图片的背景阴影
 darkButton.addEventListener("click",()=>{
	 // console.info(darkButton.getAttribute("class"));
	 const darkAttribute = darkButton.getAttribute("class");
	 if(darkAttribute === 'dark'){
		 darkButton.setAttribute('class',"reDark");
		 darkButton.textContent = '变亮';
		 // 设置背景色来解决
		 overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
		 // 此处功能不能通过设置阴影属性来解决
		 // overlay.style.textShadow = 'black';
	 }else{
		 darkButton.setAttribute('class',"dark");
		 darkButton.textContent = '变暗';
		 overlay.style.backgroundColor = 'rgba(0,0,0,0)';
		 // overlay.style.textShadow = 'burlywood';
	 }
	 
 })




