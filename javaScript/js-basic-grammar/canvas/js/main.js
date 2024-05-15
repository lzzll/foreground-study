// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "#00FFFF";
// ctx.fillRect(10,10,100,100);


document.addEventListener('DOMContentLoaded', function() {
     var canvas = document.getElementById('canvas');
     if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
       // 接下来在这里开始你的绘图代码...
	   ctx.fillStyle = "#00FFFF";
	   ctx.fillRect(10,10,100,100);
     } else {
       console.error('Canvas is not supported in this browser.');
     }
   });