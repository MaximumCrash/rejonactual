<template>
  <div class="app">
    <div class="bg">
      <div class="rellax dot-layer-0" data-rellax-speed="-5"></div>
      <div class="rellax dot-layer-1" data-rellax-speed="-7"></div>
      <div class="rellax dot-layer-2" data-rellax-speed="-10"></div>
    </div>
    <header class="header" >
      <nuxt-link to="/" @click.native="hideHeader"><h2>Réjon</h2></nuxt-link>
      <div class="links">
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/about">Work</nuxt-link>
        <nuxt-link to="/about">Contact</nuxt-link>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
import Rellax from 'rellax';
import charming from 'charming';
import {mapState} from 'vuex';

export default {
  computed: mapState(['page']),
  mounted() {
    console.log(this.$store.state.page)
    var rellax = new Rellax(".rellax");

    let headerName = this.$el.querySelector('header h2')
    charming(headerName)
    headerName.style.opacity = 1
    let headerNameTargets = headerName.querySelectorAll('span')
    headerNameTargets[0].innerText += 'e'

    let headerAnime = this.$anime.timeline({ autoplay: false })

    headerAnime.add({
      targets: headerNameTargets,
      opacity: [0, 1],
      translateX: [160, 0],
      easing: 'easeOutQuart',
      duration: 450,
      delay: function(el, i) {
        return 60 + 64 * i
      },
    });

    this.$store.commit('setAnime', headerAnime);
  },
  methods: {
    hideHeader() {
      this.$store.state.headerAnime.direction = "reverse";
      this.$store.state.headerAnime.play();
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';
.app {
  
  background: $pageGradient;
  background-attachment: fixed;
  background-size: 100% 100%; 
  overflow: hidden;
}

header {
  position: fixed;
  opacity: 1;
  pointer-events: all;
  z-index: 100; 
}

header h2 {
  color: $white;
  font-size: 3.2em;
  margin-left: 0em;
  opacity: 0;
  text-shadow: 0 4px 7px #0101093d;
}

header h2 span {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

header h2 span:first-of-type {
  left: 33px;
  width: 2ch;
  overflow: hidden;
  letter-spacing: 84px;
}

.bg {
  position: absolute;
  z-index: 0; 
  left: 0; 
  top: 0; 
  height: 100%; 
  width: 100%; 
  pointer-events: none; 
}

.dot-layer-0 {
    background-image: $pageDots-0; 
    background-size: $dotSize-0;
    height:100%; 
    width:100%;
    position: absolute;
  }

  .dot-layer-1 {
    background-image: $pageDots-1; 
    background-size: $dotSize-1;
    height:100%; 
    width:100%;
    position: absolute;
  }

  .dot-layer-2 {
    background-image: $pageDots-2; 
    background-size: $dotSize-2;
    height:100%; 
    width:100%;
    position: absolute;
  }

html {
  font-family: 'Gibson', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1 {
  font-family: 'Brother-1816-Black-Italic';
  -moz-font-feature-settings:"swsh" 1; 
-ms-font-feature-settings:"swsh" 1; 
-o-font-feature-settings:"swsh" 1; 
-webkit-font-feature-settings:"swsh" 1; 
font-feature-settings:"swsh" 1;
font-size: 7em;
}

h2 {
  font-family: 'Brother-1816-ExtraBold-Italic';
    -moz-font-feature-settings:"swsh" 1; 
-ms-font-feature-settings:"swsh" 1; 
-o-font-feature-settings:"swsh" 1; 
-webkit-font-feature-settings:"swsh" 1; 
font-feature-settings:"swsh" 1;
}

h3 {
  font-family: 'Brother-1816-Regular-Italics';
}

p {
  font-family: 'Gibson';
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}




</style>
