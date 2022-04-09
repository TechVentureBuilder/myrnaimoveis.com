import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Container from "./Container"
import Icon from "./Icon"
import { Product } from "../types/Product"

const ProductsContainer = styled(Container)`
	text-align: center;
	padding-top: ${(props) => props.theme.sizes.m};
	padding-bottom: ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${(props) => props.theme.sizes.l};
`

const ProductsGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: ${(props) => props.theme.sizes.m};
	@media (max-width: ${(props) => props.theme.screens.xxl}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${(props) => props.theme.screens.xl}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${(props) => props.theme.screens.l}) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: ${(props) => props.theme.screens.m}) {
		grid-template-columns: 1fr;
	}
	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.text};
	}
`

const ProductImage = styled.div`
	width: 100%;
	height: 16rem;
	background-color: ${(props) => props.theme.colors.bg};
	background-size: 100%;
	background-position: center;
	transition: ${(props) => props.theme.transitions.faster};
`

const Product = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.colors.card};
	border: ${(props) => props.theme.border.width} solid;
	border-color: ${(props) => props.theme.colors.card};
	padding: ${(props) => props.theme.sizes.m};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	text-align: start;
	transition: ${(props) => props.theme.transitions.fast};
	:hover {
		border-color: ${(props) => props.theme.colors.main};
		${ProductImage} {
			background-size: 105%;
		}
	}
`

const Local = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xs};
`

const Details = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => props.theme.sizes.l};
`

const Detail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xs};
`

type Props = {
	title?: string
	products: Array<Product>
}

const Products: React.FC<Props> = (props) => {
	const Title = () => {
		if (!props.title) {
			return null
		}

		return <h2>{props.title}</h2>
	}

	return (
		<ProductsContainer>
			<Title />
			<ProductsGrid>
				{props.products.map((product, index) => (
					<Link href={"/produto/" + product.slug} key={index}>
						<a target={"_blank"}>
							<Product>
								<ProductImage style={{ backgroundImage: product.image }} />
								<h3>{product.name}</h3>
								<Local>
									<Icon iconName="local" />
									<p>
										{product.neighborhood} - {product.city}, {product.state}
									</p>
								</Local>
								<Details>
									<Detail>
										<Icon iconName="size" />
										<p>
											{product.area.min} a {product.area.max}m²
										</p>
									</Detail>
									<Detail>
										<Icon iconName="bed" />
										<p>
											{product.bedrooms.min} a {product.bedrooms.max} Quartos
										</p>
									</Detail>
									<Detail>
										<Icon iconName="bathtub" />
										<p>
											{product.bathrooms.min} a {product.bathrooms.max}{" "}
											Banheiros
										</p>
									</Detail>
								</Details>
							</Product>
						</a>
					</Link>
				))}
			</ProductsGrid>
		</ProductsContainer>
	)
}

export default Products
