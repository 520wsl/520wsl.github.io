<template>
    <div>
        <!-- <ul class="recommend">
            <template v-for="(item,index) in downloadList">
                <li v-if="item.isRecommend" :key="'recommend'+index" class="item">
                    <div class="item-left">
                        <header>{{item.title}}</header>
                        <div v-if="item.applicablePlatform">{{item.applicablePlatform}}</div>
                        <template v-if="item.description && item.description.length > 0">
                            <div v-for="(item,index) in item.description" :key="index">
                                {{item}}
                            </div>
                        </template>
                        <div v-if="item.latestVersion">{{item.latestVersion}}</div>
                    </div>
                    <div class="item-right" @click="downloadFile(item)">
                        <img :src="item.logoUrl">
                        <div>
                            <img :src="$CDN('/download/download-icon.png')" alt="">
                            <span>推荐下载</span>
                        </div>
                    </div>
                </li>
            </template>
        </ul> -->
        <ul class="normal">
            <template v-for="(item,index) in downloadList">
                <li :key="'normal'+index" class="item">
                    <div class="item-left">
                        <header>{{item.title}}</header>
                        <div v-if="item.applicablePlatform">{{item.applicablePlatform}}</div>
                        <template v-if="item.description && item.description.length > 0">
                            <div v-for="(item,index) in item.description" :key="index">
                                {{item}}
                            </div>
                        </template>
                        <div v-if="item.latestVersion">最新版本：{{item.latestVersion}}</div>
                    </div>
                    <div :class="item.isRecommend?'item-right groom':'item-right'" @click="downloadFile(item)">
                        <img :src="item.logoUrl">
                        <div>
                            <img :src="$CDN('/download/download-icon.png')" alt="">
                            <span>{{item.isRecommend?'推荐下载':"下载"}}</span>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["downloadList"],
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
        downloadFile(obj) {
            if (obj.downloadUrl) {
                window.open(obj.downloadUrl)
            }
        }
    }
}
</script>
<style scoped>
.recommend,
.normal {
  overflow: hidden;
}
.recommend .item,
.normal .item {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #6d6d6d;
  border-radius: 15px;
  overflow: hidden;
  display: inline-block;
  color: #fff;
  margin: 0 25px 28px 25px;
  font-size: 14px;
}
.item .item-left {
  float: left;
  padding: 12px 24px;
  width: 237px;
  text-align: left;
}
.item .item-left header {
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 10px;
}
.item .item-left > dev {
  line-height: 20px;
  padding-bottom: 4px;
}
.item .item-right {
  width: 120px;
  min-height: 120px;
  height: 100%;
  cursor: pointer;
  float: right;
  background: #ff9b1b;
  padding-top: 20px;
}
.item .item-right:hover {
  opacity: 0.8;
}
.normal .item .item-right {
  background: #338bf8;
}
.normal .item .groom {
  background: #ff9b1b;
}
.item .item-right > img {
  display: block;
  height: 40px;
  margin: 0 auto 18px;
}
.item .item-right span {
  padding-left: 8px;
}
</style>
