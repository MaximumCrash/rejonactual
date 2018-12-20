<template>
  <section class="container">
    <div class="homepage">
    <h1>{{hero.firstName}}</h1>
    <h2>{{hero.lastName}}</h2>
    </div>
  </section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
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
                    linkUrl
                  }
                },
                sociallinks {
                  icon {
                    url
                  }, 
                  _id,
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

<style>

</style>

