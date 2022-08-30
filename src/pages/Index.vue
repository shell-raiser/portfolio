<template >
  <Layout>
    <!-- <div> -->
    <!-- <About id="About" /> -->
    <!-- <slot></slot> -->
    <!-- <v-container v-if="mobileWarn" class="d-sm-none white--text"
      style="display:flex; position: fixed;top: 0px; height:100%;  background-color:red; z-index:10;  justify-content: center;align-items: center;text-align: center;">
      Hello there, this website was designed to be viewed on a Desktop. Mobile experience is still not the best.

      <br>
      <br>
      Click the Button to view it anyway
      <br>
      <v-btn @click="mobileWarn = false"> Continue Mobile</v-btn>
    </v-container> -->

    <!-- <v-window v-model="onboarding">
      <v-window-item>

        <About id="About" />

      </v-window-item>

      <v-window-item>
        <Connect id="Connect" />

      </v-window-item>
      <v-window-item>

        <Projects id="Projects" />

      </v-window-item>
      <v-window-item>

        <Arsenal id="Arsenal" />

      </v-window-item>
     <-- <v-window-item>

        <Contact id="Contact" />

      </v-window-item> -->
    </v-window> -->
    <section class="bg1">
      <transition name="slide-fade" appear>

        <v-container
          style="padding:0;min-height: calc(100vh - 60px); display:flex;  align-items: center;justify-content: center;">

          <v-row>
            <v-col sm="6">
              <!-- <v-card hover raised rounded :class="{ 'on-hover': hover }"  style="margin: 0;position:relative;top:50%;transform: translateY(-50%);"> -->
              <!-- <g-image   alt="Profile Picture" src="~/profilePic.jpg" max-width="400" max-height="400" fit="cover" /> -->
              <v-img class="rounded" alt="profile picture" src="https://randomuser.me/api/portraits/lego/5.jpg"
                aspect-ratio="1" style="max-height: calc(100vh - 100px);" min-width="300"></v-img>
              <!-- </v-card> -->
              <!-- max-height="80vh" width="80vh" -->
            </v-col>
            <v-col>
              <v-container
                style="background-color: rgba(255, 255, 255, 0.4);margin: 0;position:relative;top:50%;transform: translateY(-50%);"
                class="rounded">
                <!-- <div style="min-height:90vh; position:fixed;top: 50%;"> -->
                <h1 class="AboutHead">Hello there,
                  <br>
                  I'm Shailesh !
                </h1>

                <p style="color:black">
                  I'm a
                  <span class="headtext pink rounded white--text"></span>
                  <!-- [<span id="iMVar" class="red rounded">
              Nice, Nice 
            </span>] -->
                </p>

                <!-- <p style="padding:5px;"> -->
                <!-- <p style="padding:10px;"> -->
                <img
                  src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple"
                  alt="visitors" />
                <!-- </p> -->
                <p class="red white--text">This site is still under development, many things are yet to be implemented
                </p>

                <!-- </div> -->
              </v-container>

            </v-col>


          </v-row>
        </v-container>

      </transition>
    </section>


    <!-- </v-card-actions> -->
  </Layout>
</template>

<script>
// import About from "@/components/About.vue";
// import Contact from "@/components/Contact.vue";
// import Projects from "@/components/Projects.vue";
import 'animate.css';
// import Arsenal from "./Arsenal.vue";
// import Connect from "@/components/Connect.vue";

// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'


export default {
  // mixins: [validationMixin],

  // validations: {
  //   name: { required, maxLength: maxLength(10) },
  //   email: { required, email },
  //   select: { required },
  //   checkbox: {
  //     checked(val) {
  //       return val
  //     },
  //   },
  // },
  metaInfo: {
    title: "Shailesh K S",
    script: [
      { src: 'https://platform.linkedin.com/badges/js/profile.js', async: true, defer: true },
      { src: "https://unpkg.com/@rocktimsaikia/github-card@latest?module", async: true, defer: true },
    ],
  },
  // components: {
  //   About,
  //   Connect,
  //   Projects,
  //   Arsenal,
  //   Contact,
  // },

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
    overlay: false,
    length: 4,
    onboarding: 0,
    window: 0,
    reveal: false,
    mobileWarn: true

    // sections: { <About /> ,<Projects/>, <Contact/> },
    // onboarding: 0,

  }),

  // computed: {
  //   checkboxErrors() {
  //     const errors = []
  //     if (!this.$v.checkbox.$dirty) return errors
  //     !this.$v.checkbox.checked && errors.push('You must agree to continue!')
  //     return errors
  //   },
  //   selectErrors() {
  //     const errors = []
  //     if (!this.$v.select.$dirty) return errors
  //     !this.$v.select.required && errors.push('Item is required')
  //     return errors
  //   },
  //   nameErrors() {
  //     const errors = []
  //     if (!this.$v.name.$dirty) return errors
  //     !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
  //     !this.$v.name.required && errors.push('Name is required.')
  //     return errors
  //   },
  //   emailErrors() {
  //     const errors = []
  //     if (!this.$v.email.$dirty) return errors
  //     !this.$v.email.email && errors.push('Must be valid e-mail')
  //     !this.$v.email.required && errors.push('E-mail is required')
  //     return errors
  //   },
  // },
  methods: {
    // submit() {
    //   this.$v.$touch()
    // },
    // clear() {
    //   this.$v.$reset()
    //   this.name = ''
    //   this.email = ''
    //   this.select = null
    //   this.checkbox = false
    // },
    next() {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    }
  },
  // mounted() {
  //   let linkedinScript = document.createElement('script')
  //   linkedinScript.setAttribute('src', 'https://platform.linkedin.com/badges/js/profile.js')
  //   linkedinScript.setAttribute('async')
  //   linkedinScript.setAttribute('defer')
  //   document.head.appendChild(linkedinScript)


  // },
  // methods: {
  //   next() {
  //     this.onboarding = this.onboarding + 1 === this.length
  //       ? 0
  //       : this.onboarding + 1
  //   },
  //   prev() {
  //     this.onboarding = this.onboarding - 1 < 0
  //       ? this.length - 1
  //       : this.onboarding - 1
  //   },
  // },


};

</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

.projectCardHoverText {
  opacity: 1;
  padding: 10px;
  text-align: center;
}

.ProjectsHead {
  font-size: xxx-large;
  color: #2B2F57;
  background-color: rgba(255, 255, 255, 0.3);
  /* position: relative; */
  /* left: 100%;   */
  /* float: right; */
  text-align: left;
  /* z-index: 1; */
}

.ContactHead {
  font-size: xxx-large;
  color: #2B2F57;
  text-align: right;
  /* background-image: -webkit-linear-gradient(90deg, purple, #2B2F57); */
  /* background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  /* animation: 6s linear 0s infinite normal none running hue; */
  /* z-index: 1; */
}

.AboutHead {

  font-size: xxx-large;
  /* color: rgb(100, 0, 172); */
  color: #65499c;
  background-image: -webkit-linear-gradient(0deg, #3F51B5, #9C27B0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

.ArsenalHead {
  font-size: xxx-large;
  color: #09254f;
  /* background-image: -webkit-linear-gradient(90deg, #1d4ba5, #105c4a); */
  /* background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  background-color: rgba(255, 255, 255, 0.2);
  animation: 10s linear 0s infinite normal none running hue;
}

.headtext::before {
  content: "Web dev";
  animation: animate infinite 5s;
  /* padding-left: 10px; */
}


.toolsLogos {
  pointer-events: none;
  user-select: none;
  max-height: 100px;
  padding: 5px;

}

.toolsCardsImageCont {

  justify-content: center;

}

.contactAnimation {
  height: 100%;
  background-color: #9C27B0;
  /* background-image: url('../profilePic.jpg'); */
  /* background-image: rgb(0, 252, 244) url('../profilePic.jpg') no-repeat center; */
  /* background-size: cover; */
  background-size: cover !important;
  width: 100%;
  background-position: center center;

}


@keyframes animate {

  25% {
    content: "CyberSec enthusiast";
  }

  50% {
    content: "Designer";
  }

  75% {
    content: "Python dev";
  }
}
</style>
