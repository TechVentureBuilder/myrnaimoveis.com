import type { GetServerSideProps, NextPage } from "next"
import styled from "styled-components"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import { Product } from "../../types/Product"
import { useEffect, useState } from "react"
import Gallery from "../../components/Gallery"
import Contact from "../../components/Contact"
import api from "../../api"

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
		return null
	}

	return (
		<ProductContainer>
			<h2>{productInfo.name}</h2>
			<div className="sub-info">
				{/* <div className="sub-info-left"> */}
				<Icon iconName="local" />
				{`${productInfo.address.neighborhood} - ${productInfo.address.city}, ${productInfo.address.state}`}
				{/* </div> */}
				{/* <div className="sub-info-right">R${productInfo.price}</div> */}
			</div>
			<Gallery images={productInfo.images!} />
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
	)
}

const ProductContainer = styled(Container)`
	padding: ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.l};
	h2 {
		text-align: center;
	}
	.sub-info {
		display: flex;
		flex-direction: row;
		justify-content: center;
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
			border: 1px solid ${(props) => props.theme.colors.card};
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
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: ${(props) => props.theme.screens.m}) {
		.features {
			grid-template-columns: 1fr 1fr;
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
	border-color: ${(props) => props.theme.colors.dark};
	border-style: solid;
	margin-top: ${(props) => props.theme.sizes.m};
	.info-grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${(props) => props.theme.sizes.s};
	}
`

export default Product
