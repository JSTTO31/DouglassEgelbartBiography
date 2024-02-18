<template>
    <v-layout style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" id="layout-bio">
        <div class="circle bg-purple-darken-4" style="z-index: 10;"></div>
        <v-card id="bart" flat class="rounded-0 pa-0 bg-transparent rounded-xl" style="z-index: 20;">
            <v-img class="w-100" src="/public/engelbart.png"></v-img>
        </v-card>
        <v-main id="main-bio" class="px-10" style="z-index: 20;padding-top: 110px;">
            <v-card width="65%" id="container" height="625" style="overflow-y: scroll;" flat color="transparent">
                <v-card-text>
                    <h1 class="text-h2" style="font-family: 'Lato', sans-serif;font-weight: 500;">Douglas Engelbart: Pioneer
                        of
                        Human-Computer Interaction</h1>
                    <div class="my-10">
                        <h2>The Invention of the Computer Mouse</h2>
                        <p class="mt-5">
                            In 1963, while working at the Stanford Research Institute (SRI), Engelbart conceptualized and
                            developed the computer mouse, a device that revolutionized the way users interacted with
                            computers.
                            The mouse, along with other innovations such as graphical user interfaces and hypertext, was
                            showcased in his landmark demonstration known as "The Mother of All Demos" in 1968.
                        </p>
                    </div>
                    <div class="my-10">
                        <h2>
                            Vision of Augmented Human Intellect
                        </h2>
                        <p class="mt-5">
                            Engelbart believed in the power of computing to augment human intellect and enhance
                            collaboration.
                            He coined the term "Augmented Human Intellect" to describe his vision of computers as tools that
                            could amplify human cognitive abilities and facilitate collective problem-solving on a global
                            scale.

                        </p>
                    </div>
                    <div class="my-10">
                        <h2>Legacy and Recognition</h2>
                        <p class="mt-5">

                            Throughout his career, Engelbart received numerous awards and honors for his pioneering work in
                            computing, including the National Medal of Technology, the Turing Award, and induction into the
                            Internet Hall of Fame. His legacy continues to inspire researchers, engineers, and innovators in
                            the
                            field of human-computer interaction and collaborative computing.
                        </p>
                    </div>
                </v-card-text>
            </v-card>

        </v-main>
    </v-layout>
</template>

<script setup>
import {useRouter, onBeforeRouteLeave} from 'vue-router'
import {onMounted} from 'vue'
const router = useRouter()
let timer = null
const nextPage =  (event) => {
    if(!timer){
      timer = setTimeout((e) => {
          if(event.deltaY == 100){
              router.push({name: 'achievements'})
          }else{
              router.push({name: 'intro'})
          }

          if(timer){
            clearTimeout(timer)
          }
      }, 500)
    }
}

onMounted(() => {
    window.addEventListener('wheel', nextPage)
})


onBeforeRouteLeave((to, from, next) => {
    removeEventListener('wheel', nextPage)
    return next()
})
</script>

<style scoped>
#container::-webkit-scrollbar{
    width: 10px;
}

#container:hover::-webkit-scrollbar-thumb{
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 25px;
}
.circle {
    position: absolute;
    bottom: -25%;
    right: -10%;
    height: 800px;
    width: 800px;
    border-radius: 50%;
}

#bart {
    position: absolute;
    right: -30%;
    bottom: 0;
    height: 90vh;
    width: 100%;
    filter: grayscale(100%);
}

/* #layout-bio{
    background: rgb(55, 55, 55);
    background: radial-gradient(at top, rgba(55, 55, 55, 1) 0%, rgba(0, 0, 0, 1) 100%);
} */



#main-bio {}</style>