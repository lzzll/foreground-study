// 小球对象
class Ball extends Circular{
	
	exists;  // 小球是否还存在
	
	constructor(x,y,size,valX,valY,color,exists){
		super(x,y,size,valX,valY,color);
		this.exists = exists;
	}
	

	
	// 更新小球
	update(width,height){
		if (this.x + this.size >= width) {
		    this.valX = -this.valX;
	    }
		
		if (this.x - this.size <= 0) {
		    this.valX = -this.valX;
		}
		
		if (this.y + this.size >= height) {
		    this.valY = -this.valY;
		}
		
		if (this.y - this.size <= 0) {
		    this.valY = -this.valY;
		}
		
		this.x += this.valX;
		this.y += this.valY;
	}
	
	// 碰撞检测,碰撞之后给两个小球重置成同一个颜色
	bullCheck(ballArray){
		if(ballArray !== null && ballArray.length !== 0){
			for (let bullBall of ballArray) {
				// 需要排除当前小球自身并且小球未被吃掉
				if (this !== bullBall && bullBall.exists && (Math.abs(this.x - bullBall.x) <= (this.size+bullBall.size) && Math.abs(this.y-bullBall.y) <= (this.size + bullBall.size))) {
					// console.info("preColor:"+this.color);
					this.color = bullBall.color = randomColor();
					// console.info("afterColor:"+this.color);
				}
			}
		}
	}
	
	
}