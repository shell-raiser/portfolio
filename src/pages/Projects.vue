<template>
  <Layout>
    <div>
      <ProjectFilterNavigation />
      <section>
        <transition name="slide-fade" appear>
          <v-container id="theContainer">
            <h2 class="rounded" id="hackathons">Hackathon Projects</h2>
            <v-row>
              <v-col v-for="(project, i) in hackathonProjects" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                      <v-img :aspect-ratio="16 / 9" :src="project.img">
                        <v-expand-transition>
                          <div v-if="hover" class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                            style="height: 100%">
                            <p class="projectCardHoverText" v-html="project.hoverText"></p>
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
            <h2 class="rounded" id="sideProjects">Side Projects</h2>
            <v-row>
              <v-col v-for="(project, i) in sideProjects" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                      <v-img :aspect-ratio="16 / 9" :src="project.img">
                        <v-expand-transition>
                          <div v-if="hover" class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                            style="height: 100%">
                            <p class="projectCardHoverText" v-html="project.hoverText"></p>
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
            <h2 class="rounded" id="volunteer">Volunteering</h2>
            <v-row>
              <v-col v-for="(project, i) in volunteerSites" :key="i" style="width: 100%" sm="6">
                <!-- <v-container v-for="(project, i) in projects" :key="i"> -->
                <v-lazy v-model="isActive" :options="{
                  threshold: 0.5,
                }" min-height="200">
                  <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                      <v-img :aspect-ratio="16 / 9">
                        <img width="350" fit="inside" :src="project.img" />
                        <v-expand-transition>
                          <div v-if="hover" class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                            style="height: 100%">
                            <p class="projectCardHoverText" v-html="project.hoverText"></p>
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
  opacity: 1;
  padding: 10px;
  text-align: center;
}

h2 {
  font-size: xxx-large;
  color: #2b2f57;
  background-color: rgba(255, 255, 255, 0.3);
  /* position: relative; */
  /* left: 100%;   */
  /* float: right; */
  text-align: left;
  /* z-index: 1; */
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

section {
  min-height: 100vh;

  /* width: 100%; */

  background: lightblue url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg");
  /* display: block;  */
  /* position: absolute; */
  background-attachment: fixed;
  /* width: 100%;
    height: 100%; */
  /* background-size:100% 100%; */
  background-size: cover;
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
