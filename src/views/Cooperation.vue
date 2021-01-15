<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true"></Header>
    <Login/>
    <div class="body container">
      <!-- 首屏背景 -->
      <div class="firstScreen">
        <img src="../assets/img/banner4-1.jpg" alt=""/>
        <div class="title">
          <p>
            我们是国内第一家研究养生酒店的机构，多年来研究了国际上上百家养生酒店，并研发出适合中国国情的养生酒店的模式。
          </p>
        </div>
      </div>
      <!-- 正文内容 -->
      <div class="main-info">
        <div class="text-description">
          <p>
            璞纳养生酒店集团是国内第一家集养生酒店咨询、开发和运营管理为一体的酒店集团。作为业主，我们拥有舟山璞纳养生酒店；作为咨询机构，我们服务过上海阿纳迪酒店、腾冲东山养生酒店、三亚海棠湾养生酒店等等。<br />
            很多业主希望开发养生酒店，但这却不是一件简单的事情——它不仅仅是一个普通的酒店，更是融合了多种疗愈方法的身心灵修养圣地，是一个跨界的产品。我们接触到很多投资者，常常无从下手。我们的存在，即是帮助投资者理清思路，探索养生产品和疗程，最终实现每个项目独特的疗愈气质。<br />
            养生酒店作为一个新型跨界的酒店类型，现阶段整个国际上有经验的团队并不多，包括有经验的设计师、养生活动配置顾问、运营管理公司等。我们希望以我们多年在养生酒店行业的经验和资源，帮助真正的养生酒店开发者实现他们的梦想。<br />
          </p>
        </div>
        <div class="img-description">
          <h2>我们的案例</h2>
          <div class="case">
            <div class="case-content">
              <div class="case-bd">
                <div class="case1">
                  <img src="../assets/img/case1.jpg" alt="" width="100%"/>
                </div>
              </div>
              <p>上海阿纳迪酒店</p>
            </div>
            <div class="case-content">
              <div class="case-bd">
                <div class="case2">
                  <img src="../assets/img/case2.jpg" alt="" width="100%"/>
                </div>
              </div>
              <p>腾冲东山养生酒店</p>
            </div>
            <div class="case-content">
              <div class="case-bd">
                <div class="case3">
                  <img src="../assets/img/case3.jpg" alt="" width="100%"/>
                </div>
              </div>
              <p>三亚海棠湾养生酒店</p>
            </div>
          </div>
          <div class="caseHotelName"></div>
        </div>
        <div class="serveInclude">
            <div class="serve-info">
                <h2>我们的咨询服务包括：</h2>
                <p>
                  酒店可行性研究及概念方案：包括酒店市场调查、产品定位、养生菜单和套餐、功能指标、投资估算、财务测算等 <br> 
                  设计顾问：编制建筑和室内《设计指引/优化方案》，建筑设计审核及优化建议，室内设计审核及优化建议 <br>
                  管理公司引进：引进国际养生酒店管理公司，协助业主进行合同谈判
                </p>
            </div>
        </div>
        <div class="footImg">
            <img src="../assets/img/banner4-2.jpg" alt="" width="100%">
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  name: "BrandStroy",
  components: {
    Header,
    Footer,
    Login
  },
  data() {
    return {
      movetoFirstSecond: false,
    };
  },
  mounted() {},
  methods: {
    intoSecondscreen() {
      window.scrollY >= 100 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
    },
  },
  created() {
    // 添加监听，实时获取滚动条滚动的高度
    window.addEventListener("scroll", this.intoSecondscreen);
    this.intoSecondscreen();
  },
  destroyed() {
    window.removeEventListener("scroll", this.intoSecondscreen);
  },
};
</script>

<style lang="scss" scoped>
.firstScreen{
  position: relative;
}
.firstScreen > .title {
  // margin: -119px auto 119px auto;
  width: 100%;
  position: absolute;
  bottom: 80px;
  padding: 0 240px;
  box-sizing: border-box;
}
.firstScreen > .title > p {
  font-size: 14px;
  color: white;
  line-height: 28px;
}

.main-info {
  // padding: 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.text-description,.img-description,.serveInclude{
  // width: 1620px;
  padding: 0 240px;
}
.text-description p {
  // color: white;
  line-height: 28px;
  margin: 82px 0 61px 0;
  text-align: justify;
}

.img-description > h2 {
  margin-bottom: 11px;
  font-size: 16px;
}
.case {
  display: flex;
}
.case > .case-content:not(:last-child) {
  margin-right: 30px;
}
.case-content {
  text-align: center;
}
.case-content > p {
  margin: 17px 0 80px 0;
}
.case-bd {
  // width: 516px;
  // height: 348px;
  padding: 12px;
  border: 2px solid #404040;
}
.case1,
.case2,
.case3 {
  // width: 490px;
  // height: 322px;
  // margin: 13px auto;
}


.serveInclude{
    width: 100%;
    box-sizing: border-box;
    // height: 211px;
    background-color: #1c1c1c;
}
.serve-info{
    // margin: 42px auto;
    padding: 42px 0;
}
.serve-info>h2{
    color:white;
    font-size: 16px;
    margin-bottom: 22px;
}
.serve-info{
    // width: 1620px;
}
.serve-info>p{
    color: white;
    line-height: 28px;
}


.footImg{
    // width: 1920px;
    // height: 802px;
}



@media screen and(max-width: 1440px) {
  .text-description,.img-description,.serveInclude{padding: 0 120px;}
  .firstScreen > .title{padding: 0 120px;}

  .firstScreen > .title {bottom: 60px;}
}
@media screen and(max-width: 1024px) {
  .text-description,.img-description,.serveInclude{padding: 0 60px;}
  .firstScreen > .title{padding: 0 60px;}

  .firstScreen > .title {bottom: 40px;}
  .case > .case-content:not(:last-child) {margin-right: 15px;}
  .serve-info{padding: 20px 0;}
  .serve-info>h2{margin-bottom: 10px;}
}
@media screen and(max-width: 992px) {
  .text-description,.img-description,.serveInclude{padding: 0 20px;}
  .firstScreen > .title{padding: 0 20px;}
}


</style>