import React from "react"
import styled from "styled-components"

type Props = {
	text: string
	htmlFor?: string
}

const StyledLabel = styled.label`
	display: block;
	padding-bottom: ${(props) => props.theme.sizes.xs};
	color: ${(props) => props.theme.colors.text};
	box-sizing: content-box;
	width: fit-content;
`

const Label = (props: Props) => {
	return <StyledLabel htmlFor={props.htmlFor}>{props.text}</StyledLabel>
}

export default Label
