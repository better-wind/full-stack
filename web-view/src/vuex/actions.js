import axios from 'axios'
/*
*
* */
const fetch = (commit,opts,fn)=>{
  startLoading(commit)
  return new Promise((resolve)=>{
    axios(opts).then((response)=>{
      if(response.data.code == 1){
        fn && commit(fn,response.data)
        resolve && resolve(response.data)
      } else {
        setToast(commit)
      }
      endLoading(commit)
    })
      .catch((err)=>{
        console.log(err)
        setToast(commit)
      })
  })

}
const startLoading = (commit,rs)=>{
  console.log('start...')
}

const endLoading = (commit,rs)=>{
  console.log('end...')
}
const setToast = (commit,rs)=>{
  console.log('提示')
}
const formData = (opts) => {
  let data = [];
  for(let i in opts){
    data.push(i + '='+opts[i])
  }
  return data.join('&');
}
export default {
  fetchTest({commit},data){
    const opts = {
      method: 'POST',
      url: '/sellerAdmin/reg',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data:formData({
        name:'aaaa',
        password:'bbb'
      })
    }
    return fetch(commit,opts,'SET_TEST')
  },
  fetchVue({commit},opts){
    return fetch(commit,opts)
  },
}
