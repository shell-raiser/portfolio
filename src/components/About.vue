<template>
  <section class="bg1">

    <v-container
      style="padding:0;min-height: calc(100vh - 60px); display:flex;  align-items: center;justify-content: center;">

      <v-row>
        <v-col sm="6">
          <!-- <v-card hover raised rounded :class="{ 'on-hover': hover }"  style="margin: 0;position:relative;top:50%;transform: translateY(-50%);"> -->
          <!-- <g-image   alt="Profile Picture" src="~/profilePic.jpg" max-width="400" max-height="400" fit="cover" /> -->
          <v-img class="rounded" alt="profile picture" src="https://randomuser.me/api/portraits/lego/5.jpg"
            aspect-ratio="1" style="max-height: calc(100vh - 100px);" min-width="300"></v-img>
          <!-- </v-card> -->
          <!-- max-height="80vh" width="80vh" -->
        </v-col>
        <v-col>
          <v-container
            style="background-color: rgba(255, 255, 255, 0.4);margin: 0;position:relative;top:50%;transform: translateY(-50%);"
            class="rounded">
            <!-- <div style="min-height:90vh; position:fixed;top: 50%;"> -->
            <h1 class="AboutHead">Hello there,
              <br>
              I'm Shailesh !
            </h1>

            <p style="color:black">
              I'm a
              <span class="headtext pink rounded white--text"></span>
              <!-- [<span id="iMVar" class="red rounded">
              Nice, Nice 
            </span>] -->
            </p>

            <!-- <p style="padding:5px;"> -->
            <!-- <p style="padding:10px;"> -->
            <img
              src="https://visitor-badge.glitch.me/badge?page_id=https://shell-raiser.github.io/&left_color=black&right_color=purple"
              alt="visitors" />
            <!-- </p> -->
            <p class="red white--text">This site is still under development, many things are yet to be implemented.
              <br>
              Keep an eye on 
              <a href="https://github.com/shell-raiser/shell-raiser.github.io" class="white">
              other branches</a>
              for major changes.
            </p>

            <!-- </div> -->
          </v-container>

        </v-col>


      </v-row>
    </v-container>

  </section>
  <!-- <div>About</div> -->
</template>
