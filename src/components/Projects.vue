<template>
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
  </v-container>
</template>
<style scoped>
h2 {
  font-size: xxx-large;
  color: rgb(36, 0, 95);
  width: 100%;
  text-align: center;
  background-color: #d1c4e98e;
  backdrop-filter: blur(5px);
}
</style>
<script>
import ProjectFilterNavigation from '../components/projectFilterNavigation.vue';
import allProjects from '../data/projectData.json'
import ProjectCard from '../components/projectCard.vue';

export default {

  // metaInfo: {
  //   title: "Projects",
  // },
  data: () => ({
    drawer: false,
    sideProjects: allProjects.sideProjects,
    hackathonProjects: allProjects.hackathonProjects,
    volunteerSites: allProjects.volunteerSites,
  }),
  // props: [
  //   hackathonProjects
  // ],
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
