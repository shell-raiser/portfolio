<template >
  <Layout>
    <section id="theSection">
      <transition name="slide-fade" appear>
        <v-container class="fill-height">
          <v-row align="center" justify="center" align-content="center">
            <v-col align-self="center" sm="6">
              <!-- <v-container> -->
              <!-- <v-img src="../assets/legoMan.jpg" lazy-src="https://wp-technique.com/loading/loading.gif"
                aspect-ratio="1" min-width="300px" max-width="500px" style="height:100%;"></v-img> -->
              <g-image class="rounded" alt="profile picture" src="~/assets/legoMan.jpg" />
              <!-- </v-container> -->
            </v-col>

            <v-col>
              <v-row>
                <v-col align-self="center" class="rounded contentHolder">
                  <h1>
                    Hello there,
                    <br />I'm Shailesh !
                  </h1>


                  <img
                    src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple"
                    alt="visitors" />
                  <p style="color: black">

                  <div class="scrollingList__text">I'm a</div>
                  <div class="scrollingList">
                    <ul class="scrollingList__list">
                      <li class="scrollingList__list__item ">CyberSec enthusiast</li>
                      <li class="scrollingList__list__item ">Web dev</li>
                      <li class="scrollingList__list__item ">Designer</li>
                      <li class="scrollingList__list__item ">Music Maker</li>
                      <!-- <li class="scrollingList__list__item ">Python Dev</li> -->
                    </ul>
                  </div>
                  </p>

                  <!-- </p> -->
                  <p class="red white--text">
                    This site is still under development, many things are yet to be implemented.
                    <br />Keep an eye on
                    <a href="https://github.com/shell-raiser/shell-raiser.github.io" class="white">other
                      branches</a>
                    for major changes.
                  </p>
                </v-col>
              </v-row>

              <!-- <v-row>
                <v-col align-self="center" class="rounded contentHolder">
                  <p>
                    I like to tweak code and mess around. Doing mostly Web Dev, But will be doing some CyberSec stuff
                    soon
                    <br>
                    Super interested in Open source
                    <br>
                    I make electronic music in my free time.
                    <br>
                    This site was built from scratch with gridsome and vuetify. I'm using Umami analytics (Link here).
                  </p>
                </v-col>
              </v-row> -->

            </v-col>
          </v-row>
        </v-container>
      </transition>
    </section>
    <!-- <section class="d-sm-none">
				<transition name="slide-fade" appear>
					<v-container>
						<AboutContent />
					</v-container>
				</transition>
			</section> -->
  </Layout>
</template>

<script>
// import AboutContent from "../components/aboutContent.vue"

export default {
  metaInfo() {
    return this.$seo({
      title: "About me", // Uses the titleTemplate in Gridsome config
      description: "I'm Shailesh (Shell Raiser), and this is my portfolio",
      keywords: "one,two",
      openGraph: {
        title: "Shailesh K S, About me",
        type: "website",
      },
      twitter: {
        title: "Shailesh K S, About me",
        type: "summary",
      },
      link: [],   // any links
      script: []  // any scripts
    });
  },
};
</script>

<style scoped>
section {

  /* @font-face {
    font-family: 'times';
    src: url('../assets/nunito.woff2') format('truetype')
  }

  @font-face {
    font-family: 'nunito';
    src: url('../assets/nunito_bold.woff2') format('truetype');
    font-weight: bold
  } */

  height: 100%;
  min-height: calc(100vh - 56px);
  /* width: 100%; */
  background: linear-gradient(90deg, #9575CD, #90caf9);
  background-size: 200% 100%;
  animation: gradient 10s ease infinite;
}

.contentHolder {
  background-color: rgba(255, 255, 255, 0.4);
  /* min-width: fit-content; */
  backdrop-filter: blur(5px);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

h1 {
  font-size: xxx-large;
  /* color: rgb(100, 0, 172); */
  color: #65499c;
  background-image: -webkit-linear-gradient(0deg, #3f51b5, #9c27b0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

/* 
.headtext::before {
  content: "Web dev";
  animation: animate infinite 5s;
} */

.scrollingList {

  /* background-color: red; */
  overflow: hidden;
  height: 40px;
  margin: 0;
}


.scrollingList__text {
  display: inline;
  float: left;
  /* margin: 0; */
  line-height: 40px;
  padding-right: 3px;
  /* background-color: rgb(255, 255, 255); */
}

.scrollingList__list {

  /* margin: 0; */
  width: max-content;
  padding-left: 3px;
  text-align: left;
  list-style: none;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

.scrollingList__list__item {
  line-height: 41px;
  padding-inline: 3px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  border-width: 1px;
}

.scrollingList__list__item:nth-child(2n+1) {
  background-color: #9b27b04e;
  text-decoration-color: #65499c;
  /* border-top-style: dashed; */
}

.scrollingList__list__item:nth-child(2n+2) {
  background-color: #3f51b54e;
  text-decoration-color: #3f51b5;
}

@keyframes change {

  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  16.66%,
  29.32% {
    transform: translate3d(0, -25%, 0);
  }

  33.32%,
  45.98% {
    transform: translate3d(0, -50%, 0);
  }

  49.98%,
  62.64% {
    transform: translate3d(0, -75%, 0);
  }

  66.64%,
  79.3% {
    transform: translate3d(0, -50%, 0);
  }

  83.3%,
  95.96% {
    transform: translate3d(0, -25%, 0);
  }
}

/* 
@keyframes animate {
  25% {
    content: "CyberSec enthusiast";
  }

  50% {
    content: "Designer";
  }

  75% {
    content: "Python dev";
  }
} */
</style>
