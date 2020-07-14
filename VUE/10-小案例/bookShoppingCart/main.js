const app = new Vue({
	el: '#app',
	data: {
		name:"",
		price:"",
		count:"",
		searchWords:"",
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
		addToList(){
			let length = this.books.length;
			let book = {id:length+1,name:this.name,price:parseFloat(this.price),count:parseFloat(this.count)};
			// unshift是从数组开头插入
			// this.books.unshift(book);
			// push是从队尾插入
			this.books.push(book);
		},
		searchList(searchWords){
			// alert("搜索方法调用了,方法参数"+searchWords)
			// let value = event.target.value;
			let newList = this.books.filter(item=>{
				if(item.name.includes(searchWords)){
					return item;
				}
			})
			return newList;
		}
		
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
				
				
