<template >
  <Layout>
    <section>
      <transition name="slide-fade" appear>

        <v-container style="height: 100%;">

          <v-row style="height: 100%;">
            <v-col sm="6">
              <!-- <v-lazy> -->
              <v-img class="rounded" alt="profile picture" src="https://randomuser.me/api/portraits/lego/5.jpg" aspect-ratio="1" min-width="300" style="height:calc(100% - 56px)"></v-img>
              <!-- </v-lazy> -->
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
                <p class="red white--text">This site is still under development, many things are yet to be implemented.
                  <br>
                  Keep an eye on
                  <a href="https://github.com/shell-raiser/shell-raiser.github.io" class="white">
                    other branches</a>
                  for major changes.
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
// import 'animate.css';
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
    title: "About me",
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
    // overlay: false,
    // length: 4,
    // onboarding: 0,
    window: 0,
    reveal: false,
    // mobileWarn: true

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
    // next() {
    //   this.onboarding = this.onboarding + 1 === this.length
    //     ? 0
    //     : this.onboarding + 1
    // },
    // prev() {
    //   this.onboarding = this.onboarding - 1 < 0
    //     ? this.length - 1
    //     : this.onboarding - 1
    // }
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

<style scoped>
section {
  /* background-image: url('../background.png  '); */
  /* height: 93vmin; */
  /* min-height: calc(100vh - 60px); */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height:calc(100% - 60px); */
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

h1 {

  font-size: xxx-large;
  /* color: rgb(100, 0, 172); */
  color: #65499c;
  background-image: -webkit-linear-gradient(0deg, #3F51B5, #9C27B0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 6s linear 0s infinite normal none running hue;
  /* z-index: 1; */
}

.headtext::before {
  content: "Web dev";
  animation: animate infinite 5s;
  /* padding-left: 10px; */
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
