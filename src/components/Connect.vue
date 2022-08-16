<template>
    <section class="bg2">
        <v-container style="padding:0;min-height: calc(100vh - 60px); display:flex;  align-items: center;">
            <v-col class="rounded" sm="6" style="background:#9575cd;height:100%;text-align:right">
                <v-container>
                    <h1 class="ContactHead">Links</h1>
                    <v-card min-width="300">

                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
                            data-theme="dark" data-type="HORIZONTAL" data-vanity="shailesh-k-s-1b3475226"
                            data-version="v1"><a class="badge-base__link LI-simple-link"
                                href="https://in.linkedin.com/in/shailesh-k-s-1b3475226?trk=profile-badge">Shailesh K
                                S</a></div>

                        <github-card data-user="shell-raiser"></github-card>

                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1479346411%3Fsecret_token%3Ds-PQ8j8pMoFRA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <div
                            style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                            <a href="https://soundcloud.com/user-185450671" title="Shell Raiser" target="_blank"
                                style="color: #cccccc; text-decoration: none;">Shell Raiser</a> · <a
                                href="https://soundcloud.com/user-185450671/sets/all-tarcks" title="All tarcks"
                                target="_blank" style="color: #cccccc; text-decoration: none;">All tarcks</a>
                        </div>


                        <!-- <v-card-title class="ContactHead" style="text-align:right;">Contact</v-card-title> -->
                        <!-- <v-list> -->
                        <!-- <v-list-item-group> -->
                        <v-list-item two-line href="mailto: contactshellraiser@gmail.com">
                            <v-list-item-content>
                                <v-list-item-title>Email</v-list-item-title>
                                <v-list-item-subtitle @click="GHLink()">contactshellraiser@gmail.com
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

                        <v-list-item two-line href="https://www.linkedin.com/in/shailesh-k-s-1b3475226" target="_blank"
                            rel="noopener noreferrer">

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

                </v-container>
            </v-col>

            <v-col class="d-none d-sm-block" sm="6"
                style="display:flex; justify-content: center; align-items: center; padding:0; height:100vh">
                <img src="../pebbleRotation.gif" alt="pebbels">
            </v-col>
        </v-container>
    </section>
</template>