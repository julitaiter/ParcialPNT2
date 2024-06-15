import Vue from 'vue'
import Router from 'vue-router'
import FormularioVista from '@/views/FormularioVista.vue'
import UsuariosVista from '@/views/UsuariosVista.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Formulario',
      component: FormularioVista
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: UsuariosVista
    }
  ]
})
