import {createRouter, createWebHistory} from 'vue-router'
import Intro from '../pages/intro.vue'
import Bio from '../pages/bio.vue'
import Achievements from '../pages/achievements.vue'
import Gallery from '../pages/gallery.vue'

const routes = [
    {
        path: '',
        name: 'intro',
        component: Intro,
        meta: {
            transition: 'slide-down'
        }
    },
    {
        path: '/biography',
        name: 'bio',
        component: Bio,
        meta: {
            transition: 'slide-down-reverse'
        }

    },
    {
        path: '/achievements',
        name: 'achievements',
        component: Achievements,
        meta: {
            transition: 'slide-down-reverse'
        }

    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: {
            transition: 'slide-down-reverse'
        }

    },
]




const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router