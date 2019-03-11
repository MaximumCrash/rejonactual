<template>
  <section class="container works">
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

    charming(behindText);

    behindText = behindText.querySelectorAll('span');

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

    

     @media screen and (max-width: $breakPoint-tablet) and (min-width: $breakPoint-mobile) {
  .works {
    max-width: none; 
  }

  .works .projects-container {
    margin-top: 0vh; 
    padding-bottom: 20vh; 
    padding-left: 2vw; 
    padding-right: 2vw; 
  }

  
}
</style>
