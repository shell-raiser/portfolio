<template>
  <v-app>
    <!-- 2:06:01 -->

    <!-- </v-card> -->
    <v-main>
      <!-- <v-container> -->
      <slot />
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    // length: 3,
    onboarding: 0,
  }),
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    },
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
/* 
.v-main {
  flex: 1 0;
} */


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


.bg1 {
  background-image: url('../background.png');
  /* height: 93vmin; */
  height: 94vh;

}

.bg2 {
  background-image: url('../bg2.jpg');
  height: 94vh;
}

.bg3 {
  background-image: url('../wallpaper.png');
  height: 96vh;
  /* width: 90%; */
}

.bg4 {
  height: 96vh;
}
</style>
