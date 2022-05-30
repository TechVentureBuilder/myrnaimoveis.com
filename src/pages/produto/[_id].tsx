import type { GetServerSideProps, NextPage } from "next"
import styled from "styled-components"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import { Product } from "../../types/Product"
import { useState } from "react"
import Gallery from "../../components/Gallery"
import Contact from "../../components/Contact"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async (context) => {
	let productInfo
	await axios
		.get("http://localhost:8080/products", {
			params: {
				_id: context.params!._id,
			},
		})
		.then((result) => {
			productInfo = result.data.product
		})
		.catch((err) => {
			console.log(err)
		})
	return {
		props: {
			productInfo: productInfo,
		},
	}
}

type Props = {
	productInfo: Product
}

const Product: NextPage<Props> = (props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	const { productInfo } = props

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
					<h3>Descrição</h3>
					<p>{productInfo.description}</p>
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

export default Product

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
