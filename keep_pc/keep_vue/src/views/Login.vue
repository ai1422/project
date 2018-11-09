<template>
  <div class="bo">
    <div class="keep-header">
        <nav class="nav-wrapper-pc-wider">
            <div class="head-left">
                <a href="#">
                    <img src="img/logo-16fc21eba7.png">
                </a>
            </div>
            <div class="head-right">
                <div class="nav-pc">
                    <a href="faxian.html">发现精选</a>
                    <a href="xunlian.html">课程内容</a>
                    <a href="login.html" class="keep-login-trigger">
                        <i class="keep-icon-user"></i>
                        <span>登录/注册</span>
                    </a>
                </div>
                <div class="social-media">
                    <a href="javascript:;" class="wechat-link">
                        <i class="keep-icon-wechat"></i>
                        <div class="wechat-qr">
                            <img src="gotokeep/wechat-qr-429ecdac26.jpg">
                        </div>
                    </a>
                    <a href="https://weibo.com/p/1006065342268417/home?is_hot=1" target="_blank">
                        <i class="keep-icon-weibo"></i>
                    </a>
                    <a href="https://twitter.com/KeepTrainer" target="_blank">
                        <i class="keep-icon-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/keeptrainer/" target="_blank">
                        <i class="keep-icon-instagram"></i>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <div class="content-wrapper">
        <div class="login-wrapper" @click="btn_click()">
            <h2>
                <span id="login1" class="dl-wrapper active">登录</span>
                <span id="login2" class="zc-wrapper">注册</span>
            </h2>
            <!--登录表格-->
            <div id="login3" class="login-panel panel active">
                <form method="post">
                    <div class="input-wrapper">
                        <div class="error"></div>
                        <input type="text" value="+86" name="countryCode" class="country-input country-num">
                        <input type="hidden" name="countryName" value>
                        <input type="tel" placeholder="手机号" name="nobile" class="phone-input pone-num">
                    </div>
                    <div class="input-wrapper">
                        <i class="keep-icon-password"></i>
                        <input type="password" placeholder="密码" name="password" class="phone-input-password">
                    </div>
                    <input type="submit" value="登录" class="submit">
                </form>
                <div class="social-login">
                    <p>
                        其他方式登录
                        <span>:</span>
                    </p>
                    <div class="social-list">
                        <a href="https://www.gotokeep.com/login?next=http%3A%2F%2Fwww.gotokeep.com%2F###" data-type="qqv2">
                            <i class="keep-icon-qq"></i>
                        </a>
                        <a href="https://www.gotokeep.com/login?next=http%3A%2F%2Fwww.gotokeep.com%2F###" data-type="weibov2">
                            <i class="keep-icon-weibo"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!--注册表格-->
            <div id="login4" class="register-panel panel">
                <form method="post">
                    <div class="input-wrapper">
                        <div class="error error-mobile"></div>
                        <input type="text" value="+86" name="countryCode" class="country-input country-num">
                        <input type="hidden" name="countryName" value>
                        <input type="tel" placeholder="手机号" name="mobile" class="phone-input phone-num">
                        <input id="captcha" type="hidden" name="captcha" value>
                    </div>
                    <div class="input-wrapper">
                        <div class="error error-password"></div>
                        <i class="keep-icon-password"></i>
                        <input type="password" placeholder="密码" name="password" class="phone-input-password">
                    </div>
                    <div class="input-wrapper">
                        <div class="error error-username"></div>
                        <i class="keep-icon-user"></i>
                        <input type="text" placeholder="昵称" name="username" class="phone-input-username">
                    </div>
                    <div class="gender-select">
                        <div class="gender-text">性别</div>
                        <div data-value="M" class="gender-radio">
                            <input type="radio" class="radio" name="RadioGroupl" value="男"/>男
                        </div>
                        <div data-value="F" class="gender-radio active no-margin">
                            <input type="radio" class="radio" name="RadioGroupl" value="女"/>女
                        </div>
                    </div>
                    <!--<div class="gender-select">
                        <div class="gender-text">性别</div>
                        <div data-value="M" class="gender-radio">
                            <div class="radio"></div>
                            <span>男</span>
                        </div>
                        <div data-value="F" class="gender-radio active no-margin">
                            <div class="radio"></div>
                            <span>女</span>
                        </div>
                        <input id="register-gender" type="hidden" name="gneder" value="F">
                    </div>-->
                    <input type="submit" :disabled="!isAgree" value="注册" class="submit">
                </form>
                <div class="register-info">
                   <input type="checkbox" v-model="isAgree"> 注册即表示同意「Keep」</input>
                    <a href="https://www.gotokeep.com/tos" target="_blank">用户协议</a>
                    和
                    <a href="htttPs://www.gotokeep.com/privacy" target="_blank">隐私政策</a>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    export default{
        data(){
            isAgree:false;//双向绑定事件
            return{

            };
        },
        components:{
           Footer,
        },
        methods:{
            //点击事件
            btn_click(){
                var login1=document.getElementById("login1");
                var login2=document.getElementById("login2");
                var login3=document.getElementById("login3");
                var login4=document.getElementById("login4");
                login1.onclick=function(){
                    login1.classList.add("active");
                    login2.classList.remove("active");
                    login3.classList.add("active");
                    login4.classList.remove("active");
                }
                login2.onclick=function(){
                    login2.classList.add("active");
                    login1.classList.remove("active");
                    login4.classList.add("active");
                    login3.classList.remove("active");
                }
            },

        }
    }
</script>
<style>
    body{
        margin:0;
    }
    .bo{
        color:#333;
        margin:0;
        padding:0;
    }
    .bo{
        background:#3d3743;
        position:relative;
        width:100%;
        min-height:100%;
    }
    header,footer,nav{
        display:block;
    }
    input{
        line-height:normal;
    }
    button,input{
        color:inherit;
        font:inherit;
        margin:0;
    }
    a,input{
        outline:0;
    }
    a{
        text-decoration:none;
    }
    a{
        background:transparent;
    }
    img{
        border:0;
    }
    .keep-header{
        position:relative;
        z-index:200;
    }
    .keep-header .nav-wrapper-pc-wider{
        overflow:hidden;
        box-sizing:border-box;
        padding:28px 25px 0;
        width:100%;
    }
    .keep-header .nav-wrapper-pc-wider .head-left{
        float:left;
    }
    .keep-header .nav-wrapper-pc-wider .head-right{
        float:right;
    }
    .keep-header .nav-wrapper-pc-wider .head-right .nav-pc{
        display:inline-block;
        position:relative;
        top:5px;
    }
    .keep-header .nav-wrapper-pc-wider .head-right .nav-pc >a{
        color:#fff;
        font-size:14px;
        margin:0 22px;
    }
    .keep-header .nav-wrapper-pc-wider .nav-pc >a .keep-icon-user{
        font-size:22px;
        color:rgba(255,255,255,0.4);
        margin:-3px 10px 0 -5px;
        width:22px;
        display:inline-block;
        vertical-align:top;
    }
    .keep-header .nav-wrapper-pc-wider .social-media{
        display:inline-block;
        margin-left:16px;
        position:relative;
        top:3px;
    }
    .keep-header .nav-wrapper-pc-wider .social-media a{
        margin-left:20px;
        position:relative;
        display:inline-block;
        width:24px;
        height:24px;
        line-height:24px;
        border-radius:24px 24px;
        background:rgba(255,255,255,0.4);
        text-align:center;
    }
    .keep-header .nav-wrapper-pc-wider .social-media a i{
        font-size:22px;
        color:#252525;
    }
    .keep-header .nav-wrapper-pc-wider .social-media .wechat-qr{
        display:none;
        position:absolute;
        left:50%;
        margin-left:-75%px;
        top:40px;
        border:1px solid #584f60;
    }
    .keep-header .nav-wrapper-pc-wider .social-media .wechat-qr img{
        display:block;
        width:150px;
    }
    /* 2. */
    @media screen and (min-width: 1023px){
        .content-wrapper{
            padding-top:40px;
        }
    }
    @media screen and (min-width:768px) and (max-width:1023px){
        .login-wrapper{
            border-radius:5px 5px;
            width:460px;
            margin:0 auto 65px;
        }
    }
    @media screen and (min-width:1023px){
        .login-wrapper{
            border-radius:5px 5px;
            width:460px;
            margin:0 auto 100px; 
        }
    }
    .login-wrapper{
        background:#584f60;
        margin-top:30px;
        margin-bottom:60px;
    }
    .content-wrapper .login-wrapper h2{
        font-size:16px;
        margin:0;
        padding:30px 26px 0;
    }
    .content-wrapper .login-wrapper h2 span.active{
        color:#ddd;
        border-bottom:.1rem solid #ddd;
    }
    .content-wrapper .login-wrapper h2 span{
        display:inline-block;
        color:rgba(211, 211, 211, 0.4);
        padding-bottom:14px;
        border-bottom:6px solid #584f60;
        margin-right:30px;
        cursor: pointer;
    }
    .login-wrapper .panel.active{
        display:block;
    }
    .login-wrapper .panel{
        display:none;
        margin-top:20px;
    }
    .login-wrapper form{
        padding:0 28px 35px 28px;
    }
    @media screen and (min-width:768px){
        .login-wrapper form{
            padding:0 28px 25px 28px;
        }
    }
    .login-wrapper form .input-wrapper{
        height:48px;
        line-height:48px;
        border-radius:3px 3px;
        display:flex;
        margin-bottom:24px;
        background:#453d4b;
        position:relative;
    }
    .login-wrapper form .error{
        display:none;
        color:#fff;
        background:#6d2926;
        font-size:12px;
        line-height:20px;
        height:20px;
        width:100%;
        text-align:center;
        position:absolute;
        left:0;
        top:-20px;
    }
    .login-wrapper form .keep-icon-password,.login-wrapper form .keep-icon-user{
        display:block;
        width:52px;
        font-size:22px;
        color:rgba(221,221,221,0.5);
        text-align:center;
    }
    .login-wrapper form .country-input{
        display:block;
        width:50px;
        font-size:12px;
        font-weight:bold;
        line-height:14px;
        border-right:1px solid #584f60;
        text-align:center;
        height:16px;
        position:relative;
        top:16px;
        color:rgba(221,221,221,0.5);
    }
    .login-wrapper form .phone-input{
        display:block;
        flex:1;
        -webkit-box-flex:1;
        font-size:14px;
        text-indent:15px;
        line-height:18px;
    }
    .login-wrapper form input{
        height:48px;
        -webkit-appearance:none;
        border:0;
        outline:none;
        color:#ddd;
        background:transparent;
        border-radius:0;
        padding:0;
    }
    .login-wrapper form .submit{
        display:block;
        width:100%;
        height:48px;
        line-height:48px;
        border-radius:48px 48px;
        text-align:center;
        color:#fff;
        font-size:16px;
        background:#31a56e;
    }
    button,html input[type="button"],input[type="reset"],input[type="submit"]{
        -webkit-appearance:button;
        cursor:pointer;
    }
    .login-wrapper .social-login{
        padding:12px 0 20px;
        border-radius:0 0 5px 5px;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login{
            background:#ddd;
            padding:0;
            height:90px;
            line-height:90px;
            text-align:center;
        }
    }
    .login-wrapper .social-login p{
        text-align:center;
        color:#fff;
        font-size:12px;
        margin:0 0 10px;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login p{
            display:inline-block;
            color:rgba(88,79,96,0.6);
            margin:0;
        }
    }
    .login-wrapper .social-login p span{
        display:none;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login p span{
            display:inline;
        }
    }
    .login-wrapper .social-login .social-list{
        display:flex;
        display:-webkit-box;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login .social-list{
            display:inline-block;
            line-height:26px;
        }
    }
    .login-wrapper .social-login .social-list a{
        flex:1;
        -webkit-box-flex:1;
        text-align:center;
        display:block;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login .social-list a{
            margin:0 11px;
        }
    }
    .login-wrapper .social-login .social-list a i{
        font-size:26px;
        color:#ddd;
    }
    @media screen and (min-width:768px){
        .login-wrapper .social-login .social-list a i{
            vertical-align:middle;
            color:#584f60;
        }
    }
    [class^="keep-icon-"]:before, [class*=" keep-icon-"]:before{
        font-family: "keep_icon";
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 1em;
        text-align: center;
        opacity: .8; 
        font-variant: normal;
        text-transform: none;
        line-height: 1em;
        font-size: 120%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);
    }
    /*  性别*/
    .login-wrapper form .gender-select{
        margin-bottom:24px;
        color:rgba(221,221,221,0.5);
        font-size:14px;
        overflow:hidden;
    }
    .login-wrapper form .gender-select .gender-text{
        display:inline-block;
        margin-right:40px;
    }
    @media screen and (min-width:768px){
        .login-wrapper form .gender-select .gender-text{
            margin:0 63px;
        }
    }
    .login-wrapper form .gender-select .gender-radio{
        display:inline-block;
        margin-right:20px;
        cursor:pointer;
    }
    @media screen and (min-width:768px){
        .login-wrapper form .gender-select .gender-radio{
            margin-right:50px;
        }
    }
    .login-wrapper form .gender-select .gender-radio .radio{
        display:inline-block;
        width:16px;
        height:16px;
        border-radius:50%;
        position:relative;
        top:3px;
        margin-right:20px;
        background:#3d3743;
    }
    .login-wrapper form .gender-select .gender-radio .no-margin{
        margin:0;
    }
    .login-wrapper .register-info{
        display:none;
        background:#ddd;
        height:90px;
        line-height:90px;
        text-align:center;
        color:#584f60;
        font-size:12px;
    }
    @media screen and (min-width:768px){
        .login-wrapper .register-info{
            display:block;
            border-radius:0 0 5px 5px;
        }
    }
    .login-wrapper .register-info a{
        color:#584f60;
    }
</style>