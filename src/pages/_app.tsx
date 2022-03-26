import type { AppProps } from "next/app";
import "../styles/fonts.css"; // Fonts
import ThemeComponent from "../styles/ThemeComponent"; // Website Theme
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeComponent>
			<>
				<NavBar />
				<Component {...pageProps} />
			</>
		</ThemeComponent>
	);
}

export default MyApp;
