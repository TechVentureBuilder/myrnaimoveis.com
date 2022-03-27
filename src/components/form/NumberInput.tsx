import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'
import Label from './Label'

type Props = {
	name: string
	label: string
	placeholder?: string
	iconName?: string
	min: number
	max: number
}

const Input = styled.input`
	padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
	display: block;
	background-color: transparent;
	border: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.card};
	font-size: ${(props) => props.theme.font.sizes.p};
	transition: ${(props) => props.theme.transitions.fast};
	text-align: center;
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
`

const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: -${(props) => props.theme.sizes.interaction};
	pointer-events: none;
	button {
		pointer-events: all;
	}
`

const NumberInput = (props: Props) => {
	const [inputValue, setInputValue] = useState(0)

	const handleIncrement: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		if (props.max !== null && inputValue >= props.max!) {
			return
		}
		setInputValue((value) => value + 1)
	}

	const handleDecrement: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		if (props.min !== null && inputValue <= props.min!) {
			return
		}
		setInputValue((value) => value - 1)
	}

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		let finalValue = Number(e.target.value.replace(/\D/g, ''))
		if (finalValue > props.max) {
			finalValue = props.max
		} else if (finalValue < props.min) {
			finalValue = props.min
		}
		setInputValue(finalValue)
	}

	return (
		<InputWrapper>
			<Label text={props.label} htmlFor={props.name} />
			<Input
				id={props.name}
				placeholder={props.placeholder}
				type="number"
				className={props.iconName ? 'withIcon' : ''}
				min={props.min}
				max={props.max}
				value={inputValue}
				onChange={handleInputChange}
			/>
			{props.iconName ? <StyledIcon iconName={props.iconName} /> : ''}
			<ButtonsWrapper>
				<Button iconName="chevronDown" onClick={handleDecrement} />
				<Button iconName="chevronUp" onClick={handleIncrement} />
			</ButtonsWrapper>
		</InputWrapper>
	)
}

export default NumberInput
