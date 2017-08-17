<template>
  <div class="hello">
    <h1>{{ msg }}{{testkk}}</h1>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'hello',
    computed:{
      ...mapState(['testkk'])
    },
    data() {
      return {
        msg: 'sskk',
      };
    },
    created(){
      this.initView()
    },
    methods:{
      ...mapActions(['fetchTest','fetchVue']),
      initView(){
//        console.log(this.testkk.code)
//        this.fetchTest()
//          .then((data)=>{
//            console.log(data)
//            console.log('====')
//            console.log(this.testkk)
//          })
//        const opts = {
//          method: 'GET',
//          url: '/api/aa',
//          // params:data.data
//        }
//        this.fetchVue(opts)
//          .then((rs)=>{
//            console.log(rs)
//          })
        const PENDING = Symbol();
        const FULFILLED = Symbol();
        const REJECTED = Symbol();

        function Promisee(fn) {
          if (typeof fn != 'function') {
            throw new Error('resolver should be a function!');
          }

          let state = PENDING;
          let value = null;
          let handler = [];

          function fulfill(result) {
            state = FULFILLED;
            value = result;
            handler.forEach(next);
            handler = null;
          }

          function reject(err) {
            state = REJECTED;
            value = err;
            handler.forEach(next);
            handler = null;
          }

          function resolve(result) {
            try {
              let then = typeof result.then == 'function' ? result.then : null;
              if (then) {
                then.bind(result)(resolve, reject);
                return;
              }
              fulfill(result);
            } catch(err) {
              reject(err);
            }
          }

          function next({onFulfill, onReject}) {
            switch(state) {
              case FULFILLED:
                onFulfill && onFulfill(value);
                break;
              case REJECTED:
                onReject && onReject(value);
                break;
              case PENDING:
                handler.push({onFulfill, onReject});
            }
          }

          this.then = function (onFulfill, onReject) {
            return new Promisee((resolve, reject) => {
              next({
                onFulfill: (val) => {
                  try {
                    resolve(onFulfill(val));
                  } catch (err) {

                  }
                },
                onReject: (err) => {
                  reject(onReject(val));
                }
              });
            });
          }

          fn(resolve, reject);
        }
        let demoP = ()=>{
          return new Promisee(function(resolve){
            console.log('demoP---->Promisee')
            resolve('to----->resolve')
          })
        }
        demoP().then((s)=>{
            console.log(s)
        })

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
