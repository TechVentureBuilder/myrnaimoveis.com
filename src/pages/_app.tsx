import type { AppProps } from 'next/app'
import '../styles/fonts.css' // Fonts
import ThemeComponent from '../styles/ThemeComponent' // Website Theme 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeComponent>
      <Component {...pageProps} />
    </ThemeComponent>
  )
}

export default MyApp
