<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key='item.id'>
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1500
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  //样式穿透 父组件 >>> 子组件 让父组件中所有出现的子组件都加上此样式
  .wrapper >>> .swiper-pagination-bullet-active
    background : #fff
  .wrapper
    overflow :hidden
    width :100%
    height:0
    background-color :#eee
    padding-bottom: 31.25%
    .swiper-img
      width 100%
</style>
