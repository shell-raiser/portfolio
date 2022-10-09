<template>
    <v-navigation-drawer app fixed v-if="this.$router.history.current['path'] == '/projects'" right>
        <h1>Projects and Experience</h1>

        <v-divider></v-divider>


        <a href="#hackathons">Hackathon Projects</a>
        <v-divider></v-divider>
        <a href="#sideProjects">Side Projects</a>
        <v-divider></v-divider>
        <a href="#volunteer">Volunteered Sites</a>
        <v-divider></v-divider>

        <v-chip-group column multiple active-class="deep-purple--text" v-model="chipSelected" >
            <v-chip>
                Python
            </v-chip>
            <v-chip>
                Javascript
            </v-chip>
            <v-chip>
                Java
            </v-chip>
            <v-chip>
                C++
            </v-chip>
            <v-chip>
                SQL
            </v-chip>
            <v-chip>
                Qiskit
            </v-chip>
        </v-chip-group>



    </v-navigation-drawer>
</template>
<script>
export default {
    data() {
        return {
            chipSelected: []
        }
    },
    methods: {

    },
}
</script>