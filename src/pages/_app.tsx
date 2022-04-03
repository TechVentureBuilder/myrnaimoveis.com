import type { AppProps } from "next/app"
import "../styles/fonts.css" // Fonts
import ThemeComponent from "../styles/ThemeComponent" // Website Theme
import NavBar from "../components/NavBar"
import PopupProvider from "../contexts/PopupContext"
import Contact from "../components/Contact"
import Popup from "../components/Popup"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeComponent>
			<PopupProvider>
				<NavBar />
				<Component {...pageProps} />
			</PopupProvider>
		</ThemeComponent>
	)
}

export default MyApp
