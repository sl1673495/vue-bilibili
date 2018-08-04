import axios from 'axios'

export const getSeasonInfo = (id) => {
  return axios.get(`https://api.imjad.cn/bilibili/v2/?get=seasoninfo&season_id=${id}`)
    .then(res => res.data.result)
}