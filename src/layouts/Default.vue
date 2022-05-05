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





@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.bg1 {
  background-image: url('../background.png');
  /* height: 93vmin; */
  /* height: 90vh; */


}

.bg2 {
  background-image: url('../bg2.jpg');
  height: 90vh;
}

.bg3 {
  background-image: url('../wallpaper.png');
  height: 90vh;
  /* width: 90%; */
}

.bg4 {
  height: 94vh;
}
</style>
