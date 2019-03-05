<template>
  <section class="container">
    <div class="center-line"></div>
    
    <section class="work"> 
      <h1 class="behind-text rellax" data-rellax-speed="5">
        Works
      </h1>
      <div class="projects-container">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </section>
  </section>
</template>

<script>
import charming from 'charming';
import Project from '~/components/Project.vue';
import Rellax from 'rellax';

export default {
  data() {
    return {
      animeStore: {}
    }
  },
  components: {
    Project
  },
  mounted() {
    var rellax = new Rellax(".rellax");

    if (this.$store.state.headerAnime !== null && this.$store.state.oldPage === "index") 
    {
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/main.scss';
.center-line {
  position: fixed;
  width: 1px;
  height: 100vh;
  left: 50vw;
  background: teal;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative; 
  overflow: hidden;
  flex-direction: column;
}

.work {
  position: relative; 
  width: 100%; 
  max-width: 1152px; 
  padding-top: 15vh;
}

.behind-text {
  left: -13vw; 
  top: 2vh;
     position: absolute;
    color: #1e1d69;
    font-size: 11vw;
    opacity: 0.2;
}

.projects-container {
  margin-top: 4vh;
}
</style>
