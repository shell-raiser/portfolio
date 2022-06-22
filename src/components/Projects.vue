<template>
    <section class="bg3">
        <v-container style="z-index:10;">

            <v-row>
                <v-col sm="6" class="d-none d-sm-block">

                </v-col>
                <v-col sm="6">
                    <h1 class="ProjectsHead"> Projects </h1>
                    <!-- <v-card shaped>
                        <v-list-item-group>
                            <v-list-item href="https://github.com/shell-raiser/Dosha-quiz-app" target="_blank"
                                rel="noopener noreferrer">https://github.com/shell-raiser/Dosha-quiz-app
                            </v-list-item>
                            <v-list-item href="https://github.com/shell-raiser/Dark-Green-Space" target="_blank"
                                rel="noopener noreferrer">https://github.com/shell-raiser/Dark-Green-Space
                            </v-list-item>
                        </v-list-item-group>
                    </v-card> -->



                    <v-hover v-slot="{ hover }">
                        <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                            <v-img :aspect-ratio="16 / 9"
                                src="https://user-images.githubusercontent.com/78999739/171996793-c0e2e157-b6ea-4984-b861-184b0568a011.png">
                                <v-expand-transition>
                                    <div v-if="hover"
                                        class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                        style="height: 100%;">
                                        A 2D Platformer shooter game, with NCS Dubstep BGM
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <v-card-text class="pt-6" style="position: relative;">
                                <v-btn absolute color="teal" class="white--text" fab large right top>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>

                                <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                    Dark-Green-Space
                                </h3>
                                <p>2D Platformer game</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn>
                                    <v-icon> mdi-github</v-icon>
                                </v-btn>
                                <v-btn>
                                    
                                    <font-awesome :icon="['fab', 'itch-io']"/>
                                    <font-awesome-icon icon="fa-brands fa-itch-io" />

                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-col>

            </v-row>



        </v-container>
    </section>
</template>