import type { GetServerSideProps, NextPage } from "next"
import styled from "styled-components"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import { Product } from "../../types/Product"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery"
import Contact from "../../components/Contact"
import api from "../../api"
import Loading from "../../components/Loading"
import Head from "next/head"

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			_id: context.params!._id,
		},
	}
}

type Props = {
	_id: string
}

const Product: NextPage<Props> = (props) => {
	const [productInfo, setProductInfo] = useState<Product>()

	useEffect(() => {
		api
			.get("/products", {
				params: {
					_id: props._id,
				},
			})
			.then((result) => {
				setProductInfo(result.data.product)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [props._id])

	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	if (!productInfo) {
		return <StyledLoading />
	}

	return (
		<ProductWrapper>
			<ProductContainer>
				<Head>
					<title>{productInfo.name} - Myrna Imóveis</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<Gallery id={productInfo._id!} />
				<h2>{productInfo.name}</h2>
				<div className="sub-info">
					{/* <div className="sub-info-left"> */}
					<Icon iconName="local" />
					{`${productInfo.address.neighborhood} - ${productInfo.address.city}, ${productInfo.address.state}`}
					{/* </div> */}
					{/* <div className="sub-info-right">R${productInfo.price}</div> */}
				</div>
				<div className="info-grid">
					<div className="info">
						<ProductInfoGrid>
							<div className="info-grid-item">
								<Icon iconName="size" />
								{productInfo.size.min !== productInfo.size.max
									? `${productInfo.size.min} a ${productInfo.size.max}m²`
									: `${productInfo.size.min}m²`}
							</div>
							<div className="info-grid-item">
								<Icon iconName="bed" />
								{productInfo.bedrooms.min !== productInfo.bedrooms.max
									? `${productInfo.bedrooms.min} a ${productInfo.bedrooms.max} Quartos`
									: `${productInfo.bedrooms.min} Quarto(s)`}
							</div>
							<div className="info-grid-item">
								<Icon iconName="bathtub" />
								{productInfo.bathrooms.min !== productInfo.bathrooms.max
									? `${productInfo.bathrooms.min} a ${productInfo.bathrooms.max} Banheiros`
									: `${productInfo.bathrooms.min} Banheiro(s)`}
							</div>
							<div className="info-grid-item">
								<Icon iconName="car" />
								{productInfo.parking.min !== productInfo.parking.max
									? `${productInfo.parking.min} a ${productInfo.parking.max} Vagas`
									: `${productInfo.parking.min} Vaga(s)`}
							</div>
						</ProductInfoGrid>
						<h3>Descrição</h3>
						<p className="description">{productInfo.description}</p>
						<h3>Diferenciais</h3>
						<div className="features">
							{productInfo.features?.map((feature, index) => (
								<div key={index} className="features-item">
									<Icon iconName="check" />
									{feature}
								</div>
							))}
						</div>
					</div>
					<Contact></Contact>
				</div>
			</ProductContainer>
		</ProductWrapper>
	)
}

const ProductWrapper = styled("div")`
	background-color: ${(props) => props.theme.colors.white};
`

const ProductContainer = styled(Container)`
	background-color: ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.sizes.m};
	padding-bottom: ${(props) => props.theme.sizes.xxl};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.l};
	h2 {
		text-align: left;
	}
	.sub-info {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		gap: ${(props) => props.theme.sizes.xs};
		color: ${(props) => props.theme.colors.primary.lighter};
	}
	.info-grid {
		display: grid;
		grid-template-columns: auto 400px;
		gap: ${(props) => props.theme.sizes.m};
		.info {
			display: flex;
			flex-direction: column;
			gap: ${(props) => props.theme.sizes.m};
			h2 {
				text-align: start;
			}
		}
		form {
			padding: ${(props) => props.theme.sizes.m};
			border: 1px solid ${(props) => props.theme.colors.lighter};
			border-radius: 0.5rem;
			height: fit-content;
		}
	}
	.features {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: ${(props) => props.theme.sizes.m};
		.features-item {
			display: flex;
			gap: ${(props) => props.theme.sizes.xs};
		}
	}
	.description {
		white-space: pre-line;
	}
	@media (max-width: ${(props) => props.theme.screens.xxl}) {
		.features {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (max-width: ${(props) => props.theme.screens.xl}) {
		.features {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media (max-width: ${(props) => props.theme.screens.l}) {
		.info-grid {
			grid-template-columns: 100%;
		}
	}
	@media (max-width: ${(props) => props.theme.screens.m}) {
		.features {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: ${(props) => props.theme.screens.s}) {
		.features {
			grid-template-columns: 1fr;
		}
	}
`

const ProductInfoGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	padding: ${(props) => props.theme.sizes.m};
	gap: ${(props) => props.theme.sizes.m};
	justify-content: center;
	align-items: center;
	width: 100%;
	border-width: ${(props) => props.theme.border.width};
	border-color: ${(props) => props.theme.colors.lighter};
	border-radius: 0.5em;
	border-style: solid;
	margin-top: ${(props) => props.theme.sizes.m};
	.info-grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${(props) => props.theme.sizes.s};
	}
	@media (max-width: ${(props) => props.theme.screens.s}) {
		grid-template-columns: 1fr 1fr;
		row-gap: ${(props) => props.theme.sizes.l};
		text-align: center;
	}
`

const StyledLoading = styled(Loading)`
	min-height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
`

export default Product
