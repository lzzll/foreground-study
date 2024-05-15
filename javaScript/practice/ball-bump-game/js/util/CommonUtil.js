// 生成min-max之间的整数
function random(min,max){
	return Math.floor(Math.random()*(max-min))+min;
}

// 随机生成一个颜色
function randomColor(){
	return "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")"
}