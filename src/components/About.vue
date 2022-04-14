<template>
  <section >
    
    <v-container class="bg1">
      <v-row>
        <v-col sm="6">
          <v-card
            hover
            raised
            rounded
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            max-width="400"
            max-height="400"
            
          >
            <g-image
              alt="Profile Picture"
              src="~/profilePicCrop.jpg"
              max-width="400"
              height="400"
              fit="inside"
            />
          </v-card>
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
