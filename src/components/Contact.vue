<template>
    <section class="bg2">
        <v-container>
            <h1 class="ContactHead">Contact</h1>
            <v-row>
                <v-col sm="6">
                    <v-card>
                        <!-- <v-list> -->
                        <v-list-item-group>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon> mdi-email-variant</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Email at</v-list-item-title>
                                    <v-list-item-subtitle @click="GHLink()">someemail@gmail.com</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon>mdi-github</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Github</v-list-item-title>
                                    <v-list-item-subtitle>@shell-raiser</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon>mdi-soundcloud</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Soundcloud</v-list-item-title>
                                    <v-list-item-subtitle>soundcloud.com/user-185450671</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon>mdi-youtube</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Youtube</v-list-item-title>
                                    <v-list-item-subtitle>youtube.com/channel/UCmEShK3aru1usVrGOrzGqqw
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>

                        <!-- </v-list> -->
                    </v-card>
                </v-col>
                <v-col sm="6">


                    <img src="../pebbleAnimationC.gif"
                        style=" display: block; margin-left: auto; margin-right: auto; height: 50%; pointer-events: none; overflow: hidden;" />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>