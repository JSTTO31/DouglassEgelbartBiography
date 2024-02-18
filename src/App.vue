<template>
  <v-app class="text-white" id="app" style="overflow-y: hidden;">
    <v-app-bar color="transparent" class="px-0" flat>
      <v-tabs grow mandatory>
        <v-tab :to="{ name: 'intro' }" density="compact" height="50" prepend-icon="mdi-information-variant"
          class="text-capitalize px-0 mr-2" variant="plain">Introduction</v-tab>
        <v-tab :to="{ name: 'bio' }" density="compact" height="50" prepend-icon="mdi-account-box-outline"
          class="text-capitalize px-0 mr-2" variant="plain">Biography</v-tab>
        <v-tab :to="{ name: 'achievements' }" density="compact" height="50" prepend-icon="mdi-medal-outline" class="text-capitalize px-0 mr-2"
          variant="plain">Achievements</v-tab>
        <v-tab :to="{ name: 'gallery' }"  density="compact" height="50" prepend-icon="mdi-view-gallery-outline" class="text-capitalize px-0 mr-2"
          variant="plain">Gallery 
        </v-tab>
      </v-tabs>
      <!-- <v-spacer></v-spacer>
        <v-avatar size="75" class="rounded-0">
        <v-img src="/public/circuit.png"></v-img>
        </v-avatar> -->
    </v-app-bar>
    <router-view v-slot="{ Component, route, }">
      <!-- <div  class="circle-2 bg-purple-darken-4 pa-15">
      </div> -->
      <Transition :name="$route.meta.transition || 'slide-down'">
        <component :is="Component"></component>
      </Transition>
    </router-view>  
  </v-app>
</template>

<script setup>

</script>

<style  scoped>

.circle-2{
  background-color: red;
  position: fixed;
  top: 10%;
  left: 5%;
  z-index: 100;
  border-radius: 50%;
}




#app{
  background: rgb(32, 32, 32);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: .4s ease-in-out;
}

.slide-down-enter-from{
  transform: translateY(-100%);
}
.slide-down-leave-to {
  transform: translateY(100%);
}

.slide-down-reverse-enter-active,
.slide-down-reverse-leave-active {
  transition: .4s ease-in-out;

}

.slide-down-reverse-enter-from{
  transform: translateY(100%);
}
.slide-down-reverse-leave-to {
  transform: translateY(-100%);
}


</style>