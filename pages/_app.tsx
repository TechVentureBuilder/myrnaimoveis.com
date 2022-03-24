import type { AppProps } from 'next/app'
import ThemeComponent from '../styles/ThemeComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeComponent>
      <Component {...pageProps} />
    </ThemeComponent>
  )
}

export default MyApp
