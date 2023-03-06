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
			slidesPerView={"auto"}
			spaceBetween={0}
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
						loader={() => {
							return baseURL + "/images/" + image._id
						}}
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
		width: auto;
		max-width: 100%;
		height: 100%;
		cursor: grab;
		img {
			position: relative !important;
			height: 100%;
			width: auto;
			max-width: 100%;
			transition: ${(props) => props.theme.transitions.faster};
		}
	}
	.swiper-pagination-bullet {
		border-radius: 100px;
		opacity: 1;
		background-color: ${(props) => props.theme.colors.white};
		transition: ${(props) => props.theme.transitions.faster};
		scale: 1;
		opacity: 0.5;
	}
	.swiper-pagination-bullet-active {
		opacity: 1;
		scale: 1.2;
	}
	.swiper-button-next {
		top: 50%;
		right: -8px !important;
		transform: translateY(-50%) !important;
		color: ${(props) => props.theme.colors.primary.default};
		scale: 0.5;
		right: 0;
		box-sizing: content-box;
		width: 56px;
		height: 56px;
		padding: 16px;
		border-radius: 1000px;
		background-color: ${(props) => props.theme.colors.white};
		opacity: 0.9;
		transition: 200ms;
		::after {
			transform: translateX(2px);
		}
	}
	.swiper-button-prev {
		top: 50%;
		left: -8px !important;
		transform: translateY(-50%) !important;
		color: ${(props) => props.theme.colors.primary.default};
		scale: 0.5;
		right: 0;
		box-sizing: content-box;
		width: 56px;
		height: 56px;
		padding: 16px;
		border-radius: 1000px;
		background-color: ${(props) => props.theme.colors.white};
		opacity: 0.9;
		transition: 200ms;
		::after {
			transform: translateX(-2px);
		}
	}
	.swiper-button-disabled {
		opacity: 0;
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
