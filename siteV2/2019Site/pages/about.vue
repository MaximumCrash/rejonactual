<template>
  <section class="container">
    <div class="center-line"></div>
    
    <section class="about"> 
      <h1 class="behind-text">
        About Me
      </h1>
      <div class="side-card">
        <div class="text">
          <h1>Hello</h1>
          <h1>There</h1>
        </div>  
        <div class="image-holder">
          <div class="background"></div>
          <img src="~/assets/Images/about.png">
        </div>
      </div>
      <p class="copy">
        I'm Réjon, a multifaceted developer-designer fascinated with envisioning unforgettable experiences. 
        <br><br> 
        My specialties lie in UX/UI Design and Game Development, with my experience stretching from <a class="proof" href="http://dailybreak.com" target="_blank"> web development</a> and <a class="proof" href="https://volunteerscience.com/" target="_blank"> data experiments</a> to <a class="proof" href="https://www.wsj.com/articles/when-children-can-benefit-from-playing-videogames-1500321670" target="_blank"> children's health solutions</a> and <a class="proof" href="https://worcester.ma/2016/09/free-to-read-bravehearts-derby-app-a-blast-for-fans-home-run-for-massdigi-developers/" target="_blank">brand management</a>.
        <br><br>
        Because I design with my Mom in mind, accessibility and enjoyment are at the forefront of everything I make.
        <br><br>
        In my spare time, I run <a href="https://maximumcrash.com">Maximum Crash</a>, compose music, fix hardware, teach, and explore fashion design. 
        <br><br>
        <a href="/Rejon_Resume_2019.pdf" target="_blank">My Resume</a>
      </p>
    </section>
  </section>
</template>

<script>
import charming from 'charming';

export default {
  data() {
    return {
      animeStore: {}
    }
  },
  mounted() {
    if (this.$store.state.headerAnime !== null && this.$store.state.oldPage === "index") 
    {
      
      this.$store.state.headerAnime.direction = "normal";
      this.$store.state.headerAnime.play();
    }

    let page = this.$el.querySelector('.about');
    let behindText = page.querySelector('.behind-text');
    let profileBackChars = page.querySelector('.side-card .text h1:first-of-type');
    let profileFrontChars = page.querySelector('.side-card .text h1:last-of-type');
    let profileBG = page.querySelector('.image-holder .background');
    let profilePic = page.querySelector('.image-holder img');
    let profileCopy = page.querySelector('.copy');

    charming(profileBackChars);
    charming(profileFrontChars);
    charming(behindText);

    behindText = behindText.querySelectorAll('span');
    profileBackChars = profileBackChars.querySelectorAll('span');
    profileFrontChars = profileFrontChars.querySelectorAll('span');

    this.animeStore = this.$anime.timeline({loop: false, autoplay: true});

    this.animeStore.add({
        targets: behindText,
        opacity: [0, 1],
        color: ["#ffffff","#1e1d69"],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 900,
        delay: function(el, i) {
          return 520 + 64 * i
        },
      }, '-=640').add({
        targets: profileBackChars,
        opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 1000,
        delay: function(el, i) {
          return 320 + 32 * i
        },
      }, 64)
      .add({
        targets: profileFrontChars,
        opacity: [0, 1],
        translateX: [64, 0],
        easing: 'easeOutQuart',
        duration: 1000,
        delay: function(el, i) {
          return 320 + 32 * i
        },
      }, 120)
      .add({
        targets: profileBG,
        opacity: [0, 1],
        scale: [0, 1],
        easing: 'easeOutQuart',
        duration: 800,
      }, 220)
      .add({
        targets: profilePic,
        opacity: [0, 1],
        translateX: [-64, 0],
        easing: 'easeOutQuart',
        duration: 800,
      }, 332)
      .add({
        targets: profileCopy,
        opacity: [0, 1],
        translateY: [160, 0],
        easing: 'easeOutQuart',
        duration: 800,
      }, 420)
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';

.behind-text {
      position: absolute;
    color: #1e1d69;
    font-size: 11vw;
    left: 6vw;
    top: -15vh;
    opacity: 0.2;
}
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

.about {
  display: flex;
  justify-content: center;
  position: relative;
}

.side-card {
  display: inline-block; 
  margin-right: 2.5vw; 
  position: relative; 
}

.side-card {
  .text {
    position: absolute;
    z-index: 1; 
    color: white; 
    font-size: 1em; 
    left: -130px; 
    bottom: 30px; 
  }

  .text > h1 {
    position: relative; 
    font-size: 6em; 
    text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
  }

  .text > h1:first-of-type {
    left: 0; 
    top: 66px; 
  }

  .text > h1:last-of-type {
    left: 35px; 
    top: 11px; 
  }

  .image-holder {
    width: 360px; 
    height: 560px; 
    position: relative; 
    overflow: hidden;
  }

  .image-holder .background {
    background: linear-gradient(32deg, #e4259b, #df0077, #6c15b5);
    background-size: 100% 164%;
    background-position: top right;
    border-radius: 6px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 85%; 
    box-shadow: 0 10px 20px rgba(12, 5, 47, 0.19), 0 6px 6px rgba(10, 9, 44, 0.23);
  }
  .image-holder img {
    width: 149%; 
    position: absolute;
    right: -10px; 
    bottom: -60px;
  }
}

.about .side-card .text > * > span,
.about .behind-text > span {
    position: relative;
    display: inline-block;
  }

.about .copy {
  display: inline-block; 
  width: 30%; 
  text-align: left; 
  margin-left: 2.5vw; 
  font-size: 1.5em; 
  color: white; 
  align-self: center;
}

.about .copy a {
  color: white; 
}
</style>
