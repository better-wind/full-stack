import axios from 'axios'
const fetch = (commit,opts)=>{
  return new Promise((resolve)=>{
    axios(opts).then((response)=>{
      if(response.data.code == 1){
        resolve && resolve()
      } else {
        setToast(commit)
      }
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
export default {

}
