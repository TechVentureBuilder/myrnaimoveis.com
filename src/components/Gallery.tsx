import Image from "next/image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Image as ImageType } from "../types/Image"
import api from "../api"
import Loading from "./Loading"

type Props = {
	id: string
}

const Gallery: React.FC<Props> = (props) => {
	const [count, setCount] = useState<Number>(1)
	const [images, setImages] = useState<ImageType[]>([])
	const [lodadedImages, setLoadedImages] = useState(false)

	useEffect(() => {
		if (lodadedImages != true) {
			setLoadedImages(true)
			api
				.get("images/count", {
					params: {
						_id: props.id,
					},
				})
				.then(async (res) => {
					setCount(res.data.count)
					let storedImages = JSON.parse(
						localStorage.getItem(props.id + "-imgs")!
					)
					if (storedImages && storedImages.length == res.data.count) {
						setImages(storedImages)
						console.log("got images from localhost")
					} else {
						for (let i = 0; i < res.data.count; i++) {
							await api
								.get("images", {
									params: {
										_id: props.id,
										pos: i,
									},
								})
								.then((res) => {
									localStorage.setItem(
										props.id + "-imgs",
										JSON.stringify([...images, res.data.image])
									)
									setImages((prev) => [...prev, res.data.image])
								})
						}
					}
				})
		}
	}, [images, lodadedImages, props.id])

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
			{images.map((image, index) => (
				<SwiperSlide className="gallery-item" key={index}>
					<Image
						src={image.data}
						alt={image.description}
						layout="fill"
						objectFit="contain"
					/>
				</SwiperSlide>
			))}
			{count > images.length ? (
				<SwiperSlide className="gallery-item">
					<Loading></Loading>
				</SwiperSlide>
			) : (
				""
			)}
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
