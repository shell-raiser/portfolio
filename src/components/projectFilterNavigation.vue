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
        
        <v-chip-group column multiple>
            <v-chip active-class="deep-purple--text">
                Python
            </v-chip>
            <v-chip active-class="deep-purple--text">
                Javascript
            </v-chip>
            <v-chip active-class="deep-purple--text">
                Java
            </v-chip>
            <v-chip active-class="deep-purple--text">
                C++
            </v-chip>
            <v-chip active-class="deep-purple--text">
                SQL
            </v-chip>
            <v-chip active-class="deep-purple--text">
                Qiskit
            </v-chip>
        </v-chip-group>



    </v-navigation-drawer>
</template>