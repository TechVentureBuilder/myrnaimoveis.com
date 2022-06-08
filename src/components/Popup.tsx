import React from "react"
import styled from "styled-components"
import { usePopup } from "../contexts/PopupContext"
import Button from "./Button"

const PopupWrapper = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.card}bf;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	transition: ${(props) => props.theme.transitions.faster};
	&.hidden {
		visibility: hidden;
		pointer-events: none;
		user-select: none;
		opacity: 0;
		transform: scale(1.1);
	}
`

const StyledPopup = styled.div`
	width: 400px;
	min-height: 200px;
	background-color: ${(props) => props.theme.colors.bg};
	margin: auto;
	opacity: 1;
	position: relative;
	padding: ${(props) => props.theme.sizes.m};
	@media (max-width: ${(props) => props.theme.screens.s}) {
		width: 100%;
		height: 100%;
		margin: 0;
		:nth-child(1) {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			overflow-y: auto;
			form {
				width: 100%;
				height: fit-content;
			}
		}
	}
	@media (max-height: 600px) {
		:nth-child(1) {
			align-items: start;
		}
	}
`

const CloseButton = styled(Button)`
	position: absolute;
	top: calc(-${(props) => props.theme.sizes.interaction} / 2);
	right: calc(-${(props) => props.theme.sizes.interaction} / 2);
	@media (max-width: ${(props) => props.theme.screens.s}) {
		top: ${(props) => props.theme.sizes.xs};
		right: ${(props) => props.theme.sizes.m};
	}
`

const PopupBehind = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`

type Props = {
	opened: boolean
}

const Popup: React.FC<Props> = (props) => {
	const { setOpened } = usePopup()

	return (
		<PopupWrapper className={props.opened == false ? "hidden" : ""}>
			<PopupBehind onClick={() => setOpened(false)} />
			<StyledPopup>
				<CloseButton
					iconName="close"
					type="button"
					onClick={() => setOpened(false)}
				/>
				{props.children}
			</StyledPopup>
		</PopupWrapper>
	)
}

export default Popup
