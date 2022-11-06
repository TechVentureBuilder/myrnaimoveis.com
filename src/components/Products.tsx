import Link from "next/link"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Container from "./Container"
import Icon from "./Icon"
import { Product } from "../types/Product"
import api from "../api"
import Loading from "./Loading"

const ProductsContainer = styled(Container)`
	text-align: center;
	padding-top: ${(props) => props.theme.sizes.m};
	padding-bottom: ${(props) => props.theme.sizes.m};
	background-color: ${(props) => props.theme.colors.card};
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
	background-color: ${(props) => props.theme.colors.card};
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
	transition: ${(props) => props.theme.transitions.normal};
	border-radius: ${(props) => props.theme.border.radius};
`

type ProductImageProps = {
	productId: string
}

const ProductImageLoaded = (props: ProductImageProps) => {
	const [imageData, setImageData] = useState("")

	useEffect(() => {
		api
			.get("/thumbs", {
				params: {
					_id: props.productId,
				},
			})
			.then((result) => {
				setImageData(result.data.thumb)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [props.productId])

	return (
		<ProductImage
			style={{
				backgroundImage: `url(${imageData})`,
			}}
		>
			{imageData == "" && <Loading />}
		</ProductImage>
	)
}

const Product = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.colors.white};
	border: ${(props) => props.theme.border.width} solid;
	border-color: ${(props) => props.theme.colors.card};
	border-radius: 0.5rem;
	padding: ${(props) => props.theme.sizes.m};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	text-align: start;
	transition: ${(props) => props.theme.transitions.fast};
	:hover {
		border-color: ${(props) => props.theme.colors.lighter};
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
	@media (max-width: ${(props) => props.theme.screens.s}) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: ${(props) => props.theme.sizes.m};
		grid-auto-flow: row;
	}
`

const Detail = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: ${(props) => props.theme.sizes.xs};
	@media (max-width: ${(props) => props.theme.screens.m}) {
	}
`

type Props = {
	title?: string
	products: Array<Product>
	className?: string
}

const Products: React.FC<Props> = (props) => {
	const Title = () => {
		if (!props.title) {
			return null
		}

		return <h2>{props.title}</h2>
	}

	return (
		<ProductsContainer className={props.className}>
			<Title />
			<ProductsGrid>
				{props.products.map((product, index) => (
					<Link href={"/produto/" + product._id} key={index}>
						<a target={"_blank"}>
							<Product>
								<ProductImageLoaded productId={product._id!} />
								<h3>{product.name}</h3>
								<Local>
									<Icon iconName="local" />
									<p>
										{product.address.neighborhood} - {product.address.city},{" "}
										{product.address.state}
									</p>
								</Local>
								<Details>
									<Detail>
										<Icon iconName="size" />
										<p>
											{product.size.min !== product.size.max ? (
												<>
													{product.size.min} a {product.size.max}m²
												</>
											) : (
												<>{product.size.max}m²</>
											)}
										</p>
									</Detail>
									<Detail>
										<Icon iconName="bed" />
										<p>
											{product.bedrooms.min !== product.bedrooms.max ? (
												<>
													{product.bedrooms.min} a {product.bedrooms.max}{" "}
													Quartos
												</>
											) : (
												<>{product.bedrooms.max} Quartos</>
											)}
										</p>
									</Detail>
									<Detail>
										<Icon iconName="bathtub" />
										<p>
											{product.bathrooms.min !== product.bathrooms.max ? (
												<>
													{product.bathrooms.min} a {product.bathrooms.max}{" "}
													Banheiros
												</>
											) : (
												<>{product.bathrooms.max} Banheiros</>
											)}
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
