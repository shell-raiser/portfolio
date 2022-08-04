<template>
    <section class="bg2">
        <v-container style="padding:0;min-height: calc(100vh - 60px); display:flex;  align-items: center;">
            <v-col class="rounded" sm="6" style="background:#9575cd;height:100%;text-align:right">
                <v-container>
                    <h1 class="ContactHead">Contact</h1>
                    <v-card min-width="300">
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
                        <!-- </v-list-item-group> -->

                        <!-- </v-list> -->
                    </v-card>

                </v-container>
            </v-col>

            <v-col class="d-none d-sm-block" sm="6"
                style="display:block; position: fixed;top: 0px; right:0; padding:0;">
                <img width="100%" src="https://github.com/shell-raiser/shell-raiser.github.io/raw/main/src/pebbleRotation.gif"
                    style="    overflow: hidden; display:flex; align-self: center;" alt="pebbels">
            </v-col>
        </v-container>
    </section>
</template>