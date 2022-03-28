export const theme = {
	colors: {
		primary: {
			default: '#AE2869',
			dark: '#571334',
			darker: '#831E4F',
			lighter: '#C25E8E',
			light: '#D693B3',
		},
		white: '#FDFAFB',
		light: '#F8F1F4',
		lighter: '#B99DAA',
		darker: '#6A535E',
		dark: '#311C26',
		black: '#13090E',
		get main() {
			return this.primary.default
		},
		get text() {
			return this.white
		},
		get inactive() {
			return this.lighter
		},
		get placeholder() {
			return this.darker
		},
		get card() {
			return this.dark
		},
		get bg() {
			return this.black
		},
	},
	sizes: {
		xs: '0.5rem', // 8px
		s: '0.75rem', // 12px
		m: '1rem', // 16px
		l: '2rem', // 32px
		xl: '3rem', // 48px
		interaction: '2.625rem',
	},
	screens: {
		s: '576px',
		m: '768px',
		l: '992px',
		xl: '1200px',
		xxl: '1400px',
	},
	font: {
		families: {
			sans: 'Outfit, sans-serif',
			serif: `'Cormorant Garamond', serif`,
		},
		weights: {
			light: 300,
			normal: 400,
			bold: 700,
		},
		sizes: {
			s: '0.875rem', // 14px
			p: '1rem', // 16px
			h3: '1.5rem', // 24px
			h2: '2.25rem', // 36px
			h1: '4rem', // 64px
		},
	},
	border: {
		width: '0.0625rem',
		radius: 'none',
	},
	transitions: {
		slow: '700ms ease-in-out',
		slower: '550ms ease-in-out',
		normal: '400ms ease-in-out',
		faster: '250ms ease-in-out',
		fast: '100ms ease-in-out',
	},
}

export type ThemeType = typeof theme
export default theme
