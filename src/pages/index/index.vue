<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
  // console.log('轮播图数据:', bannerList.value)
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!--导航栏-->
  <CustomNavbar />
  <!--轮播图-->
  <XtxSwiper :list="bannerList" />
  <CategoryPanel />

  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
