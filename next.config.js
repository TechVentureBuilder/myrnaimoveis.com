/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["localhost", "https://api.myrnaimoveis.com"],
	},
}

module.exports = nextConfig
