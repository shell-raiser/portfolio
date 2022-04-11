<template>
  <v-app>
    <!-- 2:06:01 -->
    <v-navigation-drawer class="purple darken-4" dark permanent width="200" expand-on-hover>
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Shailesh K S</v-list-item-title>
            <!-- <v-list-item-subtitle>aka. Shell Raiser</v-list-item-subtitle> -->
            <v-list-item-subtitle>Cybersecurity enthusiast</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="344">
                <v-icon color="red">{{ item.icon }}</v-icon>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute opacity="0" color="red">
                    <!-- <v-btn>See more info</v-btn> -->
                    <v-btn>{{ item.title }}</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>

          <!-- <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
      </v-list>

      <!-- <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template> -->
    </v-navigation-drawer>
    <!-- </v-card> -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "About me", icon: "mdi-view-dashboard" },
        { title: "Contact", icon: "mdi-gavel" },
        { title: "Projects", icon: "mdi-gavel" },
      ],
    };
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.v-application--wrap {
  flex-direction: row;
}
.v-main {
  flex: 1 0;
  
}
/* .hidden:hover {
  visibility: hidden;
} */

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-card.on-hover.theme--dark{
  background-color: rgba(#FFF, 0.8);}
.v-card__text{
  color: #000;}

h1 {
  color: rgb(100, 0, 172);
  background-image: -webkit-linear-gradient(92deg, rgb(250, 223, 18), rgb(254, 78, 58));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 60s linear 0s infinite normal none running hue;
}
</style>
