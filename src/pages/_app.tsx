import type { AppProps } from "next/app"
import "../styles/fonts.css" // Fonts
import ThemeComponent from "../styles/ThemeComponent" // Website Theme
import NavBar from "../components/NavBar"
import PopupProvider from "../contexts/PopupContext"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeComponent>
			<PopupProvider>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</PopupProvider>
		</ThemeComponent>
	)
}

export default MyApp
