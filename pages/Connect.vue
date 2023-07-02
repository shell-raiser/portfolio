<template>
  <!-- <Layout> -->
    <section id="connect" style="background: #000;">
      <Connect />
    </section>
  <!-- </Layout> -->
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

section {
  height: 100%;
  background: #000;
  /* background-attachment: fixed;
  background-size: contain;*/
  min-height: 100vh;
}
</style>

<script>
import Connect from '../components/Connect.vue';

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
  metaInfo() {
    return this.$seo({
      title: "Connect with me",
      description: "My description",
      keywords: "one,two",
      openGraph: {
        title: "Shailesh K S, Connect with me",
        type: "website",
      },
      twitter: {
        title: "Shailesh K S, Connect with me",
        type: "summary",
      },
      link: [],
      script: [] // any scripts
    });
  },
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
  components: { Connect }
};
</script>