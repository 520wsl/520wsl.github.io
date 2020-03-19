/*
 * @Author: Mad Dragon 395548460@qq.com
 * @Date: 2018-11-07 22:19:44
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-28 14:08:31
 * @explanatory:  路由 配置
 */
import Vue from "vue";
import Router from "vue-router";
import routes from "@/activity/router/routers";
import iView from "iview";

Vue.use(Router);
const router = new Router({
  base: "/activity/",
  routes,
  mode: "history"
});
const LOGIN_PAGE_NAME = "login";
// 全局守卫
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
// 全局后置钩子
router.afterEach(to => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
