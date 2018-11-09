<template>
  <div class="body">
    <Header></Header>
    <div class="keep-main-content">
        <!--第一个列表-->
        <div class="keep-wrapper tabulation">
            <div class="title-wrapper">
                <h2>课程分类</h2>
                <p>丰富的训练课程，规范你的训练过程</p>
            </div>
            <ul class="workout-hashtag">
               <li v-for="(ai,i) in post">
                    <a href="#" :style="ai.pic">
                        <div class="mask"></div>
                        <div class="info">
                            <div class="title">{{ai.title}}</div>
                            <div class="count">{{ai.details}}</div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="more">
                <p>没有想要的分类</p>
                <a href="#">全部课程</a>
            </div>    
        </div>
        <!--第二个列表-->
        <div class="keep-wrapper point">
            <div class="title-wrapper">
                <h2>动作库</h2>
                <p>动作的规范不但可以更高效的达到训练目的更能减少运动损伤</p>
            </div>
            <ul class="training-point clearfix">
                <li v-for="(item,i) in post2">
                    <a href="#">
                        <div class="img">
                            <img :src="item.pic">
                        </div>
                        <div class="name">{{item.details}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div> 
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
    export default{
      data(){
        return{
            post:[],
            post2:[],
        }
      },
      components:{
        Header,
        Footer,
        
      },
      created(){
          //请求数据
        this.$http.get('http://localhost:3000/xunlian/product').then(res=>{
            this.post = res.data;
            });
        this.$http.get('http://localhost:3000/xunlian/tupian').then(res=>{
                this.post2 = res.data;
            });
      },
      methods:{
        //this.$http.get(...)
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
    nav,header,footer{
        display:block;
    }
    li{
        list-style-type: none;
    }
    /*主体列表*/
    .keep-main-content{
        margin:0 auto;
        width:768px;
    }
    .keep-wrapper{
        box-sizing: border-box;
        margin:12px auto;
        padding:15px 12px;
        width:100%;
        background:#fff;
    }
    .keep-main-content .tabulation{
        padding:0;
    }
    .keep-main-content .keep-wrapper h2{
        margin-bottom:24px;
        font-size:26px;
        color:#24C789;
    }
    .keep-main-content .keep-wrapper p{
        color:#999;
        font-size:16px;
        margin:0 21%;
        text-align:center;
    }
    .title-wrapper{
        padding:47px 0;
        text-align:center;
    }
    .keep-main-content .keep-wrapper .workout-hashtag{
        margin:0;
        padding:0;
    }
    .keep-main-content .keep-wrapper .workout-hashtag::after{
        content:'';
        display:block;
        clear:both;
    }
    .workout-hashtag li{
        float:left;
        width:50%;
    }
    @media screen and (min-width:768px){
        .workout-hashtag li{
            width:25%;
        }
        .keep-wrapper{
            padding:28px 28px;
            margin:12px auto;
        }
        .title-wrapper{
            padding:60px 0;
        }
    }
    .workout-hashtag li a{
        position:relative;
        display:block;
        padding-bottom:100%;
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    .workout-hashtag li a .mask{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
    }
    .workout-hashtag li a .info {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        justify-content: center;
        flex-direction: column;
        display: flex;
        align-items: center;
    }
    .workout-hashtag li a .title{
        font-size:16px;
        margin-bottom:10px;
        font-weight:bold;
        color:#fefefe;
    }
    @media screen and (min-width: 768px){
    .workout-hashtag li a .title {
        margin-bottom: 16px;
        font-size: 18px;
        }
    .workout-hashtag li a .count {
        color: #999;
        font-size: 14px;
        }
    }
    .workout-hashtag li a .count{
        color:#fefefe;
        font-size:12px;
    }
    .keep-wrapper .more{
        display:none;
    } 
    @media screen and (min-width:768px){
        .keep-wrapper .more{
            display:block;
            text-align:center;
            margin:45px auto 0;
            padding-bottom:36px;
        }
        .keep-wrapper .more a{
            display:inline-block;
            color:#24C789;
            border:1px solid #24C789;
            border-radius:25px 25px;
            width:150px;
            height:33px;
            line-height:33px;
            font-size:14px;
        }
    }
    .keep-wrapper .more p{
        color:#999;
        font-size:14px;
        margin-bottom:16px;
    }
    /*第二个列表*/
    .point{
        padding:0;
    }
    .training-point{
        margin:0;
        padding:0;
    }
    .training-point::after{
        content: '';
        display:block;
        clear: both;
    }
    .training-point li{
        float:left;
        width:50%;
        margin-bottom:40px;
        text-align:center;
    }
    .training-point li a{
        display:block;
        height:115px;
        position:relative;
    }
    .training-point li a .img{
        height:80px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .training-point li a .img img{
        display:block;
        max-width:86px;
    }
    .training-point li a .name{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        color:#584f60;
        font-size:14px;
    }
    @media screen and (min-width:768px){
        .training-point{
            width:768px;
            margin:25px auto 15px;
        }
        .training-point li{
            width:20%;
            margin-bottom:65px;
        }
        .training-point li a{
            height:126px;
        }
        .training-point li a .img{
            height:80px;
        }
    }
</style>