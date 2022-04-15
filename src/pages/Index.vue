<template >
  <Layout>
    <div>
      <About id="About" />
      <v-divider></v-divider>
      <Contact id="Contact" />
      <v-divider></v-divider>
      <Projects id="Projects" />
      <v-divider></v-divider>
      <Arsenal id="Arsenal" />
      <v-divider></v-divider>
      <!-- <Test /> -->
    </div>
    <!-- <v-card  loader-height="100%" height="100%" flat tile>
      <v-window v-model="onboarding">
        <v-window-item >
          <v-card color="transparent" class="fill-height" >
            <v-row  class="fill-height" align="center" justify="center">
              <h1>
                 <About />
              </h1>
            </v-row>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card color="transparent" >
            <v-row  class="fill-height fill-width" align="center" justify="center">
              <h1 >
                 <Projects />
              </h1>
            </v-row>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card color="transparent">
            <v-row  class="fill-height fill-width" align="center" >
              <h1  >
                 <Contact />
              </h1>
            </v-row>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card color="transparent" height="100%">
            <v-row  class="fill-height">
              <h1 >
                 <Arsenal />
              </h1>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item  v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-view-dashboard</v-icon>
            </v-btn>
          </v-item>
          <v-item  v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-devices</v-icon>
            </v-btn>
          </v-item>
          <v-item  v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-human-greeting-proximity</v-icon>
            </v-btn>
          </v-item>
          <v-item  v-slot="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-hammer-wrench</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card> -->
  </Layout>
</template>

<script>
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";
import 'animate.css';
import Arsenal from "../components/Arsenal.vue";
import Test from "../components/test.vue";
export default {
  metaInfo: {
    title: "Shailesh K S",
  },
  components: {
    About,
    Contact,
    Projects,
    Arsenal,
    Test
  },
  data: () => ({
    overlay: false,
    // sections: { <About /> ,<Projects/>, <Contact/> },
    // onboarding: 0,

  }),
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
.home-links a {
  margin-right: 1rem;
}
</style>
