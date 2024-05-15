const ballBumpCanvas = document.querySelector(".ballBump");
// 画布背景色常量
const canvasFillStyle = "rgba(0, 0, 0, 0.25)";
// 小球常量
let ballCount = 35;  // 小球初始数量
const minSize = 10;  // 小球最小半径,单位为px
const maxSize = 20;  // 小球最大半径,单位为px
const speed = 10;  // 小球最大速度,单位为px
// 恶魔圈常量
let evilx = 525;  // 恶魔圈圆心x坐标
let evily = 125;  // 恶魔圈圆心y坐标
const evilSize = 25;  // 恶魔圈半径
const evilSpeed = 15;  // 恶魔圈移动速度,固定为15px
const evilColor = "rgba(255,255,255,1)";  // 恶魔圈颜色指定为白色
// 指定画布大小和屏幕大小相同并获取该值
const width = (ballBumpCanvas.width = window.innerWidth);
const height = (ballBumpCanvas.height = window.innerHeight);
// 指定文本展示的选择器
const leftBallCount = document.querySelector("#leftBallCount");


if(ballBumpCanvas.getContext){
	// 在指定区域内生成n个不同的小球对象
	const ballArray = generateBalls(width,height,ballCount,minSize,maxSize,speed);
	// 新建一个恶魔圈对象
	const evilCircl = new EvilCircular(evilx,evily,evilSize,evilSpeed,evilSpeed,evilColor);
	// 获取画布对象
	const ctx = ballBumpCanvas.getContext('2d');
	// 增加恶魔圈移动的方法
	evilCircl.moveEvil();
	// 将小球画上屏幕并进行移动
	loop(ballArray,evilCircl,width,height,ctx);
}

// 随机生成小球
function generateBalls(width,height,ballCount,minSize,maxSize,speed){
	let ballArray = new Array(ballCount);
	let ball = null;
	let ballSize = null;
	let x = null;
	let y = null;
	for(let i = 0 ; i<ballCount ; i++){
		ballSize = random(minSize,maxSize);
		x = random(ballSize,(width-ballSize));
		y = random(ballSize,(height-ballSize));
		ball = new Ball(x,y,ballSize,random(-speed,speed),random(-speed,speed),randomColor(),true);
		ballArray[i] = ball;
	}
	return ballArray;
}

// 循环调用画出小球和运动的方法
function loop(ballArray,evilCircl,width,height,ctx){
	ctx.fillStyle = canvasFillStyle;
	ctx.fillRect(0, 0, width, height);
	if (ballArray !== null && ballArray.length !== 0) {
		let exists = true;
		for (let ball of ballArray) {
			if(ball.exists){
				ball.drawBall(ctx);
				ball.update(width,height);
				ball.bullCheck(ballArray);
			}
		};
		// 画出恶魔圈
		evilCircl.drawBall(ctx);
		// 校验恶魔圈是否走出了边界
		evilCircl.checkBounds(width,height);
		// 判断小球是否被吃掉并设置小球是否存在的属性
		let reduceCount = evilCircl.checkWipeBall(ballArray);
		// 展示剩余的小球数量
		ballCount -= reduceCount;
		leftBallCount.textContent = "剩余彩球数："+ballCount;
	}
	// 错误写法一: 直接调用函数本身在浏览器渲染页面时会存在问题
	// loop(ballArray,width,height,ctx);
	// requestAnimationFrame: 浏览器提供的api,用于在浏览器的下一次重绘之前提供一个回调函数,它本身并不支持传入一个带参数的函数,如果硬要传入的话,可以用箭头函数的方式来写
	// 错误写法二: 不能直接传入带参数的函数
	// requestAnimationFrame(loop(ballArray,width,height,ctx));
	requestAnimationFrame(()=>{
		loop(ballArray,evilCircl,width,height,ctx);
	})
}