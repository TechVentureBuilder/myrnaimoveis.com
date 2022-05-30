import axios from "axios"
import type { GetServerSideProps, NextPage, NextPageContext } from "next"
import { ContextType, useState } from "react"
import styled from "styled-components"
import Container from "../components/Container"
import Icon from "../components/Icon"
import Products from "../components/Products"
import Search from "../components/Search"
import { Product } from "../types/Product"

const HeroBackground = styled.section`
	background-image: url("assets/img/hero.jpg");
	background-position: center;
`

export const getServerSideProps: GetServerSideProps = async () => {
	let products: []
	await axios
		.get("http://localhost:8080/products", {
			params: {
				limit: 12,
				page: 1,
			},
		})
		.then((result) => {
			console.log(result.data)
			products = result.data.products
		})
		.catch((err) => {
			console.log(err)
		})
	return {
		props: {
			products: products!,
		},
	}
}

const Hero = styled.div`
	background-color: ${(props) => props.theme.colors.card}bf;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	padding: ${(props) => props.theme.sizes.xl} ${(props) => props.theme.sizes.m};
	min-height: 75vh;
	position: relative;
	h1 {
		text-align: center;
	}
`

const SearchCard = styled.div`
	background-color: ${(props) => props.theme.colors.bg};
	padding: ${(props) => props.theme.sizes.m};
`

const FeaturesBackground = styled.section`
	width: 100%;
	padding: 0 ${(props) => props.theme.sizes.m};
	background-color: ${(props) => props.theme.colors.card};
	margin-bottom: ${(props) => props.theme.sizes.m};
`

const FeaturesGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	@media (max-width: ${(props) => props.theme.screens.m}) {
		grid-template-columns: 1fr;
	}
`

const Feature = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xs};
	padding: ${(props) => props.theme.sizes.xl};
	text-align: center;
`

type Props = {
	products: []
}

const Home: NextPage<Props> = (props) => {
	console.log(props.products)

	const products = props.products

	return (
		<>
			<HeroBackground>
				<Hero>
					<h1>Sonhos para chamar de lar</h1>
					<SearchCard>
						<Search direction="row" />
					</SearchCard>
				</Hero>
			</HeroBackground>
			<FeaturesBackground>
				<Container>
					<FeaturesGroup>
						<Feature>
							<Icon iconName="size" size="big"></Icon>
							<h3>Imoveis Na Planta</h3>
							<p>
								Empreendimentos luxuosos e modernos, para o futuro que você
								merece.
							</p>
						</Feature>
						<Feature>
							<Icon iconName="chat" size="big"></Icon>
							<h3>Atendimento Eficiente</h3>
							<p>
								Seja por email, telefone ou whats, estamos sempre dispostos a
								encontrar o que precisa.
							</p>
						</Feature>
						<Feature>
							<Icon iconName="local" size="big"></Icon>
							<h3>Ótimas Localizações</h3>
							<p>
								Perto dos melhores shoppings, restaurantes, teatros, cinemas,
								clubes e escolas.
							</p>
						</Feature>
					</FeaturesGroup>
				</Container>
			</FeaturesBackground>
			<Products title="Destaques" products={products}></Products>
		</>
	)
}

export default Home
