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
/* .logo {
  margin: 8px auto;
  display: block;
  align-content: center;
} */

/* .v-application--wrap {
  flex-direction: row;
} */
/* .v-application{
  font-family: Syncopate;
  font-stretch:normal;
} */
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
  /* background-image: url('../background.png  '); */
  /* height: 93vmin; */
  min-height: 90vh;
  /* min-height: 90vh; */
  background: linear-gradient(45deg, rgb(124, 253, 253), rgb(106, 106, 255));
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;

}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.bg3 {
  min-height: 90vh;
  width: 100%;
  /* margin: 0; */
  /* z-index: 10; */
  /* background: linear-gradient(90deg, #09254f, #0b4b3d); */
  /* background-size: 100% 100%; */
  /* animation: gradient 10s ease infinite; */
  /* background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg'); */
  /* background-clip: inherit;   */
background: lightblue url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg") no-repeat fixed center; 
/* background-size:100% 100%; */
}

.bg2 {
  min-height: 90vh;
  /* background-image: url('http://fc02.deviantart.net/fs21/f/2007/236/a/a/Animated_Rain_Desktop_HD_by_MrQuicksilver.gif'); */
  background-color: #000;
  background-size: cover;
  /* background: linear-gradient(90deg, yellow, brown); */
  /* background-size: 200% 200%; */
  animation: gradient 10s ease infinite;


}

.bg4 {
  min-height: 95vh;
  background: linear-gradient(-45deg, #09254f, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite;
}
</style>
