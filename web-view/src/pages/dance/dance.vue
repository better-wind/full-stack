<template>
  <div class="robot-box">
    <canvas id="robotCanvas"></canvas>
  </div>
</template>
<script>
  import {danceRun} from '../../assets/js/danceCanvas/dance'
  export default {
    name: 'Home',
    data:()=>({

    }),
    created(){
      this.initView()
    },
    mounted(){
      this.initDance()
    },
    methods:{
      initView(){
//        danceRun()
      },
      initDance(){
        danceRun()
      }
    }
  };
</script>
<style scoped lang='scss' rel="stylesheet/scss">
  .robot-box{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    background:#000;
    cursor: pointer;
  }
</style>
