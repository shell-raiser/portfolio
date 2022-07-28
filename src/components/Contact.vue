<template>
    <section class="bg2">
        <table width=100% height=100%>
            <tr>
                <td width=50% style="background:#9575cd;top:0;">
                    <v-container style="top:0;text-align: right;">
                        <h1 class="ContactHead">Contact</h1>
                        <!-- <v-col sm="6"> -->
                        <v-card min-width="300">
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
                            <!-- </v-list-item-group> -->

                            <!-- </v-list> -->
                        </v-card>
                        <!-- </v-col> -->
                        <!-- <v-col sm="6"> -->
                        <!-- <img src="../sphere.gif"
                        style=" display: block; margin-left: auto; margin-right: auto; height: 50%; pointer-events: none; overflow: hidden;" /> -->

                        <!-- </v-col> -->
                    </v-container>
                </td>
                <td width=50%>
                    <!-- <div style="height:100vh;"> -->
                    <iframe src='https://my.spline.design/untitled-869cd974c7495e5b1f6d1e653692a6b0/' frameborder='0'
                        width='100%' min-width="300" style="height:90vh;" class="d-none d-sm-block"></iframe>
                    <!-- </div> -->
                </td>
            </tr>
        </table>
    </section>
</template>