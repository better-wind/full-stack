<template>
  <div>
    hhhhhhh{{ah}}
    ---------
    {{demoProps}}
  </div>

</template>
<script>

  export default {
    data:()=>({
      ah:'aaaaa'
    }),
    props:{
      'demoProps':{
        type:String,
        required: true,
        validator: function (value) {
          return [
              'syncing',
              'synced',
              'version-conflict',
              'error'
            ].indexOf(value) !== -1
        }
      }

    },
    methods:{
      demoABC(){
        console.log('ABC')
      }
    },
  }

</script>
<style lang="scss" scoped rel="stylesheet/scss">

</style>
