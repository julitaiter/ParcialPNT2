<template>
    <div>
        <div>
            <label for="pesos">Ingrese monto $ </label>
            <input type="number" id="pesos" v-model.number="pesos">
        </div>
        <div>
            <label for="cotizacion">Valor del Dólar en $ </label>
            <input type="number" id="cotizacion" v-model.number="cotizacion">
        </div>
        <div>
            <label for="resultado">Valor convertido USD {{ resultado }}</label>
        </div>
        <hr>

        <p>Respuestas:</p>
        <ol>
            <li>B</li>
            <li>B</li>
            <li>C</li>
            <li>E</li>
            <li>A</li>
        </ol>

        <hr>

        <footer>Julian Taiter - Curso: 21E</footer>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
    return {
      pesos: null,
      cotizacion: null
    };
  },
  computed: {
    resultado() {
      if (this.cotizacion === 0) return 0;
      return (this.pesos / this.cotizacion).toFixed(2);
    }
  }};
</script>

<style scoped></style>