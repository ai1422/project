const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/product',(req,res)=>{
    var sql = "SELECT * FROM keep_xunlian_product";
    pool.query(sql,(err,result)=>{
        if(err)
        console.log(err);
        res.send(result);
    })
})

router.get('/tupian',(req,res)=>{
    var sql = "SELECT * FROM keep_xunlian_tupian";
    pool.query(sql,(err,result)=>{
        if(err) 
        console.log(err);
        res.send(result);
    })
})


module.exports = router;
