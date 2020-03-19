<template>
    <div class="address-bg" :style="'background:url('+addressObj.backgroundUrl+')'">
        <h2>{{addressObj.title}}</h2>
        <h3>{{addressObj.advantage}}</h3>
        <addressList :downloadList="addressObj.downloadList"></addressList>
    </div>
</template>
<script>
import addressList from "@/components/workOrder/download/address-list"
export default {
    props: ['addressObj'],
    data() {
        return {
        }
    },
    components: {
        addressList
    },
    methods: {
    }
}
</script>
<style scoped>
.address-bg {
  padding: 160px 0 150px;
  color: #fff;
}
.address-bg h2 {
  font-size: 45px;
  line-height: 64px;
}
.address-bg h3 {
  font-size: 20px;
  line-height: 28px;
  margin-top: 39px;
  padding-bottom: 60px;
}
</style>
