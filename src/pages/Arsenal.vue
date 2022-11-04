<template>
    <Layout>
        <section>
            <h1 class="rounded text-center">Arsenal</h1>
            <transition name="slide-fade" appear>
                <v-container class="text-center">
                    <v-row>
                        <v-col cols="auto">
                            <!-- <p align="center"> -->

                            <g-image style="max-width: 100%"
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=compact&title_color=0f0128&text_color=0e0126&hide_border&disable_animations=true&count_private=true" />
                            <!-- </p> -->
                        </v-col>
                        <v-col>

                            <v-card class="toolCard" rounded flat>
                                <v-card-title class="toolsCardsImageCont deep-purple lighten-4">Languages
                                </v-card-title>

                                <div class="toolsCardsImageCont">
                                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in languages" :key="i" />
                                </div>
                            </v-card>
                            <br>

                            <v-card class="toolCard" rounded flat>
                                <v-card-title class="toolsCardsImageCont red lighten-4">Front End Frameworks
                                </v-card-title>

                                <div class="toolsCardsImageCont">

                                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in frontend" :key="i" />

                                </div>
                            </v-card>
                            <br>

                            <v-card class="toolCard" rounded flat>
                                <v-card-title class="toolsCardsImageCont teal lighten-4">Back End Frameworks
                                </v-card-title>


                                <div class="toolsCardsImageCont">

                                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in backend" :key="i" />

                                </div>
                            </v-card>
                            <br>

                            <v-card class="toolCard" rounded flat>
                                <v-card-title class="toolsCardsImageCont purple lighten-4">Design</v-card-title>


                                <div class="toolsCardsImageCont">

                                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in design" :key="i" />
                                </div>
                            </v-card>
                            <br>

                            <v-card class="toolCard" rounded flat>
                                <v-card-title class="toolsCardsImageCont indigo lighten-4">Audio</v-card-title>


                                <div class="toolsCardsImageCont">
                                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in audio" :key="i" />
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </transition>
        </section>
    </Layout>
</template>
<style scoped>
h1 {

    font-size: xxx-large;
    color: #ffffff;
    backdrop-filter: blur(15px);
    background-color: rgba(18, 0, 48, 0.61);
}

.toolCard {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
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
    background: url("../assets/toolsBg.webp");
    /* https://www.pexels.com/photo/photo-of-abstract-painting-3527795/ */
    /* filter: blur(8px); */
    /* -webkit-filter: blur(8px); */
    background-attachment: fixed;
    background-size: cover;
}
</style>
<script>
import tools from '~/data/tools.json'
export default {
    metaInfo() {
        return this.$seo({
            title: "Tools",
            description: "A collection of all the tools I've ever used, and know my way around getting things done with them",
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
        languages: tools.languages,

        frontend: tools.frontend,

        backend: tools.backend,

        design: tools.design,

        audio: tools.audio,

    }),
};
</script>