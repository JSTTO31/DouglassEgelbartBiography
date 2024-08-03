<template>
    <v-layout style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" id="layout-bio">
        <v-main id="main-bio" class="py-15">
            <h1 class="text-h3 text-grey-lighten-1 mb-5 text-center mt-15"
                style="font-family: 'Roboto', sans-serif; font-weight: 500;">
                Best Awards
                <v-icon size="50">mdi-medal</v-icon>
            </h1>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card class="pa-2 rounded-lg d-flex align-start h-100" color="grey-darken-3">
                            <v-col cols="12">
                                <h3>Turing Award</h3>
                                <p>
                                    In 1997, Engelbart was honored with the Association for Computing Machinery (ACM) Turing
                                    Award, considered the Nobel Prize of computing. He received this prestigious award for
                                    his pioneering work in human-computer interaction, including the invention of the
                                    computer mouse and his visionary contributions to interactive computing
                                </p>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-2 rounded-lg d-flex align-start h-100" color="grey-darken-3">
                            <v-col cols="12">
                                <h3>National Medal of Technology</h3>
                                <p>
                                    In 2000, Engelbart was awarded the National Medal of Technology by President Bill
                                    Clinton. This award recognized Engelbart's significant impact on the development of
                                    computing technology and his contributions to advancing human-computer interaction and
                                    collaboration.
                                </p>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="pa-2 my-4 rounded-lg d-flex align-start h-100" color="grey-darken-3">
                            <v-col cols="12">
                                <h3>ACM Fellow</h3>
                                <p>
                                    Engelbart was named a Fellow of the Association for Computing Machinery (ACM) in recognition
                                    of
                                    his outstanding contributions to the field of computing. ACM Fellows are selected for their
                                    significant achievements in advancing the science and practice of computing.
                                </p>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-2 my-4 rounded-lg d-flex align-start h-100" color="grey-darken-3">
                        <v-col cols="12">
                            <h3>Internet Hall of Fame</h3>
                            <p>
                                In 2013, Engelbart was posthumously inducted into the Internet Hall of Fame for his
                                visionary
                                contributions to the development and evolution of the internet. His work laid the foundation
                                for
                                many of the technologies and innovations that form the basis of the modern internet.
                            </p>
                        </v-col>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
let timer = null
const nextPage = (event) => {
    if (!timer) {
        timer = setTimeout((e) => {
            if (event.deltaY > 1) {
                router.push({ name: 'gallery' })
            } else {
                router.push({ name: 'bio' })
            }

            if (timer) {
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

<style scoped></style>