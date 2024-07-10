<template>
    <div>
        <label for="cantidad">Monto en Pesos $ </label>
        <input type="number" v-model.number="pesos" id="cantidad"><br>

        <label for="cotizacion">Cotización del Dólar $ </label>
        <input type="number" v-model.number="cotizacion" id="cotizacion" :disabled="autoActualizar">

        <label for="autoActualizar"> Actualizar Automáticamente:</label>
        <input type="checkbox" v-model="autoActualizar" id="autoActualizar">

        <p v-if="autoActualizar">Última Actualización: {{ ultimaActualizacion }}</p>

        <p v-if="cotizacion && pesos">Cantidad en Dólares US$ {{ convertirADolares() }}</p>

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
import axios from 'axios';


export default {
    name: 'App',
    data() {
        return {
            pesos: null,
            cotizacion: null,
            autoActualizar: false,
            ultimaActualizacion: null
        };
    },
    watch: {
        actualizando(newValue) {
            if (newValue) {
                this.actualizarCotizacionAutomaticamente();
            } else {
                this.detenerActualizacionAutomatica();
            }
        }
    },
    methods: {
        async obtenerCotizacionYActualizar() {
            try {
                const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
                this.cotizacion = response.data.blue.value_sell
                this.ultimoUpdate = Date.now()
            } catch (error) {
                console.error('Error al obtener la cotización y actualizar:', error);
            }
        },
        async actualizarCotizacionAutomaticamente() {
            await this.obtenerCotizacionYActualizar();
            this.intervalo = setInterval(async () => {
                await this.obtenerCotizacionYActualizar();
            }, 2000);
        },
        detenerActualizacionAutomatica() {
            clearInterval(this.intervalo);
            this.intervalo = null;
        },
        convertirADolares() {
            return (this.pesos / this.cotizacion).toFixed(2);
        },
        activarActualizacionAutomatica() {
            if (this.autoActualizar) {
                this.intervalId = setInterval(this.obtenerCotizacion, 120000);
            } else {
                clearInterval(this.intervalId);
            }
        }
    },
    created() {
        this.obtenerCotizacionYActualizar();

        setInterval(() => {
            if (this.autoActualizar) {
                this.obtenerCotizacionYActualizar();
            }
        }, 2000);
    }
};
</script>