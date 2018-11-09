//#copy node_modules目录
//#创建 public目录 空目录
//#创建 app.js
//app.js 创建nodejs服务器
//1:引入模块 express
const express = require("express"); 
const bodyParser = require('body-parser');
//加载图片轮播的路由
//const imagelist = require("./router/imagelist");
/*引入路由模块*/
const index = require('./routes/index');
const xunlian = require('./routes/xunlian');
//2:创建express对象
var app = express();
//加载处理跨域模块
const cors = require("cors");
//允许那个地址跨域访问
app.use(cors({
    origin:[
	"http://127.0.0.1:3000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
   ],
   credentials:true
}));
//3:绑定监听端口 3000
app.listen(3000,()=>{
  console.log('ok');
});

app.use(bodyParser.urlencoded({extended:false}))
//4:指定静态目录
//__filname       当前程序绝对路径
//require         fn 引入
//exports         导出
//module.exports  导出(真正导出数据对象)
app.use(express.static(__dirname+"/public"));

//app.use("/imagelist",imagelist);
/*使用路由器来管理路由*/
app.use('/index',index);
app.use('/xunlian',xunlian);