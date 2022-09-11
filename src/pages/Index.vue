<template >
  <Layout>
    <div style="padding:0;">
    <section class="d-none d-sm-block" id="theSection">
      <transition name="slide-fade" appear>
        <v-container id="theSectionContainer">  
          <AboutContent/>
        </v-container>
      </transition>
    </section>
    <section class="d-sm-none">
      <transition name="slide-fade" appear>
        <v-container>
          <AboutContent/>
        </v-container>
      </transition>
    </section>
    </div>
  </Layout>
</template>

<script>
import AboutContent from "../components/aboutContent.vue"
export default {
    mounted() {
        var navBar = document.getElementById("navBar");
        console.log(parseInt(getComputedStyle(navBar).getPropertyValue("height")));
        var sectionHeight = window.innerHeight - parseInt(getComputedStyle(navBar).getPropertyValue("height"));
        console.log(sectionHeight);
        document.getElementById("theSection").style.height = sectionHeight + "px";
    },
    metaInfo: {
        title: "About me",
        // script: [
        //   { src: 'https://platform.linkedin.com/badges/js/profile.js', async: true, defer: true },
        //   { src: "https://unpkg.com/@rocktimsaikia/github-card@latest?module", async: true, defer: true },
        // ],
    },
    components: { AboutContent }
}




</script>

<style scoped>
section {
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background: linear-gradient(90deg, #9575CD, #90caf9);
  background-size: 200% 100%;
  animation: gradient 10s ease infinite;

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

</style>
