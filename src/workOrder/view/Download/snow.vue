<template>
    <div>
        <Title :titleObj="titleObj"></Title>
        <downloadAddress :addressObj="addressObj"></downloadAddress>
        <stepList :installationList="installationList"></stepList>
    </div>
</template>
<script>
    import Title from "@/components/workOrder/download/title";
    import downloadAddress from "@/components/workOrder/download/download-address";
    import stepList from "@/components/workOrder/download/step-list";
    import {getDownloadInfo} from "@/workOrder/api/workOrder/download";

    export default {
        data() {
            return {
                titleObj: {
                    logo: this.$CDN('/plugins/screenSnow/timg.jpg'),
                    title: 'ScreenSnow客户端下载'
                },
                addressObj: {
                    backgroundUrl: this.$CDN('/download/download-background.png'),
                    title: '“ScreenSnow”是一款桌面透明壁纸软件',
                    advantage: '非常酷的桌面，而且鼠标穿透不影响正常工作。',
                    downloadList: [
                        {
                            type: 'Win64',
                            logoUrl: this.$CDN('/download/microsoft-icon.png'),
                            downloadUrl: 'http://custom-center.oss-cn-hangzhou.aliyuncs.com/customerCenter/plugins/screenSnow/%E6%A1%8C%E9%9D%A2%E9%9B%AA%E8%8A%B1_setup_1.0.14.exe',
                            title: 'Windows客户端',
                            isRecommend: true,
                            latestVersion: '最新版本：V1.0.14',
                            applicablePlatform: '适用平台：Win7/8/10    64位'
                        },
                        {
                            type: 'Win32',
                            logoUrl: this.$CDN('/download/microsoft-icon.png'),
                            downloadUrl: 'http://custom-center.oss-cn-hangzhou.aliyuncs.com/customerCenter/plugins/screenSnow/%E6%A1%8C%E9%9D%A2%E9%9B%AA%E8%8A%B1_setup_1.0.14.exe',
                            title: 'Windows客户端',
                            isRecommend: false,
                            latestVersion: '最新版本：V1.0.14',
                            applicablePlatform: '适用平台：Win7/8/10    32位'
                        }
                    ]
                },
                installationList: [
                    {
                        imgUrl: this.$CDN('/plugins/screenSnow/download/1.png'),
                        stepInfo: '第一步：双击exe文件'
                    },
                    {
                        imgUrl: this.$CDN('/plugins/screenSnow/download/2.png'),
                        stepInfo: '第二步：选择安装路径（也可以使用默认安装路径）'
                    },
                    {
                        imgUrl: this.$CDN('/plugins/screenSnow/download/3.png'),
                        stepInfo: '第三步：完成安装'
                    }
                ]
            }
        },
        components: {
            Title,
            downloadAddress,
            stepList
        },
        methods: {
            async getDownloadInfoAction() {
                let res = await getDownloadInfo()
                if (!res || res.status !== 200) {
                    console.log('系统信息获取失败')
                    return;
                }
                let arr = []
                let data = res.data
                for (let item in data) {
                    let obj = {}
                    obj['type'] = item || '';
                    obj['logoUrl'] = data[item]['logoUrl'] || "";
                    obj['downloadUrl'] = data[item]['file'] && data[item]['file']['path'] || ""
                    obj['title'] = data[item]['title'] || ""
                    obj['isRecommend'] = (new RegExp(data[item]['navigator'], 'i')).test(navigator.userAgent)
                    obj['latestVersion'] = data[item]['file'] && data[item]['file']['version'] || ""
                    obj['applicablePlatform'] = data[item]['applicablePlatform'] || ""
                    obj['description'] = data[item]['description'] || []
                    if (obj['isRecommend']) {
                        arr.unshift(obj)
                    } else {
                        arr.push(obj)
                    }
                }
                console.log('arr', arr)
                this.addressObj.downloadList = arr
            }
        },
        mounted() {
            // this.getDownloadInfoAction()
        }
    }
</script>
<style scoped>
</style>
