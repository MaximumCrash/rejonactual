<template>
     <div class="project">
          <div class="title">
              <h1> Project Name That is Too Long </h1>
              <p>This is a project description that will probably go on for too long, but that's why we're testing it. Just to see how far this gravy train rolls. Idk I'm just looking for weird stuff to say. </p>
          </div>
          <div class="slides">
               <div class="slide0"></div>
               <div class="slide1"></div>
               <div class="slide2"></div>
               <div class="slide3"></div>
               <div class="slide4"></div>
          </div>
          <div class="image" :style="{backgroundImage: 'url(~/assets/Images/work0_header.jpg)'}">
          </div>
          
     </div>
</template>

<style lang="scss" scoped>
     .project {
          width: 100%; 
          height: 30vh; 
          position: relative;
     }

     .title {
          color: white; 
          position: absolute; 
          bottom: 5px; 
          left: 5px; 
          text-align: left; 
     }

     .title h1 {
          font-size: 3.64em;
     }

     .title p {
          font-size: 1.32em;
     }
</style>

