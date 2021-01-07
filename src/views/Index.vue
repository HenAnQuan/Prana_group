<template>
  <div>
    <Header />
    <div class="body">
      <!-- 首屏背景 -->
      <div class="firstScreen">
        <img src="../assets/img/banner1.jpg" alt="" :width="1920 * w + 'px'" :height="1080 * h + 'px'"/>
      </div>
      <!-- 酒店预订 -->
      <div class="booking">
        <div class="booking-hotel">
          <h2>预定酒店</h2>
          <span class="booking-address">
            <img
              src="../assets/icon/address1.png"
              alt=""
              width="36px"
              height="36px"
            />
            <span>浙江省舟山市塘头村</span>
          </span>
        </div>
        <div class="booking-info">
          <h2>舟山璞纳酒店</h2>
          <input type="text" placeholder="1间客房" />
        </div>
      </div>

      <!-- 品牌故事  养生疗愈 酒店合作 -->
      <div class="brand-story">
        <div class="brand brand1">
          <div class="brand-img">
            <img src="../assets/img/brandstroy1.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">品牌故事</h3>
            <p class="brand-content">世界上有这样一种酒店，他们避开热闹的著名景点，选择偏僻而纯净的自然环境；他们拥有唤活身心和疗愈的氛围，提供专业的健康生活咨询、各种疗法、课程和活动，让客人在放松享受的同时，获得持续健康的生活方式。</p>
            <a class="brand-more" href="">了解更多</a>
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
            <a class="brand-more" href="">了解更多</a>
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
            <a class="brand-more" href="">了解更多</a>
          </div>
        </div>
      </div>
      
      <!-- 酒店轮播图 -->
      <div class="main-info">
        <img src="../assets/img/banner2-1.jpg" alt="">
      </div>

      <!-- 酒店部分连接 -->
      <div class="hotel-link">
        <div class="hotel hotel1"><span>酒店概览</span></div>
        <div class="hotel hotel2"><span>酒店设施</span></div>
        <div class="hotel hotel3"><span>养生套餐</span></div>
        <div class="hotel hotel4"><span>每日工坊</span></div>
      </div>



    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "Index",
  components: {
    Header,Footer
  },
  data() {
    return {
      w: "",
      h: "",
    };
  },
  mounted() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.w = w / 1920;
    this.h = h / 1080;
    console.log(w);
    console.log(h);
  },
  methods:{
    getSize(){
      this.w = window.innerWidth/1920;
      this.h = window.innerHeight/1080;
    }
  },
  created(){
    window.addEventListener('resize', this.getSize);
    this.getSize()
  },
  destroyed(){
    window.removeEventListener('resize', this.getSize)
  }
};
</script>

<style lang="scss" scoped>
.body{
  color: #404040;  
}
.header {
  position: fixed;
  top: 0;
}
.firstScreen{
  width: 100%;
}
.booking {
  width: 100%;
  margin-top: -4px;
  padding: 52px 149px 78px 149px;
  color: white;
  background-color: #1c1c1c;
}
.booking-hotel {
  display: flex;
  justify-items: space-between;
}
.booking-address {
  margin-left: 41px;
}
.booking-address img {
  margin-right: 16px;
}
.booking-info {
  display: flex;
  margin-top: 54px;
}
.booking-info h2{
  margin-right: 100px;
}

.brand-story{
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top: 115px;
}
.brand{
  width: 515px;
  
}
.brand1,.brand2{
  margin-right: 37px;
}
.brand-img{
  width: 515px;
  height: 382px;
  border: 1px solid #404040;
  text-align: center;
}
.brand-story img{
  width: 485px;
  height: 352px;
  margin-top: 15px;
}
.brand-info{
  width: 485px;
  margin-left:15px;
}
.brand-title{
  font-size: 24px;
  margin-top: 42px;
  margin-bottom: 29px;
}
.brand-content{
  text-align:justify;
  text-justify:inter-ideograph;
  font-size: 18px;
  line-height: 31px;
  margin-bottom: 29px;
}
.brand-more{
  padding-bottom: 6px;
  text-decoration: overline;
  color: #404040;
  font-size: 18px;
}


.main-info{
  margin-top: 96px;
  width: 100%;
  height: 920px;
}


.hotel-link{
  margin-top: 62px;
  display: flex;
  justify-content: center;
}
.hotel{
  width: 370px;
  height: 274px;
  background-image: url(../assets/img/hotel-link1.jpg);
  text-align: center;
  color: white;
  line-height: 274px;
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
  vertical-align:middle;
  display:inline-block;
}
.hotel-link>.hotel:not(:last-child){
  margin-right: 47px;
}
</style>
