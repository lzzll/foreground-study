// 使用commonJS模块化思想导入模块
const {add,red} = require("./js/mathUtil.js");
// 使用ex6模块语法导入模块
import info from "./js/es6Style.js";
 
 // 使用mathUtil中引入的方法
 console.log(add(10,20));
 console.log(red(100,20));
 
 // 使用es6Style中引入的变量
 console.log(info.name);
 console.log(info.sex);
 console.log(info.age);
 
 /**
  * 引用css文件夹中配置的样式文件，可不用命名
  * 	* 直接导入css文件会报错，需要安装合适的"loader"来处理css文件
  * 	1.可以使用cnpm install --save-dev css-loader 来安装loader
  * 	2.通过webpack.config.js中的modules关键字下进行配置
  * css样式中如果使用了url来引用图片资源，那么需要安装**url-loader**
  */
 require("./css/allstyle.css");
 
 /**
  * 引用less文件
  * 	1.安装对应的loader
  * 	2.在webpack.config.js中配置loader的使用
  */
 // 引入less的loader时出现未知异常，有可能是版本冲突
 // require("./css/special.less");
 document.writeln("hello huangm,hope you happy");
 
 
 
 