<template>
  <div id="bitsino">
    <div class="bitsino-header">
      <div class="logo">
        <img src="../assets/logo.png">
      </div>
    </div>
    <keep-alive>
      <router-view class="avue-view" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view class="avue-view" v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#bitsino .bitsino-header{
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #001938;
}
#bitsino .bitsino-header .logo img{
  height: 30px;
}
</style>
