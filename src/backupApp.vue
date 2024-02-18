<template>
  <v-app class="text-white">
    <v-layout class="bg-red">
      <v-app-bar color="transparent" class="py-5" style="padding-inline: 175px;" flat>
        <h1 style="font-family: 'Caveat', cursive;font-size: 45px;cursor: pointer;">
          Engelbart
        </h1>
        <v-spacer></v-spacer>
        <v-btn style="font-family: 'Caveat', cursive; font-size: 20px;" variant="plain" class="text-capitalize">Home</v-btn>
        <v-btn style="font-family: 'Caveat', cursive; font-size: 20px;" variant="plain" class="text-capitalize">Biography</v-btn>
        <v-btn style="font-family: 'Caveat', cursive; font-size: 20px;" variant="plain" class="text-capitalize">Gallery</v-btn>
        <v-btn style="font-family: 'Caveat', cursive; font-size: 20px;" variant="plain" class="text-capitalize">Achievements</v-btn>
      </v-app-bar>
      <v-main id="main" style="overflow-y: hidden;">
        <v-container class="h-100">
          <v-row class="h-100">
            <v-col class="h-100 d-flex justify-center align-start flex-column">
              <!-- <h1 class="text-white text-h2 font-weight-bold" style="font-family: 'Caveat', cursive;">Douglas Engelbart</h1>
              <h2 class="text-white mt-5" style="font-family: 'Caveat', cursive;font-size: 35px;font-weight: 400;">Pioneer of Human-Computer Interaction</h2> -->
                <h1 class=" text-h3 text-justify" style="font-family: 'Roboto', cursive;font-weight: 500;line-height: 1.5;">"The digital revolution is far more significant than the invention of writing or even of printing."</h1>
                <h3 class="w-100 text-right mt-5" style="font-family: font-family: 'Roboto', serif;">-Douglass Engelbart</h3>
            </v-col>
            <v-col class="d-flex align-center justify-end">
              <v-card height="450" class="rounded-circle bg-grey-darken-2 pt-5" style="border: 10px solid #444;" elevation="5" width="450">
                <img src="/public/douglass.png" class="w-100" />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>

</script>

<style scoped>

#app{
  background: rgb(55,55,55);
  background: radial-gradient(circle, rgba(55,55,55,1) 0%, rgba(0,0,0,1) 100%);
}
</style>