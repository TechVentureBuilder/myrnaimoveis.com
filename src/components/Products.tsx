import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Container from "./Container"
import Icon from "./Icon"

const ProductsContainer = styled(Container)`
	text-align: center;
	padding: ${(props) => props.theme.sizes.l} ${(props) => props.theme.sizes.m}
		${(props) => props.theme.sizes.xxl} ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: ${(props) => props.theme.sizes.xl};
	box-sizing: border-box;
`

const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: ${(props) => props.theme.sizes.m};
	box-sizing: border-box;
	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.text};
	}
`

const Product = styled.div`
	background-color: ${(props) => props.theme.colors.card};
	border: ${(props) => props.theme.border.width} solid;
	border-color: ${(props) => props.theme.colors.card};
	padding: ${(props) => props.theme.sizes.m};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	text-align: start;
`

const ProductImage = styled.div`
	width: 100%;
	height: 16rem;
	background-color: ${(props) => props.theme.colors.bg};
`

const Local = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	height: fit-content;
	gap: ${(props) => props.theme.sizes.xs};
`

export type Product = {
	name: string
	slug: string
	neighborhood: string
	city: string
	state: string
	area: { min: number; max: number }
	bedrooms: { min: number; max: number }
	bathrooms: { min: number; max: number }
	price: number
	image: string
}

type Props = {
	title: string
	products: Array<Product>
}

const Products: React.FC<Props> = (props) => {
	return (
		<ProductsContainer>
			<h2>{props.title}</h2>
			<ProductsGrid>
				{props.products.map((product, index) => (
					<Link href={"/product"} key={index}>
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
							</Product>
						</a>
					</Link>
				))}
			</ProductsGrid>
		</ProductsContainer>
	)
}

export default Products
