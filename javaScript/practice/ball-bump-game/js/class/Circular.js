// 定义一个圆形的父类
class Circular{
	
	x;  // 圆心x坐标
	y;  // 圆心y坐标
	size; // 圆形半径
	valX; // 圆形x方向移动速度
	valY;  // 圆形y方向移动速度
	color; // 圆形颜色
	
	
	constructor(x,y,size,valX,valY,color){
		this.x = x;
		this.y = y;
		this.size = size;
		this.valX = valX;
		this.valY = valY;
		this.color = color;
	}
	
	// 画出一个圆形
	drawBall(ctx){
		// console.info(this);
		// 表示要开始画图
		ctx.beginPath();
		// 给图画填充颜色
		ctx.fillStyle = this.color;
		// 指定要画的范围几个参数依次表示 圆形中心x坐标,圆形中心y坐标,圆形半径,圆弧起始弧度,圆弧结束弧度
		ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
		// 结束作画
		ctx.fill();
	}
	
}