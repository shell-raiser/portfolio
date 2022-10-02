<template >
  <Layout>
    <!-- <div> -->
    <section id="theSection">
      <transition name="slide-fade" appear>
        <!-- <v-container id="theSectionContainer"> -->
        <v-row>
          <v-col sm="6">
            <v-img
              class="rounded"
              alt="profile picture"
              src="https://randomuser.me/api/portraits/lego/5.jpg"
              aspect-ratio="1"
              min-width="300px"
              style="height: 100%"
            ></v-img>
          </v-col>
          <v-col>
            <v-container
              style="
                background-color: rgba(255, 255, 255, 0.4);
                min-width: fit-content;
              "
              class="rounded"
            >
              <h1>
                Hello there,
                <br />I'm Shailesh !
              </h1>

              <p style="color: black">
                I'm a
                <span class="headtext pink rounded white--text"></span>
              </p>

              <img
                src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple"
                alt="visitors"
              />
              <!-- </p> -->
              <p class="red white--text">
                This site is still under development, many things are yet to be
                implemented.
                <br />Keep an eye on
                <a
                  href="https://github.com/shell-raiser/shell-raiser.github.io"
                  class="white"
                  >other branches</a
                >
                for major changes.
              </p>
            </v-container>
          </v-col>
        </v-row>
        <!-- </v-container> -->
      </transition>
    </section>
    <!-- <section class="d-sm-none">
				<transition name="slide-fade" appear>
					<v-container>
						<AboutContent />
					</v-container>
				</transition>
			</section> -->
    <!-- </div> -->
  </Layout>
</template>

<script>
// import AboutContent from "../components/aboutContent.vue"
export default {
  metaInfo() {
    return this.$seo({
      title: "About me", // Uses the titleTemplate in Gridsome config
      description: "My description",
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
  min-height: calc(100vh - 56px);

  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  background: linear-gradient(90deg, #9575cd, #90caf9);
  background-size: 200% 100%;
  animation: gradient 10s ease infinite;
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
