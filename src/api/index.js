import axios from "axios";

const mainUrl = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default mainUrl