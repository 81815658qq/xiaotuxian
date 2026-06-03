<script setup lang="ts">
// import XtxSwiper from '@/components/XtxSwiper.vue'
// import XtxGuess from '@/components/XtxGuess.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
  // console.log('轮播图数据:', bannerList.value)
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryApi()
  categoryList.value = res.result
  // console.log('前台分类数据:', categoryList.value)
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  // console.log('热门推荐数据:', hotList.value)
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!--导航栏-->
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <!--轮播图-->
    <XtxSwiper :list="bannerList" />
    <!--分类-->
    <CategoryPanel :list="categoryList" />
    <!--热门推荐-->
    <HotPanel :list="hotList" />
    <!--猜你喜欢-->
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
