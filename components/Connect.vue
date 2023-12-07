<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col class="rounded" sm="6" style="background:#9575cd;max-width: 600px;text-align :right;" align-self="center">
        <h1 id="LinksHead" style="text-align: right;">Links</h1>

        <v-card>

          <v-list-item append-icon="mdi-email-variant" two-line href="mailto: ksshaileshofficial@gmail.com">
            <v-list-item-title>Email (Official)</v-list-item-title>
            <v-list-item-subtitle>ksshaileshofficial@gmail.com</v-list-item-subtitle>
          </v-list-item>

          <v-list-item append-icon="mdi-account-music" two-line href="mailto: contactshellraiser@gmail.com">
            <v-list-item-title>Email (Music Stuff)</v-list-item-title>
            <v-list-item-subtitle>contactshellraiser@gmail.com</v-list-item-subtitle>
          </v-list-item>



          <v-list-item append-icon="mdi-github" two-line href="https://github.com/shell-raiser" target="_blank"
            rel="noopener noreferrer">
            <v-list-item-title>Github</v-list-item-title>
            <v-list-item-subtitle>@shell-raiser</v-list-item-subtitle>
          </v-list-item>

          <v-list-item append-icon="mdi-soundcloud" two-line href="https://soundcloud.com/user-185450671" target="_blank"
            rel="noopener noreferrer">
            <v-list-item-title>Soundcloud</v-list-item-title>
            <v-list-item-subtitle>soundcloud.com/user-185450671</v-list-item-subtitle>
          </v-list-item>


          <v-list-item append-icon="mdi-linkedin" two-line href="https://www.linkedin.com/in/shailesh-k-s" target="_blank"
            rel="noopener noreferrer">
            <v-list-item-title>Linkedin</v-list-item-title>
            <v-list-item-subtitle>linkedin.com/in/shailesh-k-s</v-list-item-subtitle>
          </v-list-item>

          <v-list-item append-icon="mdi-link-box" two-line href="https://linktr.ee/shell_raiser" target="_blank"
            rel="noopener noreferrer">
            <v-list-item-title>LinkTr.ee</v-list-item-title>
            <v-list-item-subtitle>shell_raiser</v-list-item-subtitle>
          </v-list-item>
        </v-card>

        <!-- </v-container> -->
      </v-col>

      <!-- <v-col class="d-none d-sm-block" sm="6" style="height: 100%">
              <img
                src="../assets/pebbleRotation.gif"
                alt="pebbels"
                loading="lazy"
                width="100%"
              />
            </v-col> -->
      <v-col align-self="center" style="max-width:600px;">
        <h1 class="rounded white--text">Contact</h1>

        <v-card style="padding: 10px;" color="menu">
          <v-form ref="form" v-model="valid" lazy-validation action="https://formspree.io/f/xeqdjwoo" method="post">
            <v-text-field label="Name" v-model="name" type="text" name="name" id="name" :rules="nameRules"
              aria-required></v-text-field>

            <v-text-field label="Email" name="Email" id="email" type="email" :rules="emailRules"
              hint="example@gmail.com"></v-text-field>

            <v-text-field label="Subject" name="Subject" id="subject" type="subject" :rules="reqRules" required>
            </v-text-field>

            <v-textarea label="Message" name="message" id="message" :rules="reqRules" auto-grow rows="2"
              placeholder="Multi-line Field"></v-textarea>

            <!-- <v-btn type="submit" class="mr-4"> -->
            <v-container class="d-flex">
              <v-btn :disabled="!valid" class="mr-4" @click="submit">submit</v-btn>
              <!-- <v-btn type="reset" onclick="clear()"> -->
              <v-btn class="mr-4" @click="reset">clear</v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
h1 {
  font-size: xxx-large;
  color: #2b2f57;
  /* background-image: -webkit-linear-gradient(90deg, purple, #2B2F57); */
  /* background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  /* animation: 6s linear 0s infinite normal none running hue; */
  /* z-index: 1; */
}
</style>

<script>
export default {
  // mounted() {
  //   var navBar = document.getElementById("navBar");
  //   console.log(parseInt(getComputedStyle(navBar).getPropertyValue("height")));
  //   var sectionHeight =
  //     window.innerHeight -
  //     parseInt(getComputedStyle(navBar).getPropertyValue("height"));
  //   console.log(window.innerHeight);
  //   var theSectionDOM = document.getElementById("theSection");
  //   theSectionDOM.style.height = String(sectionHeight) + "px";
  //   console.log(
  //     parseInt(getComputedStyle(theSectionDOM).getPropertyValue("height"))
  //   );
  // },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(v) || "E-mail must be valid",
    ],
    reqRules: [
      (v) => !!v || "This Field is required",
      // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>