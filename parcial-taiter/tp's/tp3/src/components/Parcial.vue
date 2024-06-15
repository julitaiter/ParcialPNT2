<template>
    <div>
        <input v-model="inputText" type="text" placeholder="Escribiendo..." />
        <p>Cantidad de caracteres: {{ contarCaracteres }}</p>
        <p><u>1. Codificado:</u> {{ codificarTexto }}</p>
        <p><u>2. Mayúscula:</u> {{ this.inputText.toUpperCase() }}</p>
        <p><u>3. Minúscula:</u> {{ this.inputText.toLowerCase() }}</p>
        <p><u>4. May/Min:</u> {{ alternarMayMin }}</p>
        <p><u>5. Min/May:</u> {{ alternarMinMay }}</p>

        <hr>

        <p>Respuestas:</p>
        <ol>
            <li>C</li>
            <li>C</li>
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
            inputText: ''
        };
    },
    computed: {
        contarCaracteres() {
            return this.inputText.length;
        },
        codificarTexto() {
            let codificacion = '';
            const textoMinus = this.inputText.toLowerCase();
            for (let char of textoMinus) {
                switch (char) {
                    case 'a':
                        codificacion += 'u';
                        break;
                    case 'e':
                        codificacion += 'o';
                        break;
                    case 'i':
                        codificacion += 'i';
                        break;
                    case 'o':
                        codificacion += 'e';
                        break;
                    case 'u':
                        codificacion += 'a';
                        break;
                    default:
                        codificacion += char;
                }
            }
            return codificacion;
        },
        alternarMayMin() {
            let alternacion = '';
            const textoMinus = this.inputText.toLowerCase();
            for (let i = 0; i < textoMinus.length; i++) {
                alternacion += i % 2 === 0 ? textoMinus[i].toUpperCase() : textoMinus[i];
            }
            return alternacion;
        },
        alternarMinMay() {
            let alternacion = '';
            const textoMinus = this.inputText.toLowerCase();
            for (let i = 0; i < textoMinus.length; i++) {
                alternacion += i % 2 === 0 ? textoMinus[i] : textoMinus[i].toUpperCase();
            }
            return alternacion;
        }
    }
};
</script>

<style scoped></style>