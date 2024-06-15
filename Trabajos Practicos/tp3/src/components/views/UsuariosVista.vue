<template>
    <div class="container">
      <h1>Usuarios</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefono }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        usuarios: []
      }
    },
    created() {
      this.obtenerUsuarios()
    },
    methods: {
      obtenerUsuarios() {
        axios.get('https://mockapi.io/endpoint/usuarios')
          .then(respuesta => {
            this.usuarios = respuesta.data
          })
          .catch(error => {
            console.error('Error al obtener los usuarios:', error)
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  