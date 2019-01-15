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
      
      

      <div class="content side-card">
        <div class="profilepic-parallax-container">
        <div class="images">
       
        <div class="profile-pic">
           <div class="profilepic-text-parallax">
          <h1 class="profile-backText">Hello</h1>
          <h1 class="profile-frontText">There</h1>
           </div>
           <div class="profilebg-parallax">
          <div class="bg"></div>
           </div>
           <div class="profilepic-parallax">
          <img :src="about.profileImage.url"/>
           </div>
        </div>
      </div>
      </div>
        
      <p class="copy" v-html="about.aboutCopy">
      </p>
      </div>
    </div>
    <div class="section project project0" data-anchor="works" v-if="projects[0] !== (null || undefined)">
      <a class="content" :href="'/' + (projects[0] ? projects[0].permalink : '')" >
        <div class="project-title">
          <h1 class="layer0">{{projects[0].title}}</h1>
          <h1 class="layer1">{{projects[0].title}}</h1>
          <h1 class="layer2">{{projects[0].title}}</h1>
          <h1 class="layer3">{{projects[0].title}}</h1>
          <h1 class="layer4">{{projects[0].title}}</h1>
          <h1 class="layer5">{{projects[0].title}}</h1>
        </div>
        <div class="project-blurb">
          {{projects[0].blurb}}
        </div>
        <div class="project-link">
          <span class="link-text">View Project</span>
          <span class="link-bullet"></span>
        </div>
        
        <div class="picture">
          <div class="slides">
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider video">
            <div class="hover-vid" v-if="projects[0].video !== null">
              <video data-gif="1" muted playsinline preload="metadata">
                <source :src="projects[0].hoverVidSrc" type="video/mp4" data-no-instant>
              </video>
            </div>
          </div>
          </div>
          
          <div class="image" v-if="projects[0].heroImage !== null">
            <img :src="projects[0].heroImage.url"/>
          </div>
          
        </div>
      </a>
    </div>
    <div class="section project project1" data-anchor="works-2" v-if="projects[1] !== (null || undefined)">
      <a class="content" :href="'/' + (projects[1] ? projects[1].permalink : '')">
        <div class="project-title">
          <h1 class="layer0">{{projects[1].title}}</h1>
          <h1 class="layer1">{{projects[1].title}}</h1>
          <h1 class="layer2">{{projects[1].title}}</h1>
          <h1 class="layer3">{{projects[1].title}}</h1>
          <h1 class="layer4">{{projects[1].title}}</h1>
          <h1 class="layer5">{{projects[1].title}}</h1>
        </div>
        <div class="project-blurb">
          {{projects[1].blurb}}
        </div>
        <div class="project-link">
          <span class="link-text">View Project</span>
          <span class="link-bullet"></span>
        </div>
        
        <div class="picture">
          <div class="slides">
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider video">
            <div class="hover-vid" v-if="projects[1].video !== null">
              <video data-gif="1" muted playsinline preload="metadata">
                <source :src="projects[1].hoverVidSrc" type="video/mp4" data-no-instant>
              </video>
            </div>
          </div>
          </div>
          
          <div class="image" v-if="projects[1].heroImage !== null">
            <img :src="projects[1].heroImage.url"/>
          </div>
          
        </div>
      </a>
    </div>
    <div class="section project project2" data-anchor="works-3" v-if="projects[2] !== (null || undefined)">
      <a class="content" :href="'/' + (projects[2] ? projects[2].permalink : '')" >
        <div class="project-title">
          <h1 class="layer0">{{projects[2].title}}</h1>
          <h1 class="layer1">{{projects[2].title}}</h1>
          <h1 class="layer2">{{projects[2].title}}</h1>
          <h1 class="layer3">{{projects[2].title}}</h1>
          <h1 class="layer4">{{projects[2].title}}</h1>
          <h1 class="layer5">{{projects[2].title}}</h1>
        </div>
        <div class="project-blurb">
          {{projects[2].blurb}}
        </div>
        <div class="project-link">
          <span class="link-text">View Project</span>
          <span class="link-bullet"></span>
        </div>
        
        <div class="picture">
          <div class="slides">
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider video">
            <div class="hover-vid" v-if="projects[2].video !== null">
              <video data-gif="1" muted playsinline preload="metadata">
                <source :src="projects[2].hoverVidSrc" type="video/mp4" data-no-instant>
              </video>
            </div>
          </div>
          </div>
          
          <div class="image" v-if="projects[2].heroImage !== null">
            <img :src="projects[2].heroImage.url"/>
          </div>
          
        </div>
      </a>
    </div>
    <div class="section project project3" data-anchor="works-4" v-if="projects[3] !== (null || undefined)">
      <a class="content" :href="'/' + (projects[3] ? projects[3].permalink : '')">
        <div class="project-title">
          <h1 class="layer0">{{projects[3].title}}</h1>
          <h1 class="layer1">{{projects[3].title}}</h1>
          <h1 class="layer2">{{projects[3].title}}</h1>
          <h1 class="layer3">{{projects[3].title}}</h1>
          <h1 class="layer4">{{projects[3].title}}</h1>
          <h1 class="layer5">{{projects[3].title}}</h1>
        </div>
        <div class="project-blurb">
          {{projects[3].blurb}}
        </div>
        <div class="project-link">
          <span class="link-text">View Project</span>
          <span class="link-bullet"></span>
        </div>

        <div class="picture">
          <div class="slides">
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider"></div>
          <div class="slider video">
            <div class="hover-vid" v-if="projects[3].video !== null">
              <video data-gif="1" muted playsinline preload="metadata">
                <source :src="projects[3].hoverVidSrc" type="video/mp4" data-no-instant>
              </video>
            </div>
          </div>
          </div>
          
          <div class="image" v-if="projects[3].heroImage !== null">
            <img :src="projects[3].heroImage.url"/>
          </div>
          
        </div>
      </a>
      
    </div>
    <div class="section contact" data-anchor="contact">
      <div class="content side-card">
        <div class="profilepic-parallax-container">
        <div class="images">
       
        <div class="profile-pic">
           <div class="profilepic-text-parallax">
          <h1 class="profile-backText">Get In</h1>
          <h1 class="profile-frontText">Touch</h1>
           </div>
           <div class="profilebg-parallax">
          <div class="bg"></div>
           </div>
           <div class="profilepic-parallax">
          <img :src="about.profileImage.url"/>
           </div>
        </div>
        
      </div>
      </div>
        
      <p class="copy">
        Let's make something great together!

        <a href="mailto:rejon@maximumcrash.com">rejon@maximumcrash.com</a>
        <ul class="socialLinks">
          <li v-for="link in socialLinks" :key="link._id">
            <a :href="link.linkUrl" target="_blank">
              <img :src="link.icon.url"/>
            </a>
          </li>
        </ul>

        <a href="https://archive.maximumcrash.com/" class="extra" target="_blank">*I've worked on a lot more stuff! <span>(Full Archive)</span></a>
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
        anchors: ['home', 'about', 'works','works-2', 'works-3','works-4', 'contact'],
        licenseKey: process.env.FP_LICENSE_KEY || '4A6E5C2A-3C2D488B-95692C91-0D280E52',
        onLeave: this.onLeaveSection,
        afterLoad: this.afterLoad,
        easing: 'easeOutQuad',
        navigation: true, 
        navigationPosition: 'left',
        animateAnchor: false,
        lazyLoading: false
      },
      pageAnime:[],
      headerAnime: null,
      isShowingHeader: false,
      ctaTimeout: null,
      projectVideoTimer: null,
      projectVideoAnime: []
    }
  },
  methods: {
    setProjectTimer(index) {
      let projectIndex = index; 
      let self = this; 
      let video = document.querySelector(".project.project"+projectIndex + " .picture .slides .slider.video video");

      this.projectVideoTimer = setTimeout(function () {
        //Play animation into the video
        video.currentTime = 0; 
        self.projectVideoAnime[projectIndex].restart();
      }, 1800);
    },
    async afterLoad(origin, destination, direction) {
      
      if (origin === null && direction === null) {
        console.log("AFTER LOAD");
        //We've loaded for the first time.
        if (destination.index === 0) { //We're on the homepage
          document.querySelector("#fp-nav").classList.remove("show");

          this.ctaTimeout = setTimeout(function() {
            if (scrollCTA.classList.contains('show')) {
              scrollCTA.classList.remove('show'); 
            }
            else {
              scrollCTA.classList.add('show'); 
            }
          }, 3200);
        }
        else { //We're on every other page
          document.querySelector("#fp-nav").classList.add("show");
        }

        this.options.animateAnchor = true;
        if (this.pageAnime !== null) 
        {
          this.pageAnime[destination.index].restart();
        }
      }
      else {
          

        if (origin.index >= 2 && origin.index <= 5) {
          let projectIndex = origin.index - 2;
          
          if (this.projects[projectIndex].video !== null) {
            console.log(projectIndex);
            let video = document.querySelector(".project.project"+projectIndex + " .picture .slides .slider.video video");
            video.removeEventListener("oncanplaythrough", this.setProjectTimer(projectIndex));
            this.projectVideoAnime[projectIndex].seek(0);
          }
        }
      }
    },
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
          document.querySelector("#fp-nav").classList.remove("show");
        }
      }

      this.pageAnime[destination.index].restart();

      if (origin.index === 0) {
        document.querySelector(".scroll-cta").classList.remove('show');
        clearTimeout(this.ctaTimeout);

        if (!this.isShowingHeader) {
          document.querySelector("#fp-nav").classList.add("show");
          this.isShowingHeader = true;
          this.headerAnime.restart();
        }
      }

      if (this.projectVideoTimer !== null) {
          clearTimeout(this.projectVideoTimer);
        }
        
              

      if (destination.index >= 2 && destination.index <= 5) { //We've entered range of our projects
        let projectIndex = destination.index - 2;
        if (this.projects[projectIndex].video !== null) {
          let video = document.querySelector(".project.project"+projectIndex + " .picture .slides .slider.video video");

          if (video.readyState === 4) {
            let self = this;
            this.projectVideoTimer = setTimeout(function () {
              //Play animation into the video
              video.currentTime = 0; 
              self.projectVideoAnime[projectIndex].restart();
            }, 1800);
          }
          else {
            video.addEventListener("oncanplaythrough",this.setProjectTimer(projectIndex));
          }
        }
        
      }
    },
  },
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

    const subTitle = this.$el.querySelector(".sub-title p");

    const heroLinks = this.$el.querySelectorAll(".hero-links li");

    const scrollCTA = this.$el.querySelector(".scroll-cta");

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
    
    this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

    
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



          const profileBackText = this.$el.querySelector(".about .profilepic-parallax-container .profilepic-text-parallax .profile-backText");
          charming(profileBackText);
          let profileBackChars = profileBackText.querySelectorAll("span");
          profileBackText.style.opacity = 1; 

          const profileFrontText = this.$el.querySelector(".about .profilepic-parallax-container .profilepic-text-parallax .profile-frontText");
          charming(profileFrontText);
          let profileFrontChars = profileFrontText.querySelectorAll("span");
          profileFrontText.style.opacity = 1; 

          const profilePic = this.$el.querySelector(".about .profilepic-parallax-container .profilepic-parallax img");
          const profileBG = this.$el.querySelector(".about .profilepic-parallax-container .profilebg-parallax .bg");

          const profileCopy = this.$el.querySelector(".about .copy");

          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

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

          var workSection = this.$el.querySelector(".project.project0");
          var workTitleWrappers = workSection.querySelectorAll(".project-title h1");

          let workTitleTargets = [];

          workTitleWrappers.forEach(wrapper => {
            charming(wrapper);
            wrapper.style.opacity = 1;
            let target = wrapper.querySelectorAll("span");
            workTitleTargets.push(target);
          });

          var workBlurb = workSection.querySelector(".project-blurb");

          var workImage = workSection.querySelector(".picture");
          var workLink = workSection.querySelector(".project-link");

          if (this.projects[0].video !== null) {
            let slides = workSection.querySelectorAll(".picture .slides .slider:not(.video)");
            let videoSlide = workSection.querySelector(".picture .slides .slider.video");  
            let video = videoSlide.querySelector("video");

            let self = this;
            //Set up the project animation
            this.projectVideoAnime[0] = this.$anime.timeline({loop: false, autoplay: false});
            video.addEventListener("ended", function() {self.projectVideoAnime[0].reverse(); self.projectVideoAnime[0].play();});
            
            this.projectVideoAnime[0].add({
              targets: slides,
              translateX: ['-110%', '120%'],
              easing: "easeInOutQuart",
              duration: 1320, 
              delay: function(el, i) {
                return 132 * i
              },
              complete: function(anim) { //Only runs if played forward
              //  if (!video.ended) { //Video hasn't been played?
                  video.play();
               // }
              },
            }).add({
              targets: videoSlide,
              translateX: ['-100%', '0%'],
              duration: 1, 
              offset: 900
            })
          }
          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

          workTitleTargets.forEach((target, i) => {
            let offsetClamp = Math.min(Math.max(32 + (4 * i), 32), 320);
            let duration = 900 + (100 * i);
            //let delay = Math.min(Math.max(320/(i+1) + 64 * i, 60), 320);
            
            this.pageAnime[2].add({
              targets: target,
              opacity: [0,1],
              translateX:[160,0],
              easing: "easeOutQuart",
              duration: duration, 
              offset: offsetClamp,
              delay: function(el, i) {
                return 40 + 64 * i
              }
            })
          });


          this.pageAnime[2].add({
            targets: workBlurb,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1320,
            offset: 164
          }).add({
            targets: workImage,
            opacity: [0,1],
            translateX: [132, 0],
            translateY: [-16, 0],
            easing: "easeOutQuart",
            duration: 1640,
            offset: 232
          }).add({
            targets: workLink,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1640, 
            offset: 182
          });

          workSection = this.$el.querySelector(".project.project1");
          workTitleWrappers = workSection.querySelectorAll(".project-title h1");

          workTitleTargets = [];

          workTitleWrappers.forEach(wrapper => {
            charming(wrapper);
            wrapper.style.opacity = 1;
            let target = wrapper.querySelectorAll("span");
            workTitleTargets.push(target);
          });

          workBlurb = workSection.querySelector(".project-blurb");

          workImage = workSection.querySelector(".picture");
          workLink = workSection.querySelector(".project-link");
          
          if (this.projects[1].video !== null) {
            slides = workSection.querySelectorAll(".picture .slides .slider:not(.video)");
            videoSlide = workSection.querySelector(".picture .slides .slider.video");  
            video = videoSlide.querySelector("video");

            let self = this;
            //Set up the project animation
            this.projectVideoAnime[1] = this.$anime.timeline({loop: false, autoplay: false});
            video.addEventListener("ended", function() {self.projectVideoAnime[1].reverse(); self.projectVideoAnime[1].play();});
            
            this.projectVideoAnime[1].add({
              targets: slides,
              translateX: ['-110%', '120%'],
              easing: "easeInOutQuart",
              duration: 1320, 
              delay: function(el, i) {
                return 132 * i
              },
              complete: function(anim) { //Only runs if played forward
              //  if (!video.ended) { //Video hasn't been played?
                  video.play();
               // }
              },
            }).add({
              targets: videoSlide,
              translateX: ['-100%', '0%'],
              duration: 1, 
              offset: 900
            })
          }
          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

          workTitleTargets.forEach((target, i) => {
            let offsetClamp = Math.min(Math.max(32 + (4 * i), 32), 320);
            let duration = 900 + (100 * i);
            //let delay = Math.min(Math.max(320/(i+1) + 64 * i, 60), 320);
            
            this.pageAnime[3].add({
              targets: target,
              opacity: [0,1],
              translateX:[160,0],
              easing: "easeOutQuart",
              duration: duration, 
              offset: offsetClamp,
              delay: function(el, i) {
                return 40 + 64 * i
              }
            })
          });


          this.pageAnime[3].add({
            targets: workBlurb,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1320,
            offset: 164
          }).add({
            targets: workImage,
            opacity: [0,1],
            translateX: [132, 0],
            translateY: [-16, 0],
            easing: "easeOutQuart",
            duration: 1640,
            offset: 232
          }).add({
            targets: workLink,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1640, 
            offset: 182
          });

          workSection = this.$el.querySelector(".project.project2");
          workTitleWrappers = workSection.querySelectorAll(".project-title h1");

          workTitleTargets = [];

          workTitleWrappers.forEach(wrapper => {
            charming(wrapper);
            wrapper.style.opacity = 1;
            let target = wrapper.querySelectorAll("span");
            workTitleTargets.push(target);
          });

          workBlurb = workSection.querySelector(".project-blurb");

          workImage = workSection.querySelector(".picture");
          workLink = workSection.querySelector(".project-link");
          
          if (this.projects[2].video !== null) {
            slides = workSection.querySelectorAll(".picture .slides .slider:not(.video)");
            videoSlide = workSection.querySelector(".picture .slides .slider.video");  
            video = videoSlide.querySelector("video");

            let self = this;
            //Set up the project animation
            this.projectVideoAnime[2] = this.$anime.timeline({loop: false, autoplay: false});
            video.addEventListener("ended", function() {self.projectVideoAnime[2].reverse(); self.projectVideoAnime[2].play();});
            
            this.projectVideoAnime[2].add({
              targets: slides,
              translateX: ['-110%', '120%'],
              easing: "easeInOutQuart",
              duration: 1320, 
              delay: function(el, i) {
                return 132 * i
              },
              complete: function(anim) { //Only runs if played forward
              //  if (!video.ended) { //Video hasn't been played?
                  video.play();
               // }
              },
            }).add({
              targets: videoSlide,
              translateX: ['-100%', '0%'],
              duration: 1, 
              offset: 900
            })
          }
          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

          workTitleTargets.forEach((target, i) => {
            let offsetClamp = Math.min(Math.max(32 + (4 * i), 32), 320);
            let duration = 900 + (100 * i);
            //let delay = Math.min(Math.max(320/(i+1) + 64 * i, 60), 320);
            
            this.pageAnime[4].add({
              targets: target,
              opacity: [0,1],
              translateX:[160,0],
              easing: "easeOutQuart",
              duration: duration, 
              offset: offsetClamp,
              delay: function(el, i) {
                return 40 + 64 * i
              }
            })
          });


          this.pageAnime[4].add({
            targets: workBlurb,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1320,
            offset: 164
          }).add({
            targets: workImage,
            opacity: [0,1],
            translateX: [132, 0],
            translateY: [-16, 0],
            easing: "easeOutQuart",
            duration: 1640,
            offset: 232
          }).add({
            targets: workLink,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1640, 
            offset: 182
          });

          workSection = this.$el.querySelector(".project.project3");
          workTitleWrappers = workSection.querySelectorAll(".project-title h1");

          workTitleTargets = [];

          workTitleWrappers.forEach(wrapper => {
            charming(wrapper);
            wrapper.style.opacity = 1;
            let target = wrapper.querySelectorAll("span");
            workTitleTargets.push(target);
          });

          workBlurb = workSection.querySelector(".project-blurb");

          workImage = workSection.querySelector(".picture");
          workLink = workSection.querySelector(".project-link");
          
          if (this.projects[3].video !== null) {
            slides = workSection.querySelectorAll(".picture .slides .slider:not(.video)");
            videoSlide = workSection.querySelector(".picture .slides .slider.video");  
            video = videoSlide.querySelector("video");

            let self = this;
            //Set up the project animation
            this.projectVideoAnime[3] = this.$anime.timeline({loop: false, autoplay: false});
            video.addEventListener("ended", function() {self.projectVideoAnime[2].reverse(); self.projectVideoAnime[2].play();});
            
            this.projectVideoAnime[3].add({
              targets: slides,
              translateX: ['-110%', '120%'],
              easing: "easeInOutQuart",
              duration: 1320, 
              delay: function(el, i) {
                return 132 * i
              },
              complete: function(anim) { //Only runs if played forward
              //  if (!video.ended) { //Video hasn't been played?
                  video.play();
               // }
              },
            }).add({
              targets: videoSlide,
              translateX: ['-100%', '0%'],
              duration: 1, 
              offset: 900
            })
          }
          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

          workTitleTargets.forEach((target, i) => {
            let offsetClamp = Math.min(Math.max(32 + (4 * i), 32), 320);
            let duration = 900 + (100 * i);
            //let delay = Math.min(Math.max(320/(i+1) + 64 * i, 60), 320);
            
            this.pageAnime[5].add({
              targets: target,
              opacity: [0,1],
              translateX:[160,0],
              easing: "easeOutQuart",
              duration: duration, 
              offset: offsetClamp,
              delay: function(el, i) {
                return 40 + 64 * i
              }
            })
          });


          this.pageAnime[5].add({
            targets: workBlurb,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1320,
            offset: 164
          }).add({
            targets: workImage,
            opacity: [0,1],
            translateX: [132, 0],
            translateY: [-16, 0],
            easing: "easeOutQuart",
            duration: 1640,
            offset: 232
          }).add({
            targets: workLink,
            opacity: [0,1],
            translateX: [132, 0],
            easing: "easeOutQuart",
            duration: 1640, 
            offset: 182
          });

          const contactBackText = this.$el.querySelector(".contact .profile-backText");
          charming(contactBackText);
          let contactBackChars = contactBackText.querySelectorAll("span");
          contactBackText.style.opacity = 1; 

          const contactFrontText = this.$el.querySelector(".contact .profile-frontText");
          charming(contactFrontText);
          let contactFrontChars = contactFrontText.querySelectorAll("span");
          contactFrontText.style.opacity = 1; 

          const contactPic = this.$el.querySelector(".contact .profilepic-parallax img");
          const contactBG = this.$el.querySelector(".contact .profilebg-parallax .bg");

          const contactCopy = this.$el.querySelector(".contact .copy");

          this.pageAnime.push(this.$anime.timeline({loop: false, autoplay: false}));

          this.pageAnime[6].add({
            targets: contactBackChars,
            opacity: [0,1],
            translateX:[64,0],
            easing: "easeOutQuart",
            duration: 1000, 
            delay: function(el, i) {
              return 320 + 32 * i;
            }
          }).add({
            targets: contactFrontChars,
            opacity: [0,1],
            translateX:[64,0],
            easing: "easeOutQuart",
            duration: 1000, 
            offset: 64,
            delay: function(el, i) {
              return 320 + 32 * i;
            }
          }).add({
            targets: contactBG,
            opacity: [0,1],
            scale: [0,1],
            easing: "easeOutQuart",
            duration: 800,
            offset: 164
          }).add({
            targets: contactPic,
            opacity: [0,1],
            translateX:[-64,0],
            easing: "easeOutQuart",
            duration: 800, 
            offset: 300
          }).add({
            targets: contactCopy,
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
                  },
    							video{
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
                  linkUrl
                },
  							
          }`
      }
    })
    response.data.projects.forEach(project => {

      var newVideoScr = null;

      if (project.video) {
        //NOTE(Rejon): This only works if it's coming from cloudinary
      let videoScr = project.video.url;
      let scrSplit = videoScr.split("/");

       newVideoScr = scrSplit[0] + "//" + scrSplit[1] + "/" + scrSplit[2] + "/" + scrSplit[3] + "/" + scrSplit[4] + "/" + scrSplit[5] + "/" + "/e_preview:duration_9" +scrSplit[6] + "/" + scrSplit[7];
      }

      



      store.commit('projects/add', {
        id: project._id, 
        hoverVidSrc: newVideoScr,
        ...project
      })
    });

    let abouts = response.data.abouts; 
    let footers = response.data.footers; 
    let heroes = response.data.heroes;

    console.log(response.data.projects);

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

  .home .title h1.layer0,
  .project .content .project-title h1.layer0 {
    color: $white; 
    z-index: 100;
    position: relative;
  }

   
  .home .title h1:not(.layer0),
  .project .content .project-title h1:not(.layer0) {
    position: absolute;
    left:0;
    top:0; 
    width: 100%;
    
  }

  .home .title h1.layer1,
  .project .content .project-title h1.layer1 {
    color: $theme4; 
    z-index: 99;
     transform: translateX(0px);
     transition: all .35s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .home .title h1.layer2,
  .project .content .project-title h1.layer2 {
    color: $theme3; 
    z-index: 98;
     transform: translateX(0px);
     transition: all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1.layer3,
  .project .content .project-title h1.layer3 {
    color: $theme2; 
    z-index:97; 
     transform: translateX(0px);
     transition: all .25s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }  

  .home .title h1.layer4,
  .project .content .project-title h1.layer4 {
    color: $theme1; 
    z-index:96;
     transform: translateX(0px);
     transition: all .2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1.layer5,
  .project .content .project-title h1.layer5 {
    color: $theme0; 
    z-index: 95;
     transform: translateX(0px);
     transition: all .15s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .home .title h1 > span,
  .home .title h2 > span,
  .about .profile-backText span,
  .about .profile-frontText span,
  .contact .profile-backText span,
  .contact .profile-frontText span,
  .project .content .project-title h1 > span {
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

  .home .hero-links ul li .link-bullet,
  .project .project-link .link-bullet{
    width: 5px; 
    height: 5px; 
    background: $white; 
    border-radius: 100%; 
    display: block; 
    transform-origin: center; 
    margin: auto; 
    transition: all .132s ease-in-out;
  }

  .home .hero-links ul li .link-text,
  .project .project-link .link-text {
    position: relative;
    display: block;
    transform: translateY(0);
    transition: all .132s ease-in-out;
  }

  .home .hero-links ul li:hover .link-text,
  .project .project-link:hover .link-text {
    transform: translateY(-2px);
    transition: all .164s ease-in-out;
  }

  .home .hero-links ul li:hover .link-bullet,
  .project .project-link .link-bullet{
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

  .content.side-card {
    z-index: 10; 
    position: relative;
    text-align: center; 
  }

  .content.side-card .images{
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

  .content.side-card .images .profile-pic{
    height: 600px; 
    width: auto;
    min-width: 200px;
    position: relative;
    overflow: visible;
    left:0;
  }

  .content.side-card .images .profile-pic .profile-backText {
    color: $white; 
    position: relative;
    left: 0px; 
    top: 0px;
    font-size: 6.4em;
    z-index: 1000;
    text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
  }

  .content.side-card .images .profile-pic .profile-frontText {
        color: #f9f7f4;
    position: relative;
    left: 32px;
    top: -64px;
    z-index: 1000;
    font-size: 6.4em;
    text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
  }

  .content.side-card .images .profile-pic .bg{
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

  .content.side-card .images .profile-pic img{
    width: 130%;
    left: -8em;
    position: relative;
    bottom: -6px;
    z-index: 100;
  }

  .content.side-card .copy{
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

  .content .copy a{
    color: $white;
  }

  #fp-nav.fp-left.show {
    left: 30px; 
    top: 140px; 
    opacity: 1 !important; 
    transition: all .32s ease-in-out;
  }

  #fp-nav.fp-left {
    left: 64px;
    top:140px;
    opacity:0 !important; 
    transition: all .5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .profilepic-parallax-container {
    position: relative;
    display: inline-block;
  }

  .profilepic-parallax-container .profilepic-text-parallax {
    left: -196px; 
    top: 117px;
    position: relative;
    z-index: 10000;
  }

  .profilepic-parallax-container .profilebg-parallax {
    position: absolute;
    width: 100%; 
    height: 470px; 
    left: 0; 
    bottom: 0; 
  }

  .profilepic-parallax-container .profilepic-parallax {
    position: absolute;
    bottom: 0; 
    overflow: hidden;
    border-radius: 5px;
    width: 400px;
  }

  .project a.content {
    text-decoration: none;
    position: relative; 
    width: calc(100% - 20vw);
    display: block; 
    margin: auto;
    pointer-events: all;
  }

  .project .content .project-title{
    position: absolute;
    left:0; 
    pointer-events: none;
  }

  .project .content .project-title h1:last-of-type{
    text-shadow: 0 11px 25px rgba(11, 11, 61, 0.61);
  }

  .project .content .extra a {
        color: $white;
    font-family: 'Gibson';
    font-size: 20px;
    opacity: 0.8;
    text-decoration: none;
  }

  .project .content .project-blurb {
        z-index: 100;
    font-family: 'Gibson';
    color: #f9f7f4;
    position: absolute;
    left: 0;
    top: 6.64em;
    font-size: 27px;
    font-weight: 500;
    max-width: 723px;
    pointer-events: none;
        text-shadow: 0 6px 9px rgba(11, 11, 61, 1), -1px 0 rgba(11, 11, 61, 0.64), 0 1px rgba(11, 11, 61, 0.64), 1px 0 rgba(11, 11, 61, 0.64), 0 -1px rgba(11, 11, 61, 0.64);
  }

  .project .content .picture {
    width: 55vw;
    max-width: 924px;
    height: 30.94vw;
    max-height: 519.78px;
    position: relative;
    right: 0;
    margin-left: auto;
    box-shadow: 0 10px 20px rgba(12, 5, 47, 0.19), 0 6px 6px rgba(10, 9, 44, 0.23);
  }

  .project .content .picture .image{
    position: absolute;
    width: 100%; 
    height: 100%;
    opacity: 1;
    transition: all .164s ease-in-out;
  }

  .project .content .picture .image.showvid{
    opacity: 0;
    transition: all .2s ease-in-out;
  }

  .project .content .picture .image img {
        width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project .content .picture .hover-vid {
    width: 100%; 
    height: 100%; 
  }

  .project .content .picture .hover-vid video{
    display: block; 
    width: 100%; 
    height: 100%; 
  }

  .project .content .picture .slides {
    position: absolute;
    z-index: 100; 
    width: 100%; 
    height: 100%; 
    overflow: hidden;
  }

  .project .content .picture .slides .slider{
    width: 100%; 
    height: 100%; 
    transform: translateX(-110%);
    position: absolute;
    transform-origin: top left; 
  }

  .project .content .picture .slides .slider:nth-child(1){
    background: $theme0;
    z-index: 100000;
  }

  .project .content .picture .slides .slider:nth-child(2){
    background: $theme1;
    z-index: 10000;
  }

  .project .content .picture .slides .slider:nth-child(3){
    background: $theme2;
    z-index: 1000;
  }

  .project .content .picture .slides .slider:nth-child(4){
    background: $theme3;
    z-index: 100;
  }

  .project .content .picture .slides .slider:nth-child(5){
    background: $theme4;
    z-index: 10;
  }

  .project .content .picture .slides .slider:nth-child(6){
    position: relative;
    z-index: 0;
  }

  .project .project-link {
        display: inline-block;
    position: absolute;
    top: 18em;
  }

  .project .project-link .link-text {
    font-family: 'Gibson';
    font-size: 26px;
    color: $white;
    font-weight: 600;
  }

  .contact .content .copy {
    font-size: 30px;
  }

  .contact .profile-backText span:nth-child(4) {
    margin-left: 20px;
  }

  .contact .content .copy > a {
    margin-top: 1em; 
    display: block; 
    margin-bottom: .64em;
  }

  .contact .content .copy .socialLinks {
    padding: 0; 
    list-style-type: none;
  }

  .contact .content .copy .socialLinks li{
    display:inline-block;
    width: 55px; 
    height: 55px; 
    position: relative;
    top: 0;
    margin-right: .25em;
    transition: all .1s ease-in-out;
  }

  .contact .content .copy .socialLinks li:hover{
    top: -7px; 
    transition: all .1s ease-in-out;
  }

  .contact .content .copy .socialLinks li:not(:first-of-type){
    margin-left:.25em;
  }

  .contact .content .copy .socialLinks li a{
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
  }

  .contact .content .copy a.extra {
    font-size: 19px; 
    text-decoration: none; 
    font-family: 'Gibson';
  }

  .contact .content .copy a.extra span{
    text-decoration: underline;
  }

</style>

