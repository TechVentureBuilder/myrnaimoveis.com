import React from "react"
import styled from "styled-components"
import Button from "./Button"

type Props = {
	children: any
}

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

const Popup = (props: Props) => {
	return (
		<PopupWrapper>
			<StyledPopup>
				<CloseButton iconName="close" type="button"></CloseButton>
				{props.children}
			</StyledPopup>
		</PopupWrapper>
	)
}

export default Popup
