<template>
  <div>
    <div class="keep-header">
        <nav class="keep-wrapper-pc">
            <div class="nav-inner">
                <div class="nav-logo">
                    <a href="#">
                        <img src="img/logo-16fc21eba7.png">
                    </a>
                </div>
                <div class="nav-pc">
                    <a href="#">发现精选</a>
                    <a href="#">课程内容</a>
                    <a href="#">
                        <i class="keep-icon-user"></i>
                        <span>登录/注册</span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
  </div>
</template>
<script>
    export default{
        name:"Header",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    
    /* 头部*/
    .keep-header{
        position:relative;
        z-index:200;
    }
    .keep-header .keep-wrapper-pc{
        background:#584f60;
        height:96px;
        line-height:96px;
    }
    .keep-header .keep-wrapper-pc .nav-inner{
        width:768px;
        margin:0 auto;
        color:#fff;
    }
    .keep-header .keep-wrapper-pc .nav-inner .nav-logo{
        float:left;
        margin-left:16px;
    }
    .keep-header .keep-wrapper-pc .nav-inner .nav-pc{
        float:right;
        margin-right:20px;
        height:96px;
    }
    .keep-header .keep-wrapper-pc .nav-inner .nav-pc >a {
        display:inline-block;
        margin-left:40px;
        font-size:14px;
        color:#fff;
    }
    .keep-header .keep-wrapper-pc .nav-inner .nav-pc .keep-icon-user{
        display:inline-block;
        vertical-align:top;
        font-size:22px;
        margin-right:10px;
        width:22px;
        margin-left:-5px;
        color:rgba(255,255,255,0.4);
    }
</style>