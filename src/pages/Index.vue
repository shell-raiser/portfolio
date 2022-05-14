<template >
  <Layout>
    <!-- <div> -->
    <v-card dark flat tile>
      <v-window v-model="onboarding" vertical touch>
        <v-window-item>
          <!-- <v-card style="bottom:0px;"> -->
          <!-- <v-row class="fill-height" align="center" justify="center"> -->
          <About id="About" />
          <!-- </v-row> -->
          <!-- </v-card> -->
        </v-window-item>

        <v-window-item>
          <!-- <v-card> -->
          <!-- <v-row class="fill-height" align="center" justify="center"> -->
          <Contact id="Contact" />
          <!-- </v-row> -->
          <!-- </v-card> -->
        </v-window-item>
        <v-window-item>
          <!-- <v-card> -->
          <!-- <v-row class="fill-height" align="center" justify="center"> -->
          <Projects id="Projects" />
          <!-- </v-row> -->
          <!-- </v-card> -->
        </v-window-item>
        <v-window-item>
          <!-- <v-card> -->
          <!-- <v-row class="fill-height" align="center" justify="center"> -->
          <Arsenal id="Arsenal" />
          <!-- </v-row> -->
          <!-- </v-card> -->
        </v-window-item>
      </v-window>

      <!-- <v-card-actions style="position:fixed bottom: 0;" class="justify-space-between "> -->
      <v-footer class="justify-space-between " tile app>
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <!-- <v-item-group v-model="onboarding" class="text-center" mandatory>
          
          <v-item v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>
            <v-list-item-subtitle>About</v-list-item-subtitle>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-human-greeting-proximity</v-icon>
            </v-btn>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-devices</v-icon>
            </v-btn>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-hammer-wrench</v-icon>
            </v-btn>
          </v-item>

        </v-item-group> -->
        <v-btn-toggle v-model="onboarding" class="text-center" mandatory rounded shift>
          <v-btn :input-value="active" @click="toggle">
            <v-icon color="rgb(58, 240, 251)">mdi-view-dashboard</v-icon>
            <div class="d-none d-sm-block">About </div>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="rgb(58, 240, 251)">mdi-human-greeting-proximity</v-icon>
            <span class="d-none d-sm-block">Contact</span>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="rgb(58, 240, 251)">mdi-devices</v-icon>
            <span class="d-none d-sm-block">Projects</span>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="rgb(58, 240, 251)">mdi-hammer-wrench</v-icon>
            <span class="d-none d-sm-block">Tools</span>
          </v-btn>
        </v-btn-toggle>

        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-footer>
      <!-- </v-card-actions> -->
    </v-card>
  </Layout>
</template>

<script>
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";
import 'animate.css';
import Arsenal from "../components/Arsenal.vue";
export default {
  metaInfo: {
    title: "Shailesh K S",
  },
  components: {
    About,
    Contact,
    Projects,
    Arsenal,
  },

  data: () => ({
    overlay: false,
    length: 4,
    onboarding: 0,
    window: 0
    // sections: { <About /> ,<Projects/>, <Contact/> },
    // onboarding: 0,

  }),
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    },
  }
  // methods: {
  //   next() {
  //     this.onboarding = this.onboarding + 1 === this.length
  //       ? 0
  //       : this.onboarding + 1
  //   },
  //   prev() {
  //     this.onboarding = this.onboarding - 1 < 0
  //       ? this.length - 1
  //       : this.onboarding - 1
  //   },
  // },


};
</script>

<style>
h1 {
  font-size: xxx-large;
  color: rgb(100, 0, 172);
  background-image: -webkit-linear-gradient(92deg, rgb(95, 18, 250), rgb(58, 254, 251));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

.headtext::before {
            content: "Front end dev";
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
                content: "Physics Lover";
            }
        }
</style>
