import type { NextPage } from "next"
import Button from "../components/Button"
import ContactPopup from "../components/Contact"
import Container from "../components/Container"
import InputNumber from "../components/form/InputNumber"
import Pagination from "../components/Pagination"

const Home: NextPage = (props) => {
	return (
		<Container>
			<h1>Início</h1>
			<Button type="button" text="Botão Primário" iconName="myrna" />
			<br />
			<Button
				type="button"
				text="Botão Secundário"
				iconName="myrna"
				variant="secondary"
			/>
			<br />
			<Button
				type="button"
				text="Botão Terciário"
				iconName="myrna"
				variant="tertiary"
			/>
			<br />
			<Button
				type="button"
				text="Botão Perigo"
				iconName="myrna"
				variant="danger"
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
			<Pagination page={5} amount={9}></Pagination>
			<ContactPopup></ContactPopup>
		</Container>
	)
}

export default Home
