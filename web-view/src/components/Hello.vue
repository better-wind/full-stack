<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created(){
    this.initView()
  },
  methods:{
    initView(){
//      let obj = {}
//      Object.defineProperty(obj, "key", {
//        configurable:true,
//        enumerable:true,
//        writable:false,
//        value:'static'
//      });
//      console.log(obj)
//      for(let i in obj){
//        console.log(obj[i])
//      }
//      let i = ''
//      Object.defineProperty(obj, "key", {
//        configurable:true,
//        enumerable:true,
//        set:function(val){
//          console.log('像我设置'+val)
//          i = val
//        },
//        get:function(){
//          console.log('像我取值');
//          return i
//        },
//      });
//      obj.key = 'change'
//      console.log(obj.key)
//      setTimeout(function() {
//        console.log(1)
//      }, 0);
//      new Promise(function(resolve) {
//        console.log(2);
////        for( var i=0 ; i<10000 ; i++ ) {
////          i == 9999 && resolve();
////        }
//        new Promise(function(resolv){
//          resolv()
//        }).then(()=>{
//          resolve();
//        })
////        Promise.resolve().then(()=>{
////
////        })
//        console.log(3);
//      }).then(function() {
//        console.log(4);
//      });
//      console.log(5);
//      console.log('script start');
//
//      setTimeout(function() {
//        console.log('setTimeout');
//      }, 0);

//      Promise.resolve().then(function() {
//        console.log('promise1');
//      }).then(function() {
//        console.log('promise2');
//      }).then(function() {
//        console.log('promise3');
//      });
//
//      console.log('script end');
      function doSomething() {
        return new Promise(function(resolve, reject) {
          console.log('call doSomething')
          if (1){
            resolve('doSomething');
          } else {
            reject();
          }
        })
      }
      function doSomethingElse(){
          return new Promise(function(resolve, reject) {
            console.log('call doSomethingElse')
            if (1){
              resolve('doSomethingElse');
            } else {
              reject();
            }
          })
      }
      function finalHandler(msg){
         console.log(msg)
      }
//      doSomething().then(()=>{
//          return doSomethingElse()
//      }).then(finalHandler)
//      doSomething().then(()=>{
//        doSomethingElse()
//      }).then(finalHandler)
      doSomething().then(doSomethingElse())
        .then(finalHandler)
//      doSomething().then(doSomethingElse)
//        .then(finalHandler)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss">
  body{
    h1{
      font-size: 22px;
    }
  }
</style>
