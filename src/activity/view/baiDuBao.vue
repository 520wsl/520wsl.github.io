<template>
    <div class="bdb">
        <div class="bdbC">
            <img class="img" :src="$CDN('/download/baodubao.jpg')" alt="百度宝">
            <div class="time">
                <p> <span class="dq"><b>活动截止</b> </span>： 2019年11月30日24点</p>
                <p> <span class="dq"> <b>倒计时</b> </span> ： {{time.D}} 天 {{time.h}} 时 {{time.m}} 分 {{time.s}} 秒</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            isEnd: true,//倒计时是否结束
            endTime: "2019-11-30 24:00:00",
            time: { D: 0, h: 0, m: 0, s: 0, },
        }
    },
    created () {
        document.title = '四喜·百度宝';
    },
    mounted () {
        this.setEndTime()
    },
    methods: {
        setEndTime () {
            let time = this.time
            let that = this
            let interval = setInterval(function timestampToTime () {
                let date = parseInt(that.timeTolong("2019-11-30 24:00:00")) - (Date.parse(new Date())); //计算剩余的毫秒数
                if (date <= 0) {
                    // that.isEnd = true;
                    time = { D: 0, h: 0, m: 0, s: 0, }
                    clearInterval(interval)
                } else {
                    time.D = parseInt(date / 1000 / 60 / 60 / 24, 10);
                    time.h = parseInt(date / 1000 / 60 / 60 % 24, 10);
                    if (time.h < 10) {
                        time.h = "0" + time.h
                    }
                    time.m = parseInt(date / 1000 / 60 % 60, 10);//计算剩余的分钟
                    if (time.m < 10) {
                        time.m = "0" + time.m
                    }
                    time.s = parseInt(date / 1000 % 60, 10);//计算剩余的秒数 
                    if (time.s < 10) {
                        time.s = "0" + time.s
                    }
                }
            }, 1000);
            // this.time = time
        },
        timeTolong (time) {
            var arr = time.replace(" ", "-").replace(":", "-").replace(":", "-").split("-");
            for (var i = 0; i < 6; i++) {
                if (!arr[i]) {
                    arr[i] = 0;
                }
            }
            return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]).getTime();

        }
    }
}
</script>

<style lang="less" scoped>
.bdb,
.bdbC {
    line-height: 20px;
    font-size: 16px;
    height: 100%;
    width: 100%;
}
.bdbC {
    overflow-y: auto;
}
.img {
    // position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.time {
    margin-top: -70%;
    z-index: 100;
}
.dq {
    display: inline-block;
    width: 70px;
    text-align: justify;
    vertical-align: top;
    &::after {
        display: inline-block;
        width: 100%;
        content: "";
        height: 0;
    }
}
</style>
