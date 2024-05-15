// 捕获者,恶魔圈
class EvilCircular extends Circular{
	
	constructor(x,y,size,valX,valY,color){
		super(x,y,size,valX,valY,color);
	}
	
	// 校验小球是否被恶魔圈给包括进去了(小球完全处于恶魔圈之内)
	checkWipeBall(ballArray){
		if(ballArray !== null && ballArray.length !== 0){
			let reduceCount = 0;
			for (let ball of ballArray) {
				// 两个圆心的x和y轴坐标之差的绝对值小于半径差
				if(ball.exists && Math.abs(this.x-ball.x) <= (this.size - ball.size) && Math.abs(this.y-ball.y) <= (this.size - ball.size)){
					ball.exists = false;
					reduceCount ++;
				}
			}
			return reduceCount;
		}
	}
	
	// checkBounds(width,height){
	// 	if(this.x - this.size <= 0 || this.x + this.size >= width){
	// 		this.valX = -this.valX;
	// 	}
	// 	if(this.y - this.size <= 0 || this.y + this.size >= height){
	// 		this.valY = -this.valY;
	// 	}
	// }
	
	// 超出边界的时候做出一个反弹的效果
	checkBounds(width,height) {
		if ((this.x + this.size) >= width) {
			this.x -= this.size;
		}
	
		if ((this.x - this.size) <= 0) {
			this.x += this.size;
		}
	
		if ((this.y + this.size) >= height) {
			this.y -= this.size;
		}
	
		if ((this.y - this.size) <= 0) {
			this.y += this.size;
		}
	}
	
	// 检测恶魔圈移动的方法
	moveEvil(){
		window.onkeydown= (e) => {
			switch(e.key){
				case 'a':
				case 'A':
				case 'ArrowLeft':
					this.x -= this.valX;
					break;
				case 'd':
				case 'D':
				case 'ArrowRight':
					this.x += this.valX;
					break;
				case 'w':
				case 'D':
				case 'ArrowUp':
					this.y -= this.valY;
					break;
				case 's':
				case 'S':
				case 'ArrowDown':
					this.y += this.valY;
					break;
			}
		};
	}
	
}