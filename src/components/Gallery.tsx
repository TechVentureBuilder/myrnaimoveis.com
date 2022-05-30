import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"

type Props = {
	images: Array<{
		description: string
		data: string
		type: string
	}>
}

const Gallery: React.FC<Props> = (props) => {
	return (
		<StyledGallery
			slidesPerView={1}
			spaceBetween={1}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			{props.images.map((image, index) => (
				<SwiperSlide className="gallery-item" key={index}>
					<Image
						src={image.data}
						alt={image.description}
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
			))}
		</StyledGallery>
	)
}

const StyledGallery = styled(Swiper)`
	width: 100%;
	height: 60vh;
	position: relative;
	.gallery-item {
		height: 100%;
		border-top: 1px solid black;
		border-left: 1px solid black;
		cursor: grab;
		img {
			transition: ${(props) => props.theme.transitions.faster};
		}
	}
	.gallery-item:hover {
		img {
			transform: scale(1.02);
		}
	}
	.swiper-pagination-bullet {
		border-radius: 0;
		opacity: 1;
		background-color: ${(props) => props.theme.colors.darker};
		outline: 2px solid ${(props) => props.theme.colors.dark};
		transition: ${(props) => props.theme.transitions.faster};
		transform: scale(1);
	}
	.swiper-pagination-bullet-active {
		background-color: ${(props) => props.theme.colors.primary.lighter};
		outline: 2px solid ${(props) => props.theme.colors.main};
		transform: rotate(45deg);
	}
	@media (max-width: ${(props) => props.theme.screens.l}) {
		height: 50vh;
	}
	@media (max-width: ${(props) => props.theme.screens.m}) {
		height: 40vh;
	}
	@media (max-width: ${(props) => props.theme.screens.s}) {
		height: 30vh;
	}
`

export default Gallery
