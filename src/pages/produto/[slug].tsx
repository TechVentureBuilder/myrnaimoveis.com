import type { NextPage } from "next"
import { useRouter } from "next/router"
import styled from "styled-components"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import { Product } from "../../types/Product"
import { useState } from "react"
import Gallery from "../../components/Gallery"
import Contact from "../../components/Contact"

const Product: NextPage = (props) => {
	const router = useRouter()
	const { slug } = router.query

	const productInfo: Product = {
		name: "Nome do Empreendimento",
		slug: "nome-do-empreendimento",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia odio at turpis volutpat consectetur. Ut placerat finibus ante at tempus. Cras sed venenatis diam, ac tempus risus. Integer mattis dictum mi, at tristique libero rhoncus ut. Sed ullamcorper tellus eget euismod ullamcorper. Nullam feugiat volutpat neque, id bibendum metus pretium ac. Nullam iaculis volutpat eros sit amet varius. Morbi posuere ante nec ipsum ultrices, et fringilla dui efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia odio at turpis volutpat consectetur. Ut placerat finibus ante at tempus. Cras sed venenatis diam, ac tempus risus. Integer mattis dictum mi, at tristique libero rhoncus ut. Sed ullamcorper tellus eget euismod ullamcorper. Nullam feugiat volutpat neque, id bibendum metus pretium ac. Nullam iaculis volutpat eros sit amet varius. Morbi posuere ante nec ipsum ultrices, et fringilla dui efficitur.",
		neighborhood: "Nome do Bairro",
		city: "Nome da Cidade",
		state: "Sigla do Estado",
		area: { min: 123, max: 321 },
		bedrooms: { min: 1, max: 6 },
		bathrooms: { min: 1, max: 6 },
		price: 1000000,
		image: "",
		images: [
			{
				alt: "image",
				url: "https://picsum.photos/1300/700",
				width: 1300,
				height: 768,
			},
			{
				alt: "image",
				url: "https://picsum.photos/400/600",
				width: 400,
				height: 600,
			},
			{
				alt: "image",
				url: "https://picsum.photos/800/500",
				width: 800,
				height: 500,
			},
			{
				alt: "image",
				url: "https://picsum.photos/200/400",
				width: 200,
				height: 400,
			},
			{
				alt: "image",
				url: "https://picsum.photos/700/800",
				width: 700,
				height: 800,
			},
			{
				alt: "image",
				url: "https://picsum.photos/800/600",
				width: 800,
				height: 600,
			},
			{
				alt: "image",
				url: "https://picsum.photos/800/600",
				width: 800,
				height: 600,
			},
			{
				alt: "image",
				url: "https://picsum.photos/800/600",
				width: 800,
				height: 600,
			},
			{
				alt: "image",
				url: "https://picsum.photos/800/600",
				width: 800,
				height: 600,
			},
		],
		features: [
			"Piscina",
			"Academia",
			"Churrasqueira",
			"Deck",
			"Spa",
			"Sauna",
			"Sala de Jogos",
			"Jardim",
			"Bicicletário",
			"Lavanderia",
			"Playground",
			"Meeting Room",
			"Espaço Gourmet",
		],
	}

	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<ProductContainer>
			<h2>{productInfo.name}</h2>
			<div className="sub-info">
				{/* <div className="sub-info-left"> */}
				<Icon iconName="local" />
				{`${productInfo.neighborhood} - ${productInfo.city}, ${productInfo.state}`}
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
