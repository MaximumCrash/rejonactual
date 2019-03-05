<template>
  <section class="container">
    <div class="center-line"></div>
    
    <section class="work"> 
      <h1 class="behind-text">
        Works
      </h1>
      <div class="projects-container">
        <Project/>
      </div>
    </section>
  </section>
</template>

<script>
import charming from 'charming';
import Project from '~/components/Project';

export default {
  data() {
    return {
      animeStore: {}
    }
  },
  mounted() {
    if (this.$store.state.headerAnime.direction === "reverse") 
    {
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }
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

</style>
