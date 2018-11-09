<template>
  <div>
    <footer class="keep-footer">
      <div class="footer-wrapper">
            <div class="info-wrapper clearfix">
                <div class="info-left">
                    <div class="info-block">
                        <a href="">关于我们</a>
                        <a href="">加入我们</a>
                        <a href="">联系方式</a>
                    </div>
                    <div class="info-block">
                        <a href="">训练课程</a>
                        <a href="">运动轨迹</a>
                        <a href="">社区精选</a>
                    </div>
                    <div class="info-block">
                        <a href="">用户协议</a>
                        <a href="">隐私政策</a>
                        <a href="">社区规范</a>
                    </div>
                </div>
                <div class="info-right">
                    <div class="info-social">
                        <div class="link-wrapper">
                            <a href="#" class="wechat-link">
                                <i class="keep-icon-wechat"></i>
                            </a>
                        </div>
                        <div class="link-wrapper">
                            <a href="#" target="_blank">
                                <i class="keep-icon-weibo"></i>
                            </a>
                        </div>
                        <div class="link-wrapper">
                            <a href="#" target="_blank">
                                <i class="keep-icon-twitter"></i>
                            </a>
                        </div>
                        <div class="link-wrapper">
                            <a href="#" target="_blank">
                                <i class="keep-icon-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div class="info-text">
                        哪有什么天生如此，只是我们天天坚持
                        <br>
                        自律给我自由
                    </div>
                </div>
            </div>
            <div class="copyright">
                2014-2018 © Keep All Rights Reserved. 北京卡路里科技有限公司
                <a href="http://www.miitbian.gov.cn" target="_blank">京ICP备14051192号 京ICP证160770号</a>
                <div style="display:inline-block;margin-left:5px;">
                    <a target="_blank" href="" style="display:inline-blank;text-decoration:none;">
                        <img src="img/footer/1.png" style="position:relative;top:4px;">
                        <span style="margin:0px 0px 0px 5px;color:#939393;">京公网安备 11010102002956号</span>
                    </a>
                </div>
                <div style="margin-top:10px;">如果您在 Keep 发现违法违规内容， 请您向我们举报！ 举报电话：010-86223197  举报邮箱：report@gotokeep.com</div>
            </div>
      </div>
    </footer>  
  </div>
</template>
<script>
    export default{
        name:"Footer",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    .keep-footer{
        background:#fff;
    }
    .keep-footer .footer-wrapper{
        width:100%;
        margin:0 auto;
        padding-top:60px;
    }
    @media screen and (min-width:768px){
        .keep-footer .footer-wrapper{
            width:768px;
            padding-top:60px;
        }
    }
    .keep-footer .info-left{
        float:none;
        display:-webkit-box;
        display:-webkit-flex;
        display:flex;
    }
    @media screen and (min-width:768px){
        .keep-footer .info-left{
            float:left;
        }
    }
    .keep-footer .info-block{
        -webkit-flex:1;
        flex:1;
        margin:0;
        text-align:center;
        display:inline-blockl
    }
    @media screen and (min-width:768px){
        .keep-footer .info-block{
            margin:0 40px 0 10px;
        }
    }
    .keep-footer .info-block a{
        display:block;
        margin-bottom:23px;
        font-size:12px;
        color:#584f60;
        text-decoration:none;
    }
    @media screen and (min-width:768px){
        .keep-footer .info-block a{
            margin-bottom:15px;
        }
    }
    .keep-footer .info-right{
        float:none;
        text-align:center;
    }
    @media screen and (min-width:768px){
        .keep-footer .info-right{
            float:right;
            text-align:right;
            margin-right:10px;
        }
    }
    .keep-footer .info-right .info-social{
        margin-bottom:0;
        display:-webkit-box;
        display:-webkit-flex;
        display:flex;
    }
    @media screen and (min-width:768px){
        .keep-footer .info-right .info-social{
            margin-bottom:15px;
        }
    }
    .keep-footer .info-right .info-social .link-wrapper{
        -webkit-flex:1;
        flex:1;
        text-align:center;
    }
    .keep-footer .info-right .info-social a{
        display:inline-block;
        position:relative;
        background:#584f60;
        width:24px;
        height:24px;
        line-height:24px;
        text-align:center;
        border-radius:24px 24px;
    }
    .keep-footer .info-right .info-social a i{
        color:#fff;
        font-size:22px;    
    }
    .keep-footer .info-right .info-text{
        display:none;
    }
    @media screen and (min-width:768px){
        .keep-footer .info-right .info-text{
            font-size:12px;
            color:#999;
            line-height:1.8;
            display:block;
        }
    }
    .keep-footer .copyright{
        margin-top:37px;
        text-align:center;
        padding:24px 0;
        border-top:1px solid #f0f0f0;
        font-size:12px;
        color:#999;
    }
    @media screen and (min-width:768px){
        .keep-footer .copyright{
            margin-top:120px;
            padding:24px 0;
            font-size:12px;
        }
    }
    .keep-footer .copyright a{
        display:none;
    }
    @media screen and (min-width:768px){
        .keep-footer .copyright a{
            display:inline;
            color:#999;
        }
    }
</style>