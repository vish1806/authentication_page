import React from 'react';

const MyHTMLComponent = () => {
  const rawHTML = `
  <!DOCTYPE html>
  <html>
      <head>
          <title>Game Hub by T256</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="/styles.css" rel="Stylesheet" type="text/css" />
          <style>
             body {
      font-family: 'helvetica', 'sans-serif';
      margin: 0;
      background-color: #080808;
  }
  
  /* start: global style rules */
  h1, h2, h3, h4, h5 {
      line-height: 1.5;
      margin: 0.5em 0;
  }
  
  h1 {
      font-size: 2.5em;
  }
  
  h2 {
      font-size: 2em;
  }
  
  h3 {
      font-size: 1.6em;
  }
  
  h4 {
      font-size: 1.4em;
  }
  
  h5 {
      font-size: 1.2em;
  }
  
  a {
      text-decoration: none;
  }
  
  p, label, strong {
      line-height: 2;
      font-size: 0.85em;
      font-weight: 300;
  }
  
  .flex {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
      justify-content: space-between;
  }
  
  .badge {
      padding: 9px 20px;
      color: #eee;
      display: inline-block;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      font-size: 0.75em;
  }
  
  .badge.new {
      background-color: #1cb729;
  }
  
  .badge.strategy {
      background-color: #FFB320;
  }
  
  .badge.racing {
      background-color: #40ABF5;
  }
  
  .badge.rpg,
  .badge.adventure {
      background-color: #FF205F;
  }
  
  .badge.tournaments {
      background-color: rgb(229, 18, 152);
  }
  
  .badge.premium-tournament {
      background-color: turquoise;
      color: #252525;
  }
  
  .shade {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
  }
  /* end: global style rules */
  
  /* start: header styles */
  header {
      background-color: #131313;
      padding: 20px 0;
      position: relative;
      border-bottom: 1px solid turquoise;
  }
  
  .hamburger-menu {
      background-color: transparent;
      border: 1px solid turquoise;
      padding: 3px 5px;
      width: 30px;
      cursor: pointer;
      display: none;
  }
  
  .hamburger-menu .strip {
      display: block;
      height: 1px;
      background-color:turquoise;
      margin: 4px 0;
  }
  
  nav ul {
      list-style-type: none;
      padding: 0;
      margin: 10px 0 0;
  }
  
  nav ul li {
      display: inline-block;
      font-size: 1em;
      margin: 0 18px;
  }
  
  nav ul li a {
      color: #eee;
      font-weight: 600;
  }
  
  nav ul li a:hover {
      color: turquoise;
  }
  
  #login-register-button {
      background-color: turquoise;
      color: #131313;
      border-radius: 20px;
      padding: 10px 15px;
      font-size: 0.85em;
      font-weight: 600;
  }
  /* end: header styles */
  
  /* start: hero styles */
  #hero-image {
      background: url('https://cdn.wallpapersafari.com/87/13/ZAW6M3.jpg')top center no-repeat;
      height: 1000px;
      width: 100%;
  }
  
  .hero-marketing-text {
      max-width: 1200px;
      margin: -30px auto 0;
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      padding: 0 20px;
  }
  
  .hero-marketing-text h1 {
      color: #eee;
      font-size: 3.5em;
      font-weight: 300;
      margin: 0.5em 0;
  }
  
  .hero-marketing-text span {
      color: turquoise;
  }
  
  .hero-marketing-text h5 {
      color: #eee;
      font-size: 0.85em;
      font-weight: 300;
      max-width: 80%;
      line-height: 2;
      margin-bottom: 2.5em;
  }
  
  .hero-marketing-text button {
      background-color: turquoise;
      color: #131313;
      border-radius: 25px;
      padding: 15px 25px;
      font-size: 0.85em;
      font-weight: 600;
      border: none;
      cursor: pointer;
  }
  /* end: hero styles */
  
  /* start: latest news styles */
  #latest-news {
      margin-bottom: 75px;
  }
  
  #latest-news .flex {
      justify-content: flex-start;
      max-width: 100%;
      padding: 0;
  }
  
  #latest-news .flex h5 {
      flex-basis: 25%;
      background-color: rgb(229, 18, 152);
      padding: 25px;
      margin: 0;
      text-align: right;
      color: #eee;
      font-size: 1.2em;
  }
  
  #latest-news-container {
      background-color: #131313;
      position: relative;
      flex-basis: 75%;
      padding: 25px;
  }
  
  #latest-news-container .badge {
      margin-right: 20px;
  }
  
  #latest-news-container .latest-news-text {
      color: #eee;
  }
  /* end: latest news styles */
  
  /* start: game types styles */
  #game-types-boxes {
      margin-bottom: 75px;
      background: url('https://wallpapercave.com/dwp2x/wp2737387.jpg') content-box;
  }
  
  #game-types-boxes .box {
      flex-basis: 25%;
      position: relative;
      height: 380px;
  }
  
  #game-types-boxes .box.new {
      background: url('https://mcdn.wallpapersafari.com/335/30/29/bcDzy9.jpg') center no-repeat;
      background-size: cover;
  }
  
  #game-types-boxes .box.strategy {
      background: url('https://i.pinimg.com/originals/4e/cf/25/4ecf252ba6859547dac739224857f276.webp') center no-repeat;
      background-size: cover;
  }
  
  #game-types-boxes .box.rpg {
      background: url('https://w0.peakpx.com/wallpaper/755/1018/HD-wallpaper-skrr-creatures-mythical-thumbnail.jpg') top center no-repeat;
      background-size: cover;
  }
  
  #game-types-boxes .box.racing {
      background: url('https://i.pinimg.com/originals/33/d8/9c/33d89c98a7f464cbf0fd1852b9ca32d1.jpg') center no-repeat;
      background-size: cover;
  }
  
  #game-types-boxes .box .badge {
      position: relative;
      z-index: 2;
      top: 20px;
      left: 20px;
  }
  
  #game-types-boxes .box .contents {
      position: absolute;
      z-index: 2;
      bottom: 20px;
      left: 0;
      color: #eee;
      padding: 0 35px 0 25px;
  }
  
  #game-types-boxes .box .contents a {
      font-size: 0.8em;
      font-weight: 300;
      color: #999;
  }
  /* end: game types styles */
  
  /* start: recent games styles */
  #recent-games {
      background: url('https://www.hdwallpapers.in/download/dark_souls_dragon_fantasy_landscape_hd_games-1920x1080.jpg')center no-repeat;
      padding: 70px 0 120px;
      width:100%;
  }
  
  #recent-games h1 {
      text-align: center;
      color: #eee;
  }
  
  #recent-games .box {
      position: relative;
      flex-basis: 31%;
  
  }
  
  #recent-games .box .badge {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 2;
  }
  
  #recent-games .box img {
      width: 100%;
  }
  
  #recent-games .box .box-lower-section {
      padding: 20px;
      font-style: bold;
  }
  #recent-games .box .box-lower-section h4 {
      color: black;
      text-shadow: 2px 2px 5px turquoise;
  }
  
  #recent-games .box .box-lower-section p {
      color: #ffffff;
      font-weight: 700;
  }
  
  #recent-games .box .box-lower-section a {
      color: #d5d5d5;
      font-size: 1em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0);
  }
  /* end: recent games styles */
  
  /* start: tournaments styles */
  #tournaments {
      background: url('https://wallpapercave.com/dwp2x/wp7346888.jpg')top  no-repeat;
      padding: 125px 0 105px;
      width: 100%;
      
  }
  
  #tournaments .flex {
      position: relative;
  }
  
  #tournaments .badge {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
  }
  
  #tournaments .badge.tournaments {
      top: -32px;
      left: 15px;
  }
  
  #tournaments .box {
      background-color: #252525;
      padding: 70px 20px 40px;
      flex-basis: 45%;
      position: relative;
  }
  
  #tournaments .box .tournaments-image {
      float: left;
      width: 100%;
  
  }
  
  #tournaments .box .tournaments-image img {
      width: 100%;
      max-height: 300px;
  }
  
  #tournaments .box .tournaments-content {
      float: left;
      margin-left: 25px;
      width: 90%;
      color: #dedbdb;
  }
  
  #tournaments .box .tournaments-content h3 {
      color: turquoise;
      margin-top: 0;
  }
  
  #tournaments .box .tournaments-content label {
      color: #dedbdb;
      font-size: 0.75em;
  }
  
  #tournaments .box .tournaments-content label.prizes {
      color: turquoise;
      display: inline-block;
      margin-top: 12px;
  }
  
  #tournaments .box .tournaments-content strong {
      color: #eee;
      font-size: 0.75em;
  }
  /* end: tournaments styles */
  
  /* start: recent reviews styles */
  #recent-reviews {
      background: url('https://wallpapercave.com/dwp2x/wp3587260.jpg') center no-repeat;
      background-size: cover;
      padding: 75px 0 50px;
  }
  
  #recent-reviews h1 {
      text-align: center;
      margin-bottom: 1.65em;
  }
  
  #recent-reviews .box {
      flex-basis: 23%;
      position: relative;
      text-align: center;
      display: grid;
      height: 600px;
   
  }
  
  
  #recent-reviews .box .rating-badge {
      border-radius: 28px;
      padding: 13px;
      font-size: 1.1em;
      color: #eee;
      font-weight: 600;
      background-color: rgb(66, 162, 153);
      position: absolute;
      top: -30px;
      left: 30px;
  }
  
  #recent-reviews .box .rating-badge.purple {
      background-color: #694EAE;
  }
  
  #recent-reviews .box .rating-badge.green {
      background-color: #4EAE60;
  }
  
  #recent-reviews .box .rating-badge.violet {
      background-color: rgb(180, 52, 133);
  }
  
  #recent-reviews .box .recent-reviews-image {
      margin-bottom: 0.75em;
      overflow: hidden;
  }
  
  #recent-reviews .box .recent-reviews-image img {
      width: 100%;
  }
  
  #recent-reviews .box p {
      color: #999;
  }
  /* end: recent reviews styles */
  
  
  /* start: footer styles */
  footer {
      background-color: #252525;
      padding: 25px 0 20px;
  }
  
  footer small {
      color: #ddd;
      font-size: 0.9em;
  }
  
  footer small .footer-heart {
      font-size: 16px;
  }
  
  footer small a {
      color: #007BDC;
  }
  
  footer ul {
      list-style-type: none;
      margin: 0;
  }
  
  footer ul li {
      display: inline-block;
      margin: 0 12px;
  }
  
  footer ul li a {
      color: #ddd;
      font-size: 0.8em;
  }
  /* end: footer styles */
  
  /* start: media queries */
  @media (max-width: 1200px) {
      .flex {
          max-width: 1000px;
      }
  
      .latest-news-item {
          font-size: 0.8em;
      }
  
      #tournaments .box .tournaments-content {
          margin-left: 15px;
      }
  
      #tournaments .box .tournaments-content h3 {
          font-size: 1.4em;
          margin-bottom: 0.2em;
      }
  }
  
  @media (max-width: 991px) {
      .flex {
          max-width: 720px;
      }
  
      nav ul li {
          margin: 0 12px;
          font-size: 0.85em;
      }
  
      #latest-news .flex h5 {
          width: 15%;
      }
  
      #game-types-boxes .flex {
          flex-wrap: wrap;
      }
  
      #game-types-boxes .box {
          flex-basis: 50%;
      }
  
      #tournaments .box {
          flex-basis: 42%;
      }
  
      #tournaments .box .tournaments-image {
          float: none;
          width: 100%;
          margin-bottom: 10px;
          height: 250px;
          overflow: hidden;
      }
  
      #tournaments .box .tournaments-content {
          margin-left: 0;
          width: 100%;
      }
      
      #recent-reviews {
          background: none;
      }
  
      #recent-reviews .flex {
          flex-wrap: wrap;
      }
  
      #recent-reviews .box {
          flex-basis: 48%;
          margin-bottom: 45px;
      }
  
      #posts-comments .flex {
          flex-wrap: wrap;
      }
  
      #posts-comments .game-warrior {
          flex-basis: 100%;
          margin-bottom: 40px;
      }
  
      #posts-comments .posts-comments-box {
          flex-basis: 43%;
      }
  
      #posts-comments .game-warrior img.footer-graphic {
          display: none;
      }
  
      footer .flex {
          flex-wrap: wrap-reverse;
      }
  
      footer small {
          flex-basis: 100%;
          font-size: 0.75em;
          text-align: center;
          margin-top: 20px;
          line-height: 1.5;
      }
  
      footer ul {
          flex-basis: 100%;
          text-align: center;
          padding: 0;
      }
  } /* end 991px */
  
  @media (max-width: 767px) {
      h4 {
          font-size: 1.2em;
      }
  
      .flex {
          max-width: 540px;
      }
  
      nav ul {
          display: none;
          position: absolute;
          top: 101%;
          width: 100%;
          background-color: #131313;
          left: 0;
          padding: 0;
          margin: 0;
          z-index: 1;
      }
  
      nav ul li {
          display: block;
          padding: 15px 0 15px 20px;
          border-bottom: 1px solid turquoise;
          margin: 0;
      }
  
      nav ul li a {
          font-size: 1em;
      }
  
      .hamburger-menu {
          display: block;
          margin-top: 2px;
      }
  
      #hero-image {
          height: 650px;
          background-size: cover;
      }
  
      .hero-marketing-text {
          margin-top: -85px;
      }
  
      .hero-marketing-text h1 {
          font-size: 2.5em;
      }
  
      #latest-news .flex h5 {
          display: none;
      }
  
      #latest-news-container {
          flex-basis: 100%;
      }
  
      #recent-games {
          padding: 60px 0;
      }
  
      #game-types-boxes .box,
      #recent-games .box {
          flex-basis: 100%;
          margin-bottom: 30px;
      }
  
      #recent-games .flex,
      #tournaments .flex {
          flex-wrap: wrap;
      }
  
      #tournaments .box {
          flex-basis: 100%;
          margin-bottom: 20px;
      }
  
      #tournaments .box .tournaments-image {
          height: 400px;
      }
  
      #recent-reviews .box {
          flex-basis: 100%;
      }
  
      #recent-reviews .box .recent-reviews-image {
          height: 400px;
      }
  
      #posts-comments .posts-comments-box {
          flex-basis: 100%;
          margin-bottom: 40px;
      }
  
      footer ul li {
          margin: 0 10px;
      }
  
      footer ul li a {
          font-size: 0.75em;
      }
  } /* end 767px */
  
  @media (max-width: 400px) {
      .logo img {
          width: 150px;
          margin-top: 2px;
      }
  
      #login-register-button {
          padding: 10px;
          font-size: 0.65em;
      }
  
      #tournaments .box .tournaments-image {
          height: 220px;
      }
  }
  /* end: media queries */ 
          </style>
      </head>
  
      <body>
          <header>
              <div class="flex">
                  <div class="logo">
                      <a href="#"><img src="#" alt="Gaming Vortex Logo" /></a>
                  </div>
                  <nav>
                      <button id="nav-toggle" class="hamburger-menu">
                          <span class="strip"></span>
                          <span class="strip"></span>
                          <span class="strip"></span>
                      </button>
                      <ul id="nav-menu-container">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Games</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Forums</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </nav>
                  <a href="./register" id="login-register-button">Login / Register</a>
              </div>
          </header>
  
          <main>
              <section id="hero-image">
                  <div class="hero-marketing-text">
                      <h1>Welcome to <span>Gaming Vortex</span></h1>
                      <h1>The Ultimate Destination for Gaming Excellence!</h1>
                      <h5>Are you ready to embark on an exhilarating journey into the world of gaming? Look no further! At Gaming Vortex, we bring you the latest and greatest in the gaming universe. Whether you're a casual player, a competitive esports enthusiast, or a dedicated gamer seeking in-depth reviews and insights, we've got you covered. </h5>
                      <button>Read More</button>
                  </div>
              </section>
  
              <section id="latest-news">
                  <div class="flex">
                      <h5>Latest News</h5>
                      <div id="latest-news-container">
                          <div class="latest-news-item">
                              <span class="badge new">New</span>
                              <span class="latest-news-text">Get the latest updates on your favourite games.</span>
                          </div>
                      </div>
                  </div>
              </section>
  
              <section id="game-types-boxes">
                  <div class="flex">
                      <div class="box new">
                          <div class="shade"></div>
                          <span class="badge new">New</span>
                          <div class="contents">
                              <h4>Explore Limitless Worlds</h4>
                              <p>Dive into diverse gaming experiences, from action-packed adventures to strategic simulations. Discover new titles, stay updated on releases, and find gameplay tips.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
  
                      <div class="box strategy">
                          <div class="shade"></div>
                          <span class="badge strategy">New</span>
                          <div class="contents">
                              <h4>Connect with the Community</h4>
                              <p>Beyond pixels, gaming is about connections. Join our vibrant community to share experiences, discuss strategies, and connect through forums and live chats.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
  
                      <div class="box rpg">
                          <div class="shade"></div>
                          <span class="badge rpg">New</span>
                          <div class="contents">
                              <h4>Esports Extravaganza</h4>
                              <p>Immerse yourself in the world of esports. You can receive updates on tournaments, follow your favorite teams and players, and experience the thrill of intense competition across a variety of titles.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
  
                      <div class="box racing">
                          <div class="shade"></div>
                          <span class="badge racing">New</span>
                          <div class="contents">
                              <h4>Exclusive Features and Interviews</h4>
                              <p>Get insignts behind your favourite games by going behind the scenes with exclusive interviews featuring game developers, industry pioneers, and gaming influencers.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
                  </div>
              </section>
  
              <section id="recent-games">
                  <h1>Popular Categories</h1>
                  <div class="flex">
                      <div class="box">
                          <span class="badge new">Adventure</span>
                          <img src="https://www.pixground.com/wp-content/uploads/2023/08/Agent-Yoru-Valorant-4K-Wallpaper-6-jpg.webp" />
                          <div class="box-lower-section">
                              <h4>Valorant</h4>
                              <p>Plunge into the heart of strategic firefights in Valorant, a cutting-edge first-person shooter where precise marksmanship meets the diverse abilities of unique agents in a futuristic battleground.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="badge racing">Shooting</span>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdE0PP7SvcsIzDpsrxoy_7TeZz7tmfgDDCMvwtfinKrSOjo_l4WiVBNcGUT2mhLCEKwI&usqp=CAU" />
                          <div class="box-lower-section">
                              <h4>CSGO</h4>
                              <p>Dive into the world of <b>Counter-Strike: Global Offensive</b>, a classic and competitive FPS where teamwork and sharp shooting skills are paramount in fast-paced bomb-defusal matches.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="badge adventure">Racing</span>
                          <img src="https://wallpapers.com/images/featured/rocket-league-q83tcwb7har0kh5h.jpg" />
                          <div class="box-lower-section">
                              <h4>Rocket League</h4>
                              <p>Get ready for high-flying, car-powered soccer excitement in Rocket League, a unique sports game that combines skillful driving and gravity-defying stunts for a thrilling gaming experience.</p>
                              <a href="#" class="comments">3 Comments</a>
                          </div>
                      </div>
                  </div>
              </section>
  
              <section id="tournaments">
                  <div class="flex">
                      <span class="badge tournaments">Tournaments</span>
                      <div class="box">
                          <span class="badge premium-tournament">Premium Tournament</span>
                          <div class="tournaments-image">
                              <img src="https://wallpapercave.com/wp/wp4162217.jpg" />
                          </div>
                          <div class="tournaments-content">
                              <h3>Read Dead Redemption 2</h3>
                              <div><label>Tournament Begins:</label> <strong>October 20, 2023</strong></div>
                              <div><label>Tournament Ends:</label> <strong>November 23, 2023</strong></div>
                              <div><label>Participants:</label> <strong>4-6 Members in each team</strong></div>
                              <div><label>Tournament Organizer:</label> <strong>TEAM-256</strong></div>
                              <div><label class="prizes">Prizes:</label> <label>1st place: 1lakh, 2nd place: 50k, 3rd place: PS5</label></div>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="badge premium-tournament">Premium Tournament</span>
                          <div class="tournaments-image">
                              <img src="https://c4.wallpaperflare.com/wallpaper/686/219/725/defense-of-the-ancient-dota-dota-2-valve-wallpaper-preview.jpg" />
                          </div>
                          <div class="tournaments-content">
                              <h3>Defense of the Ancients 2</h3>
                              <div><label>Tournament Begins:</label> <strong>October 20, 2023</strong></div>
                              <div><label>Tournament Ends:</label> <strong>November 23, 2023</strong></div>
                              <div><label>Participants:</label> <strong>3-5 Members in each team</strong></div>
                              <div><label>Tournament Organizer:</label> <strong>TEAM-256</strong></div>
                              <div><label class="prizes">Prizes:</label> <label>1st place: 1lakh, 2nd place: 50k, 3rd place: PS5</label></div>
                          </div>
                      </div>
                  </div>
              </section>
  
              <section id="recent-reviews">
                  <h1 style="color :rgb(240, 71, 192); font-weight: 700;">Recently Trending</h1>
                  <div class="flex">
                      <div class="box">
                          <span class="rating-badge gold">9.3</span>
                          <div class="recent-reviews-image">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdQO78xgmku4SnvbDwaloRpzUi84hcMLS0g&usqp=CAU" bottom />
                          </div>
                          <div>
                              <h4 style="color :turquoise; ">Grand Theft Auto VI</h4>
                              <p>Dive into the criminal underworld of Los Santos in GTA 5, where heists, high-speed chases, and a sprawling open world combine for an adrenaline-fueled gaming experience.</p>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="rating-badge purple">9.1</span>
                          <div class="recent-reviews-image">
                              <img src="https://i.pinimg.com/736x/a9/9a/9a/a99a9aa8633021fd5aa14d47670ee68b.jpg" />
                          </div>
                          <div>
                              <h4 style="color :turquoise; ">Forza Horizon 4</h4>
                              <p>Race through stunning landscapes and dynamic seasons in Forza Horizon 4, a thrilling open-world racing game featuring a vast array of cars.</p>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="rating-badge green">8.9</span>
                          <div class="recent-reviews-image">
                              <img src="https://4kwallpapers.com/images/wallpapers/the-witcher-3-1284x2778-10656.jpg" />
                          </div>
                          <div>
                              <h4 style="color :turquoise;">The Witcher 3</h4>
                              <p>Immerse yourself in the spellbinding world of The Witcher 3, where the legendary Geralt of Rivia navigates a vast, morally ambiguous realm in a captivating open-world RPG.</p>
                          </div>
                      </div>
  
                      <div class="box">
                          <span class="rating-badge violet">8.8</span>
                          <div class="recent-reviews-image">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6b7MBNWADKasQ_R6qLIg363rkYobehV6ivCijZ-yysVscDg5Q-iCBxE8PQO7IvZamCI&usqp=CAU" />
                          </div>
                          <div>
                              <h4 style="color :turquoise; ">FIFA EA FC 24</h4>
                              <p>Experience the world of virtual football , where precision gameplay, realistic graphics, and a vast array of teams bring the excitement of the beautiful game to life.</p>
                          </div>
                      </div>
                  </div>
              </section>
  
              
          </main>
  
          <footer>
              <div class="flex">
                  <ul>
                      <li>
                          <a href="#">Home</a>
                      </li>
  
                      <li>
                          <a href="#">Games</a>
                      </li>
  
                      <li>
                          <a href="#">Blog</a>
                      </li>
  
                      <li>
                          <a href="#">Forums</a>
                      </li>
  
                      <li>
                          <a href="#">Contact</a>
                      </li>
                  </ul>
              </div>
          </footer>
  
          <script>
              document.getElementById('nav-toggle').addEventListener('click', function () {
                  let navMenu = document.getElementById('nav-menu-container');
                  navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
              });
          </script>
      </body>
  </html>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: rawHTML
      }}
    />
  );
};

export default MyHTMLComponent;
