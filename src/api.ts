import axios from "axios"

let baseURL: string

if ((process.env.MODE = "dev")) {
	baseURL = "http://localhost:8080"
} else {
	baseURL = "https://api.myrnaimoveis.com"
}

const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
})

export default api
