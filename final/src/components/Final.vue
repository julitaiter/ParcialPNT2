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
                this.ultimaActualizacion = this.obtenerFechaHoraActual()
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
        },
        obtenerFechaHoraActual() {
            const ahora = new Date();

            // Obtener día, mes y año
            let dia = ahora.getDate();
            let mes = ahora.getMonth() + 1; // Los meses van de 0 a 11, por lo tanto se suma 1
            let año = ahora.getFullYear();

            // Obtener hora, minutos y segundos
            let horas = ahora.getHours();
            let minutos = ahora.getMinutes();
            let segundos = ahora.getSeconds();

            // Asegurarse de que los valores tengan dos dígitos
            dia = (dia < 10) ? '0' + dia : dia;
            mes = (mes < 10) ? '0' + mes : mes;
            horas = (horas < 10) ? '0' + horas : horas;
            minutos = (minutos < 10) ? '0' + minutos : minutos;
            segundos = (segundos < 10) ? '0' + segundos : segundos;

            // Formatear la fecha y hora
            const fechaHoraFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

            return fechaHoraFormateada;
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