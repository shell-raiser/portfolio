<template>
    <Layout>
        <section id="arsenal">
            <Arsenal />
        </section>
    </Layout>
</template>
<style scoped>
h1 {

    font-size: xxx-large;
    color: #ffffff;
    backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
    background-color: rgba(18, 0, 48, 0.61);
}

.toolCard {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.3);
}

.toolsLogos {
    pointer-events: none;
    user-select: none;
    max-height: 100px;
    max-width: 100%;
    min-width: 100px;
    padding: 5px;
}

.toolsCardsImageCont {
    justify-content: center;
}

section {
    /* padding-bottom: 60px; */
    /* min-height: 100%; */
    /* overflow-x: hidden;
    overflow-y: hidden; */
    /* background: linear-gradient(-45deg, #09254f, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 10s ease infinite; */
    background: url("/assets/toolsBg.webp");
    /* https://www.pexels.com/photo/photo-of-abstract-painting-3527795/ */
    /* filter: blur(8px); */
    /* -webkit-filter: blur(8px); */
    background-attachment: fixed;
    background-size: cover;
}
</style>
<script>
// import tools from '~/data/tools.json'
import Arsenal from '../components/Arsenal.vue';
export default {
    metaInfo() {
        return this.$seo({
            title: "Tools",
            description: "A collection of all the tools I've ever used, and know my way around getting things done with them",
            keywords: "one,two",
            openGraph: {
                title: "Shailesh K S, Tools",
                type: "website",
            },
            twitter: {
                title: "Shailesh K S, Tools",
                type: "summary",
            },
            link: [],
            script: [] // any scripts
        });
    },
    // data: () => ({
    //     languages: tools.languages,
    //     frontend: tools.frontend,
    //     backend: tools.backend,
    //     design: tools.design,
    //     audio: tools.audio,
    // }),
    components: { Arsenal }
};
</script>