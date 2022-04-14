<template>
  <v-app class="background">
    <!-- 2:06:01 -->
    <v-navigation-drawer permanent width="50" app dark bottom>
      <template v-slot:prepend>
        <g-image class="logo" alt="logo" src="~/Shell.svg" />
        <!-- <v-list-item-title>Shailesh K S</v-list-item-title> -->
        <!-- <v-list-item-subtitle>aka. Shell Raiser</v-list-item-subtitle> -->
        <!-- <v-list-item-subtitle>Cybersecurity enthusiast</v-list-item-subtitle> -->
      </template>
      <v-divider></v-divider>
      <v-list>
        <!-- <v-list-item v-for="item in items" :key="item.title" link> -->
        <!-- <v-hover> -->
        <!-- <template v-slot:default="{ hover }"> -->
        <!-- <v-card class="nav-icons mx-auto" max-width="344"> -->
        <a href="/">
          <v-icon class="nav-icons">mdi-view-dashboard</v-icon>
        </a>

        <a href="#Contact">
          <v-icon class="nav-icons">mdi-human-greeting-proximity</v-icon>
        </a>

        <a href="#Projects">
          <v-icon class="nav-icons">mdi-devices</v-icon>
        </a>

        <a href="#Arsenal">
          <v-icon class="nav-icons">mdi-hammer-wrench</v-icon>
        </a>
        <!-- <v-fade-transition>
                  <v-overlay v-if="hover" absolute opacity="0" color="red">
                    <v-btn>{{ item.title }}</v-btn>
                  </v-overlay>
                </v-fade-transition> -->
        <!-- </v-card> -->
        <!-- </template> -->
        <!-- </v-hover> -->

        <!-- <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content> -->
        <!-- </v-list-item> -->
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
    return {}
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
.logo {
  margin: 8px auto;
  display: block;
  align-content: center;
}

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

.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}

.v-card__text {
  color: #000;
}

h1 {
  color: rgb(100, 0, 172);
  background-image: -webkit-linear-gradient(92deg, rgb(250, 223, 18), rgb(254, 78, 58));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 60s linear 0s infinite normal none running hue;
}

.nav-icons {
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  font-size: 22px;
  color: #0099ff;
  display: block;
  line-height: 51px;
  height: 51px;
  position: relative;
}

.nav-icons:hover {
  color: rgb(0, 174, 255);
}

/* .nav-icons:hover::after {
  opacity: 1;
} */
/* .nav-icons:after {
  content: "";
  font-size: 9px;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease-out;
}  */

.nav-icons:first-child::after {
  content: "About";
  /* color: #000; */
}

.nav-icons:a:i {
  transition: all 0.3s ease-out;
}

.bg1 {
  background-image: url('../background.png');
}
.bg2{
  background-image: url('../bg2.jpg');
}
</style>
