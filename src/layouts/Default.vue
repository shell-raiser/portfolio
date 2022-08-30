<template>
  <v-app>
    <!-- 2:06:01 -->

    <!-- </v-card> -->
    <v-main>
    <!-- <v-container> -->
    <transition name="fade" appear>
      <!-- mode="out-in"> -->
      <!-- <main> -->
        <slot />
      <!-- </main> -->
    </transition>
    <v-footer class="justify-center" tile app>

      <!-- <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->


      <v-btn-toggle v-model="onboarding" class="text-center" rounded mandatory color="deep-purple">

        <!-- <g-link to="/"> -->
        <v-btn to="/" :input-value="active" @click="toggle">
          <v-icon color="deep-purple">mdi-view-dashboard</v-icon>
          <span class="d-none d-sm-block">
            About</span>
        </v-btn>
        <!-- </g-link> -->

        <!-- <g-link to="/connect"> -->
        <v-btn to="/connect" :input-value="active" @click="toggle">
          <v-icon color="deep-purple">mdi-human-greeting-proximity</v-icon>
          <span class="d-none d-sm-block">
            Connect</span>
        </v-btn>
        <!-- </g-link> -->

        <!-- <g-link to="/projects"> -->
        <v-btn to="/projects" :input-value="active" @click="toggle">
          <v-icon color="deep-purple">mdi-devices</v-icon>
          <span class="d-none d-sm-block"> Projects</span>
        </v-btn>
        <!-- </g-link> -->

        <!-- <g-link to="/arsenal"> -->
        <v-btn to="/arsenal" :input-value="active" @click="toggle">
          <v-icon color="deep-purple">mdi-hammer-wrench</v-icon>
          <span class="d-none d-sm-block">
            Tools</span>
        </v-btn>
        <!-- </g-link> -->


        <!-- <g-link to="/contact"> 
        <v-btn to="/contact" :input-value="active" @click="toggle">
          <v-icon color="deep-purple">mdi-card-account-mail </v-icon>
          <span class="d-none d-sm-block">
            Contact</span>
        </v-btn>
         </g-link> -->

      </v-btn-toggle>


      <!-- <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn> -->
    </v-footer>
    <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    // rules: [
    //   value => !!value || 'Required.',
    //   value => (value && value.length >= 3) || 'Min 3 characters',
    // ],
    // valid: true,
    // name: '',
    // nameRules: [
    //   v => !!v || 'Name is required',
    //   v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    // ],
    // email: '',
    // emailRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    // ],
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

<style>
.slide-fade-enter-active {
  transition: all .5s ;
}


.slide-fade-enter {
  transform: translateY(20px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter {
  opacity: 0.3;
}

/* .fade-enter-from{
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s ease-out;
} */




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
  min-height: calc(100vh - 60px);
  /* min-height: 90vh; */
  background: linear-gradient(90deg, #9575CD, #90caf9);
  background-size: 200% 100%;
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
  /* background-clip:content-box;   */
  background: lightblue url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg");
  /* display: block;  */
  /* position: absolute; */
  background-attachment: fixed;
  /* width: 100%;
    height: 100%; */
  /* background-size:100% 100%; */
  /* background-size:cover; */

}

.bg2 {
  /* min-height: calc(100vh - 60px); */
  /* background:#9575cd; */
  background: #000;
  overflow-x: hidden;
  overflow-y: hidden;
  /* background-image: url('http://fc02.deviantart.net/fs21/f/2007/236/a/a/Animated_Rain_Desktop_HD_by_MrQuicksilver.gif'); */
  /* background-color: #9575cd; */
  /* background-color: #000; */
  background-size: cover;
  /* background: linear-gradient(90deg, yellow, brown); */
  /* background-size: 200% 200%; */


}

.bg4 {
  min-height: 95vh;
  /* background: linear-gradient(-45deg, #09254f, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite; */
  background: lightblue url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop");
  /* filter: blur(8px); */
  /* -webkit-filter: blur(8px); */
  background-attachment: fixed;
  background-size: cover;
}

/* .contactAnimation {
  min-height: calc(100vh - 60px);
  background: lightblue url();
  background-image: url('../pebbleRotation.gif');
  margin: auto;
} */
</style>
