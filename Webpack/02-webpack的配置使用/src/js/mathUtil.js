//1.新建mathUtils.js，用CommonJs规范导出
function add(num1,num2){
	return num1+num2
}

function red(num1,num2){
	return num1-num2;
}

// commonJs模块化导出语法
module.exports={
	add,
	red
}