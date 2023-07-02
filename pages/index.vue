<template >
  <!-- <Layout> --><div>
    <section id="about">
      <v-container>
        <v-row>
          <v-col align-self="center">
            <v-container class="rotatingGlow rounded">
              <AboutGlowRotate />
            </v-container>
            <br>
            <v-container class="rounded contentHolder red white--text">
              This site is still under development, many things are yet to be implemented.
              <br />Keep an eye on
              <a href="https://github.com/shell-raiser/shell-raiser.github.io" class="white">other
                branches</a>
              for major changes.
            </v-container>
          </v-col>

          <v-col align-self="center">
            <!-- <v-row > -->
            <v-container class="rounded contentHolder" style="font-weight: 600;">
              <p>
                I'm a student who enjoys learning new things and solving problems.
                <br> I'm passionate about protecting people
                and systems from cyber threats, and enjoy putting my knowledge to use in real-world scenarios.
                <br> I enjoy tweaking and experimenting with code. Currently focused on web development, but beginning to
                dabble in cybersecurity. FOSS piques my interest. <br>
                I enjoy working long
                hours on interesting projects, but when I have to work on something boring, I barely make the
                deadline.<br>
                In my spare time, I create electronic music. Check out the
                links section for my work . <br>

              </p>
              <p>
                Feel free to browse through my projects, as well as my resume and contact information, and let me know
                what you think.
              </p>
            </v-container>



          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
      <section id="connect" class="d-none d-sm-block" style="background: #000;">
        <ConnectComponent />
      </section>
    </v-lazy>
    <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">

      <section id="projects" class="d-none d-sm-block"
        style='background: url("../assets/projectsBg.gif");  background-size: cover;  background-attachment: fixed;'>
        <v-row>
          <v-col cols="3">
            <ProjectFilterNavigation style="position: sticky; top: 0;" />
          </v-col>
          <v-col>
            <Projects />
          </v-col>
        </v-row>
      </section>
    </v-lazy>

    <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
      <section id="arsenal" class="d-none d-sm-block"
        style='background: purple url("assets/toolsBg.webp"); background-size:contain;  background-attachment: fixed;'>
        <v-row>
          <v-col cols="3">
            <ArsenalLanguageStats style="position: sticky; top: 0;" />
          </v-col>
          <v-col>
            <Arsenal />
          </v-col>
        </v-row>
      </section>
    </v-lazy>

    </div>
  <!-- </Layout> -->
</template>

<script>
// import AboutContent from "../components/aboutContent.vue"

import AboutGlowRotate from '../components/aboutGlowRotate.vue';
import Arsenal from '../components/Arsenal.vue';
import ArsenalLanguageStats from '../components/arsenalLanguageStats.vue';
import ConnectComponent from '../components/Connect.vue'
import ProjectFilterNavigation from '../components/projectFilterNavigation.vue';
import Projects from '../components/Projects.vue';
export default {
  metaInfo() {
    return this.$seo({
      title: "About me",
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
      link: [],
      script: [] // any scripts
    });
  },
  methods: {

  },
  data() {
    return {
      isActive: false,
    }
  },
  components: { ConnectComponent, Projects, Arsenal, ProjectFilterNavigation, ArsenalLanguageStats, AboutGlowRotate }
};
</script>

<style scoped>
section {
  padding-top: 30px;
  padding-bottom: 30px;
}


#about {
  background: linear-gradient(90deg, #9575CD, #a6d7ff);
  background-size: 150% 100%;
  animation: gradient 10s ease infinite;
}

.contentHolder {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(15px);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);

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
  color: #65499c;
  background-image: -webkit-linear-gradient(0deg, #3f51b5, #9c27b0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
}


@property --rotate {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}



.rotatingGlow {
  padding: 0px;
  background-image: linear-gradient(var(--rotate), #a1a6ff, 20%, rgb(37, 0, 110));
  animation: spin 10s linear infinite;
}


@keyframes spin {
  0% {
    --rotate: 225deg;
  }

  50% {
    --rotate: 315deg;
  }

  100% {
    --rotate: 225deg;
  }
}
</style>
