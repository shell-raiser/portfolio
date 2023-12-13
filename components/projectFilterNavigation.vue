<template>
    <v-container class="rounded filterContainer">
        <v-row>
            <v-col>
                <h2>Projects and Experience</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <h3>Filter</h3>
                <v-chip-group column multiple color="deep-purple lighten-4" v-model="userStore.chipSelected">
                    <v-chip v-for="i in allProjects" :value="i" :key="i">
                        {{ i }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>

        <!-- <v-divider></v-divider> -->
        <v-row>
            <v-col>
                <v-list nav class="rounded" v-if="userStore.chipSelected.length == 0">
                    <h3>Go to </h3>
                    <v-list-item class="white rounded" @click="scrollToElement('hackathons')">
                        Hackathon Projects
                    </v-list-item>
                    <v-list-item class="white rounded" @click="scrollToElement('sideProjects')">
                        Other Projects
                    </v-list-item>
                    <v-list-item class="white rounded" @click="scrollToElement('volunteer')">
                        Volunteering
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.filterContainer {
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.388)
}
</style>

<script>

import { useUserStore } from '@/store/index.js';
// var userStore = useUserStore();

import allTheProjects from '../data/projectData.json'
var availableAttributes = [];
for (const category in allTheProjects) {
    var categoryArray = allTheProjects[category];
    for (let i = 0; i < categoryArray.length; i++) {
        var attrrArray = categoryArray[i]["attributes"]
        for (var attr in attrrArray) {
            // console.log(attrrArray[attr])
            availableAttributes.push(attrrArray[attr])
        }
    }
}
availableAttributes = availableAttributes.filter((item,
    index) => availableAttributes.indexOf(item) === index);
// console.log(availableAttributes)
export default {
    setup() {
        return {
            userStore: useUserStore(),
        };
    },
    mounted: () => {
        // console.log(chipSelected)
    },
    data: () => ({
        chipSelected: [],
        allProjects: availableAttributes,
    }),
    methods: {
        // updateState() {
        //     this.$store.commit('updateSelected', this.chipSelected)
        //     // this.$store.state.chipSelected = this.chipSelected
        //     // console.log(this.$store.state.chipSelected)
        // },
        // getAvailableAttributes() {
        //     var allAttributes = [];
        //     for (const category in allProjects) {
        //         for (let i = 0; i < category.length; i++) {
        //             const project = category[i];
        //             availableAttributes.push(project[attributes])
        //         }
        //     }
        //     return allAttributes
        // },
        scrollToElement(refName) {
            const position = document.getElementById(refName).offsetTop;
            // if (process.browser) {
            window.scrollTo({ top: position, behavior: "smooth" });
            // }
            // var top = element.offsetTop;

            // window.scrollTo(0, top);
        }

    },
}
</script>