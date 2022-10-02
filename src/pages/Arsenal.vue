<template>
  <Layout>
    <section>
      <h1 class="rounded text-center">Arsenal</h1>
      <transition name="slide-fade" appear>
        <v-container class="text-center">
          <v-row>
            <v-col cols="auto">
              <!-- <p align="center"> -->

              <img
                style="max-width: 100%"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=compact&title_color=0f0128&text_color=0e0126&hide_border&disable_animations=true&count_private=true"
              />
              <!-- </p> -->
            </v-col>
            <v-col>
              <v-lazy
                v-model="isActive"
                :options="{
                  threshold: 0.5,
                }"
                min-height="100"
              >
                <v-card class="white" rounded flat>
                  <v-card-title
                    class="toolsCardsImageCont deep-purple lighten-4"
                    >Languages
                  </v-card-title>

                  <div class="toolsCardsImageCont">
                    <img
                      class="toolsLogos"
                      :src="item"
                      v-for="(item, i) in languages"
                      :key="i"
                    />

                    <!-- <img src=
                                        class="toolsLogos" />

                                    <img src=""
                                        class="toolsLogos" />

                                    <img src=
                                        class="toolsLogos" />

                                    <img src=
                                        class="toolsLogos" />

                                    <img src=
                                        class="toolsLogos" />

                                    <img src=
                                         /> -->
                                    </div>
                                </v-card>
                            </v-lazy>
                            <br>
                            <v-lazy :options="{
                                threshold: .5
                            }" min-height="100">
                                <v-card class="white" rounded flat>
                                    <v-card-title class="toolsCardsImageCont red lighten-4">Front End Frameworks
                                    </v-card-title>

                                    <div class="toolsCardsImageCont">

                                        <img class="toolsLogos" :src="item" v-for="(item, i) in frontend" :key="i" />

                                    </div>
                                </v-card>
                            </v-lazy>
                            <br>
                            <v-lazy :options="{
                                threshold: .5
                            }" min-height="100">
                                <v-card class="white" rounded flat>
                                    <v-card-title class="toolsCardsImageCont teal lighten-4">Back End Frameworks
                                    </v-card-title>


                                    <div class="toolsCardsImageCont">

                                        <img class="toolsLogos" :src="item" v-for="(item, i) in backend" :key="i" />

                                    </div>
                                </v-card>
                            </v-lazy>
                            <br>
                            <v-lazy :options="{
                                threshold: .5
                            }" min-height="100">
                                <v-card class="white" rounded flat>
                                    <v-card-title class="toolsCardsImageCont purple lighten-4">Design</v-card-title>


                                    <div class="toolsCardsImageCont">

                                        <img class="toolsLogos" :src="item" v-for="(item, i) in design" :key="i" />
                                    </div>
                                </v-card>
                            </v-lazy>
                            <br>
                            <v-lazy :options="{
                                threshold: .5
                            }" min-height="100">
                                <v-card class="white" rounded flat>
                                    <v-card-title class="toolsCardsImageCont indigo lighten-4">Audio</v-card-title>


                  <div class="toolsCardsImageCont">
                    <img
                      class="toolsLogos"
                      :src="item"
                      v-for="(item, i) in audio"
                      :key="i"
                    />
                  </div>
                </v-card>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </transition>
    </section>
  </Layout>
</template>
<style scoped>
h1 {
  /* width: fit-content; */
  font-size: xxx-large;
  color: #ffffff;
  /* background-image: -webkit-linear-gradient(90deg, #1d4ba5, #105c4a); */
  /* background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  background-color: rgba(18, 0, 48, 0.61);
  animation: 10s linear 0s infinite normal none running hue;
}

.toolsLogos {
  pointer-events: none;
  user-select: none;
  max-height: 100px;
  max-width: 100%;
  min-width: 100px;
  padding: 5px;
}

.toolsCardsImageCont {
  justify-content: center;
}

section {
  /* padding-bottom: 60px; */
  min-height: 100%;
  /* overflow-x: hidden;
    overflow-y: hidden; */
  /* background: linear-gradient(-45deg, #09254f, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite; */
  background: url("https://images.pexels.com/photos/3527795/pexels-photo-3527795.jpeg");
  /* https://www.pexels.com/photo/photo-of-abstract-painting-3527795/ */
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */
  background-attachment: fixed;
  background-size: cover;
}
</style>
<script>
export default {
  metaInfo() {
    return this.$seo({
      title: "Tools",
      description: "My description",
      keywords: "one,two",
      openGraph: {
        title: "Shailesh K S, Tools",
        type: "website",
      },
      twitter: {
        title: "Shailesh K S, Tools",
        type: "summary",
      },
      link: [],   // any links
      script: []  // any scripts
    });
  },
  data: () => ({
    languages: [
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
    , "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg", "https://upload.wikimedia.org/wikipedia/commons/1/1f/Z_Shell_Logo_Color_Horizontal.svg", "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"],

    frontend: [
      "https://vuejs.org/images/logo.png",
      "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg",
      "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
      "https://bulma.io/assets/Bulma%20Icon.svg",
    ],

    backend: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qiskit-Logo.svg/800px-Qiskit-Logo.svg.png",
      "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
      "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png",
      "https://gridsome.org/logos/logo-normal.svg",
    ],

    design: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Blender.svg",
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Canva_Logo.png/1920px-Canva_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      "https://inkscape.org/gallery/item/10252/Inkscape-flat-logo-2color.svg",
      "https://www.gimp.org/images/frontpage/wilber-big.png",
    ],

    audio: [
      "https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png",
      "https://www.tracktion.com/sites/default/files/logo-tracktion-black_3x.png",
    ],
  }),
};
</script>