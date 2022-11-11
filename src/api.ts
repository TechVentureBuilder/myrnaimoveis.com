import axios from "axios"
import { cacheAdapterEnhancer } from "axios-extensions"

let baseURL: string
let mode = process.env.NODE_ENV

if (mode == "development" || mode == "test") {
	baseURL = "http://localhost:8080"
} else {
	baseURL = "https://api.myrnaimoveis.com"
}

const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
	adapter: cacheAdapterEnhancer(axios.defaults.adapter!),
})

export default api
