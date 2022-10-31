<template>

    <v-navigation-drawer app v-if="this.$router.history.current['path'] == '/projects'" right
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg">
        <v-container style="backdrop-filter:blur(5px); height:100%;">
            <h2>Projects and Experience</h2>
            <v-divider></v-divider>

            <v-list nav class="rounded" v-if="$store.state.chipSelected.length == 0">
                <v-list-item class="white rounded" to="#hackathons" >
                    Hackathon Projects
                </v-list-item>
                <v-list-item class="white rounded" to="#sideProjects">
                    Side Projects
                </v-list-item>
                <v-list-item class="white rounded" to="#volunteer">
                    Volunteered Sites
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-chip-group column multiple color="deep-purple lighten-4" v-model="$store.state.chipSelected">
                <v-chip v-for="i in allProjects" :value="i" :key="i">
                    {{ i }}
                </v-chip>

            </v-chip-group>



        </v-container>
    </v-navigation-drawer>
</template>

<script>
import allTheProjects from '../assets/projectData.json'
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
console.log(availableAttributes)
export default {
    mounted: () => {
        // console.log(chipSelected)

    },
    data: () => ({
        chipSelected: [],
        allProjects: availableAttributes,
    }),
    methods: {
        updateState() {
            this.$store.commit('updateSelected', this.chipSelected)
            // this.$store.state.chipSelected = this.chipSelected
            // console.log(this.$store.state.chipSelected)
        },
        getAvailableAttributes() {
            var allAttributes = [];
            for (const category in allProjects) {
                for (let i = 0; i < category.length; i++) {
                    const project = category[i];
                    availableAttributes.push(project[attributes])
                }
            }
            return allAttributes
        }

    },
}
</script>