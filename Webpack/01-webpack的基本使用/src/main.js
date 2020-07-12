// 使用commonJS模块化思想导入模块
const {add,red} = require("./mathUtil.js");
// 使用ex6模块语法导入模块
import info from "./es6Style.js";
 
 // 使用mathUtil中引入的方法
 console.log(add(10,20));
 console.log(red(100,20));
 
 // 使用es6Style中引入的变量
 console.log(info.name);
 console.log(info.sex);
 console.log(info.age);