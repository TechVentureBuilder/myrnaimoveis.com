import axios from "axios"

let baseURL: string

if (process.env.MODE == "prod") {
	baseURL = "https://api.myrnaimoveis.com"
} else {
	baseURL = "http://localhost:8080"
}

const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
})

export default api
