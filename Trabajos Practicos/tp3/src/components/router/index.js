import { createMemoryHistory, createRouter } from 'vue-router'
import FormularioVista from '@/views/FormularioVista.vue'
import UsuariosVista from '@/views/UsuariosVista.vue'

const routes = [
  { path: '/', component: FormularioVista },
  { path: '/usuarios', component: UsuariosVista },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router