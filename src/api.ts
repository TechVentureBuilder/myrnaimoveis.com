import axios from "axios"
import { setupCache } from "axios-cache-adapter"

let baseURL: string
let mode = process.env.NODE_ENV

if (mode == "development" || mode == "test") {
	baseURL = "http://localhost:8080"
} else {
	baseURL = "https://api.myrnaimoveis.com"
}

const cache = setupCache({
	maxAge: 120,
})

const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
	adapter: cache.adapter,
})

export default api
