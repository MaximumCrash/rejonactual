<template>
<section class="container">
    <header className="header">
      <a href="#home"><h2>{{hero.firstName}}</h2></a>
    </header>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section home" data-anchor="home">
      <div class="title">
        <h1 class="layer0">{{hero.firstName}}</h1>
          <h1 class="layer1">{{hero.firstName}}</h1>
          <h1 class="layer2">{{hero.firstName}}</h1>
          <h1 class="layer3">{{hero.firstName}}</h1>
          <h1 class="layer4">{{hero.firstName}}</h1>

          <h1 class="layer5">{{hero.firstName}}</h1>

        
        <h2>{{hero.lastName}}</h2>
      </div>

      <div class="sub-title">
        <p>
        {{hero.heroSubtitle}}
        </p>
      </div>

      <div class="hero-links">
        <ul>
          <li v-for="link in hero.herolinks" :key="link._id">
            <a :href="link.linkUrl">
              <span class="link-text">{{link.linkText}}</span>
              <span class="link-bullet"></span>
            </a>
          </li>
        </ul>
      </div>
       <div class="scroll-cta">
         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 107.2 64.6" style="enable-background:new 0 0 107.2 64.6;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#FCF8F1;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
<polyline class="st0" points="98.1,18.5 54,51 53.6,51 9.5,18.5 "/>
</svg>

       </div>
    </div>
    <div class="section about" data-anchor="about"> 
      
      

      <div class="content">
        <parallax-container class="profilepic-parallax-container">
        <div class="images">
       
        <div class="profile-pic">
           <parallax-element class="profilepic-text-parallax" :parallaxStrength="-4" :type="'translation'">
          <h1 class="profile-backText">Hello</h1>
          <h1 class="profile-frontText">There</h1>
           </parallax-element>
           <parallax-element class="profilebg-parallax" :parallaxStrength="7" :type="'translation'">
          <div class="bg"></div>
           </parallax-element>
           <parallax-element class="profilepic-parallax" :parallaxStrength="7" :type="'translation'">
          <img :src="about.profileImage.url"/>
           </parallax-element>
        </div>
        
        <div class="secret-pic">
        </div>

        <div class="secret-rotate">
        </div>
      </div>
      </parallax-container>
        
      <p class="copy" v-html="about.aboutCopy">
      </p>
      </div>
    </div>
    </full-page>
</section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import charming from 'charming';

const apiUrl = process.env.API_URL || 'https://glacial-brushlands-60262.herokuapp.com' || 'localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  data() {
    return {
      options: {
        anchors: ['home', 'about', 'works', 'contact'],
        licenseKey: process.env.FP_LICENSE_KEY || '4A6E5C2A-3C2D488B-95692C91-0D280E52',
        onLeave: this.onLeaveSection,
        easing: 'easeOutQuad',
        navigation: true, 
        navigationPosition: 'left',
        //animateAnchor: false NOTE(Rejon): May fix scrolling to point on refresh for anchor
      },
      pageAnime:[],
      headerAnime: null,
      isShowingHeader: false,
      ctaTimeout: null
    }
  },
  methods: {
    onLeaveSection(origin, destination,direction) {
      if (destination.index === 0) {
          this.ctaTimeout =  setTimeout(function() {
          if (document.querySelector(".scroll-cta").classList.contains('show')) {
            document.querySelector(".scroll-cta").classList.remove('show'); 
          }
          else {
            document.querySelector(".scroll-cta").classList.add('show'); 
          }
        }, 1600);

        if (this.isShowingHeader){
          this.headerAnime.play();
          this.headerAnime.reverse();
          this.isShowingHeader = false; 
          document.querySelector("#fp-nav").classList.add("hide");
        }
      }

      this.pageAnime[destination.index].restart();

      if (origin.index === 0) {
        document.querySelector(".scroll-cta").classList.remove('show');
        clearTimeout(this.ctaTimeout);

        if (!this.isShowingHeader) {
          document.querySelector("#fp-nav").classList.remove("hide");
          this.isShowingHeader = true;
          this.headerAnime.restart();
        }
      }
    }
  },
  computed: {
    projects() { //NOTE(Rejon): Don't need to worry about filtering because our query does it for us.
      return this.$store.getters['projects/list']
    },
    socialLinks() {
      return this.$store.getters['socials/list'].filter(function(u) {
        return u.inheader;
      })
    },
    currentProject() {
      return this.$store.getters['projects/currentProject']
    }, 
    hero() {
      return this.$store.getters['hero']
    },           
    about() {
      return this.$store.getters['about']
    },
    footer() {
      return this.$store.getters['footer']
    }
  },
  mounted() {
    const firstNameWrappers = this.$el.querySelectorAll(".title h1");

    let targets = [];

    firstNameWrappers.forEach(wrapper => {
      charming(wrapper);
      wrapper.style.opacity = 1; 
      let target = wrapper.querySelectorAll("span");
      target[0].innerText += "e";
      targets.push(target);
    }); 

    const lastNameWrapper = this.$el.querySelector(".title h2");
    charming(lastNameWrapper);
    lastNameWrapper.style.opacity = 1;
    let secondTarget = lastNameWrapper.querySelectorAll("span");

    const subTitle = this.$el.querySelector(".sub-title p");

    const heroLinks = this.$el.querySelectorAll(".hero-links li");

    const scrollCTA = this.$el.querySelector(".scroll-cta");

    this.ctaTimeout = setTimeout(function() {
      if (scrollCTA.classList.contains('show')) {
        scrollCTA.classList.remove('show'); 
      }
      else {
        scrollCTA.classList.add('show'); 
      }
    }, 3200);

    const headerName = this.$el.querySelector("header h2");
    charming(headerName);
    headerName.style.opacity = 1;
    let headerNameTargets = headerName.querySelectorAll("span");
    headerNameTargets[0].innerText += "e";

    this.headerAnime = this.$anime.timeline({autoplay: false});

    this.headerAnime.add({
      targets: headerNameTargets,
      opacity: [0,1],
      translateX:[160,0],
      easing: "easeOutQuart",
      duration: 450,
      delay: function(el, i) {
        return 60 + 64 * i;
      }
    });
    
    this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: true}));

    
        this.pageAnime[0].add({
          targets: targets[0],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 900, 
          offset: '-=320',
          delay: function(el,i) {
            return 320 + 64 * i;
          }
        })
        .add({
          targets: secondTarget,
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 470, 
          offset: 164,
          delay: function(el,i) {
            return 180 + 32 * i;
          }
        })
        .add({
          targets: targets[1],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 800, 
          offset: 32,
          delay: function(el,i) {
            return 40 + 64 * i;
          }
        }).add({
          targets: targets[2],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 1000, 
          offset: 64,
          delay: function(el,i) {
            return 5 + 64 * i;
          }
        }).add({
          targets: targets[3],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 1150, 
          offset: 64,
          delay: function(el,i) {
            return 0.625 + 64 * i;
          }
        }).add({
          targets: targets[4],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 1300, 
          offset: 64,
          delay: function(el,i) {
            return 0.078 + 64 * i;
          }
        }).add({
          targets: targets[5],
          opacity: [0,1],
          translateX: [320, 0],
          easing: "easeOutQuart",
          duration: 1450, 
          offset: 64,
          delay: function(el,i) {
            return 0.009 + 64 * i;
          }
        }).add({
          targets: subTitle,
          opacity: [0,0.8],
          translateY: [80, 0],
          easing: "easeOutBack",
          duration: 1200, 
          offset: 120
        }).add({
          targets: heroLinks,
          opacity: [0,1],
          translateY: [90, 0],
          easing: "easeOutBack",
          duration: 1000, 
          offset: 264,
          delay: function(el, i) {
            return 64 * i
          }
        });



          const profileBackText = this.$el.querySelector(".about .profile-backText");
          charming(profileBackText);
          let profileBackChars = profileBackText.querySelectorAll("span");
          profileBackText.style.opacity = 1; 

          const profileFrontText = this.$el.querySelector(".about .profile-frontText");
          charming(profileFrontText);
          let profileFrontChars = profileFrontText.querySelectorAll("span");
          profileFrontText.style.opacity = 1; 

          const profilePic = this.$el.querySelector(".about .profilepic-parallax img");
          const profileBG = this.$el.querySelector(".about .profilebg-parallax .bg");

          const profileCopy = this.$el.querySelector(".about .copy");

          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: true}));

          this.pageAnime[1].add({
            targets: profileBackChars,
            opacity: [0,1],
            translateX:[64,0],
            easing: "easeOutQuart",
            duration: 1000, 
            delay: function(el, i) {
              return 320 + 32 * i;
            }
          }).add({
            targets: profileFrontChars,
            opacity: [0,1],
            translateX:[64,0],
            easing: "easeOutQuart",
            duration: 1000, 
            offset: 64,
            delay: function(el, i) {
              return 320 + 32 * i;
            }
          }).add({
            targets: profileBG,
            opacity: [0,1],
            scale: [0,1],
            easing: "easeOutQuart",
            duration: 800,
            offset: 164
          }).add({
            targets: profilePic,
            opacity: [0,1],
            translateX:[-64,0],
            easing: "easeOutQuart",
            duration: 800, 
            offset: 300
          }).add({
            targets: profileCopy,
            opacity: [0,1],
            translateY:[160,0],
            easing: "easeOutQuart",
            duration: 800,
            offset: 300
          });

  },
  async fetch({store}) {
    store.commit('projects/emptyList'); //Reset all of our stores
    store.commit('socials/emptyList');

    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
                projects (sort: "releaseDate:desc"){
                  permalink,
                  blurb,
                  extraInfo,
                  bigGallery{
                    url
                  },
                  smallGallery{
                    url
                  },
                  client,
                  releaseDate,
                  linkToProject,
                  title,
                  _id, 
                  heroImage {
                    _id,
                    url
                  }
                },
                abouts{
                  profileImage {
                    url
                  },
                  secondaryImage{
                    url
                  },
                  aboutCopy,
                  currentlyLink,
                  currentlyText,
                  basedIn,
                  _id 
                },
                footers {
                  subtitle,
                  legal
                },
                heroes {
                  firstName, 
                  lastName, 
                  heroSubtitle,
                  herolinks{
                    linkUrl,
                    linkText,
                    _id
                  }
                },
                sociallinks {
                  icon {
                    url
                  }, 
                  _id,
                  inheader,
                  linkUrl
                }
          }`
      }
    })
    response.data.projects.forEach(project => {
      store.commit('projects/add', {
        id: project._id, 
        ...project
      })
    });

    let abouts = response.data.abouts; 
    let footers = response.data.footers; 
    let heroes = response.data.heroes;

    store.commit('setSite', {about: abouts[0], footer: footers[0], hero: heroes[0]});

     response.data.sociallinks.forEach(socialLink => {
       store.commit('socials/add', {
         id: socialLink._id, 
         ...socialLink
       })
     })
  }
}
</script>

<style lang="scss">
  header {
    position: fixed;
    opacity: 1;
    pointer-events: all;
  }

  header.hide {
    opacity: 0;
    pointer-events: none;
  }

  header h2 {
    color: $white; 
    font-size: 3.2em; 
    margin-left: 0em;
    opacity: 0;
    text-shadow: 0 4px 7px #0101093d;
  }

  header h2 span{
        position: relative;
    display: inline-block;
    vertical-align: top;
  }

  header h2 span:first-of-type{
    left: 33px;
    width: 2ch;
    overflow: hidden;
    letter-spacing: 84px;
  }

  #fp-nav {
    opacity:1 !important;
  }

  #fp-nav ul li a span{
    background: $white !important; 
  }

  .home {
    height: 100vh; 
    width: 100vw; 
    text-align: center;
    pointer-events: none; 
    position: relative;
  }

  .home .title {
    position: absolute;
    display: inline-block;
    top: 30%; 
    left: 45%; 
    transform: translate(-48%, -30%);
  }

  .name-parallax-container {
    position: absolute;
  }

  .name-parallax-container .name-parallax {
    position: absolute;
    top:0; 
    left:0;
  }

  .home .title h1 {
    font-size: 8em;
    display: inline-block; 
    
    pointer-events: auto;
    position: relative;
    opacity:0;
  }

  .home .title h1.layer0 {
    color: $white; 
    z-index: 100;
   
  }

   
  .home .title h1:not(.layer0) {
    position: absolute;
    left:0;
    top:0; 
    width: 100%;
    
  }

  .home .title h1.layer1 {
    color: $theme4; 
    z-index: 99;
     transform: translateX(0px);
     transition: all .35s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .home .title h1.layer2 {
    color: $theme3; 
    z-index: 98;
     transform: translateX(0px);
     transition: all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1.layer3 {
    color: $theme2; 
    z-index:97; 
     transform: translateX(0px);
     transition: all .25s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }  

  .home .title h1.layer4 {
    color: $theme1; 
    z-index:96;
     transform: translateX(0px);
     transition: all .2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1.layer5 {
    color: $theme0; 
    z-index: 95;
     transform: translateX(0px);
     transition: all .15s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1 > span,
  .home .title h2 > span,
  .about .profile-backText span,
  .about .profile-frontText span {
    position: relative;
    display: inline-block;
    opacity: 0;
  }

  .home .title h1:last-of-type > span,
  .home .title h2 >span {
    text-shadow: 0 4px 7px rgba(40, 42, 54, 0.25);
  }

  .home .title h1 > span:first-of-type {
    -moz-font-feature-settings:"swsh"; 
    -ms-font-feature-settings:"swsh"; 
    -o-font-feature-settings:"swsh"; 
    -webkit-font-feature-settings:"swsh"; 
    font-feature-settings:"swsh";
    left: 84px;
    top:41px; 
    letter-spacing:84px;
    width:2ch; 
    overflow: hidden;
  }

  .home .title h2 {
    display: inline-block; 
    position: absolute;
    color: $white; 
    right: -71px; 
    bottom: -10px; 
    font-size: 2.25em;
    pointer-events: auto;
    opacity: 0;
    z-index: 200;
  }

  .home .sub-title {
    display: inline-block;
    font-size: 1.6em; 
    position: absolute;
    left: 50%; 
    transform: translateX(-50%);
    top: 53%; 
    color: $white;
  }

  .home .sub-title p {
    opacity:0;
  }

  .home .center-line {
    position: fixed;
    width: 1px; 
    height: 100vh;
    left:50vw; 
    background: teal;
  }

  .home .hero-links {
    display: inline-block;
    position: absolute;
    top: 68%; 
    left: 50%; 
    transform: translateX(-50%);
    pointer-events: all;
  }

  .home .hero-links ul {
    padding: 0; 
    color: $white; 
    list-style-type: none;
    font-family: 'Gibson';
    font-weight: 600; 
    font-size: 1.82em; 
    text-align: center; 
    width: 55vw; 
  }

  .home .hero-links ul li{
    display: inline-block;
    text-align: center;
    opacity: 0;
    min-width: 132px;
    margin-left: 50px; 
    margin-right: 50px;
  }

  .home .hero-links ul li a{
    color: $white; 
    text-decoration: none;
  }

  .home .hero-links ul li:hover{
    cursor: pointer;
  }

  .home .hero-links ul li .link-bullet{
    width: 5px; 
    height: 5px; 
    background: $white; 
    border-radius: 100%; 
    display: block; 
    transform-origin: center; 
    margin: auto; 
    transition: all .132s ease-in-out;
  }

  .home .hero-links ul li .link-text {
    position: relative;
    display: block;
    transform: translateY(0);
    transition: all .132s ease-in-out;
  }

  .home .hero-links ul li:hover .link-text {
    transform: translateY(-2px);
    transition: all .164s ease-in-out;
  }

  .home .hero-links ul li:hover .link-bullet{
    width: 100%; 
    height:2px;
    border-radius: 0%; 
    transition: all .164s ease-in-out; 
  }

  .home .scroll-cta {
    width: 60px; 
    height: 60px; 
    transform-style: preserve-3d; 
    position: absolute;
    bottom: 0; 
    left: calc(50% - 30px); 
    perspective: 1200px;
    animation-name: floatCTA;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    opacity: 0;
    transition: all .2s ease;
  }

  .home .scroll-cta.show {
    opacity: 1; 
    bottom:10px;
    transition: all .4s ease;
  }

  .home .scroll-cta svg {
    animation-name: spinner;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3.64s;
  }

  @keyframes spinner {
    from {
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    to {
      -moz-transform: rotateY(-360deg);
      -ms-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
    }
  }

  @keyframes floatCTA {
    from {
      bottom: 20px;
    }

    to {
      bottom: 30px;
    }
  }

  .about .about-header {
    position: absolute;
    left: 10%;
    top: 6%;
    color: $white;
    opacity: 1;
    z-index: 0;
  }

  .about .about-header {
    text-shadow: 0 4px 7px $textShadow;
  }

  .about .content {
    z-index: 10; 
    position: relative;
    text-align: center; 
  }

  .about .content .images{
    display:inline-block;
    vertical-align: middle; 
    overflow: hidden; 
    height: 100%; 
    max-width: 564px;
    width: calc(44.7vw + 4em);
    padding-right: 3em;
    padding-left: 10em;
    position: relative;
    top: -34px; 
    padding-top:32px;
  }

  .about .content .images .profile-pic{
    height: 600px; 
    width: auto;
    min-width: 200px;
    position: relative;
    overflow: visible;
    left:0;
  }

  .about .content .images .profile-pic .profile-backText {
    color: $white; 
    position: relative;
    left: 0px; 
    top: 0px;
    font-size: 6.4em;
    z-index: 1000;
    text-shadow: 0 4px 7px rgba(1, 1, 9, 0.79);
  }

  .about .content .images .profile-pic .profile-frontText {
        color: #f9f7f4;
    position: relative;
    left: 32px;
    top: -64px;
    z-index: 1000;
    font-size: 6.4em;
    text-shadow: 0 4px 7px rgba(1, 1, 9, 0.79);
  }

  .about .content .images .profile-pic .bg{
        background: linear-gradient(32deg, #e4259b, #df0077, #6c15b5);
            background-size: 100% 164%;
    background-position: top right;
    width: 100%;
    height: 470px;
    position: relative;
    border-radius: 5px;
    color: #5a04a2;
    bottom: 0;
  }

  .about .content .images .profile-pic img{
    width: 130%;
    left: -8em;
    position: relative;
    bottom: -6px;
    z-index: 100;
  }

  .about .content .copy{
    width: 40vw; 
    max-width: 648px; 
    display: inline-block; 
    vertical-align: middle; 
    pointer-events: all;
    height: auto;
    text-align: left;
    color: $white;
    font-size: 25px;
    margin-left: 1em;
  }

  .about .content .copy a{
    color: $white;
  }

  #fp-nav.fp-left {
    left: 30px; 
    top: 100px; 
    opacity: 1 !important; 
    transition: all .32s ease-in-out;
  }

  #fp-nav.fp-left.hide {
    left: 64px;
    opacity:0 !important; 
    transition: all .5s ubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .profilepic-parallax-container {
    position: relative;
    display: inline-block;
    pointer-events: all;
  }

  .profilepic-parallax-container .profilepic-text-parallax {
    left: -196px; 
    top: 117px;
    position: relative;
    pointer-events: all;
    z-index: 10000;
  }

  .profilepic-parallax-container .profilebg-parallax {
    position: absolute;
    width: 100%; 
    height: 470px; 
    left: 0; 
    bottom: 0; 
    pointer-events: all;
  }

  .profilepic-parallax-container .profilepic-parallax {
    position: absolute;
    bottom: 0; 
    overflow: hidden;
    border-radius: 5px;
    width: 400px;
    pointer-events: all;
  }

</style>

