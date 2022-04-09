import type { NextPage } from "next"
import styled from "styled-components"
import Container from "../components/Container"
import Pagination from "../components/Pagination"
import Products from "../components/Products"
import Search from "../components/Search"
import { Product } from "../types/Product"

const CatalogoContainer = styled(Container)`
	padding-top: ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
`

const Catalogo: NextPage = (props) => {
	let products = []
	for (let i = 0; i < 6; i++) {
		products.push({
			name: "Nome do Empreendimento",
			slug: "nome-do-empreendimento",
			neighborhood: "Nome do Bairro",
			city: "Nome da Cidade",
			state: "Sigla do Estado",
			area: { min: 123, max: 321 },
			bedrooms: { min: 1, max: 6 },
			bathrooms: { min: 1, max: 6 },
			price: 1000000,
		} as Product)
	}

	return (
		<>
			<CatalogoContainer>
				<Search direction="row"></Search>
			</CatalogoContainer>
			<Products products={products}></Products>
			<Pagination amount={7} page={1} />
		</>
	)
}

export default Catalogo
