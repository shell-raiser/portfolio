<template >
  <Layout>
    <!-- <div> -->
    <v-card dark flat tile>
      <v-window v-model="onboarding" vertical>
        <v-window-item>
          <!-- <v-card style="bottom:0px;"> -->
            <!-- <v-row class="fill-height" align="center" justify="center"> -->
            <About id="About" />
            <!-- </v-row> -->
          <!-- </v-card> -->
        </v-window-item>

        <v-window-item>
          <v-card>
            <!-- <v-row class="fill-height" align="center" justify="center"> -->
            <Contact id="Contact" />
            <!-- </v-row> -->
          </v-card>
        </v-window-item>
        <v-window-item>
          <!-- <v-card> -->
            <v-row class="fill-height" align="center" justify="center">
              <Projects id="Projects" />
            </v-row>
          <!-- </v-card> -->
        </v-window-item>
        <v-window-item>
          <!-- <v-card> -->
            <v-row class="fill-height" align="center" justify="center">
              <Arsenal id="Arsenal" />
            </v-row>
          <!-- </v-card> -->
        </v-window-item>
      </v-window>

      <!-- <v-card-actions style="position:fixed bottom: 0;" class="justify-space-between "> -->
        <v-footer class="justify-space-between " tile app>
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>
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

        </v-item-group>
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
</style>
