/*
 * @Author: Mad Dragon 395548460@qq.com
 * @Date: 2018-11-07 20:46:41
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-07 21:05:01
 * @explanatory:  api 调用
 */
import api from "@/libs/api.request";

const baseUrl = "/work-order-service";

function post(url, params) {
    return api.post(baseUrl + url, params);
}

function get(url, params) {
    return api.get(baseUrl + url, params);
}

export const getDownloadInfo = () => {
    return api.get("/info/client/electron/info/installer");
};
