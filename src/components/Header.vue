<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/icon/logo1.png" alt="" />
    </div>
    <div class="nav">
      <ul>
        <!-- <li class="navItem" v-on="mouseover='addActive($event)'" v-on:mouseout='removeActive($event)'><img src="../assets/icon/hotel1.png" alt="" width="25px" height="26px"><span>酒店和度假村</span> <div></div></li> -->
        <li class="navItem"><img src="../assets/icon/hotel1.png" alt="" width="25px" height="26px"><span>酒店和度假村</span> <div></div></li>
        <li class="navItem"><img src="../assets/icon/brand1.png" alt="" width="22px" height="22px"><span>品牌故事</span> <div></div></li>
        <li class="navItem"><img src="../assets/icon/health1.png" alt="" width="22px" height="21px"><span>养生疗愈</span> <div></div></li>
        <li class="navItem"><img src="../assets/icon/cooperation1.png" alt="" width="26px" height="28px"><span>酒店合作</span> <div></div></li>
        <li class="login"><img src="../assets/icon/login1.png" alt="" width="22px" height="22px"><span>登陆</span></li>
        <li class="language"><span>中文</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        // addActive($event){
        //     $event.getElementsByTagName('span')
        // }
    }
};
</script>

<style scoped>
.header {
  height: 120px;
  display: flex;
  /* padding: 0 149px; */
  width: 100%;
  /* background-color: #1c1c1c; */
  background-image: linear-gradient(to bottom, rgba(28,28,28,.5),rgba(28,28,28,0));
  justify-content: space-between;
  color: white;
}
.logo{
    margin-left:149px;
    margin-top: 31px;
}
.nav{
    margin-top: 33px;
    margin-right: 149px;
}
.navItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 53px;
}
.navItem:hover{

}
.navItem>span{
    margin-top: 6px;
}
.navItem>div{
    width: 100%;
    height: 1px;
    background-color: white;
    margin-top: 9px;
    /* display: none; */
}
.navItem img,.navItem img{
    align-self: center;
}
.nav ul{
  display: flex;
  /* justify-content: flex-end; */
  /* justify-items: end; */
  align-items: flex-end;
}
.login{
    width: 111px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    margin:0 53px;
}
.login img{
    margin-right: 8px;
}
.language{
    height: 53px;
    display: flex;
    align-items: center;
}
</style>