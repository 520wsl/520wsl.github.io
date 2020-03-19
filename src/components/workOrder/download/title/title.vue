<template>
    <div class="title">
        <img :src="titleObj.logo" title="喜小帮桌面版客户端下载" alt="喜小帮桌面版客户端下载" />
        <span>{{titleObj.title}}</span>
    </div>
</template>
<script>
export default {
    props: ["titleObj"],
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    }
}
</script>
<style scoped>
.title {
  opacity: 0.8;
  background: #000;
  font-size: 18px;
  color: #fff;
  height: 60px;
  overflow: hidden;
  padding-left: 21%;
  line-height: 60px;
}
.title img {
  padding-top: 16px;
  float: left;
  width: 28px;
}
.title span {
  padding-left: 6px;
  float: left;
}
</style>
