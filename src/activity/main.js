import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";
import { CDN  } from "@/libs/tools";
Vue.use(iView);

Vue.prototype.$CDN = CDN;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
