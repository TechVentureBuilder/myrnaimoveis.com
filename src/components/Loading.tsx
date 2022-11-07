import React from "react"
import styled from "styled-components"

type Props = {
	className?: string
}

const Loading = (props: Props) => (
	<LoadingWrapper className={props.className}>
		<LoadingInner />
	</LoadingWrapper>
)

const LoadingWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.card};
`

const LoadingInner = styled.div`
	height: ${(props) => props.theme.sizes.l};
	width: ${(props) => props.theme.sizes.l};
	background-color: ${(props) => props.theme.colors.primary.default};
	@keyframes loading {
		0% {
			opacity: 0;
			transform: scale(0.5) rotate(-45deg);
			filter: none;
		}
		25% {
			filter: blur(2px);
		}
		50% {
			opacity: 1;
			transform: scale(1) rotate(45deg);
			filter: none;
		}
		75% {
			filter: blur(2px);
		}
		100% {
			opacity: 0;
			transform: scale(0.5) rotate(135deg);
			filter: none;
		}
	}
	animation-name: loading;
	animation-duration: 1s;
	animation-iteration-count: infinite;
`

export default Loading
