import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'
/**
 * v1.0.0 首页轮播图接口
 * @param distributionSite 广告区域展示位置 1 为首页（默认值） 2 为商品分类页
 * @returns getHomeBanner 接口返回一个 Promise 对象，解析后得到轮播图数据
 */

export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序接口
 */

export const getHomeCategoryApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
