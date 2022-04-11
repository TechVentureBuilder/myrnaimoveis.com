import type { NextPage } from "next"
import { useRouter } from "next/router"
import Image from "next/image"
import styled from "styled-components"
import Container from "../../components/Container"
import Icon from "../../components/Icon"
import { Product } from "../../types/Product"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import { useState } from "react"

const Sobre: NextPage = (props) => {
	const router = useRouter()
	const { slug } = router.query

	const productInfo: Product = {
		name: "Nome do Empreendimento",
		slug: "nome-do-empreendimento",
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
		],
	}

	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<ProductContainer>
			<Swiper
				className="swiper"
				modules={[Navigation, Pagination, Thumbs]}
				pagination={{ clickable: true }}
				centeredSlides={true}
				slidesPerView={1}
				thumbs={{ swiper: thumbsSwiper }}
			>
				{productInfo.images?.map((image, index) => (
					<SwiperSlide className="swiper-slide" key={index}>
						<Image
							src={image.url}
							alt={image.alt}
							layout="fill"
							objectFit="contain"
						></Image>
					</SwiperSlide>
				))}
			</Swiper>
			<h2>{productInfo.name}</h2>
			<div className="sub-info">
				{/* <div className="sub-info-left"> */}
				<Icon iconName="local" />
				{`${productInfo.neighborhood} - ${productInfo.city}, ${productInfo.state}`}
				{/* </div> */}
				{/* <div className="sub-info-right">R${productInfo.price}</div> */}
			</div>
		</ProductContainer>
	)
}

export default Sobre

const ProductContainer = styled(Container)`
	padding: 0 ${(props) => props.theme.sizes.m} ${(props) => props.theme.sizes.m}
		${(props) => props.theme.sizes.m} ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	h2 {
		text-align: center;
	}
	.sub-info {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: ${(props) => props.theme.sizes.xs};
	}
	.swiper {
		width: 100%;
		height: 50vh;
	}
	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		img {
			display: block;
		}
	}
`
