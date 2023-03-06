import Image from "next/image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Image as ImageType } from "../types/Image"
import api, { baseURL } from "../api"
import Loading from "./Loading"
import Icon from "./Icon"

type Props = {
	images: [{ _id: string; description: string }]
}

const Gallery: React.FC<Props> = (props) => {
	return (
		<StyledGallery
			slidesPerView={1}
			spaceBetween={1}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			{props.images.map((image, index) => (
				<SwiperSlide className="gallery-item" key={index}>
					<Image
						src={baseURL + "/images/" + image._id}
						alt={image.description}
						layout="fill"
						objectFit="contain"
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
	background-color: ${(props) => props.theme.colors.card};
	border-radius: 0.5rem;
	border-width: 2px;
	border-color: ${(props) => props.theme.colors.card};
	.gallery-item {
		height: 100%;
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
		outline: 1px solid ${(props) => props.theme.colors.dark};
		transition: ${(props) => props.theme.transitions.faster};
		transform: scale(1);
	}
	.swiper-pagination-bullet-active {
		background-color: ${(props) => props.theme.colors.primary.lighter};
		outline: 1px solid ${(props) => props.theme.colors.main};
		transform: rotate(45deg);
	}
	.swiper-button-next {
		color: ${(props) => props.theme.colors.main};
		transform: scale(0.75);
	}
	.swiper-button-prev {
		color: ${(props) => props.theme.colors.main};
		transform: scale(0.75);
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
