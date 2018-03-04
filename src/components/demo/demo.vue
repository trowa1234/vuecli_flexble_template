<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <div class="aaa">
        
    </div>
    <div class="bbb">
        1像素边框
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      msg: "2x，3x背景图"
    };
  }
};
</script>

<style scoped lang="less">
@import "../../common/less/main.less";

// 直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
// 在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
// 在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个

h1 {
  font-size: @font-size-h1;/* px */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: @theme-yellow;
}
.aaa {
  width: 90px;
  height: 96px;
  .bg-image("test");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
}
.bbb {
  width: 100%;
  height: 96px;
  .border-1px(#f00);
  line-height: 96px;
  text-align: center;
}
</style>
