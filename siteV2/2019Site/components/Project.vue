<template>
     <div class="project">
          <div class="title">
              <h1> Project Name That is Too Long </h1>
          </div>
          <div class="slides">
               <div class="slide0"></div>
               <div class="slide1"></div>
               <div class="slide2"></div>
               <div class="slide3"></div>
               <div class="slide4"></div>
          </div>
          <div class="image" :style="{backgroundImage: `url(${backgroundTest})`}">
          </div>
          
     </div>
</template>
<script>
import backgroundTest from '~/assets/Images/work0_header.jpg';

export default {
     data() {
          return { backgroundTest }
     }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
     .project {
          width: 100%; 
          height: 30vh; 
          position: relative;
          margin-bottom: 1.64em;
          cursor: pointer; 
          box-shadow: 0 10px 20px hsla(250, 81%, 5%, 0.33), 0 6px 6px hsla(250, 81%, 5%, 0.33);
     }

     .title {
          color: white; 
          position: absolute; 
          bottom: 5px; 
          left: 5px; 
          text-align: left; 
     }

     .title h1 {
          font-size: 3.64em;
          text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
     }

     .title p {
          font-size: 1.32em;
     }

     .slides {
          width: 100%; 
          height: 100%; 
          position:absolute;
          overflow: hidden; 
     }

     .slides > div {
          width: 100%; 
          height: 100%; 
          position: absolute;
          transform: skew(-16deg) translateX(calc(-100% - 43px));
     }

     .slide .slide0 {
          background: $theme0; 
          z-index: 5; 
     }

     .slide .slide1 {
          background: $theme1; 
          z-index: 4; 
     }

     .slide .slide2 {
          background: $theme2; 
          z-index: 3; 
     }

     .slide .slide3 {
          background: $theme3; 
          z-index: 2; 
     }

     .slide .slide0 {
          background: $theme4; 
          z-index: 1; 
     }

     .image {
          width: 100%; 
          height: 100%; 
     }
</style>

