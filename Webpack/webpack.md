webpack的介绍和使用
	* webpack是一个前端项目的模块化打包工具，类似于idea中集成的将项目打war包的工具
	* webpack的使用必须依赖于node.js
	  webpack -version 查看webpack的版本号
	* node.js中有个非常中要的工具npm，可以用来对webpack进行安装
	  node -v 查看node的版本号
	  安装命令为 npm install webpack@版本号 -g  表示全局安装指定版本的webpack工具
	  本地安装命令 npm install webpack@版本号 --save-dev  表示本地安装webpack工具
	* webpack的基本使用(/Webpack/01-webpack的基本使用)
	   在源码开发完成之后使用命令 webpack ./src/main.js ./dist/bundle.js（此命令使用的是全局配置的webpack版本）
			将src中的所有依赖打包到dist目录下的bundle.js文件下，在html中可以通过引入bundle.js中的模块依赖就相当于引入了所有的src中的依赖关系;
	* webpack的配置使用(/Webpack/02-webpack的配置使用)
		1.构建一个配置文件 webpack.config.js（现阶段默认为此名字，不可修改）
		2.配置文件中需要引入node.js中获取项目绝对路径的模块“path”，该模块可以通过npm init命令来初始化
		3.通过npm init初始化node包的相关配置，配好之后文件名为package.json
		4.在webpack.config.js中配置打包的出入口
		5.可以通过webpack命令直接打包项目（使用的是全局配置的webpack版本;
			在webpack.json.scripts中配置对应的命令，可以使用局部安装的webpack来对项目进行打包
	* webpack中loader的安装和使用
		* loader加载时从右往左，所以各种loader的顺序不能放反了
		1.解析css样式需要使用的loader;
			css-loader 只负责css文件加载,不负责解析;
			style-loader 解析css文件;
		2.解析less文件需要使用的loader;
			less-loader  
			less 将less文件转成css文件;
			此案例中可能因为版本冲突导致无法打包解析less文件
		3.解析图片文件需要使用的loader;
			url-loader 当需要解析的图片大小不超过webpack.config.js中配置的图片大小时使用,此时将图片转化为base64格式字符串展示到页面;
			file-loader 图片大小超过配置时使用,只需要安装,不需要配置;
			* 可以通过在output下的publicPath中配置图片地址的动态获取;
			* 可以在webpack.config.js中配置name属性指定解析图片转化的规则