import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import theme from './theme'

type Props = {
	children: JSX.Element
}

const ThemeComponent = ({ children }: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

export default ThemeComponent
