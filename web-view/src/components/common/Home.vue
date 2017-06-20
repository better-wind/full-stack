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
        console.log(this.testkk.code)
        this.fetchTest()
          .then((data)=>{
            console.log(data)
            console.log('====')
            console.log(this.testkk)
          })
//        const opts = {
//          method: 'GET',
//          url: '/api/aa',
//          // params:data.data
//        }
//        this.fetchVue(opts)
//          .then((rs)=>{
//            console.log(rs)
//          })
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
