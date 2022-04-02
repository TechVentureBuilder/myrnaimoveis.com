import React from "react"
import styled from "styled-components"
import Label from "./Label"

type Props = {
	name: string
	placeholder: string
	label: string
}

const StyledTextArea = styled.textarea`
	padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
	display: block;
	background-color: transparent;
	border: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.card};
	font-size: ${(props) => props.theme.font.sizes.p};
	transition: ${(props) => props.theme.transitions.fast};
	outline: none;
	resize: none;
	color: ${(props) => props.theme.colors.text};
	::placeholder {
		font-size: ${(props) => props.theme.font.sizes.s};
		color: ${(props) => props.theme.colors.placeholder};
		opacity: 1;
	}
	:hover,
	:focus {
		border-color: ${(props) => props.theme.colors.darker};
	}
	:focus {
		border-color: ${(props) => props.theme.colors.main};
	}
`

const TextAreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

const TextArea = (props: Props) => {
	return (
		<TextAreaWrapper>
			<Label text={props.label} htmlFor={props.name} />
			<StyledTextArea
				name={props.name}
				maxLength={560}
				placeholder={props.placeholder}
				rows={7}
			/>
		</TextAreaWrapper>
	)
}

export default TextArea
