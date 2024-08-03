<template>
  <v-layout style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" id="layout-intro">
    <v-main id="main" style="overflow-y: hidden;" >
      <v-avatar size="250" class="circle bg-purple-darken-4 pa-15" style="z-index: 5;">
      </v-avatar>
      <div class="card-1 bg-grey-darken-3 card-paralax" style="z-index: 5;">
      </div>
      <div class="card-2 bg-grey-darken-3 card-paralax" style="z-index: 5;">
      </div>
      <div id="background-text" style="z-index: 10;">
        <h1 class=" text-justify" style="">"The digital revolution is far more significant than the invention of writing
          or even of printing."</h1>
      </div>
      <div id="person" style="z-index: 20;">
        <v-avatar class="rounded-0" id="person-avatar">
          <img src="/public/douglass.png" id="person-image" class="h-100" />
        </v-avatar>
      </div>
      <v-card class="pa-8 rounded-0" elevation="5" color="teal-darken-1" id="card-name" style="z-index: 30;">
        <h1 style="font-family: 'Lato', cursive;">Douglas Engelbart</h1>
        <h3 style="font-family: 'Lato', cursive;font-weight: 400;">Pioneer of Human-Computer Interaction</h3>
      </v-card>
      <v-card id="some-text" @click.stop="clicked = !clicked" :class="clicked ? 'some-text-center' : ''"
        @click:outside="clicked = false" color="yellow-darken-2" width="550" class="pa-10 rounded-0"
        v-bind:ripple="false" style="z-index: 40;">
        <h2>Who is he?</h2>
        Douglas Engelbart (1925-2013) revolutionized computing with inventions like the mouse and his 1968 presentation,
        showcasing groundbreaking technologies. His work at the Stanford Research Institute laid the foundation for
        modern human-computer interaction, inspiring innovation in the digital age.
      </v-card>
      <span id="more"  class="d-flex flex-column align-center text-grey-lighten-2">
        <h3 class="mb-2  font-weight-regular">Scroll Down</h3>
        <v-icon size="43">mdi-mouse-move-down</v-icon>
      </span>
    </v-main>
  </v-layout>
</template>
  
<script setup>
import {useRouter} from 'vue-router'
import { onBeforeRouteLeave } from 'vue-router'
import { onMounted, ref } from 'vue';
const clicked = ref(false)
const router = useRouter()
let timer = null;
const nextPage =  (event) => {
    if(!timer){
      timer = setTimeout((e) => {
          if(event.deltaY > 1){
              router.push({name: 'bio'})
          }else{
              router.push({name: 'gallery'})
          }

          clearTimeout(timer)
      }, 500)
    }
}
onMounted(() => {
  const cards = document.querySelectorAll('.card-paralax')
  const person = document.getElementById('person')
  const backgroundText = document.getElementById('background-text')
  const personDensity = 430
  const backgroundTextDensity = 350
  const cardDenstity = 50

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX
    person.style.transform = `translateX(${x / personDensity}%)`
    backgroundText.style.transform = `translate(-${x / backgroundTextDensity}%)`
    cards.forEach((item) => {
      item.style.transform = `translate(-${x / cardDenstity}%) skew(45deg)`
    })
  })

  window.addEventListener('wheel', nextPage)

  document.onclick = () => {
    clicked.value = false
  }
})


onBeforeRouteLeave((to, from, next) => {
  removeEventListener('wheel', nextPage)
  // from.meta.transition = ''
  return next()
})
</script>
  
<style scoped>
#more{
  position: absolute;
  bottom: 3%;
  left: 45%;
  z-index: 100;
  animation: scaling 2.5s linear infinite;
}

@keyframes scaling {
  0%{
    transform: scale(.8);
  }
  50%{
    transform: scale(.9);
  }
  100%{
    transform: scale(.8);
  }
}

.circle{
  background-color: red;
  position: fixed;
  top: 10%;
  left: 5%;
  z-index: 100;
  border-radius: 50%;
}
.card-1 {
  height: 100vh;
  width: 500px;
  position: absolute;
  top: 0;
  left: -30%;
  z-index: 100;
  transform: skew(45deg);
  opacity: .2;
}

.card-2 {
  height: 100vh;
  width: 500px;
  position: absolute;
  top: 0;
  right: -35%;
  z-index: 100;
  box-shadow: 25px 25px 0px #000;
  transform: skew(45deg);
  opacity: .2;
}



/* #layout-intro{
    background: rgb(55, 55, 55);
    background: radial-gradient(at bottom, rgba(55, 55, 55, 1) 0%, rgba(0, 0, 0, 1) 100%);
    background-position-x: right;
  } */




#card-name {
  position: absolute;
  bottom: 5%;
  left: 12%;
}

#some-text {
  position: absolute;
  bottom: 22%;
  right: 5%;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  font-weight: 400;
  transition: .6s ease;
}

.some-text-center {
  transform: scale(1.5) translate(-50%, -20%);
  box-shadow: 45px 45px 5px rgba(25, 25, 25, .8);
}

#person {
  position: absolute;
  left: 25%;
  bottom: 0%;
}



#person-avatar {
  height: 88vh;
  width: 100vh;
}

#background-text {
  position: absolute;
  /* top: 25%; */
  top: 15%;
  left: 0;
  padding-inline: 150px;
  text-shadow: 15px 15px #000;
}

#background-text h1 {
  font-family: "PT Serif", serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 88px;
  user-select: none;
}

#card {
  position: absolute;
}
</style>