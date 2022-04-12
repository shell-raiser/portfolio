<template>
  <Layout>
    <About />
    <v-divider></v-divider>
    <Contact />
    <v-divider></v-divider>
    <Projects />
    <v-divider></v-divider>
    <test />
  </Layout>
</template>

<script>
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";
import test from "@/components/test.vue";
import 'animate.css';
export default {
  metaInfo: {
    title: "Shailesh K S",
  },
  components: {
    About,
    Contact,
    Projects,
    test,
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
