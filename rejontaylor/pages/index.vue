<template>
  <section class="container">
    <div class="center-line"></div>
    <div class="homepage">
      <div class="title">
        <h1 class="layer0">Réjon</h1>
        <h1 class="layer1">Réjon</h1>
        <h1 class="layer2">Réjon</h1>
        <h1 class="layer3">Réjon</h1>
        <h1 class="layer4">Réjon</h1>
        <h1 class="layer5">Réjon</h1>
        
        <h2>Taylor-Foster</h2>
      </div>

      <div class="sub-title">
        <p>
        Developer • Designer • All Around Mad Scientist
        </p>
      </div>

      <div class="hero-links">
        <ul>
          <li>
            About Me
            <span class="link-bullet"> </span>
          </li>

          <li>
            Works
            <span class="link-bullet"> </span>
          </li>

          <li>
            Contact
            <span class="link-bullet"> </span>
          </li>
        </ul>
      </div>
    
    </div>
  </section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import charming from 'charming';

const apiUrl = process.env.API_URL || 'https://glacial-brushlands-60262.herokuapp.com' || 'localhost:1337';
const strapi = new Strapi(apiUrl);


export default {
  computed: {
    projects() { //NOTE(Rejon): Don't need to worry about filtering because our query does it for us.
      return this.$store.getters['projects/list']
    },
    socialLinks() {
      return this.$store.getters['socials/list']
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

    var testAnime = this.$anime.timeline({loop: false});

    
        testAnime.add({
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
        })
  },
  async fetch({store}) {
    store.commit('projects/emptyList'); //Reset all of our stores
    store.commit('socials/emptyList');

    // const response = await strapi.request('post', '/graphql', {
    //   data: {
    //     query: `query {
    //             projects (sort: "releaseDate:desc"){
    //               permalink,
    //               blurb,
    //               extraInfo,
    //               bigGallery{
    //                 url
    //               },
    //               smallGallery{
    //                 url
    //               },
    //               client,
    //               releaseDate,
    //               linkToProject,
    //               title,
    //               _id, 
    //               heroImage {
    //                 _id,
    //                 url
    //               }
    //             },
    //             abouts{
    //               profileImage {
    //                 url
    //               },
    //               secondaryImage{
    //                 url
    //               },
    //               aboutCopy,
    //               currentlyLink,
    //               currentlyText,
    //               _id 
    //             },
    //             footers {
    //               subtitle,
    //               legal
    //             },
    //             heroes {
    //               firstName, 
    //               lastName, 
    //               heroSubtitle,
    //               herolinks{
    //                 linkUrl
    //               }
    //             },
    //             sociallinks {
    //               icon {
    //                 url
    //               }, 
    //               _id,
    //               linkUrl
    //             }
    //       }`
    //   }
    // })
    // response.data.projects.forEach(project => {
    //   store.commit('projects/add', {
    //     id: project._id, 
    //     ...project
    //   })
    // });

    // let abouts = response.data.abouts; 
    // let footers = response.data.footers; 
    // let heroes = response.data.heroes;

    // store.commit('setSite', {about: abouts[0], footer: footers[0], hero: heroes[0]});

    //  response.data.sociallinks.forEach(socialLink => {
    //    store.commit('socials/add', {
    //      id: socialLink._id, 
    //      ...socialLink
    //    })
    //  })
  }
}
</script>

<style lang="scss">
  .homepage {
    height: 100vh; 
    width: 100vw; 
    text-align: center;
    pointer-events: none; 
    position: relative;
  }

  .title {
    position: absolute;
    display: inline-block;
    top: 30%; 
    left: 47%; 
    transform: translate(-48%, -30%);
  }

  .title > h1 {
    font-size: 8em;
    display: inline-block; 
    
    pointer-events: auto;
    position: relative;
    opacity:0;
  }

  .title > h1.layer0 {
    color: $white; 
    z-index: 100;
  }


  .title > h1:not(.layer0) {
    position: absolute;
    left:0;
    top:0; 
    width: 100%;
  }

  .title > h1.layer1 {
    color: $theme4; 
    z-index: 99;
  }

  .title > h1.layer2 {
    color: $theme3; 
    z-index: 98;
  }

  .title > h1.layer3 {
    color: $theme2; 
    z-index:97; 
  }  

  .title > h1.layer4 {
    color: $theme1; 
    z-index:96;
  }

  .title > h1.layer5 {
    color: $theme0; 
    z-index: 95;
  }

  .title > h1 > span,
  .title > h2 > span {
    position: relative;
    display: inline-block;
    opacity: 0;
        text-shadow: 0 10px 30px rgba(40, 42, 54, 0.15);
  }

  .title > h1 > span:first-of-type {
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

  .title > h2 {
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

  .sub-title {
    display: inline-block;
    font-size: 1.7em; 
    position: absolute;
    left: 50%; 
    transform: translateX(-50%);
    top: 55%; 
    color: $white;
    opacity:0.8;

  }

  .center-line {
    position: fixed;
    width: 1px; 
    height: 100vh;
    left:50vw; 
    background: teal;
  }
</style>

