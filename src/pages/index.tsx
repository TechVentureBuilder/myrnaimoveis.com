import type { GetServerSideProps, NextPage, NextPageContext } from "next"
import styled from "styled-components"
import api from "../api"
import Container from "../components/Container"
import Icon from "../components/Icon"
import Products from "../components/Products"
import Search from "../components/Search"
import { Product } from "../types/Product"
import Head from "next/head"
import { motion } from "framer-motion"

export const getServerSideProps: GetServerSideProps = async () => {
	let products: Array<Product> = []
	await api
		.get("/products", {
			params: {
				limit: 12,
				page: 1,
			},
		})
		.then((result) => {
			products = result.data.products
		})
		.catch((err) => {
			console.log(err)
		})
	return {
		props: {
			products: products ? products : null,
		},
	}
}

type Props = {
	products: []
}

const Home: NextPage<Props> = (props) => {
	const products = props.products

	return (
		<StyledHome>
			<Head>
				<title>Myrna Imóveis</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<HeroBackground
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 100,
				}}
			>
				<Hero>
					<h1>Sonhos Para Chamar de Lar</h1>
					<SearchCard>
						<Search direction="row" />
					</SearchCard>
				</Hero>
			</HeroBackground>
			<FeaturesBackground>
				<Container>
					<FeaturesGroup>
						<Feature
							initial={{ opacity: 0, translateY: -50 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 100,
								delay: 0.2,
							}}
						>
							<Icon iconName="size" size="big"></Icon>
							<h3>Imoveis Na Planta</h3>
							<p>
								Empreendimentos luxuosos e modernos, para o futuro que você
								merece.
							</p>
						</Feature>
						<Feature
							initial={{ opacity: 0, translateY: -50 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 100,
								delay: 0.4,
							}}
						>
							<Icon iconName="chat" size="big"></Icon>
							<h3>Atendimento Eficiente</h3>
							<p>
								Seja por email, telefone ou whats, estamos sempre dispostos a
								encontrar o que precisa.
							</p>
						</Feature>
						<Feature
							initial={{ opacity: 0, translateY: -50 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 100,
								delay: 0.6,
							}}
						>
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
			<Products
				className="destaques"
				title="Destaques"
				products={products}
			></Products>
		</StyledHome>
	)
}

const StyledHome = styled.div`
	margin-bottom: ${(props) => props.theme.sizes.xl};
`

const HeroBackground = styled(motion.section)`
	background-image: url("/assets/img/hero.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`

const Hero = styled.div`
	background-color: ${(props) => props.theme.colors.card}E6;
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
	@media (max-width: ${(props) => props.theme.screens.m}) {
		h1 {
			max-width: 240px;
			font-size: ${(props) => props.theme.font.sizes.h2};
		}
	}
`

const SearchCard = styled.div`
	background-color: ${(props) => props.theme.colors.bg};
	padding: ${(props) => props.theme.sizes.m};
	border-radius: 0.5em;
`

const FeaturesBackground = styled.section`
	width: 100%;
	padding: 0 ${(props) => props.theme.sizes.m};
	background-color: ${(props) => props.theme.colors.white};
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

const Feature = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xs};
	padding: ${(props) => props.theme.sizes.xl};
	text-align: center;
`

export default Home
