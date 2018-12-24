<template>
  <div class="app">
    <parallax-container class="dot-parallax-container">
      <parallax-element class="dot-parallax" :parallaxStrength="72" :type="'translation'">
        <div class="dot-layer-0"></div>
      </parallax-element>
      <parallax-element class="dot-parallax" :parallaxStrength="53" :type="'translation'">
       <div class="dot-layer-1"></div>
      </parallax-element>
      <parallax-element class="dot-parallax" :parallaxStrength="34" :type="'translation'">
        <div class="dot-layer-2"></div>
      </parallax-element>
    </parallax-container>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    const dotLayer0 = this.$el.querySelector('.dot-layer-0');
    const dotLayer1 = this.$el.querySelector('.dot-layer-1');
    const dotLayer2 = this.$el.querySelector('.dot-layer-2');

    var dotAnime = this.$anime.timeline({loop: false});

    dotAnime.add({
      targets: dotLayer0,
      opacity: [0.8,1],
      scale: [1,1.1],
      easing: "easeOutQuart",
      duration: 1640
    })
    .add({
      targets: dotLayer1,
      opacity: [0.8,1],
      scale: [1,1.1],
      easing: "easeOutQuart",
      duration: 1640,
      offset: 64
    })
    .add({
      targets: dotLayer2,
      opacity: [0.8,1.1],
      scale: [1,1.1],
      easing: "easeOutQuart",
      duration: 1640,
      offset: 120
    })

    document.addEventListener('aos:in', ({ detail }) => {
      console.log('animated in', detail);
    });

    document.addEventListener('aos:out', ({ detail }) => {
      console.log('animated out', detail);
    });
  }
}
</script>

<style>
html {
  font-family:"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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

p {
  font-family: 'Gibson';
}

body {
  min-height: 100vh;
  min-width: 100vh;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<style lang="scss">
  @import '~/assets/css/main.scss';

  .app {
    background: $pageGradient;
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  .dot-parallax-container {
    position: fixed;
  }

  .dot-parallax {
    position: fixed;
  }

  .dot-layer-0 {
    background-image: $pageDots-0; 
    background-size: $dotSize-0;
    height:100vh; 
    width:100vw;
    z-index: 0;
    transform: scale(0);
    opacity: 0; 
    position: relative;
  }

  .dot-layer-1 {
    background-image: $pageDots-1; 
    background-size: $dotSize-1;
    height:100vh; 
    width:100vw;
    z-index: 0;
    transform: scale(0);
    opacity: 0; 
    position: relative;
  }

  .dot-layer-2 {
    background-image: $pageDots-2; 
    background-size: $dotSize-2;
    height:100vh; 
    width:100vw;
    z-index: 0;
    transform: scale(0);
    opacity: 0; 
    position: relative;
  }

  .container {
    position: relative;
    z-index: 10;
        pointer-events: none;
  }
</style>

