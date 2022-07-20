<template>
    <section class="bg3">
        <v-container>
                <v-col style="width:80%">
                    <!-- <v-container> -->


                        <v-row>
                            <!-- <v-col sm="6" class="d-none d-sm-block">
                    
                </v-col> -->
                            <v-col sm="6">

                                <!-- <v-list-item href="https://github.com/shell-raiser/Dosha-quiz-app" target="_blank"
                                rel="noopener noreferrer">https://github.com/shell-raiser/Dosha-quiz-app
                            </v-list-item>
                            <v-list-item href="https://github.com/shell-raiser/Dark-Green-Space" target="_blank"
                                rel="noopener noreferrer">https://github.com/shell-raiser/Dark-Green-Space
                            </v-list-item> -->




                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/171996793-c0e2e157-b6ea-4984-b861-184b0568a011.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                    A 2D Platformer shooter game, with NCS Dubstep BGM</p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://shellraiser.itch.io/dark" target="_blank"
                                                rel="noopener noreferrer">
                                                <v-icon>mdi-play</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Dark-Green-Space
                                            </h3>
                                            <p>2D Platformer game</p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/Dark-Green-Space"
                                                target="_blank" rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                            <v-btn href="https://shellraiser.itch.io/dark"
                                                target="_blank" rel="noopener noreferrer">

                                                itch.io

                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <!-- <v-divider></v-divider> -->
                            <v-col>
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/176103044-fe939cd9-ce4f-492d-8f50-22a795c7adb9.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                    An online quiz, which determines your dosha and recommends diet on a
                                                    daily basis</p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://shell-raiser.github.io/Dosha-quiz-app/" target="_blank"
                                                rel="noopener noreferrer">
                                                <v-icon>mdi-link</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Dosha Quiz
                                            </h3>
                                            <p>An online quiz, which determines your dosha </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/Dosha-quiz-app" target="_blank"
                                                rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>


                        </v-row>
                        <v-row>
                            <v-col>
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/178935897-f945338a-ceb4-48d3-8c67-889eb7e628b0.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                    A Web App and API for OCRing and extracting key points from FIR copies</p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://parsifyapp-q3vtbj6djq-el.a.run.app/" target="_blank"
                                                style="z-index:0;"
                                                rel="noopener noreferrer">
                                                <v-icon>mdi-google-cloud</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Parsify
                                            </h3>
                                            <p>A Hackathon Project </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/Parsify-WebApp" target="_blank"
                                                rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>

                        </v-row>



                    <!-- </v-container> -->
                </v-col>
                <v-col style="display:block; position: fixed;top: 0px; right:0; width:20%; padding:0;">
                    <h1 class="ProjectsHead"
                        style="height:100vh;   display: flex;   justify-content: center;  align-items: center;">Projects
                    </h1>
                </v-col>
        </v-container>




    </section>
</template>