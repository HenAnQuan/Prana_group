<template>
  <div  class=" container">
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true"></Header>
    <Login/>
    <div class="body">
      <!-- 首屏背景 -->
      <div class="firstScreen w-100" v-if="port == 1">
        <img src="../assets/img/banner1-1.jpg" alt="" class="w-100"/>
      </div>

      <div class="first-img" v-if="port == 2">
         <!--  <BookingHotel/> -->  
      </div>
      
      <!-- 酒店预订 -->
      <!-- <BookingHotel v-if="port == 1"/> -->

      <!-- 品牌故事  养生疗愈 酒店合作 -->
      <div class="brand-story" v-if="port == 1">
        <div class="brand brand1">
          <div class="brand-img">
            <img src="../assets/img/brandstroy1.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">品牌故事</h3>
            <p class="brand-content">世界上有这样一种酒店，他们避开热闹的著名景点，选择偏僻而纯净的自然环境；他们拥有唤活身心和疗愈的氛围，提供专业的健康生活咨询、各种疗法、课程和活动，让客人在放松享受的同时，获得持续健康的生活方式。</p>
            <router-link class="brand-more" to="/brandstory"><span>更多</span></router-link>
          </div>
        </div>
        <div class="brand brand2">
          <div class="brand-img">
            <img src="../assets/img/brandstroy2.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">养生疗愈</h3>
            <p class="brand-content">作为顶级养生酒店，我们汇聚国内外顶级的自然疗法理疗师、中医师、禅修大师、健身教练、瑜伽和太极老师，通过各种能量平衡的设施与服务，让客人在海滨茶园的氛围中静心、清零，开启奢华酒店全新的健康养生时代。
            </p>
            <router-link class="brand-more" to="/healthcare"><span>更多</span></router-link>
          </div>
        </div>
        <div class="brand brand3">
          <div class="brand-img">
            <img src="../assets/img/brandstroy3.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">酒店合作</h3>
            <p class="brand-content">璞纳养生酒店集团是国内第一家集养生酒店咨询、开发和运营管理为一体的酒店集团。作为业主，我们拥有舟山璞纳养生酒店；作为咨询机构，我们服务过上海阿纳迪酒店、腾冲东山养生酒店、三亚海棠湾养生酒店等等。
</p>
            <router-link class="brand-more" to="/cooperation"><span>更多</span></router-link>
          </div>
        </div>
      </div>

      <div class="brand-storys" v-if="port == 2">
        <div class="brand brand3">
          <div class="brands-img">
            <img src="../assets/img/brandstroy1.jpg" height="200px" alt="">
          </div>
          <div class="brand-infos">
            <div class="brand-center">品牌故事</div>
            <div class="brand-line"></div>
            <p class="brand-content">世界上有这样一种酒店，他们避开热闹的著名景点，选择偏僻而纯净的自然环境；他们拥有唤活身心和疗愈的氛围，提供专业的健康生活咨询、各种疗法、课程和活动，让客人在放松享受的同时，获得持续健康的生活方式。</p>
            <router-link class="brand-mores" to="/brandstory"><span>更多</span></router-link>
          </div>
        </div>
        <div class="brand brand3">
          <div class="brands-img">
            <img src="../assets/img/brandstroy2.jpg" alt="">
          </div>
          <div class="brand-infos">
            <div class="brand-center">养生疗愈</div>
            <div class="brand-line"></div>
            <p class="brand-content">作为顶级养生酒店，我们汇聚国内外顶级的自然疗法理疗师、中医师、禅修大师、健身教练、瑜伽和太极老师，通过各种能量平衡的设施与服务，让客人在海滨茶园的氛围中静心、清零，开启奢华酒店全新的健康养生时代。
            </p>
        
            <router-link class="brand-mores" to="/healthcare"><span>更多</span></router-link>
           
            
          </div>
        </div>
        <div class="brand brand3">
          <div class="brands-img">
            <img src="../assets/img/brandstroy3.jpg" alt="">
          </div>
          <div class="brand-infos">
            <div class="brand-center">酒店合作</div>
            <div class="brand-line"></div>
            <p class="brand-content">璞纳养生酒店集团是国内第一家集养生酒店咨询、开发和运营管理为一体的酒店集团。作为业主，我们拥有舟山璞纳养生酒店；作为咨询机构，我们服务过上海阿纳迪酒店、腾冲东山养生酒店、三亚海棠湾养生酒店等等。
</p>
            <router-link class="brand-mores" to="/cooperation"><span>更多</span></router-link>
          </div>
        </div>
      </div>
      
      <!-- 酒店轮播图 -->
      <div class="main-info">
        <swiper ref="mySwiper" :options="swiperOptions"> 
          <swiper-slide v-for="(item,index) in banners" :key="index">
            <img :src="item" alt=""/>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>

        <!-- 酒店部分连接 -->
      <div class="hotel-link" v-if="port == 1">
        <div class="hotel hotel1"><span>酒店概览</span></div>
        <div class="hotel hotel2"><span>酒店设施</span></div>
        <div class="hotel hotel3"><span>养生套餐</span></div>
        <div class="hotel hotel4"><span>每日工坊</span></div>
      </div>

      <!-- 酒店部分连接 -->
      <div class="hotels-link" v-if="port == 2">
        <div class="hotels">
           <a href=""><span>酒店概览</span></a>
        </div>
        <div class="hotels">
           <a href=""><span>酒店设施</span></a>
        </div>
        <div class="hotels">
           <a href=""><span>养生套餐</span></a>
        </div>
        <div class="hotels">
           <a href=""><span>每日工坊</span></a>
        </div>
       
      </div>



    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BookingHotel from "@/components/BookingHotel.vue";
import Login from "@/components/Login.vue"



export default {
  name: "Index",
  components: {
    Header,Footer,Login,
    // BookingHotel
  },
  data() {
    return {
      port: 1, //1 pc端  2 移动端
      w: "",
      h: "",
      movetoFirstSecond:false,
      banners:[
        require("../assets/img/banner1-2-1.jpg"),
        require("../assets/img/banner1-2-2.jpg"),
        require("../assets/img/banner1-2-3.jpg"),
        ],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          speed:1500
        }
    };
  },
  computed:{
  },
  mounted() {
    this.w = document.documentElement.clientWidth/1920;
    this.h = document.documentElement.clientHeight/1080;
     if (this._isMobile()) {
      console.log("手机端");
      this.port = 2;
    } else {
      console.log("pc端");
      this.port = 1;
    }
  },
  methods:{
     _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    getSize(){
      this.w = document.documentElement.clientWidth/1920;
      this.h = document.documentElement.clientHeight/1080;
      console.log(document.documentElement.clientWidth,document.documentElement.clientHeight);
    },
    // 添加事件：首屏高度，当滚轮滚动到第二屏达到导航条下方时（浏览器可视区域高度-导航条高度时）；更改 movetoFirstSecond 值为 ture 。导航条通过类样式绑定切换到黑底的样式
    intoSecondscreen(){
      // console.log(document.body.clientHeight,window.screen.height,document.documentElement.clientHeight);        //用于获取 文档高度 , 屏幕高度 ,   浏览器可视区域高度
      // console.log(window.scrollY);      //获取滚轮滚动的高度。初始为0，向下滚动增加，向上滚动数值减小；同时当滚动到文档最下方时，得到的最大值与浏览器可视区域高度相加等于文档高度
      window.scrollY >= document.documentElement.clientHeight-120 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
      // 更换触发header导航样式替换的条件
      // window.scrollY >= 100 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
    },
    
  },
  created(){  
    // 添加监听，实时获取窗口的高度和宽度
    window.addEventListener('resize', this.getSize);
    this.getSize();
    // 添加监听，实时获取滚动条滚动的高度
    window.addEventListener('scroll', this.intoSecondscreen);
    this.intoSecondscreen();
  },
  destroyed(){
    // window.removeEventListener('resize', this.getSize);
    window.removeEventListener('scroll', this.intoSecondscreen);
  }
};
</script>

<style lang="scss" scoped>
// @import url(../assets/css/global.css);

.brand-line{
  width: 200px;
  height: 1px;
  background-color: #1c1c1c;
  margin-bottom: 12px;
}

.brand-center{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 9px;
}

/** */
.first-img{
  
  width: 100%;
  height: 650px;
  background: url("../assets/img/banner1-1.jpg") center center no-repeat;
  background-size: cover;
 
}


.hotels-link{
   margin-top: 12px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;
}



.hotels{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  border: 1px solid #1c1c1c;
  margin-top: 9px;
}

.hotels a{
   font-size: 12px;
  color: #1c1c1c;
}

.brand-story{
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  margin-top: 90px;
  padding:0 180px;
}

.brand-storys{
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
 
}

.brand{
  flex: 1;
}
.brand1,.brand2{
  margin-right: 20px;
}
.brand-img{
  width: 100%;
  height: 100%;
  border: 1px solid rgb(0,65,56);
  text-align: center;
  // padding: 12px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
}

.brands-img{
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 26px 12px 0 12px;
  box-sizing: border-box;
}
.brands-img img{
  width: 100%;
  height: 250px;
  vertical-align: middle;
}


.brand-img img{
  width: 100%;
  transition: all 0.6s;
}
.brand-img img:hover{
  transform: scale(1.1);
}

.brand-info{
  margin-left:15px;
}

.brand-infos{
  margin: 0 12px;
  padding: 12px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #404040;
  border-top: none;
}
.brand-storys>.brand:last-child>.brand-infos{
  margin-bottom: 16px;
}
.brand-title{
  font-size: 16px;
  margin-top: 42px;
  margin-bottom: 20px;
  color: rgb(0,65,56);
}
.brand-content{
  text-align:justify;
  text-justify:inter-ideograph;
  font-size: 14px;
  line-height: 31px;
  margin-bottom: 20px;
}
.brand-more{
  padding-bottom: 6px;
  color: #404040;
  font-size: 14px;
}

.brand-more span{
  transition: all 1s;
}
.brand-more span:hover{
  // font-weight:600;
  // border: 1px solid #404040;
  // padding: 6px;
  // color: rgb(0,65,56);
}

.brand-mores{
  width: 100px;
  height: 35px;
  border: 1px solid #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1c1c;
  font-size: 12px;
  margin-bottom: 26px;
}


.main-info{
  margin-top: 96px;
  width: 100%;
  height: 100%;
}
.swiper-slide{
  text-align: center;
}
.swiper-slide>img{
  width: 100%;
  height: 100%;
}


.hotel-link{
  margin-top: 62px;
  display: flex;
  padding: 0 240px;
  justify-content: center;
}
.hotel{
  // width: 370px;
  height: 260px;
  width: 100%;
  background-image: url(../assets/img/hotel-link1.jpg);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  text-align: center;
  color: white;
  // line-height: 275px;
  font-size: 14px;
  position: relative;
}
.hotel1{
  background-image: url(../assets/img/hotel-link1.jpg);
}
.hotel2{
  background-image: url(../assets/img/hotel-link2.jpg);
}
.hotel3{
  background-image: url(../assets/img/hotel-link3.jpg);
}
.hotel4{
  background-image: url(../assets/img/hotel-link4.jpg);
}
.hotel span{
  position:absolute;
  vertical-align:middle;
  display:inline-block;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0,65,56,0.4);

}
.hotel-link>.hotel:not(:last-child){
  margin-right: 20px;
}




@media screen and(max-width: 1440px) {
  .brand-story{padding: 0 120px;}
  .hotel-link{padding: 0 120px;}
}
@media screen and(max-width: 1024px) {
  .brand-story{padding: 0 60px;}
  .hotel-link{padding: 0 60px;}
}
@media screen and(max-width: 992px) {
  .brand-story{padding: 0 40px;}
  .hotel-link{padding: 0 40px;}
}
@media screen and(max-width: 810px) {
  .hotel-link>.hotel:not(:last-child){margin-right: 10px;}
  
  .brand-img{
    border: 0px solid #fff;
    padding: 0px;
  }

  .brand-title{
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .brand-content{
    margin-bottom: 10px;
    line-height: 22px;
  }

  .brand-more{
    display:block;
    margin-bottom: 30px;
  }

  .brand-info{
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    margin-left: 0px;
  }
  .main-info{
    margin-top: 10px;
  }

  .brand-center{
    font-size: 14px;
  }

  .brand-content{
    font-size: 12px;
  }

  .brand-mores{
    font-size: 12px;
  }

 
}
@media screen and(max-width: 660px) {
}





</style>
