<template>
  <v-layout style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" id="layout-intro">
    <v-main id="gallery-container"  style="overflow: hidden;padding-block: 150px;padding-inline: 150px;" >
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <v-card class="rounded-0" style="user-select: none;">
                <v-img  cover aspect-ratio="1.22" draggable="false" :src="'/public/gallery/gallery-' + current + '.jpg'" ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6" class="d-flex flex-wrap">
              <v-col v-for="n in 9" cols="3" class="pt-0"> 
                <v-card :style="current == n ? 'border: 5px solid white' : ''" class="rounded-0" style="user-select: none;" @click="current = n">
                  <v-img  cover aspect-ratio="1" draggable="false" :src="'/public/gallery/gallery-'+ n + '.jpg'" ></v-img>
                </v-card>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
  </v-layout>
</template>
  
<script setup>
import {useRouter} from 'vue-router'
import { onBeforeRouteLeave } from 'vue-router'
import { onMounted, ref } from 'vue';
const current = ref(1)
const router = useRouter()
let timer = null;
const nextPage =  (event) => {
    if(!timer){
      timer = setTimeout((e) => {
          if(event.deltaY == 100){
              router.push({name: 'intro'})
          }else{
              router.push({name: 'achievements'})
          }

          clearTimeout(timer)
      }, 500)
    }
}
onMounted(() => {
  window.addEventListener('wheel', nextPage)
})


onBeforeRouteLeave((to, from, next) => {
  removeEventListener('wheel', nextPage)
  // from.meta.transition = ''
  return next()
})
</script>
  
<style scoped>
#gallery-container{
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>