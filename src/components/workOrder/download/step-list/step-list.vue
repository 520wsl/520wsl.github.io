<template>
    <div class="installation">
        <header>
            客户端安装说明
        </header>
        <ul class="list">
            <li v-for="(item,index) in installationList" :key="index">
                <span>
                    {{item.stepInfo}}
                </span>
                <img :src="item.imgUrl" :alt="item.stepInfo" :title="item.stepInfo">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['installationList'],
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
.installation {
  color: #444;
  font-size: 16px;
}
.installation header {
  font-size: 24px;
  line-height: 112px;
  border: 1px solid #d9d9d9;
  font-weight: bold;
}
.installation .list {
  padding-bottom: 147px;
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
.installation .list li {
  list-style-type: none;
}
.list li span {
  display: block;
  margin: 28px 0 20px;
}
.list li img {
  display: block;
  width: 100%;
}
</style>
