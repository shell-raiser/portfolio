<template>

    <v-navigation-drawer touchless app v-if="this.$router.history.current['path'] == '/arsenal'" color="deep-purple lighten-4"
        floating>
        <v-container style="backdrop-filter:blur(5px);">
            <!-- <p align="center"> -->
            <g-image style="max-width: 100%" 
                src="https://github-readme-stats.vercel.app/api?username=shell-raiser&show_icons=true&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&custom_title=My%20Github%20Stats&hide_rank=true" />
<br>
            <g-image style="max-width: 100%"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=default&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&exclude_repo=Qiskit-Developer-Certification-Notes-and-Code,REVA-University-CSE-Code,codefury5.0" />
            <!-- </p> -->
        </v-container>
    </v-navigation-drawer>
</template>
    