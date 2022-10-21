<template>
  <Layout>
    <div>
      <ProjectFilterNavigation />
      <section>
        <transition name="slide-fade" appear>
          <v-container id="theContainer">
            <h2 class="rounded" id="hackathons">Hackathon Projects</h2><div style="height:10px"> </div>
            <v-row>
              <v-col v-for="(project, i) in hackathonProjects" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto projectCard" width="350">
                      <v-img :aspect-ratio="16 / 9" :src="project.img">
                        <v-expand-transition class="bgBlur">

                          <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                            style="height: 100%">
                            <div class="cardHoverBlurBg">
                              <p class="projectCardHoverText" v-html="project.hoverText"></p>
                            </div>
                          </div>

                        </v-expand-transition>
                      </v-img>
                      <v-card-text class="pt-6" style="position: relative">
                        <v-btn absolute color="teal" class="white--text" fab large right top :href="project.heroLink"
                          target="_blank" style="z-index: 0" rel="noopener noreferrer">
                          <v-icon>{{ project.heroIcon }}</v-icon>
                        </v-btn>

                        <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                          {{ project.title }}
                        </h3>
                        <p v-html="project.desc"></p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn v-for="(action, i) in project.actions" :key="i" :href="action.link" target="_blank"
                          rel="noopener noreferrer">
                          <v-icon>{{ action.icon }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-lazy>
              </v-col>
            </v-row>
            <div style="height:30px"> </div>
            <h2 class="rounded" id="sideProjects">Side Projects</h2><div style="height:10px"> </div>
            <v-row>
              <v-col v-for="(project, i) in sideProjects" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto projectCard" width="350">
                      <v-img :aspect-ratio="16 / 9" :src="project.img">
                        <v-expand-transition>
                          <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                            style="height: 100%">
                            <div class="cardHoverBlurBg">
                              <p class="projectCardHoverText" v-html="project.hoverText"></p>
                            </div>
                          </div>
                        </v-expand-transition>
                      </v-img>
                      <v-card-text class="pt-6" style="position: relative">
                        <v-btn absolute color="teal" class="white--text" fab large right top :href="project.heroLink"
                          target="_blank" style="z-index: 0" rel="noopener noreferrer">
                          <v-icon>{{ project.heroIcon }}</v-icon>
                        </v-btn>

                        <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                          {{ project.title }}
                        </h3>
                        <p v-html="project.desc"></p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn v-for="(action, i) in project.actions" :key="i" :href="action.link" target="_blank"
                          rel="noopener noreferrer">
                          <v-icon>{{ action.icon }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-lazy>
              </v-col>
            </v-row>
            <div style="height:30px"> </div>
            <h2 class="rounded" id="volunteer">Volunteering</h2><div style="height:10px"> </div>
            <v-row>
              <v-col v-for="(project, i) in volunteerSites" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto projectCard" width="350">
                      <v-img :aspect-ratio="16 / 9">
                        <img width="350" fit="inside" :src="project.img" />
                        <v-expand-transition>
                          <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                            style="height: 100%">
                            <div class="cardHoverBlurBg">
                              <p class="projectCardHoverText" v-html="project.hoverText"></p>
                            </div>
                          </div>
                        </v-expand-transition>
                      </v-img>

                      <v-card-text class="pt-6" style="position: relative">
                        <v-btn absolute color="teal" class="white--text" fab large right top :href="project.heroLink"
                          target="_blank" style="z-index: 0" rel="noopener noreferrer">
                          <v-icon>{{ project.heroIcon }}</v-icon>
                        </v-btn>

                        <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                          {{ project.title }}
                        </h3>
                        <p v-html="project.desc"></p>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn v-for="(action, i) in project.actions" :key="i" :href="action.link" target="_blank"
                          rel="noopener noreferrer">
                          <v-icon>{{ action.icon }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-lazy>
              </v-col>
            </v-row>
            <!-- </v-container> -->
            <!-- </v-col> -->
          </v-container>
        </transition>
      </section>
    </div>
  </Layout>
</template>
<style scoped>
.projectCardHoverText {
  /* top: 8px; */
  /* height: 100%; */
  width: 100%;
  vertical-align: middle;
  position: relative;
  opacity: 1;
  padding: 10px;
  text-align: center;
  filter: blur(0px)
}

.cardHoverBlurBg {
  justify-content: center;
  align-items: center;
  display: flex;
  backdrop-filter: blur(5px);
  background-color: rgba(1, 99, 99, 0.55);
  height: 100%;
  width: 100%;

}

.v-card--reveal {
  /* background-color: teal; */

  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: 0; */
  position: absolute;
  width: 100%;
}

h2 {
  font-size: xxx-large;
  color: rgb(36, 0, 95);
  width: fit-content;
  text-align: left;
  background-color: #d1c4e96f;
  backdrop-filter: blur(5px);
  /* -webkit-text-fill-color: #fff; */
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(35, 0, 99, 0.776);
  text-decoration-line: underline;
  text-decoration-color: #fff; */
  /* z-index: 1; */
}

.projectCard {
  background-color: #cdd3f9dd;
  backdrop-filter: blur(5px);
}



section {
  background: lightblue url("../assets/projectsBg.gif");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  /* width: 100%; */
  /* display: block;  */
  /* position: absolute; */
  /* width: 100%;
    height: 100%; */
  /* background-size:100% 100%; */

}

.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}

.v-card__text {
  color: #000;
}
</style>
<script>
import ProjectFilterNavigation from '../components/projectFilterNavigation.vue';
import allProjects from '../assets/projectData.json'
export default {
  // mounted() {
  //     var navBar = document.getElementById("theNavbar")
  //     console.log(parseInt(getComputedStyle(navBar).getPropertyValue('width')))
  //     var containerWidthCorrected = window.innerWidth -  parseInt(getComputedStyle(navBar).getPropertyValue('width'))
  //     var theContainer = document.getElementById('theContainer')
  //     console.log(parseInt(getComputedStyle(theContainer).getPropertyValue('width')))
  //     theContainer.style.width = String(containerWidthCorrected) + "px";
  //     console.log(parseInt(getComputedStyle(theContainer).getPropertyValue('width')))
  // },
  metaInfo: {
    title: "Projects",
  },
  data: () => ({
    isActive: false,
    sideProjects: allProjects.sideProjects,
    hackathonProjects: allProjects.hackathonProjects,
    volunteerSites: allProjects.volunteerSites

  }),
  methods: {

  },
  components: { ProjectFilterNavigation }
};
</script>
