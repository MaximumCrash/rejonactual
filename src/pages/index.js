import React from 'react'
import Link from 'gatsby-link'

import '../layouts/index.css'
import github from '../layouts/_ionicons_svg_logo-github.svg'
import twitter from '../layouts/_ionicons_svg_logo-twitter.svg'
import mail from '../layouts/_ionicons_svg_md-mail.svg'
const IndexPage = () => (
  <div>
    <h1 className="header">👋 Hi I'm Réjon </h1>
    <h2>
      I'm a multi-talented developer and designer
      <p className="subtext">with not a lot of time on my hands. 😅 (This site is a work in progress)</p>
    </h2>
    <h2>
      I make games, apps, websites, and more with my&nbsp;
      <a href="https://maximumcrash.com" target="_blank">studio </a>
      <p className="subtext">Here's a few things I've worked on: <a href="https://appurl.io/jds78829" target="_blank">"Becker Derby"</a>, <a href="https://www.facebook.com/GameCraftEdu/" target="_blank">"Game Craft Branding"</a>, <a href="http://unveiledleadership.com/" target="_blank">"Client Website"</a></p>
    </h2>
    <h4>
      I also teach kids, give talks, and travel when I have some free time.
    </h4>
    <h3 className="contact">
      Got a question? Hit me up!
      <br/>
      <a href="https://twitter.com/maximum_crash" target="_blank"><img src={twitter}/></a>
      <a href="mailto:rejon@maximumcrash.com"><img src={mail}/></a>
      <a href="https://github.com/MaximumCrash" target="_blank"><img src={github}/></a>
    </h3>
  </div>
);

export default IndexPage
