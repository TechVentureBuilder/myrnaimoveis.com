import React from "react"
import styled from "styled-components"
import { usePopup } from "../contexts/PopupContext"
import Button from "./Button"

const PopupWrapper = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.card}bf;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
`

const StyledPopup = styled.div`
	width: 400px;
	min-height: 300px;
	background-color: ${(props) => props.theme.colors.bg};
	margin: auto;
	opacity: 1;
	position: relative;
	padding: ${(props) => props.theme.sizes.m};
`

const CloseButton = styled(Button)`
	position: absolute;
	top: calc(-${(props) => props.theme.sizes.interaction} / 2);
	right: calc(-${(props) => props.theme.sizes.interaction} / 2);
`

type Props = {
	opened: boolean
}

const Popup: React.FC<Props> = (props) => {
	const { setOpened } = usePopup()

	if (props.opened == false) return null

	return (
		<PopupWrapper>
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
