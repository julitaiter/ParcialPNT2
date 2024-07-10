import axios from "axios";

const URL_API = 'https://api.bluelytics.com.ar/v2/latest'

export const get = async () => {
    try {
        const { data: cotizaciones } = await axios.get(URL_API)
        return cotizaciones
    }
    catch(error) {
        console.error("Error productos GET:", error);
        return []
    }
}
