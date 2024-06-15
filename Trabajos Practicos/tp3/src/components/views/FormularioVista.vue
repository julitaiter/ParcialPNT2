<template>
    <div class="container">
      <h1>Formulario</h1>
      <form @submit.prevent="manejarEnvio">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre" @input="validarNombre" />
          <div v-if="errores.nombre" class="alert alert-danger">{{ errores.nombre }}</div>
        </div>
        <div class="form-group">
          <label for="edad">Edad</label>
          <input type="number" class="form-control" id="edad" v-model="edad" @input="validarEdad" />
          <div v-if="errores.edad" class="alert alert-danger">{{ errores.edad }}</div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" @input="validarEmail" />
          <div v-if="errores.email" class="alert alert-danger">{{ errores.email }}</div>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <h2>Datos Ingresados</h2>
      <table class="table" v-if="enviado">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ nombre }}</td>
            <td>{{ edad }}</td>
            <td>{{ email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        edad: '',
        email: '',
        errores: {},
        enviado: false
      }
    },
    methods: {
      validarNombre() {
        if (this.nombre.length < 5 || this.nombre.length > 15) {
          this.errores.nombre = 'El nombre debe tener entre 5 y 15 caracteres.'
        } else {
          delete this.errores.nombre
        }
      },
      validarEdad() {
        if (this.edad < 18 || this.edad > 120) {
          this.errores.edad = 'La edad debe estar entre 18 y 120 años.'
        } else {
          delete this.errores.edad
        }
      },
      validarEmail() {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        if (!patronEmail.test(this.email)) {
          this.errores.email = 'El email no es válido.'
        } else {
          delete this.errores.email
        }
      },
      manejarEnvio() {
        this.validarNombre()
        this.validarEdad()
        this.validarEmail()
        if (Object.keys(this.errores).length === 0) {
          this.enviado = true
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  