<template>
  <!-- <v-container style="max-height: 44em; overflow: scroll;scrollbar-color: red;"> -->
  <v-container>
    <h2 v-if="$store.state.chipSelected.length == 0" class="rounded" id="hackathons">Hackathon Projects</h2>
    <div style="height:10px"> </div>
    <v-row>
      <template v-for="project in hackathonProjects">
        <ProjectCard :project=project />
      </template>

    </v-row>
    <div style="height:30px"> </div>
    <h2 v-if="$store.state.chipSelected.length == 0" class="rounded" id="sideProjects">Other Projects</h2>
    <div style="height:10px"> </div>
    <v-row>
      <template v-for="project in sideProjects">
        <ProjectCard :project=project />
      </template>
    </v-row>
    <div style="height:30px"> </div>
    <h2 v-if="$store.state.chipSelected.length == 0" class="rounded" id="volunteer">Volunteering</h2>
    <div style="height:10px"> </div>
    <v-row>
      <template v-for="project in volunteerSites">
        <ProjectCard :project=project />
      </template>
    </v-row>
    <!-- </v-col> -->

    <!-- </v-container> -->
    <!-- </v-col> -->
  </v-container>
</template>
<style scoped>
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

/* section { */

/* min-height: 100vh; */

/* width: 100%; */
/* display: block;  */
/* position: absolute; */
/* width: 100%;
    height: 100%; */
/* background-size:100% 100%; */
</style>
<script>

import ProjectFilterNavigation from '../components/projectFilterNavigation.vue';
import allProjects from '../data/projectData.json'
import ProjectCard from '../components/projectCard.vue';

export default {

  metaInfo: {
    title: "Projects",
  },
  data: () => ({
    drawer: false,
    sideProjects: allProjects.sideProjects,
    hackathonProjects: allProjects.hackathonProjects,
    volunteerSites: allProjects.volunteerSites,
  }),
  // props: [
  //   hackathonProjects
  // ],
  created() {
    // props are exposed on `this`
    console.log(this.foo)
  },
  methods: {
    contains(arrAttributes) {
      arrAttributes.some(element => {
        return this.$store.state.chipSelected.includes(element);
      })
    }
  },
  components: { ProjectFilterNavigation, ProjectCard }
};
</script>
