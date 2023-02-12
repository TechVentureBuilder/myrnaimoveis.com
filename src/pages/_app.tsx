import type { AppProps } from "next/app"
import "../styles/fonts.css" // Fonts
import ThemeComponent from "../styles/ThemeComponent" // Website Theme
import NavBar from "../components/NavBar"
import PopupProvider from "../contexts/PopupContext"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeComponent>
			<PopupProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</PopupProvider>
		</ThemeComponent>
	)
}

export default MyApp
