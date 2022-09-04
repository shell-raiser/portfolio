<template>
    <Layout>
        <section>
            <transition name="slide-fade" appear>
                <v-container style="height: 100%;">
                    <v-row style="height: 100%;">
                        <v-col class="rounded" sm="6" style="background:#9575cd;height:fit-content;text-align :right"
                            align-self="center">
                            <!-- <v-container> -->

                            <h1>Links</h1>
                            <!-- <v-card width="300">
                                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
                                    data-theme="dark" data-type="HORIZONTAL" data-vanity="shailesh-k-s-1b3475226"
                                    data-version="v1"><a class="badge-base__link LI-simple-link"
                                        href="https://in.linkedin.com/in/shailesh-k-s-1b3475226?trk=profile-badge">Shailesh
                                        K
                                        S</a></div>
                            </v-card>
                            <v-card width="300">
                                <github-card data-user="shell-raiser"></github-card>
                            </v-card>
                            <v-card width="300"> <iframe width="100%" height="300" scrolling="no" frameborder="no"
                                    allow="autoplay"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1479346411%3Fsecret_token%3Ds-PQ8j8pMoFRA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                                <div
                                    style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                                    <a href="https://soundcloud.com/user-185450671" title="Shell Raiser" target="_blank"
                                        style="color: #cccccc; text-decoration: none;">Shell Raiser</a> · <a
                                        href="https://soundcloud.com/user-185450671/sets/all-tarcks" title="All tarcks"
                                        target="_blank" style="color: #cccccc; text-decoration: none;">All tarcks</a>
                                </div>
                            </v-card> -->
                            <v-card min-width="300">
                                <!-- <v-card-title class="connectHead" style="text-align:right;">Contact</v-card-title> -->
                                <!-- <v-list> -->
                                <!-- <v-list-item-group> -->
                                <v-list-item two-line href="mailto: contactshellraiser@gmail.com">
                                    <v-list-item-content>
                                        <v-list-item-title>Email</v-list-item-title>
                                        <v-list-item-subtitle>contactshellraiser@gmail.com
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right> mdi-email-variant</v-icon>
                                </v-list-item>

                                <v-list-item two-line href="https://github.com/shell-raiser" target="_blank"
                                    rel="noopener noreferrer">

                                    <v-list-item-content>
                                        <v-list-item-title>Github</v-list-item-title>
                                        <v-list-item-subtitle>@shell-raiser</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right>mdi-github</v-icon>
                                </v-list-item>

                                <v-list-item two-line href="https://soundcloud.com/user-185450671" target="_blank"
                                    rel="noopener noreferrer">

                                    <v-list-item-content>
                                        <v-list-item-title>Soundcloud</v-list-item-title>
                                        <v-list-item-subtitle>soundcloud.com/user-185450671
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right>mdi-soundcloud</v-icon>
                                </v-list-item>

                                <v-list-item two-line href="https://youtube.com/channel/UCmEShK3aru1usVrGOrzGqqw"
                                    target="_blank" rel="noopener noreferrer">

                                    <v-list-item-content>
                                        <v-list-item-title>Youtube</v-list-item-title>
                                        <v-list-item-subtitle>youtube.com/channel/UCmEShK3aru1usVrGOrzGqqw
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right>mdi-youtube</v-icon>
                                </v-list-item>

                                <v-list-item two-line href="https://www.linkedin.com/in/shailesh-k-s-1b3475226"
                                    target="_blank" rel="noopener noreferrer">

                                    <v-list-item-content>
                                        <v-list-item-title>Linkedin</v-list-item-title>
                                        <v-list-item-subtitle>linkedin.com/in/shailesh-k-s-1b3475226
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right>mdi-linkedin</v-icon>
                                </v-list-item>

                                <v-list-item two-line href="https://devfolio.co/@shell_raiser" target="_blank"
                                    rel="noopener noreferrer">

                                    <v-list-item-content>
                                        <v-list-item-title>Devfolio</v-list-item-title>
                                        <v-list-item-subtitle>@shell_raiser</v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-icon right>mdi-github</v-icon>
                                </v-list-item>
                                <!-- </v-list-item-group> -->

                                <!-- </v-list> -->
                            </v-card>

                            <!-- </v-container> -->
                        </v-col>

                        <v-col class="d-none d-sm-block" sm="6" style="height:100%">
                            <img src="../assets/pebbleRotation.gif" alt="pebbels" loading="lazy" width="100%">
                        </v-col>
                    </v-row>
                </v-container>
            </transition>
        </section>
    </Layout>
</template>
<style scoped>
h1 {
    font-size: xxx-large;
    color: #2B2F57;
    text-align: right;
    /* background-image: -webkit-linear-gradient(90deg, purple, #2B2F57); */
    /* background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    /* animation: 6s linear 0s infinite normal none running hue; */
    /* z-index: 1; */
}

section {
    /* min-height: calc(100vh - 60px); */
    display: flex;
    align-items: center;
    justify-content: center;
    /* background:#9575cd; */
    height: 100vh;
    background: #000;
    /* overflow-x: hidden;
    overflow-y: hidden; */
    /* background-image: url('http://fc02.deviantart.net/fs21/f/2007/236/a/a/Animated_Rain_Desktop_HD_by_MrQuicksilver.gif'); */
    /* background-color: #9575cd; */
    /* background-color: #000; */
    /* background-size: cover; */
    /* background: linear-gradient(90deg, yellow, brown); */
    /* background-size: 200% 200%; */
}
</style>

<script>
export default {
    metaInfo: {
        title: "Connect with me",
    },
}
</script>