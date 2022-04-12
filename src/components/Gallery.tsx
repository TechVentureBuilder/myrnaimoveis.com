import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"

type Props = {
	images: Array<{
		alt: string
		url: string
		width: number
		height: number
	}>
}

const Gallery: React.FC<Props> = (props) => {
	return (
		<StyledGallery
			slidesPerView={3}
			grid={{
				rows: 2,
			}}
			spaceBetween={1}
			pagination={{
				clickable: true,
			}}
			modules={[Grid, Pagination]}
			className="mySwiper"
		>
			{props.images.map((image, index) => (
				<SwiperSlide className="gallery-item" key={index}>
					<Image
						src={image.url}
						alt={image.alt}
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
	height: 50vh;
	position: relative;
	.gallery-item {
		height: calc((50vh - 1px) / 2);
		border-top: 1px solid black;
		border-left: 1px solid black;
	}
`

export default Gallery
