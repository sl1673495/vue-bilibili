import axios from 'axios'

import cnData from './mock/cn'
import douyinData from './mock/douyin'
import zhihuData from './mock/zhihu'

export const getSeasonRecommends = createRecommendRequest('global', 'bangumiRankCallback')

export const getCnRecommends = createRecommendRequest('cn', 'guochuangRankCallback')

function createRecommendRequest(type, jsonpCallbackName) {
  return () => {
    return axios.get(`https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=${type}`)
      .then(res => {
        res = res.data
        if (typeof res === 'object') {
          return res.result.list
        } else {
          // jsonp处理
          return new Function(`
                    var ${jsonpCallbackName} = function(res) {
                      return res.result.list
                    }
                    return ${res}
                  `)()
        }
      })
  }
}

export const fallbackSeasonRecommends = () => {
  return axios.get("static/json/season.json")
    .then(res => res.data.list)
}

const r = v => Promise.resolve(v)

export const fallbackCnRecommends = () => r(cnData)

export const getShortVideos = () => r(douyinData)

export const getZhihuImages = (id) => {
  return axios.get(`http://www.jackyangli.com:8089/sisterImg?questionId=${id}&limit=18&offset=0`).then(res => res.data)
}

const ZHIHU_DEFULAT_IDS = [28997505, 50426133]

export const getZhihuDefaults = () => {
  return Promise.all(ZHIHU_DEFULAT_IDS.map(id => getZhihuImages(id)))
}

export const getZhihuDefaultsFallback = () => r(zhihuData)