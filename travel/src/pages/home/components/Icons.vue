<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl'
  .swiper-container-horizontal > .swiper-pagination-bullets
    bottom: 0rem
  .icons >>> .swiper-container
    height:0
    padding-bottom:50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height:0
      padding-bottom: 24%
      .icon-img
        position: absolute
        top:5%
        left:0
        right: 0
        bottom: 5%
        box-sizing: border-box
        padding: .15rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        left:0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
