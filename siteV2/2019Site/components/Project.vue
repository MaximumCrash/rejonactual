<template>
     <div :class="open ? 'project open' : 'project'" data-aos="fade-up" data-aos-once="true" :data-aos-id="'project-' + index" data-aos-anchor-placement="center-bottom" v-on:click="toggleProject">
          <div class="title">
              <h1> Much Much More </h1>
          </div>
          <div class="slides">
               <div class="slide0"></div>
               <div class="slide1"></div>
               <div class="slide2"></div>
               <div class="slide3"></div>
               <div class="slide4"></div>
          </div>
          <div class="image" :style="{backgroundImage: `url(${backgroundTest})`}"></div>
          <div class="project-copy">
               <p>
                    Re-use of text: Attribution: To re-distribute a text file with the Derived Work based on or through a medium customarily used for software interchange; or, b) Accompany it with the Work that they do to the Program. Contributors. Therefore, if a court requires any Contributor that the BeOpen Python License is dependent only upon the terms of this Agreement as released by OWNER, including source code, even though third parties on terms identical to an alternative, stable online copy which is described in Exhibit A shall not affect the validity or enforceability of either of that version. You may use the Work and that the Package constitutes direct or indirect, to cause the direction or management of such Commercial Distributor's responsibility alone. Under this section, the Commercial Distributor to control, and cooperate with the terms of this Agreement must be on the same or some similar place meets this condition, even though third parties are not derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, to grant the rights we want to make such provision shall be held by the Package.
               </p>
          </div>
          <div class="more-arrow left">
               <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
          <div class="more-arrow right">
               <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
     </div>
</template>
<script>
import backgroundTest from '~/assets/Images/work0_header.jpg';
import charming from 'charming';

export default {
     props:['index'],
     data() {
          return { backgroundTest,
                   animeStore: {},
                   open: false }
     },
     methods: {
          toggleProject() {
               this.open = !this.open;
          }
     },
     mounted() {
          this.animeStore = this.$anime.timeline({loop: false, autoplay: false})
          
          let slides =  this.$el.querySelectorAll('.slides div')
          let image = this.$el.querySelector('.image');
          
          let text = this.$el.querySelector('.title h1');
          charming(text);
          text = [].slice.call(text.querySelectorAll('span'));

          text = text.filter(el => {
               if (el.textContent === ' ') {
                    el.textContent = String.fromCharCode(8194);
                    el.style.width = ".35ch";
               }

               return el;
          })
          
          this.animeStore.add({
               targets: slides, 
               translateX:['-110%','110%'],
          skew: ['-16deg','-16deg'],
          easing: 'easeOutExpo',
          duration: 1632, 
          delay: function(el, i) {
            return 300 + 100 * i
          }
          })
          .add({
               targets: image, 
               opacity: [0,1],
          easing: 'easeOutQuart',
          duration: 900
          }, 408)
          .add({
               targets: text,
               opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 700,
        delay: function(el, i) {
          return 190 + 32 * i
        }
          }, 68)
          document.addEventListener('aos:in:' + 'project-' + this.index, ({detail}) => {
               this.animeStore.play();
          })
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
          transition: all .2s ease; 
          pointer-events: all;

     }

     .project:hover {
              box-shadow: 0 19px 28px hsla(250, 81%, 5%, 0.48), 0 15px 12px hsla(250, 81%, 5%, 0.48);
          transform: translateY(-16px) !important; 
          transition: all .2s ease; 
     }

     .title {
          color: white; 
          position: absolute; 
          bottom: 5px; 
          left: 10px; 
          text-align: left; 
          z-index: 2;
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
          z-index: 1;
          border-radius: 6px;
     }

     .slides > div {
          width: 100%; 
          height: 100%; 
          position: absolute;
          transform: skew(-16deg) translateX(calc(-100% - 43px));
     }

     .slides .slide0 {
          background: $theme0; 
          z-index: 5; 
     }

     .slides .slide1 {
          background: $theme1; 
          z-index: 4; 
     }

     .slides .slide2 {
          background: $theme2; 
          z-index: 3; 
     }

     .slides .slide3 {
          background: $theme3; 
          z-index: 2; 
     }

     .slides .slide0 {
          background: $theme4; 
          z-index: 1; 
     }

     .image {
          width: 100%; 
          height: 100%; 
          opacity: 0;
          background-size: cover;
          background-repeat: no-repeat;
          transition: all .2s ease;
          border-radius: 6px;
          z-index:0; 
     }

     .more-arrow {
          position: absolute;
          bottom: 0; 
          z-index: -1; 
          opacity: 0; 
          transition: opacity  cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
     }

     .more-arrow.left {
          left: -3.5vw; 
          transform: translateX(100%);
          transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }

     .more-arrow.right {
          right: -3.5vw; 
          transform: translateX(-100%);
          transition: all  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }
     .project:hover .more-arrow.left,
     .project:hover .more-arrow.right {
          opacity: 1; 
          transform: translateX(0%);
          transition: transform  cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
     }
</style>

