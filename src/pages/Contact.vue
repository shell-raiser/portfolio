<template>
<Layout>
    <section class="bg3">
<transition name="slide-fade" appear>
        <v-container style="padding:0;">
            <v-col style="padding:0;">

            </v-col>
            <v-col style="padding:0;">
                <h1 class="ArsenalHead" style="text-align:center">Contact</h1>


                <v-card style="padding:10px">
                    <v-form ref="form" v-model="valid" lazy-validation action="https://formspree.io/f/xeqdjwoo"
                        method="post">
                        <!-- <label for="name">Name</label>
                <input type="text" name="name" id="name" /> -->
                        <v-text-field label="Name" v-model="name" type="text" name="name" id="name" :counter="10"
                            :rules="nameRules" aria-required="">
                        </v-text-field>

                        <v-text-field label="Email" name="Email" id="email" type="email" :rules="rules"
                            hint="example@gmail.com"></v-text-field>
                        <!-- <label for="email">Email</label>
                <input name="Email" id="email" type="email"> -->



                        <!-- <label for="subject">Subject</label> -->
                        <!-- <input name="Subject" id="subject" type="subject"> -->
                        <v-text-field label="Subject" name="Subject" id="subject" type="subject" :rules="rules">
                        </v-text-field>

                        <!-- <label for="message">Message</label>
                <textarea name="message" id="message"></textarea> -->
                        <v-textarea label="Message" name="message" id="message" :rules="rules"></v-textarea>


                        <v-btn type="submit" class="mr-4">
                            submit
                        </v-btn>
                        <v-btn type="reset" onclick="clear()">
                            clear
                        </v-btn>
                        <!-- <ul>
                    <li><input type="submit" value="Send Message" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul> -->
                    </v-form>
                </v-card>
            </v-col>

        </v-container>

</transition>

</section>
    </Layout>
</template>