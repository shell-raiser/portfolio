<template>
    <Layout>
        <section>
            <transition name="slide-fade" appear>
                <v-container style="height:calc(100vh-56px);display:flex;  align-items: center;">
                    <v-row>
                        <v-col class="d-none d-sm-block" sm="6"
                            style="text-align:center;background-color:#3CA2A2;" align-self="center">

                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/dak6s74-465171e5-27da-4de8-9ce1-a4ac85c662e9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZGFrNnM3NC00NjUxNzFlNS0yN2RhLTRkZTgtOWNlMS1hNGFjODVjNjYyZTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HHcJ-g7f4_rV-Sot1muIyOxZH9mfMziA1-4nExOjFiU"
                                alt="devianArtLink" height="100%">
                                <!-- https://www.deviantart.com/kirokaze/art/Meeting-point-638570560 -->
                        </v-col>
                        <v-col sm="6">
                            <h1 class="rounded" style="text-align:center">Contact</h1>
                            <v-card style="padding:10px" fill-height>
                                <v-form ref="form" v-model="valid" lazy-validation
                                    action="https://formspree.io/f/xeqdjwoo" method="post">
                                    <v-text-field label="Name" v-model="name" type="text" name="name" id="name"
                                        :rules="nameRules" aria-required="">
                                    </v-text-field>

                                    <v-text-field label="Email" name="Email" id="email" type="email" :rules="emailRules"
                                        hint="example@gmail.com"></v-text-field>



                                    <v-text-field label="Subject" name="Subject" id="subject" type="subject"
                                        :rules="reqRules" required>
                                    </v-text-field>

                                    <v-textarea label="Message" name="message" id="message" :rules="reqRules">
                                    </v-textarea>


                                    <!-- <v-btn type="submit" class="mr-4"> -->
                                    <v-container class="d-flex  justify-center ">
                                        <v-btn :disabled="!valid" class="mr-4" @click="submit">
                                            submit
                                        </v-btn>
                                        <!-- <v-btn type="reset" onclick="clear()"> -->
                                        <v-btn class="mr-4" @click="reset">
                                            clear
                                        </v-btn>
                                    </v-container>
                                </v-form>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </transition>
        </section>
    </Layout>
</template>
<script>
export default {
    data: () => ({
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        reqRules: [
            v => !!v || 'This Field is required',
            // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        submit() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        }
    },
}
</script>
<style scoped>
section {
    /* background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/dawohei-a036ab22-579d-4a8f-8116-2aca87644b7b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZGF3b2hlaS1hMDM2YWIyMi01NzlkLTRhOGYtODExNi0yYWNhODc2NDRiN2IuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5wxQB1yYpGCsAYg4wc0MAQYlV3C1M17bwxadF3qzHyM"); */
    background: linear-gradient(90deg, #3C344C, #265960);
    background-size: 200% 100%;
    animation: gradient 10s ease infinite;
    max-height: calc(100vh - 56px);
    display:flexbox;
    align-items: center;
    justify-content: center;
    /* min-height: calc(100vh - 56px) */
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
    color: #2B2F57;
    background-color: rgba(255, 255, 255, 0.3);
    /* position: relative; */
    /* left: 100%;   */
    /* float: right; */
    text-align: left;
    /* z-index: 1; */
}
</style>