import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'page/recommend/recommend'
import SeasonDetail from 'page/season-detail/season-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/season-detail/:id',
      component: SeasonDetail
    }
  ]
})
