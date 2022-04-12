import Image from "next/image"
import React from "react"
import styled from "styled-components"
import Container from "./Container"

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
		<StyledGallery>
			{props.images.map((image, index) => (
				<div className="gallery-item" key={index}>
					<Image
						src={image.url}
						alt={image.alt}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			))}
		</StyledGallery>
	)
}

const StyledGallery = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	position: relative;
	justify-content: center;
	align-items: center;
	.gallery-item {
		position: relative;
		width: 20%;
		height: 20vh;
		min-height: 200px;
		box-sizing: border-box;
		::after {
			content: "";
			border-left: 1px solid ${(props) => props.theme.colors.bg};
			border-top: 1px solid ${(props) => props.theme.colors.bg};
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}
	.gallery-item:first-of-type {
		::after {
			content: "";
			border-left: none;
		}
	}
`

export default Gallery
