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

                  <p style="color: black">
                    I'm a
                    <span class="headtext pink rounded white--text"></span>
                  </p>

                  <img src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple" alt="visitors" />
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

.headtext::before {
  content: "Web dev";
  animation: animate infinite 5s;
  /* padding-left: 10px; */
}

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
}
</style>
