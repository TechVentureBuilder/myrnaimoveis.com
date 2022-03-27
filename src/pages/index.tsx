import type { NextPage } from 'next'
import Button from '../components/Button'
import Container from '../components/Container'
import NumberInput from '../components/form/NumberInput'
import InputText from '../components/form/InputText'

const Home: NextPage = (props) => {
	return (
		<Container>
			<h1>Início</h1>
			<Button text="Botão Primário" iconName="myrna" />
			<br />
			<Button text="Botão Secundário" iconName="myrna" variant="secondary" />
			<br />
			<Button text="Botão Terciário" iconName="myrna" variant="tertiary" />
			<br />
			<Button text="Botão Perigo" iconName="myrna" variant="danger" />
			<br />
			<InputText name="name" label="Nome" placeholder="Digite aqui seu nome" />
			<br />
			<InputText
				name="email"
				label="Email"
				placeholder="Digite seu email"
				iconName="envelope"
			/>
			<br />
			<NumberInput
				name="number"
				label="Number"
				placeholder="0"
				min={0}
				max={5}
			/>
		</Container>
	)
}

export default Home
