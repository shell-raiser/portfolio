<template>
  <!-- <Layout> -->
    <section>
      <Projects />
    </section>
  <!-- </Layout> -->
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
  /* filter: blur(0px) */
}

.cardHoverBlurBg {
  justify-content: center;
  align-items: center;
  display: flex;
  backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
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
  backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
  /* -webkit-text-fill-color: #fff; */
  /* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(35, 0, 99, 0.776);
  text-decoration-line: underline;
  text-decoration-color: #fff; */
  /* z-index: 1; */
}

.projectCard {
  background-color: #cdd3f9dd;
  backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
}



section {
  background: lightblue url("/assets/projectsBg.gif");
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
import Projects from '../components/Projects.vue';
import allProjects from '../data/projectData.json'

export default {

  metaInfo: {
    title: "Projects",
  },
  data: () => ({
    isActive: false,
    drawer: false,
    sideProjects: allProjects.sideProjects,
    hackathonProjects: allProjects.hackathonProjects,
    volunteerSites: allProjects.volunteerSites,
  }),
  methods: {
    contains(arrAttributes) {
      arrAttributes.some(element => {
        return this.$store.state.chipSelected.includes(element);
      })
    }
  },
  components: { ProjectFilterNavigation, Projects }
};
</script>
