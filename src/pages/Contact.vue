<template>
    <Layout>
        <section class="bg3">
            <transition name="slide-fade" appear>
                <v-container style="padding:0;">
                    <v-row>
                        <v-col class="d-none d-sm-block" sm="6">
                            <img src="../assets/pebbleRotation.gif" alt="pebbels" width="100%">
                        </v-col>
                        <v-col sm="6">
                            <h1 class="ArsenalHead rounded" style="text-align:center">Contact</h1>
                            <v-card style="padding:10px">
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
