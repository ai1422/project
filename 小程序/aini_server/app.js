//1:加载相应模块
const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
//2:创建express服务器
var app = express();
app.use(express.static(__dirname+"/public"));
//3:绑定监听端口
app.listen(3000,()=>{
    console.log("ok");
});

/*图片轮播*/ 
app.get("/imageslist",(req,res)=>{
    var sql = "SELECT `sid`, `img_url`, `title` FROM `imageslist`";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

/*首页四个图标*/ 
app.get("/tuplist",(req,res)=>{
    var sql = "SELECT `uid`, `img_url`, `title`, `pric` FROM `logs_tup`";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

/*首页列表*/ 
app.get("/tuplist2",(req,res)=>{
    var sql = "SELECT `pid`, `img_url`, `title`, `pric` FROM `logs_tup2`";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

/*商品详页*/
app.get("/shop",(req,res)=>{
    var obj = req.query;
    var $pid = obj.pid;
    var sql = "SELECT `pid`, `img_url`, `title`, `oldpric`, `newpric`, `title_item` FROM `shop_detail` WHERE pid=?";
    pool.query(sql,[$pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

/*订单页*/
app.get("/order",(req,res)=>{
    var obj = req.query;
    var $pid = obj.pid;
    var sql = "SELECT `pid`, `img_url`, `title`, `pric` FROM `logs_tup2` WHERE pid=?";
    pool.query(sql,[$pid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
