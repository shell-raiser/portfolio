<template>
    <Layout>

        <section class="bg3">
            <transition name="slide-fade" appear>
                <v-container>
                    <v-col style="width:80%">
                        <v-row>
                            <v-col sm="6">
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
                                                href="https://shellraiser.itch.io/dark" style="z-index:0;"
                                                target="_blank" rel="noopener noreferrer">
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
                                            <v-btn href="https://shellraiser.itch.io/dark" target="_blank"
                                                rel="noopener noreferrer">

                                                itch.io

                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/176103044-fe939cd9-ce4f-492d-8f50-22a795c7adb9.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        An online quiz, which determines your dosha and recommends diet
                                                        on a
                                                        daily basis</p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://shell-raiser.github.io/Dosha-quiz-app/" target="_blank"
                                                rel="noopener noreferrer" style="z-index:0;">
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
                            <v-col sm="6" style="display:flex; justify-content: center; align-items: center;">

                                <!-- <img src="https://github-profile-trophy.vercel.app/?username=shell-raiser&column=3"
                            alt="shell-raiser" /> -->

                                <!-- <v-card class="mx-auto" color="grey lighten-4" width="350"> -->
                                <p class="white font-weight-light deep-purple--text mb-2 rounded"
                                    style="padding-bottom:5px;padding-left: 5px">
                                    <img width="100%"
                                        src="https://github-readme-streak-stats.herokuapp.com?user=shell-raiser&theme=buefy&hide_border=true"
                                        alt="shell-raiser" />
                                    My GitHub Stats
                                    <v-btn color="deep-purple" class="white--text"
                                        href="https://github.com/shell-raiser" target="_blank" style="z-index:0;"
                                        rel="noopener noreferrer">
                                        <v-icon>mdi-github</v-icon>
                                    </v-btn>


                                </p>
                                <!-- <v-card-text class="pt-6" style="position: relative;"> -->



                                <!-- </v-card-text> -->
                                <!-- </v-card> -->



                            </v-col>
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/178935897-f945338a-ceb4-48d3-8c67-889eb7e628b0.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        A Web App and API for OCRing and extracting key points from FIR
                                                        copies
                                                    </p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://parsifyapp-q3vtbj6djq-el.a.run.app/" target="_blank"
                                                style="z-index:0;" rel="noopener noreferrer">
                                                <v-icon>mdi-google-cloud</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Parsify
                                            </h3>
                                            <p>A Hackathon Project made for <a
                                                    href="https://unstop.com/o/UA3b5Qn?lb=4Y9Hkj2">Codefiesta</a>
                                            <ul>
                                                <li>Finalist</li>
                                            </ul>
                                            </p>
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
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/183272769-7576d48c-8af4-470c-bfa7-b63adbfff33d.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        A Cross-platform Flutter app, made to connect NGOs and
                                                        Volunteers
                                                        protecting the environment

                                                    </p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://github.com/shell-raiser/saviour_kuHacks22" target="_blank"
                                                style="z-index:0;" rel="noopener noreferrer">
                                                <v-icon>mdi-github</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Saviour
                                            </h3>
                                            <p>
                                                A Hackathon Project for
                                                <a href="https://ku-hackfest-2022.devfolio.co/"> KU HackFest 2022</a>
                                            <ul>
                                                <li>Won Cloud Track</li>
                                                <li>"Dream Big and Create More Cheers with AB-InBev" Winner</li>
                                            </ul>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/saviour_kuHacks22"
                                                target="_blank" rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                            <v-btn href="https://devfolio.co/projects/saviour-83e6" target="_blank"
                                                rel="noopener noreferrer">
                                                Devfolio
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/181779591-f5698164-7106-451d-93bf-59175284db0c.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        Consists of
                                                    <ul>
                                                        <li> Request Header Parsing</li>
                                                        <li> URL Shortener</li>
                                                        <li> File Meta-Data Microservice</li>
                                                        <li> Timestamp Microservice</li>

                                                    </ul>

                                                    </p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://fcc-microservices-assignments.herokuapp.com/"
                                                target="_blank" style="z-index:0;" rel="noopener noreferrer">
                                                <v-icon>mdi-google-cloud</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                FCC Microservices
                                            </h3>
                                            <p>A Compilation of APIs made for the FCC projects </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/FCC-Microservices"
                                                target="_blank" rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/183929986-483e206d-e15b-49cb-b872-391015398ab5.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        A decentralised website/app to report and track environmental
                                                        damages
                                                        caused by industries to concerned authorithies and NGOs


                                                    </p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="https://black-hill-6592.on.fleek.co/" target="_blank"
                                                style="z-index:0;" rel="noopener noreferrer">
                                                <v-icon>mdi-link</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Greensaver
                                            </h3>
                                            <p>
                                                A Hackathon Project for <a href="https://hackoheist.devfolio.co/">HACK O
                                                    HEIST</a>
                                            <ul>
                                                <li>Top 15 Projects</li>
                                            </ul>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/helpfiy" target="_blank"
                                                rel="noopener noreferrer">
                                                <v-icon> mdi-github</v-icon>
                                            </v-btn>
                                            <v-btn href="https://devfolio.co/projects/greensavers-5b31" target="_blank"
                                                rel="noopener noreferrer">
                                                Devfolio
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-hover>
                            </v-col>
                            <v-col sm="6">
                                <v-hover v-slot="{ hover }">
                                    <v-card class="mx-auto" color="grey lighten-4" width="350">
                                        <v-img :aspect-ratio="16 / 9"
                                            src="https://user-images.githubusercontent.com/78999739/184808507-fda6894a-5425-4d52-902d-471783e15f76.png">
                                            <v-expand-transition>
                                                <div v-if="hover"
                                                    class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
                                                    style="height: 100%;">
                                                    <p class="projectCardHoverText">
                                                        A Website connecting Startups, Investors, Mentors and wannabe
                                                        Entrepreneurs


                                                    </p>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                        <v-card-text class="pt-6" style="position: relative;">
                                            <v-btn absolute color="teal" class="white--text" fab large right top
                                                href="http://52.54.137.237:3000/" target="_blank" style="z-index:0;"
                                                rel="noopener noreferrer">
                                                <v-icon>mdi-aws</v-icon>
                                            </v-btn>

                                            <h3 class="text-h4 font-weight-light deep-purple--text mb-2">
                                                Avvio
                                            </h3>
                                            <p>
                                                A Hackathon Project for
                                                <a href="https://unstop.com/o/FAnGkDV?lb=4Y9Hkj2"> Codefury 5.0</a>
                                            <ul>
                                                <li>Won 1st place</li>
                                            </ul>
                                            </p>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn href="https://github.com/shell-raiser/codefury5.0" target="_blank"
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
                    <v-col class="d-none d-sm-block"
                        style="display:block; position: fixed;top: 0px; right:0; width:20%; padding:0;">
                        <h1 class="ProjectsHead"
                            style="height:100vh;   display: flex;   justify-content: center;  align-items: center;">
                            Projects
                        </h1>
                    </v-col>
                    <v-col class="d-sm-none"
                        style="display:block; position: fixed;top: 0px; right:0; width:20%; padding:0;">
                        <h1 class="ProjectsHead"
                            style="height:100vh; width:100%; display:flex; justify-content: center; align-items: center;
                     writing-mode: vertical-lr; text-orientation: upright; background-color: rgba(255, 255, 255, 0.4);">
                            Projects
                        </h1>
                    </v-col>
                </v-container>
            </transition>
        </section>
    </Layout>
</template>
<style>
.projectCardHoverText {
    opacity: 1;
    padding: 10px;
    text-align: center;
}

.ProjectsHead {
    font-size: xxx-large;
    color: #2B2F57;
    background-color: rgba(255, 255, 255, 0.3);
    /* position: relative; */
    /* left: 100%;   */
    /* float: right; */
    text-align: left;
    /* z-index: 1; */
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}

.bg3 {
    min-height: 100%;
    /* height: 100%; */
    width: 100%;
    /* margin: 0; */
    /* z-index: 10; */
    /* background: linear-gradient(90deg, #09254f, #0b4b3d); */
    /* background-size: 100% 100%; */
    /* animation: gradient 10s ease infinite; */
    /* background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg'); */
    /* background-clip:content-box;   */
    background: lightblue url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg");
    /* display: block;  */
    /* position: absolute; */
    background-attachment: fixed;
    /* width: 100%;
    height: 100%; */
    /* background-size:100% 100%; */
    background-size: cover;

}

.v-card.on-hover.theme--dark {
    background-color: rgba(#fff, 0.8);
}

.v-card__text {
    color: #000;
}
</style>