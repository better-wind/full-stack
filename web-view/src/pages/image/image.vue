<template>
  <div>
    <div class="canvas-box">
      <canvas id="viewImage">

      </canvas>
      <div id="clipW" class="clip-w">
        <div class="clip-border clip-right" id="clipRight"></div>
        <div class="clip-border clip-bottom" id="clipBottom"></div>
        <div>
          <button id="leftRotate">左转</button>
          <button id="rightRotate">右转</button>
        </div>
        <div class="clip-sign">{{viewX +'x'+viewY}}</div>
      </div>
    </div>
    <canvas id="viewClip">

    </canvas>

    <input type="text" v-model="inputVal">
    <button @click="checkInput">点我</button>
    <button class="css-box" id="cssBox" style="width: 200px;height:200px" @click="checkCss">样式</button>
  </div>
</template>
<script>
  export default{

    mounted(){
      this.initImageView()
      this.clipMove()
    },
    data:()=>({
      image:null,
      clipCtx:null,
      viewX:100,
      viewY:100,
      inputVal:0
    }),
    methods:{
      initImageView(){
        var canvas = document.querySelector('#viewImage'),
            ctx = canvas.getContext('2d'),
            height,width,
            _self = this,
            image = new Image()
            canvas.height = 300
            canvas.width = 300
        image.onload = function(){
          ctx.drawImage(image,0,0,300,300)
          width = image.width
          height = image.height
          _self.clipView()
          _self.clipRotate()
        }
        image.src = 'static/image/icon.jpg'
        this.image  = image
      },
      clipMove(){
        var clipW = document.querySelector('#clipW'),
            clip = document.querySelector('#viewClip'),
            clipCtx = clip.getContext('2d'),
            _self = this,
            mouseDown = false
        this.clipCtx = clipCtx
        clip.height = 150
        clip.width = 150

        clipW.addEventListener('mousedown',function(){
          mouseDown = true
        })
        clipW.addEventListener('mouseup',function(){
          mouseDown = false
        })
        clipW.addEventListener('mousemove',function(event){
          if(!mouseDown) return
          let x = event.movementX,
              y = event.movementY,
              top = clipW.offsetTop + y,
              left = clipW.offsetLeft + x
          if(top + clipW.offsetHeight >= 300 || left + clipW.offsetWidth >= 300 || top < 0 || left < 0){
//              mouseDown = false
              return false
          }
          clipW.style.top = top +'px'
          clipW.style.left = left +'px'
          _self.clipView()
        },false)
        this.clipBox()
      },
      clipView(){
        var clipW = document.querySelector('#clipW'),
            height = this.image.height,
            width = this.image.width,
            _x = clipW.offsetLeft / 300 * width ,
            _y = clipW.offsetTop / 300 * height ,
            _w = clipW.offsetWidth / 300 * width,
            _h = clipW.offsetHeight / 300 * height
            this.viewX = parseInt(_w)
            this.viewY = parseInt(_h)
        this.clipCtx.drawImage(this.image,_x,_y,_w,_h,0,0,150,150)
      },
      clipBox(){
        var clipRight = document.querySelector('#clipRight'),
          clipBottom = document.querySelector('#clipBottom'),
          clipW = document.querySelector('#clipW'),
          _self = this,
          mouseDown = false,
          mouseDownBottom = false
        clipRight.addEventListener('mousedown',function(){
          mouseDown = true
        })
        clipRight.addEventListener('mouseup',function(){
          mouseDown = false
        })
        clipRight.addEventListener('mousemove',function(event){
          event.stopPropagation()
          if(!mouseDown) return false
          let x = clipW.offsetWidth + event.movementX
          let _x = event.clientX - clipW.offsetLeft
          if(_x > clipRight.offsetLeft + clipRight.offsetWidth || _x < clipRight.offsetLeft || clipW.offsetLeft + clipW.offsetWidth >= 300){

            mouseDown = false
            return false
          }
          clipW.style.width = x +'px'
          clipBottom.style.width = x +'px'
          _self.clipView()
        },true)
        clipBottom.addEventListener('mousedown',function(){
          mouseDownBottom = true
        })
        clipBottom.addEventListener('mouseup',function(){
          mouseDownBottom = false
        })
        clipBottom.addEventListener('mousemove',function(event){
          event.stopPropagation()
          if(!mouseDownBottom) return false
          let x = clipW.offsetHeight + event.movementY
          let _x = event.clientY - clipW.offsetTop
          if(_x > clipBottom.offsetTop + clipBottom.offsetHeight || _x < clipBottom.offsetHeight || clipW.offsetTop + clipW.offsetHeight >= 300){
            mouseDownBottom = false
            return false
          }
          clipW.style.height = x +'px'
          clipRight.style.height = x +'px'
          _self.clipView()
        },true)
      },
      clipRotate(){
          var leftRotate = document.querySelector('#leftRotate'),
            rightRotate = document.querySelector('#rightRotate'),
            clipW = document.querySelector('#clipW')
        leftRotate.addEventListener('click',function(){
          var st = window.getComputedStyle(clipW, null);
          var tr  = st.getPropertyValue('transform')
          console.log(tr)
          var values = tr.split('(')[1].split(')')[0].split(',');
          var a = values[0];
          var b = values[1];
          var c = values[2];
          var d = values[3];

          var scale = Math.sqrt(a * a + b * b);

          console.log('Scale: ' + scale);


          var sin = b / scale;

          var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

          console.log('Rotate: ' + angle + 'deg');
          var _angle = angle - 5
          clipW.style.transform = 'rotate('+_angle+'deg)'
        })
        rightRotate.addEventListener('click',function(){
          var st = window.getComputedStyle(clipW, null);
          var tr  = st.getPropertyValue('transform')
          var values = tr.split('(')[1].split(')')[0].split(',');
          var a = values[0];
          var b = values[1];
          var c = values[2];
          var d = values[3];

          var scale = Math.sqrt(a * a + b * b);

//          console.log('Scale: ' + scale);


          var sin = b / scale;

          var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

          console.log('Rotate: ' + angle + 'deg');
          var _angle = angle + 5
          clipW.style.transform = 'rotate('+_angle+'deg)'
        })
      },
      checkInput(){
        console.log(this.inputVal,typeof this.inputVal)
        let s = this.inputVal.replace(/(^\s*)|(\s*$)/g, '');
        if(s){
            console.log('----')
        }
      },
      checkCss(){
        var cssBox = document.querySelector('#cssBox')
        console.log(cssBox.style.display)


        var sCssBox = window.getComputedStyle(cssBox,null)
        console.log(sCssBox.display)
        cssBox.style.display = 'inline'
      }
    },
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .canvas-box{
    position: relative;
    /*margin: 50px;*/
    width: 300px;
    height: 300px;
    transform: matrix(1,0,0,1,30,0);

    >.clip-w{
      position: absolute;
      top:0;
      left: 0;
      width: 100px;
      height:100px;
      box-sizing: border-box;
      border:2px dashed #eee;
      transform: skew(20deg,30deg);
      transform-origin: 50% 50%;
      .clip-border{
        position: absolute;
        &.clip-right{
          top:0;
          right:0;
          width: 10px;
          height: 100px;
          background-color: #000;

        }
        &.clip-bottom{
          bottom:0;
          right:0;
          width: 100px;
          height: 10px;
          background-color: #000;
        }
      }
      .clip-sign{
        position: absolute;
        top:0px;
        right: -60px;
        width: 60px;
        height: 20px;
        text-align: center;
        background-color: #666;
        color: #fff;
      }
    }
  }
  .css-box{
    display: block;
  }
</style>
