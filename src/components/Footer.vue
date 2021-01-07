<template>
  <div class="footer">
      <!-- tripadvisor评论 -->
      <div class="tripadvisor">
          <div class="tripadvisor-logo"><img src="../assets/icon/tripadvisor.png" alt=""><p>前往店评Prana璞纳养生酒店</p></div>
          <div class="submit">
              <input type="text" placeholder="请输入评论标题"/>
              <button>提交</button>
            </div>
      </div>
      <!-- 最底下黑色区域 -->
      <div class="copyright">
          <!-- 左侧logo -->
          <div class="logo">
              <img src="../assets/icon/logo1.png" alt="">
          </div>
          <!-- 右侧信息 -->
          <div class="info">
              <div class="nav">
                  <a href="">酒店和度假村</a>
                  <span class="line"></span>
                  <a href="">品牌故事</a>
                  <span class="line"></span>
                  <a href="">养生疗愈</a>
                  <span class="line"></span>
                  <a href="">酒店合作</a>
                  <span class="line"></span>
                  <a href="">登录</a>
                  <span class="line"></span>
              </div>
              <div class="address">
                  <img src="../assets/icon/address1.png" alt="" width="23px" height="23px"><span>璞纳养生酒店集团&nbsp;&nbsp;&nbsp;地址：上海市恒南路688弄31号&nbsp;&nbsp;&nbsp;电话：021-33882933</span> 
                  <img src="../assets/icon/address1.png" alt="" width="23px" height="23px"><span>舟山璞纳养生酒店&nbsp;&nbsp;&nbsp;地址：舟山市塘头村&nbsp;&nbsp;&nbsp;电话：021-33882933</span> 
              </div>
              <div class="copy">
                  <p>条款和条件Cookie政策&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有©2021安浙江益宏静方投资有限公司</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        margin-top: 68px;
        /* font-family:"黑体"; */
    }
    .tripadvisor{
        color: #404040;
        height: 65px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 55px;
        width: 100%;
    }
    .tripadvisor-logo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 40px;
    }
    .tripadvisor-logo>img{
        margin-bottom:13px ;
    }
    .submit>input{
        width: 440px;
        height: 63px;
        border: 1px solid #404040;
        padding: 0 0 0 20px;
    }
    .submit button{
        color: white;
        width: 138px;
        height: 65px;
        background-color: #1c1c1c;
        border: 1px solid #1c1c1c;
    }



.copyright{
    width: 100%;
    height: 225px;
    background-color: #1c1c1c;
    /* color: white; */
    padding: 0 149px;
    display: flex;
    align-items: center;
}
.info{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}
.info>.nav{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.info>.nav>a{
    color: white;
    text-decoration: none;
    font-size: 16px;
}
.info>.nav>span{
    margin: 0 41px;
    width: 1px;
    height: 33px;
    background-color: white;
    display: block;
}
.info>.address{
    margin-bottom: 27px;
    display: flex;
    align-items: center;
}
.info>.address img{
    margin-right: 9px;
}
.info>.address>img:nth-child(3){
    margin-left: 90px;
}
</style>