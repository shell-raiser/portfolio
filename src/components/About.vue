<template>
  <section class="bg1">

    <v-container>

      <v-row>
        <v-col sm="6">
          <v-card hover raised rounded :class="{ 'on-hover': hover }" max-height="80vh" width="80vh">
            <!-- <g-image   alt="Profile Picture" src="~/profilePic.jpg" max-width="400" max-height="400" fit="cover" /> -->
            <v-img src="https://randomuser.me/api/portraits/lego/5.jpg" height="80vh" width="80vh"></v-img>
          </v-card>
        </v-col>
        <v-col sm="6">
          <h1>Yollo there,
            <br>
            I'm Shailesh
          </h1>
          <p style="color:black">
            I'm a 
            <span class="headtext pink rounded"></span>
            <!-- [<span id="iMVar" class="red rounded">
              Nice, Nice 
            </span>] -->
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- <div>About</div> -->
</template>
