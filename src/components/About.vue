<template>
  <section class="bg1">

    <v-container>

      <v-row>
        <v-col sm="6">
          <v-card  hover raised rounded :class="{ 'on-hover': hover }" class="mx-auto" max-width="400" max-height="400">
            <!-- <g-image   alt="Profile Picture" src="~/profilePic.jpg" max-width="400" max-height="400" fit="cover" /> -->
            <v-img src="https://randomuser.me/api/portraits/lego/5.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col sm="6">
          <h1>Yollo there, I'm Shailesh</h1>
          <p style="color:black">I'm a CyberSec enthusiast</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- <div>About</div> -->
</template>
