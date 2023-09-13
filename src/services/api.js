import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketnotes-86qn.onrender.com"
});