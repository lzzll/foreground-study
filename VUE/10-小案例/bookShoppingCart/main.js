const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id:1,
				name:"Unix编程艺术",
				price:10,
				count:2
			},
			{
				id:2,
				name:"深入理解计算机原理",
				price:20,
				count:3
			},
			{
				id:3,
				name:"现代操作系统",
				price:30,
				count:4
			},
			{
				id:4,
				name:"代码大全",
				price:40,
				count:5
			},
		],
		isExist:true,
	},
	methods:{
		add(index){
			this.books[index].count++
		},
		sub(index){
			this.books[index].count--
		},
		remove(index){
			this.books.splice(index,1)
			if(this.books.length <= 0){
				this.isExist=false
			}
		},
	},
	computed:{
		   totalPrice(){
			   return this.books.map(book => book.price *book.count).reduce((preventValue,currentValue)=>preventValue+currentValue) 
		   }
	},
	filters:{
		showPrice(price){
			console.log(typeof price);
			let priceStr = price.toFixed(2);
			return priceStr;
		}
	}
	
	
})
				
				
