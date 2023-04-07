<template>
    <v-container class="text-center">
        <h1 class="rounded text-center">Arsenal</h1>
        <br>
        <ArsenalLanguageStats class="d-sm-none" />
        <br>
        <v-card class="toolCard" rounded flat>
            <v-card-title class="toolsCardsImageCont deep-purple lighten-4">Languages
            </v-card-title>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
                <div class="toolsCardsImageCont">
                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in languages" :key="i" />
                </div>
            </v-lazy>
        </v-card>
        <br>

        <v-card class="toolCard" rounded flat>
            <v-card-title class="toolsCardsImageCont red lighten-4">Front End Frameworks</v-card-title>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
                <div class="toolsCardsImageCont">

                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in frontend" :key="i" />
                </div>
            </v-lazy>
        </v-card>
        <br>

        <v-card class="toolCard" rounded flat>
            <v-card-title class="toolsCardsImageCont teal lighten-4">Back End Frameworks </v-card-title>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
                <div class="toolsCardsImageCont">

                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in backend" :key="i" />
                </div>
            </v-lazy>
        </v-card>
        <br>

        <v-card class="toolCard" rounded flat>
            <v-card-title class="toolsCardsImageCont purple lighten-4">Design</v-card-title>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
                <div class="toolsCardsImageCont">

                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in design" :key="i" />
                </div>
            </v-lazy>
        </v-card>
        <br>

        <v-card class="toolCard" rounded flat>
            <v-card-title class="toolsCardsImageCont indigo lighten-4">Audio</v-card-title>
            <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">
                <div class="toolsCardsImageCont">
                    <g-image class="toolsLogos" :src="item" v-for="(item, i) in audio" :key="i" />
                </div>
            </v-lazy>
        </v-card>
    </v-container>
</template>
<style scoped>
h1 {
    font-size: xxx-large;
    color: #ffffff;
    backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
    background-color: rgba(18, 0, 48, 0.6);
}

.toolCard {
    background-color: rgba(255, 255, 255, 0.416);
    backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
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

/* section { */
/* padding-bottom: 60px; */
/* min-height: 100%; */
/* overflow-x: hidden;
    overflow-y: hidden; */
/* background: linear-gradient(-45deg, #09254f, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite; */
/* https://www.pexels.com/photo/photo-of-abstract-painting-3527795/ */
/* filter: blur(8px); */
/* -webkit-filter: blur(8px); */

/* } */
</style>
<script>
import tools from '~/data/tools.json'
import ArsenalLanguageStats from '../components/arsenalLanguageStats.vue';
export default {
    // metaInfo() {
    //     return this.$seo({
    //         title: "Tools",
    //         description: "A collection of all the tools I've ever used, and know my way around getting things done with them",
    //         keywords: "one,two",
    //         openGraph: {
    //             title: "Shailesh K S, Tools",
    //             type: "website",
    //         },
    //         twitter: {
    //             title: "Shailesh K S, Tools",
    //             type: "summary",
    //         },
    //         link: [],
    //         script: [] // any scripts
    //     });
    // },
    data: () => ({
        languages: tools.languages,
        frontend: tools.frontend,
        backend: tools.backend,
        design: tools.design,
        audio: tools.audio,
        isActive: false,
    }),
    components: { ArsenalLanguageStats }
};
</script>