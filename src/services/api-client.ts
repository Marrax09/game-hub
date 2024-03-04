import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a410cfcbed4a4966bd743b53c5472ca5'
    }
})