<template>
  <div id="ui">
    <div class="love" v-for="item in wordsList">
      <div class="love_horizontal">
        <div class="love_vertical">
          <div class="love_word">{{item}}</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    created(){
      this.initView()
    },
    data:()=>({
      wordsList: ['愛', 'Amour', 'Liebe', 'Amore', 'Amor', 'Любовь', 'الحب', 'प्यार', 'Cinta', 'Αγάπη', '사랑', 'Liefde', 'Dashuri', 'Каханне', 'Любов', 'Ljubav', 'Láska', 'Armastus', 'Mahal', 'אהבה', 'Szerelem', 'Grá', '爱', 'Mīlestība', 'Meilė', 'Љубовта', 'Cinta', 'عشق', 'Dragoste', 'Láska', 'Renmen', 'ፍቅር', 'munaña', 'Sevgi', 'Љубав', 'karout', 'amà', 'amôr', 'kærleiki', 'mborayhu', 'Upendo', 'sòòyayyàà', 'ljubav', 'Սեր', 'сүю', 'خؤشويستين، حه زكردن', 'сүйүү', 'tia', 'aroha', 'KHAIR', 'प्रेम', 'kjærlighet', 'munay', 'jecel', 'Kärlek', 'soymek', 'Mahal', 'ярату', 'محبت', 'sopp', 'uthando', 'ความรัก', 'Aşk', 'Tình yêu', 'ליבע', 'Love']
    }),
    methods:{
      initView(){

      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  $loveCount: 100;
  $loveSize: 450;
  #ui {
    background: #000;
    height: 100vh;
    overflow: hidden;
    .love {
      position: absolute;
      top: 50%;
      left: 46%;
      margin: -#{$loveSize / 2}px 0 0 -#{$loveSize / 2}px;

      &:nth-child(4n) {
        .love_word {
          color: red;
          font-size: 2.5rem;
          text-shadow: 0 0 10px rgba(255, 0, 0, 1);
        }
      }
      &:last-child {
        .love_word {
          color: red;
          font-size: 3.5rem;
          text-shadow: 0 0 10px rgba(255, 0, 0, 1);
        }
      }
      &_word {
        color: #fff;
        font-size: 1.5rem;
        transform: translateY(-100%) rotateZ(-30deg);
        font-family: 'Dosis', sans-serif;
        text-shadow: 0 0 10px rgba(255, 200, 0, 1);
        letter-spacing: 2px;
      }
      &_horizontal {
        animation: horizontal 10000ms infinite alternate ease-in-out;
      }
      &_vertical {
        animation: vertical 20000ms infinite linear;
      }
      @for $i from 1 through $loveCount {
        &:nth-child(#{$i}) {
          $delay: -#{$i * 300}ms;
          .love_horizontal {
            animation-delay: $delay;
          }
          .love_vertical {
            animation-delay: $delay;
          }
        }
      }
    }
  }

  @keyframes horizontal {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(#{$loveSize}px);
    }
  }
  @keyframes vertical {
    0% {
      transform: translateY(#{$loveSize / 2.5}px);
    }
    10% {
      transform: translateY(#{$loveSize / 10}px);
    }
    15% {
      transform: translateY(#{$loveSize / 100}px);
    }
    18% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(#{$loveSize / 100}px);
    }
    22% {
      transform: translateY(#{$loveSize / 13}px);
    }
    24% {
      transform: translateY(#{$loveSize / 7}px);
    }
    25% {
      transform: translateY(#{$loveSize / 4}px);
    }
    26% {
      transform: translateY(#{$loveSize / 7}px);
    }
    28% {
      transform: translateY(#{$loveSize / 13}px);
    }
    30% {
      transform: translateY(#{$loveSize / 100}px);
    }
    32% {
      transform: translateY(0px);
    }
    35% {
      transform: translateY(#{$loveSize / 100}px);
    }
    40% {
      transform: translateY(#{$loveSize / 10}px);
    }
    50% {
      transform: translateY(#{$loveSize / 2.5}px);
    }
    71% {
      transform: translateY(#{$loveSize / 1.05}px);
    }
    72.5% {
      transform: translateY(#{$loveSize / 1.02}px);
    }
    75% {
      transform: translateY(#{$loveSize}px);
    }
    77.5% {
      transform: translateY(#{$loveSize / 1.02}px);
    }
    79% {
      transform: translateY(#{$loveSize / 1.05}px);
    }
    100% {
      transform: translateY(#{$loveSize / 2.5}px);
    }
  }
</style>
