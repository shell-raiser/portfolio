<template>
    <Layout>
        <section class="bg4 ">
                <h1 class="ArsenalHead rounded text-center">Arsenal</h1>
            <transition name="slide-fade" appear>
                <v-container class="text-center">
                    <v-row>
                        <v-col cols="auto">
                            <p align="center">
                                <img style="max-width:100%;"
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=compact&title_color=0f0128&text_color=0e0126&hide_border&disable_animations=true&count_private=true" />
                            </p>
                        </v-col>
                        <v-col>
                            <v-card class="white" rounded flat>
                                <!-- <v-list> -->
                                <!-- <v-list-item-content> -->
                                <v-card-title class="toolsCardsImageCont deep-purple lighten-4">Languages</v-card-title>

                                <div class="toolsCardsImageCont ">
                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
                                        class="toolsLogos" />

                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                                        class="toolsLogos" />
                                    <!-- </v-list-item-content> -->
                                    <!-- </v-card> -->

                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
                                        class="toolsLogos" />

                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png"
                                        class="toolsLogos" />

                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
                                        class="toolsLogos" />

                                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png"
                                        class="toolsLogos" />
                                </div>
                            </v-card>
                            <br>
                            <v-card class="white" rounded flat>
                                <v-card-title class="toolsCardsImageCont red lighten-4">Front End Frameworks
                                </v-card-title>
                                <div class="toolsCardsImageCont">

                                    <img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg"
                                        class="toolsLogos" />

                                    <svg viewBox="0 10 127 110" width="110" class="toolsLogos">
                                        <path fill="#42b883"
                                            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z">
                                        </path>
                                        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z">
                                        </path>
                                    </svg>
                                </div>
                            </v-card>
                            <br>
                            <v-card class="white" rounded flat>
                                <v-card-title class="toolsCardsImageCont teal lighten-4">Back End Frameworks
                                </v-card-title>
                                <div class="toolsCardsImageCont">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qiskit-Logo.svg/800px-Qiskit-Logo.svg.png"
                                        class="toolsLogos" />
                                    <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
                                        class="toolsLogos" />

                                    <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg"
                                        alt="mongodb" class="toolsLogos" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                                        alt="expressjs" class="toolsLogos" />
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png"
                                        alt="mysql" class="toolsLogos" />
                                </div>
                            </v-card>
                            <br>
                            <v-card class="white" rounded flat>
                                <v-card-title class="toolsCardsImageCont purple lighten-4">Design</v-card-title>
                                <div class="toolsCardsImageCont">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Blender.svg"
                                        class="toolsLogos" />

                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Canva_Logo.png/1920px-Canva_Logo.png"
                                        class="toolsLogos" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                                        class="toolsLogos" />
                                    <img src="https://inkscape.org/gallery/item/10252/Inkscape-flat-logo-2color.svg"
                                        alt="inkscape" class="toolsLogos" />
                                </div>
                            </v-card>
                            <br>
                            <v-card class="white" rounded flat>
                                <v-card-title class="toolsCardsImageCont indigo lighten-4">Audio</v-card-title>
                                <div class="toolsCardsImageCont">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png"
                                        alt="audacity" class="toolsLogos" />
                                    <img src="https://www.tracktion.com/sites/default/files/logo-tracktion-black_3x.png"
                                        alt="tracktion" class="toolsLogos" />
                                </div>
                            </v-card>

                        </v-col>
                    </v-row>
                </v-container>
            </transition>
        </section>
    </Layout>
</template>
