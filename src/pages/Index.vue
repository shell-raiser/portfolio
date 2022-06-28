<template >
  <Layout>
    <!-- <div> -->
    
      <v-window v-model="onboarding">
        <v-window-item>

          <About id="About" />

        </v-window-item>

        <v-window-item>
          <Contact id="Contact" />

        </v-window-item>
        <v-window-item>

          <Projects id="Projects" />

        </v-window-item>
        <v-window-item>

          <Arsenal id="Arsenal" />

        </v-window-item>
      </v-window>


      <v-footer class="justify-space-between " tile app>
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn-toggle v-model="onboarding" class="text-center" rounded mandatory color="deep-purple">
          <v-btn :input-value="active" @click="toggle">
            <v-icon color="deep-purple">mdi-view-dashboard</v-icon>
            <div class="d-none d-sm-block">About </div>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="deep-purple">mdi-human-greeting-proximity</v-icon>
            <span class="d-none d-sm-block">Contact</span>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="deep-purple">mdi-devices</v-icon>
            <span class="d-none d-sm-block">Projects</span>
          </v-btn>

          <v-btn :input-value="active" @click="toggle">
            <v-icon color="deep-purple">mdi-hammer-wrench</v-icon>
            <span class="d-none d-sm-block">Tools</span>
          </v-btn>
        </v-btn-toggle>

        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-footer>
      <!-- </v-card-actions> -->
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
    window: 0,
    reveal: false

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
    }
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}


.ProjectsHead {
  font-size: xxx-large;
  color: #2B2F57;
  /* position: relative; */
  /* left: 100%;   */
  /* float: right; */
  text-align: left;
  /* z-index: 1; */
}

.ContactHead {
  font-size: xxx-large;
  /* color: rgb(100, 0, 172); */
  background-image: -webkit-linear-gradient(90deg, rgb(210, 210, 210), rgb(255, 255, 255));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

.AboutHead {

  font-size: xxx-large;
  /* color: rgb(100, 0, 172); */
  color: #65499c;
  background-image: -webkit-linear-gradient(0deg, #3F51B5, #9C27B0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

.ArsenalHead {
  font-size: xxx-large;
  color: #09254f;
  background-image: -webkit-linear-gradient(90deg, #1d4ba5, #105c4a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 10s linear 0s infinite normal none running hue;
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
    content: "Python dev";
  }
}
</style>
