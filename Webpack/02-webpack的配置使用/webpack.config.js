// webpack的配置文件，用于指定webpack打包的出口和入口

// 1.导入node.js获取当前包所在的绝对路径，可以使用npm init初始化node包,path路径属于node包下的模块,非自定义
const path = require("path");


// 2.配置打包路径的出入口
module.exports = {
	entry:"./src/main.js",  // 打包路径入口
	output:{
		path: path.resolve(__dirname,"dist"), // 动态拼接打包路径出口,“__dirname”属于path包下的对象,用来获取项目的绝对路径
		filename: 'bundle.js',//打包后的文件名
		publicPath: 'dist/'  // 可动态配置图片打包后获取的路径
	},
	module:{
		rules: [
			// 配置解析css的loader
		  {
		    test: /\.css$/,//正则表达式匹配css文件
		    //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
			// webpack使用多个loader是从右往左解析的，所以需要将css-loader放在style-loader右边，先加载后解析。
		    use: [{
		      loader: 'style-loader'
		    }, {
		      loader: 'css-loader'
		    }]//使用loader
		  },
		  // 配置解析less文件的loader
		  {
		    test: /\.less$/,
		    use: [{
		      loader: 'style-loader'
		    }, {
		      loader: 'css-loader'
		    }, {
		      loader: 'less-loader'//less文件loader
		    }]//使用loader
		  },
		  // 配置解析图片文件的loader
		  {
			  test: /\.(png|jpg|gif|jpeg)$/,//匹配png/jpg/gif/jpeg格式图片
			  use: [
				{
				  loader: 'url-loader',
				  options: {
					  /**
					   * 图片小于800KB时候将图片转成base64字符串，大于8KB需要使用file-loader
					   * 	1.解析不超限制大小的图片只用url-loader;
					   * 	  解析超范围的图片当背景需要使用file—loader,file-loader不需要配置,只用安装;
					   * 	2.可以指定一个name来指定打包图片的规则
					   */
					limit: 819200,
					name: 'img/[name].[hash:8].[ext]'//img表示文件父目录，[name]表示文件名,[hash:8]表示将hash截取8位[ext]表示后缀
				  }
				}
			  ]
		   },
		   // 配置将es6语法转成es5的loader
		   {
		     test: /\.js$/,
		     //排除node模块的js和bower的js,不用将node包下的js代码转成es5语法
		     exclude: /(node_modules|bower_components)/,
		     use: {
		       loader: 'babel-loader',
		       options: {
		         //如果要使用@babel/preset-env这里需要在根目录新建一个babel的文件
		         // presets: ['@babel/preset-env']
		         //这里直接使用指定
		         presets: ['es2015']
		       }
		     }
		   }
		]
		
	}
}