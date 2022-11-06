import React, { useState } from "react"
import styled from "styled-components"
import Icon from "../Icon"
import Label from "./Label"

type Props = {
	name: string
	label: string
	placeholder: string
	iconName?: string
	required?: boolean
	defaultValue?: number
}

const Input = styled.input`
	padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
	display: block;
	background-color: transparent;
	border: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.lighter};
	font-size: ${(props) => props.theme.font.sizes.p};
	transition: ${(props) => props.theme.transitions.fast};
	border-radius: ${(props) => props.theme.border.radius};
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
	&.withIcon {
		padding-left: ${(props) => `calc(
			${props.theme.sizes.m} * 2 + ${props.theme.sizes.s}
		)`};
	}
`

const StyledIcon = styled(Icon)`
	transition: ${(props) => props.theme.transitions.fast};
	pointer-events: none;
`

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	${StyledIcon} {
		position: absolute;
		top: ${(props) => `calc(
			${props.theme.font.sizes.p} + ${props.theme.sizes.m} +	${props.theme.sizes.xs}
		)`};
		left: ${(props) => props.theme.sizes.m};
		color: ${(props) => props.theme.colors.placeholder};
	}
	${Input}:hover ~ ${StyledIcon},
    ${Input}:focus ~ ${StyledIcon} {
		color: ${(props) => props.theme.colors.text};
	}
	&.whiteIcon > ${StyledIcon} {
		color: ${(props) => props.theme.colors.text};
	}
`

const InputText = (props: Props) => {
	const [isEmpty, setIsEmpty] = useState(true)

	const handleInputChange: React.FormEventHandler<HTMLInputElement> = (e) => {
		if (e.currentTarget.value && e.currentTarget.value.length > 0 && isEmpty) {
			setIsEmpty(false)
		} else if (!e.currentTarget.value && !isEmpty) {
			setIsEmpty(true)
		}
	}

	return (
		<InputWrapper className={isEmpty ? "" : "whiteIcon"}>
			<Label text={props.label} htmlFor={props.name} />
			<Input
				id={props.name}
				placeholder={props.placeholder}
				type="text"
				className={props.iconName ? "withIcon" : ""}
				onChangeCapture={handleInputChange}
				name={props.name}
				required={props.required}
				defaultValue={props.defaultValue}
			/>
			{props.iconName ? <StyledIcon iconName={props.iconName} /> : ""}
		</InputWrapper>
	)
}

export default InputText
