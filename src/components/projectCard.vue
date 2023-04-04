<template>
    <!-- <div>
    {{ hackathonProjects }}
    </div> -->
    <v-col v-if="(project.attributes.some(element => {
        return $store.state.chipSelected.includes(element);
    })) || ($store.state.chipSelected.length == 0)" style="max-width: 100%" sm="6">
        <v-lazy v-model="isActive" :options="{ threshold: 0.5 }">

            <v-hover v-slot="{ hover }">
                <v-card class="mx-auto projectCard" width="350">
                    <v-img :aspect-ratio="16 / 9" :src="project.img">
                        <v-expand-transition>
                            <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                                style="height: 100%">
                                <div class="cardHoverBlurBg">
                                    <p class="projectCardHoverText" v-html="project.hoverText"></p>
                                </div>
                            </div>
                        </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-6" style="position: relative">
                        <v-btn absolute color="teal" class="white--text" fab large right top :href="project.heroLink"
                            target="_blank" style="z-index: 0" rel="noopener noreferrer">
                            <v-icon>{{ project.heroIcon }}</v-icon>
                        </v-btn>

                        <h3 class="projCard text-h4">
                            {{ project.title }}
                        </h3>
                        <p v-html="project.desc"></p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn v-for="(action, i) in project.actions" :key="i" :href="action.link" target="_blank"
                            rel="noopener noreferrer">
                            <v-icon>{{ action.icon }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-hover>
        </v-lazy>
    </v-col>
</template>
<script>
export default {
    props: ['project'],
    data: () => ({
        isActive: false,
    })
}
</script>
<style>
.projCard{
    color:  #673AB7;
}
.projectCardHoverText {
    /* top: 8px; */
    /* height: 100%; */
    width: 100%;
    vertical-align: middle;
    position: relative;
    opacity: 1;
    padding: 10px;
    text-align: center;
    /* filter: blur(0px) */
}

.cardHoverBlurBg {
    justify-content: center;
    align-items: center;
    display: flex;
    backdrop-filter: blur(5px);
    background-color: rgba(1, 99, 99, 0.55);
    height: 100%;
    width: 100%;

}

.v-card--reveal {
    /* background-color: teal; */

    align-items: center;
    bottom: 0;
    justify-content: center;
    /* opacity: 0; */
    position: absolute;
    width: 100%;
}

.projectCard {
    background-color: #cdd3f9dd;
    backdrop-filter: blur(5px);
}

/* } */

.v-card.on-hover.theme--dark {
    background-color: rgba(#fff, 0.8);
}

.v-card__text {
    color: #000;
}
</style>