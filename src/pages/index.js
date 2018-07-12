import React from 'react'
import Link from 'gatsby-link'

import '../layouts/index.css'
import '../layouts/fontawesome/css/all.css'
const IndexPage = () => (
  <div>
    <h1 className="header">👋 Hi I'm Réjon </h1>
    <h2>
      I'm a multi-talented developer and designer
      <p className="subtext">with not a lot of time on my hands. 😅 (This site is a work in progress)</p>
    </h2>
    <h2>
      I make games, apps, websites, and more with my
      <a href="https://maximumcrash.com" target="_blank">studio </a>
      <p className="subtext">Here's a few things I've worked on: <a href="https://appurl.io/jds78829" target="_blank">"Becker Derby"</a>, <a href="https://www.facebook.com/GameCraftEdu/" target="_blank">"Game Craft Branding"</a>, <a href="http://unveiledleadership.com/" target="_blank">"Client Website"</a></p>
    </h2>
    <h4>
      I also teach kids, give talks, and travel when I have some free time.
    </h4>
    <h3 className="contact">
      Got a question? Hit me up!
      <br/>
      <a href="https://twitter.com/maximum_crash" target="_blank"><i className="fab fa-twitter fa-lg"></i></a>
      <a href="mailto:rejon@maximumcrash.com"><i className="fas fa-envelope fa-lg"></i></a>
      <a href="https://github.com/MaximumCrash" target="_blank"><i className="fab fa-github fa-lg"></i></a>
    </h3>
  </div>
);

export default IndexPage
