<template>
  <div>
    <v-ref ref="demoABC" :demo-props="a">

    </v-ref>
    <button @click="clickRef">点我</button>
    <button @click="fd">防抖</button>
    <button @click="jl">节流</button>
    <button @click="xz">限制</button>
    <div id="eId"></div>
    <div>{{name}}----
      {{getName}}
    </div>
  </div>

</template>
<script>
  import vRef from '@/components/demo/demeRef'
  import Vue from 'vue';
  function debounce(method, delay){
    var timer = null;
    return function(){
      var context = this,args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function(){
        console.log(',,,,,')
        method.apply(context, args);
      },delay);
    }
  }
  function throttle(method, delay){
    var last = 0;
    return function (){
      var now = +new Date();
      if(now - last > delay){
        method.apply(this,arguments);
        last = now;
      }
    }
  }
  var XZList = {}
  function XZNM(method,key,delay){
    if(XZList[key] && XZList[key].length) return function(){}
    XZList[key] = [1]

    return function (){
      var context = this,args = arguments;
        setTimeout(function(){
          method.apply(context,args)
          delete XZList[key]
        },delay)

    }
  }
  export default {
    computed:{
        getName:function(){
           this.name = '111'
           return this.name + '456'
        }
    },
    data:()=>({
      a:'syncing',
      name:'123'
    }),
    methods:{
      clickRef(){
        this.$refs.demoABC.demoABC();
        console.log(this.$refs.demoABC.ah)
        var ExtMent = Vue.extend({
            data:()=>({
                bbb:'aaa'
            }),
            template:'<p>{{bbb}}</p>'
        })
        new ExtMent().$mount('#eId')

        this.$store.dispatch('actionDemo')
      },
      fd(){
        debounce(function(){console.log('F--D')},1000)()
      },
      jl(){
        throttle(function(){console.log('J--L')},5000)()
      },
      xz(){
        XZNM(function(){console.log('X--Z')},'XZ',300)()
      }
    },
    components:{
      vRef
    },
  }

</script>
<style lang="scss" scoped rel="stylesheet/scss">

</style>
