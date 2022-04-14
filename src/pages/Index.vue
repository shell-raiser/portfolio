<template >
  <Layout >
    <div >
   <About id="About" />
    <v-divider></v-divider>
    <Contact id="Contact" />
    <v-divider></v-divider>
    <Projects id="Projects"/>
    <v-divider></v-divider>
    <Arsenal id="Arsenal"/>
    </div>
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
    Arsenal
},
  data: () => ({
    overlay: false,
  }),
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}



</style>
