<template>
  <section >
    <v-container style="background-color=red">
      <v-row>
        <v-col sm="6">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              width="400"
              height="400"
            >
              <g-image
                alt="Profile Picture"
                src="~/profilePic.jpg"
                width="400"
                height="400"
              />
            </v-card>
          </v-hover>
        </v-col>
        <v-col sm="6">
          <h1>Yollo there, I'm Shailesh</h1>
          <p>I'm a CyberSec enthusiast</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- <div>About</div> -->
</template>
