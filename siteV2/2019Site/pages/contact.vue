<template>
  <section class="container">
    <div class="center-line"></div>
    
    <section class="contact"> 
      <h1 class="behind-text">Contact</h1>
      <div class="side-card">
        <div class="text">
          <h1>Get in</h1>
          <h1>Touch</h1>
        </div>  
        <div class="image-holder">
          <div class="background"></div>
          <img src="~/assets/Images/contact.png">
        </div>
      </div>
      <p class="copy">
        Let's make something great together
        </br></br>
        <a href="mailto:rejon@maximumcrash.com">rejon@maximumcrash.com</a>
        </br></br>
        <ul class="socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/rtaylorfoster/" target="_blank">
              <img src="~/assets/Images/linkedIn_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Maximum_Crash" target="_blank">
              <img src="~/assets/Images/twitter_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://archive.maximumcrash.com/" target="_blank">
              <img src="~/assets/Images/archive_contact.svg"/>
            </a>
          </li>
          <li>
            <a href="https://maximumcrash.com/" target="_blank">
              <img src="~/assets/Images/crash_contact.svg"/>
            </a>
          </li>
        </ul>
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

    let page = this.$el.querySelector('.contact');
    let behindText = page.querySelector('.behind-text');
    let profileBackChars = page.querySelector('.side-card .text h1:first-of-type');
    let profileFrontChars = page.querySelector('.side-card .text h1:last-of-type');
    let profileBG = page.querySelector('.image-holder .background');
    let profilePic = page.querySelector('.image-holder img');
    let profileCopy = page.querySelector('.copy');

    charming(profileBackChars);
    charming(profileFrontChars);
    charming(behindText);
    profileBackChars = [].slice.call(profileBackChars.querySelectorAll('span'));

          profileBackChars = profileBackChars.filter(el => {
               if (el.textContent === ' ') {
                    el.textContent = String.fromCharCode(8194);
                    el.style.width = ".35ch";
               }

               return el;
          });

    behindText = behindText.querySelectorAll('span');
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
        translateX: [64, 0],
        scaleX: [-1, -1],
        easing: 'easeOutQuart',
        duration: 800,
      }, 400)
      .add({
        targets: profileCopy,
        opacity: [0, 1],
        translateY: [160, 0],
        easing: 'easeOutQuart',
        duration: 800,
      }, 520)
  }
}
</script>

<style lang="scss">
@import '~/assets/main.scss';

.contact .behind-text {
      position: absolute;
    color: #1e1d69;
    font-size: 11vw;
    left: -20vw;
    top: -15vh;
    white-space: nowrap;
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
  pointer-events: none; 
}

.contact {
  display: flex;
  justify-content: center;
  position: relative;
}

.side-card {
  display: inline-block; 
  margin-right: 2.5vw; 
  position: relative; 
}

.contact .side-card {
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
    background: linear-gradient(32deg, #6c15b5, #5a04a2, #e4259b);
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
    width: 130%; 
    position: absolute;
    right: -110px; 
    bottom: -140px;
  }
}

.contact .side-card .text > * > span,
.contact .behind-text > span {
    position: relative;
    display: inline-block;
  }

.contact .copy {
  display: inline-block; 
  width: 100%; 
  text-align: left; 
  margin-left: 2.5vw; 
  font-size: 1.64em; 
  color: white; 
  align-self: center;
}

.contact .copy a {
  color: white; 
  pointer-events: all;
}

.socialLinks {
  list-style-type: none;
  padding: 0; 
  pointer-events: all; 
}

.socialLinks li {
  display: inline-block; 
  width: 55px; 
  height: 55px; 
  position: relative; 
  top: 0;
  margin-right: 0.25em; 
  cursor: pointer;
  
  transform: scale(1);
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) .25s;
}

.socialLinks li:hover {
  transform: scale(1.32);
}
</style>
