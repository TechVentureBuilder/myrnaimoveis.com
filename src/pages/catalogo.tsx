import type { GetServerSideProps, NextPage } from "next"
import styled from "styled-components"
import api from "../api"
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	let products: Array<Product> = []
	let pages: number = 1
	if (context.query.cidade || context.query.bairro || context.query.quartos) {
		await api
			.post("/products/search", {
				limit: 12,
				page: context.query.pagina ? Number(context.query.pagina) : 1,
				city: context.query.cidade,
				neighborhood: context.query.bairro,
				bedrooms: context.query.quartos,
			})
			.then((result) => {
				products = result.data.products
				pages = result.data.totalPages
			})
			.catch((err) => {
				console.log(err)
			})
	} else {
		await api
			.post("/products/search", {
				limit: 12,
				page: context.query.pagina ? Number(context.query.pagina) : 1,
			})
			.then((result) => {
				products = result.data.products
				pages = result.data.totalPages
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return {
		props: {
			products: products,
			pages: pages,
			query: {
				city: context.query.cidade ? context.query.cidade : null,
				neighborhood: context.query.bairro ? context.query.bairro : null,
				bedrooms: context.query.quartos ? context.query.quartos : null,
				page: context.query.pagina ? context.query.pagina : 1,
			},
		},
	}
}

type Props = {
	products: Array<Product>
	pages: number
	query: {
		city: string
		neighborhood: string
		bedrooms: number
		page: number
	}
}

const Catalogo: NextPage<Props> = (props) => {
	return (
		<>
			<CatalogoContainer>
				<Search direction="row"></Search>
			</CatalogoContainer>
			<Products products={props.products}></Products>
			<Pagination amount={props.pages} page={props.query.page} />
		</>
	)
}

export default Catalogo
