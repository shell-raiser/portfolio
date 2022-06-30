<template>
  <section class="bg1">

   <v-container>

      <v-row>
        <v-col sm="6">
          <!-- <v-card hover raised rounded :class="{ 'on-hover': hover }"  style="margin: 0;position:relative;top:50%;transform: translateY(-50%);"> -->
          <!-- <g-image   alt="Profile Picture" src="~/profilePic.jpg" max-width="400" max-height="400" fit="cover" /> -->
          <v-img alt="profile picture" src="https://randomuser.me/api/portraits/lego/5.jpg" aspect-ratio="1" min-width="300"></v-img>
          <!-- </v-card> -->
          <!-- max-height="80vh" width="80vh" -->
        </v-col>
        <v-col>
          <v-container
            style="background-color: rgba(255, 255, 255, 0.4);margin: 0;position:relative;top:50%;transform: translateY(-50%);"
            class="rounded">
            <!-- <div style="min-height:90vh; position:fixed;top: 50%;"> -->
            <h1 class="AboutHead">Yollo there,
              <br>
              I'm Shailesh
            </h1>
            <!-- <p class="red">This site is still under development, many things are yet to be implemented</p> -->
            <p style="color:black">
              I'm a
              <span class="headtext pink rounded"></span>
              <!-- [<span id="iMVar" class="red rounded">
              Nice, Nice 
            </span>] -->
            </p>
            <!-- </div> -->
          </v-container>
        </v-col>

      </v-row>
    </v-container>

  </section>
  <!-- <div>About</div> -->
</template>
