import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import routes from './routes'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(routes).mount('#app')
