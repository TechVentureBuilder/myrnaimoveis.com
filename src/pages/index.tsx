import type { NextPage } from "next"
import Button from "../components/Button"
import Container from "../components/Container"
import InputNumber from "../components/form/InputNumber"
import InputText from "../components/form/InputText"
import Select from "../components/form/Select"
import Pagination from "../components/Pagination"

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
			<InputNumber
				name="number"
				label="Number"
				min={0}
				max={5}
				iconName="bed"
			/>
			<br />
			<Select
				label="Bairro"
				placeholder="Selecione o Bairro"
				name="bairro"
				iconName="local"
				options={[
					{
						display: "Ipiranga",
						value: "ipiranga",
					},
					{
						display: "Vila Mariana",
						value: "vila-mariana",
					},
					{
						display: "Morumbi",
						value: "morumbi",
					},
					{
						display: "Ibirapuera",
						value: "ibirapuera",
					},
					{
						display: "Bosque da Saúde",
						value: "bosque-da-saude",
					},
					{
						display: "Moema",
						value: "moema",
					},
					{
						display: "Mooca",
						value: "mooca",
					},
				]}
			/>
			<Pagination page={5} amount={9}></Pagination>
		</Container>
	)
}

export default Home
