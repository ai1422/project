<template>
  <div class="body">
    <Header></Header>
    <div class="keep-main-content">
        <div id="page">
        <!--轮播图-->
            <header>
                <div class="swiper-container swiper-container-horizontal">
                    <div class="swiper-wrapper">
                        <a href="#" style="background-image:url(http://localhost:3000/img/faxian/shuffing/1.jpg)" class="swiper-slide sensor-link"></a>
                        <a href="#" style="background-image:url(http://localhost:3000/img/faxian/shuffing/2.jpg)" class="swiper-slide sensor-link"></a>
                        <a href="#" style="background-image:url(http://localhost:3000/img/faxian/shuffing/3.jpg)" class="swiper-slide sensor-link"></a>
                        <a href="#" style="background-image:url(http://localhost:3000/img/faxian/shuffing/4.jpg)" class="swiper-slide sensor-link"></a>
                    </div>
                </div>
            </header>
            <!--动态列表 一 -->
            <section class="wrapper">
            	<div class="title no-more">热门动态</div>
            	<ul class="entries clearfix">
            		<li>
            			<a href="#" class="sensor-link sensor-hotentry">
            				<div class="img">
            					<div style="background-image:url(http://localhost:3000/img/faxian/dontai/1.jpg)"></div>
            					<i class="video-icon"></i>
            				</div>
            				<div class="text">
            					GYM Class 马甲线教程 适合初学者在家也能练习的轻量组合

                    ✨适合初学者的教程初阶

                    ✨考虑到很多美女对练马甲线都觉得很难坚持带有恐惧心态，这个视频里面一共有四个动作作为组合的练习，在家也能随时随地的锻炼 。

                    是一个比较适合初级学者的教程。

                    视频里有细节注意的讲解注明要Get哦～

                    组合练习分为：

                    1⃣️：卷腹

                    2⃣️：平板支撑左右转髋

                    3⃣️：仰卧曲腿左右转

                    4⃣️：仰卧交替摆腿

                    ♻️循环下来为一组

                    ⚠️：视频里每一个练习的次数和持续时长都有做到减少于控制。

                    Ps：拍摄这个视频的时候我的眼睛👀突发过敏，有点像阿凡达 😂 不要在意 🤪

                    -

                    up

                    @Keep_课程  @Keep_技术分享
            				</div>
            				<div class="opt">
            					<i class="keep-icon-like"></i>
            					<span class="likes-num">1803</span>
            					<i class="keep-icon-comment"></i>
            					<span class="num">88</span>
            				</div>
            			</a>
            		</li>
            		<li>
            			<a href="#" class="sensor-link sensor-hotentry">
            				<div class="img">
            					<div style="background-image:url(http://localhost:3000/img/faxian/dontai/2.jpg)"></div>
            				</div>
            				<div class="text">
            					骨盆前倾是骨盆位置偏移的病态现象，较正确的骨盆位置向前倾斜一定的角度。
            					骨盆长时间前倾，不但影响美观，严重会加重下背部及颈部的负担，造成疼痛与
            					肩颈酸痛等问题，严重还会影响其它骨骼肌肉健康。但是骨盆前倾的改善也不难，
            					今天小宅给大家详细介绍一下~
            				</div>
            				<div class="opt">
            					<i class="keep-icon-like"></i>
            					<span class="likes-num">397</span>
            					<i class="keep-icon-comment"></i>
            					<span class="num">60</span>
            				</div>
            			</a>
            		</li>
            		<li>
            			<a href="#" class="sensor-link sensor-hotentry">
            				<div class="img">
            					<div style="background-image:url(http://localhost:3000/img/faxian/dontai/3.jpg)"></div>
            				</div>
            				<div class="text">
            					努力健身是我坚持最好的一件事
            				</div>
            				<div class="opt">
            					<i class="keep-icon-like"></i>
            					<span class="likes-num">321</span>
            					<i class="keep-icon-comment"></i>
            					<span class="num">44</span>
            				</div>
            			</a>
            		</li>
            		<li>
            			<a href="#" class="sensor-link sensor-hotentry">
            				<div class="img">
            					<div style="background-image:url(http://localhost:3000/img/faxian/dontai/4.jpg)"></div>
            				</div>
            				<div class="text">
            					号外！晒出最美的跑道，赢斯凯奇专业跑鞋。
            				</div>
            				<div class="opt">
            					<i class="keep-icon-like"></i>
            					<span class="likes-num">13</span>
            					<i class="keep-icon-comment"></i>
            					<span class="num">0</span>
            					<span class="ads">
            						<i class="keep-icon-ad"></i>
            						<span>推广</span>
            						<img data-original="undefined"
            							class="lazy-adimg">
            					</span>
            				</div>
            			</a>
            		</li>
            	</ul>
            </section>
            <!--动态列表二-->
            <!--<section class="wrapper">
            	<a href="#" class="title">精选话题</a>
            	<ul id="topic-wrap" class="topic-v2 horizon-scroll-collection collections topic">
            		<li></li>
            		<li></li>
            		<li></li>
            		<li></li>
            	</ul>
            </section>
            <div data-url="/explore/more?lastId=5b0dfa5dba35226c447d0fa4" class="keep-loading-more"></div>-->
        </div>
    </div>
  </div>
</template>
<script>
    import Header from '@/components/Header.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
           Header,
        },
        methods:{
            //点击事件
        }
    }
</script>
<style scoped>
    .body{
        display:block;
        margin:8px;
    }
    .body{
        margin:0;
        padding:0;
        color:#333;
        background-color:#fafafa;
    }
    a{
        background:transparent;
    }
    a{
        text-decoration: none;
    }
    a,input{
        outline:0;
    }
    nav,header,footer,section{
        display:block;
    }
    li{
        list-style-type: none;
    }
    /*主体*/
    /*轮播图*/
    .keep-main-content{
        margin:0 auto;
        width:768px;
    }
    header{
        padding-bottom: 53.1%;
        position:relative;
    }
    #page header{
        padding-bottom:45.33%;
    }
    .swiper-container{
        margin:0 auto;
        position:relative;
        overflow:hidden;
        z-index:1;
    }
    .swiper-wrapper{
        position:relative;
        width:100%;
        height:100%;
        z-index: 1;
        display: flex;
        box-sizing: content-box;
    }
    .swiper-slide{
        flex-shrink:0;
        width:100%;
        height:100%;
        position:relative;
    }
    header .swiper-container{
        position: absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
    }
    header .swiper-slide{
        background-position:center center;
        background-size:cover;
        display: block;
    }
    @media screen and (max-width:767px){
        .keep-main-content{
            width:100%;
        }
    }
    /*热门动态列表一*/
    .wrapper{
        margin:12px 0;
        padding:20px 14px 14px;
        background:#fff;
        font-family: "PingFangSc-Regular";
    }
    .wrapper .title{
        display:block;
        font-size:13px;
        color:#333;
        font-weight:normal;
        padding:12px 0 12px;
        background-size:auto 28%;
    }
    .wrapper .title-no-more{
        background:none;
    }
    .entries{
        padding:0;
        margin:0;
    }
    .entries li{
        width:48.2%;
        float:left;
        margin-top:24px;
    }
    .entries li:nth-child(1){
        margin-top:0;
    }
    .entries li a{
        display: block;
        text-decoration: none;
    }
    .entries li a .img{
        position:relative;
        padding-bottom:97.8%;
    }
    .entries li a .img div{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .entries li a .text {
        margin: 6px 0 7px;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 34px;
        line-height: 18px;
    }
    .entries li a .opt{
        color:#b9b7be;
        font-size:11px;
    }
    .entries li a .opt i{
        margin-right: 6px;
        font-size:18px;
        vertical-align: middle;
        position: relative;
        top: -1px;
    }
    .entries li a .opt span.likes-num{
        margin-right: 14px;
    }
    .entries li a .opt span{
        display: inline-block;
    }
    .entries li a .opt span.ads{
        float:right;
    }
    .entries li:nth-child(2){
        margin-top:0;
    }
    .entries li:nth-child(2n){
        float:right;
    }

    @media screen and (min-width: 768px) {
        .keep-loading-more{
            padding:28px 0;
        }
    }
    .keep-loading-more{
        padding:15px 0;
    }
    .keep-loading-more:after {
        content: '';
        display: block;
        width: 32px;
        height: 32px;
        background-image: url(http://localhost:3000/img/faxian/1.gif);
        background-size: 32px 32px;
        margin: 0 auto;
    }

    /*动态列表二*/

</style>