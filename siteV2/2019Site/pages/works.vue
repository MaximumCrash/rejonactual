<template>
  <section class="container works">
    <div class="center-line"></div>
    
    <section class="works"> 
      <h1 class="behind-text">
        Works
      </h1>
      <div class="projects-container">
        <Project :index="0"/>
        <Project :index="1"/>
        <Project :index="2"/>
        <Project :index="3"/>
        <Project :index="4"/>
        <Project :index="5"/>
        <Project :index="6"/>
        <Project :index="7"/>
        <Project :index="8"/>
        <Project :index="9"/>
        <Project :index="10"/>
        <Project :index="11"/>
        <Project :index="12"/>
      </div>
      <div :class="this.showScrollUp ? 'scroll-up' : 'scroll-up hide'" v-on:click="this.scrollToTop" >
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg>
      </div>
    </section>
  </section>
</template>

<script>
import charming from 'charming';
import Project from '~/components/Project.vue';

export default {
  data() {
    return {
      animeStore: {},
      showScrollUp: false
    }
  },
  components: {
    Project
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    if (this.$store.state.headerAnime !== null && this.$store.state.oldPage === "index") 
    {
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }

    window.onscroll = () => {
        this.showScrollUp = window.scrollY > window.innerHeight; 
    }

    let page = this.$el.querySelector('.works');
    let behindText = page.querySelector('.behind-text');
    let projects = page.querySelectorAll('.projects-container .project');
    let projectsInView = [];
    let projectSlidesInView = [];
    let projectImages = [];
    let projectText = [];

    charming(behindText);

    behindText = behindText.querySelectorAll('span');

    //Only Animate projects in view. 
    projects.forEach((project) => {
      if (project.offsetTop < window.innerHeight) {
        project.removeAttribute('data-aos');
        projectImages.push(project.querySelector('.image'))
        let title  = project.querySelector('.title h1');
        charming(title);
        title = [].slice.call(title.querySelectorAll('span'));

        title = title.filter(el => {
          if (el.textContent === ' ') {
            el.textContent = String.fromCharCode(8194);
            el.style.width = ".35ch";
          }
          
          return el
        })
       
       projectText.push(title);
        projectSlidesInView.push(project.querySelectorAll('.slides div'));
        projectsInView.push(project);
      }
    });

    this.animeStore = this.$anime.timeline({loop: false, autoplay: true});

    this.animeStore.add({
        targets: behindText,
        opacity: [0, 1],
        color: ["#ffffff","#1e1d69"],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 900,
        delay: function(el, i) {
          return 164 * i
        },
      }, '-=640')     
      .add({
        targets: projectsInView,
        opacity: [0, 1],
        translateY: [64, 0],
        easing: 'easeOutQuart',
        duration: 900, 
        delay: function(el, i) {
          return 300 + 164 * i
        }
      }, 232)
      

      projectSlidesInView.forEach((slideWrap, index) => {
        this.animeStore.add({
          targets: slideWrap,
          translateX:['-110%','110%'],
          skew: ['-16deg','-16deg'],
          easing: 'easeOutExpo',
          duration: 1632, 
          delay: function(el, i) {
            return 300 + 100 * i
          }
        }, 352)
        .add({
          targets: projectImages[index],
          opacity: [0,1],
          easing: 'easeOutQuart',
          duration: 900
        }, 780)
        .add({
          targets: projectText[index],
          opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 700,
        delay: function(el, i) {
          return 190 + 32 * i
        }
        }, 420)
      })
  },
  beforeDestroy() {
    window.onscroll = null; 
  }
} 
</script>

<style lang="scss">
@import '~/assets/main.scss';
.center-line {
  position: fixed;
  width: 1px;
  height: 100vh;
  left: 50vw;
  background: teal;
}

.works.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; 
  overflow: visible;
  flex-direction: column;
}

.works {
  position: relative; 
  width: 100%; 
  max-width: 1052px;
  padding-top: 6vh;
}

.works h1.behind-text {
  left: 5vw; 
  top:unset;
  bottom: 2vh;
     position: fixed;
    color: #1e1d69;
    font-size: 11vw;
    opacity: 0.2;
}

.works .behind-text span {
  position: relative; 
  display: inline-block;
}

.works .projects-container {
  margin-top: 4vh;
  padding-bottom: 3em;
}

.project .title h1 > span {
          position: relative;
          display: inline-block;
     }

     .scroll-up {
       position: fixed; 
       width: 50px; 
       height: 50px; 
       right: 3em;
       bottom: 2.64em;
       transform: translateY(-10px) scale(0.8);
       opacity: 1; 
       pointer-events: all; 
       cursor:pointer; 
       transform-origin: right;
       transition: all .32s cubic-bezier(0.075, 0.82, 0.165, 1);
     }

     .scroll-up.hide {
       transform: translateY(0px) scale(0.8);
       opacity: 0; 
       transition: all .32s cubic-bezier(0.075, 0.82, 0.165, 1);
     }

     .scroll-up:not(.hide):hover {
       transform: translateY(-15px);
       transition: all .2s ease;
     }
</style>
