import React, { useState } from "react"
import slugify from "slugify"
import styled from "styled-components"
import Icon from "../Icon"
import Label from "./Label"

type Props = {
	name: string
	placeholder: string
	label?: string
	iconName?: string
	required?: boolean
	defaultValue?: number
	options: {
		display: string
		value: string // Must be a lowercase slugified version of the display text.
	}[]
}

const DisplayInput = styled.input`
	padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
	display: block;
	background-color: transparent;
	border: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.card};
	font-size: ${(props) => props.theme.font.sizes.p};
	transition: ${(props) => props.theme.transitions.fast};
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
	${DisplayInput}:hover ~ ${StyledIcon},
    ${DisplayInput}:focus ~ ${StyledIcon} {
		color: ${(props) => props.theme.colors.text};
	}
	&.whiteIcon > ${StyledIcon} {
		color: ${(props) => props.theme.colors.text};
	}
`

const ValueInput = styled.input`
	position: absolute;
	visibility: hidden;
`

const OptionsPositioner = styled.div`
	width: 100%;
	height: 0;
	position: relative;
`

// prettier-ignore
const Options = styled.div`
	background-color: ${(props) => props.theme.colors.card};
	width: 100%;
	position: absolute;
	max-height: calc(${(props) => `${props.theme.sizes.interaction} * 3 + ${props.theme.sizes.interaction} / 2`});
	transition: ${(props) => props.theme.transitions.faster};
	opacity: 1;
	pointer-events: all;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	z-index: 1;
	&.hidden {
		transition: ${(props) => props.theme.transitions.faster};
		pointer-events: none;
		opacity: 0;
		max-height: 0;
	}
`

const Option = styled.div`
	min-height: ${(props) => props.theme.sizes.interaction};
	background-color: transparent;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: ${(props) => props.theme.sizes.m};
	user-select: none;
	:hover {
		background-color: ${(props) => props.theme.colors.primary.dark};
	}
	&.active {
		background-color: ${(props) => props.theme.colors.main};
	}
`

const Select = (props: Props) => {
	const [isEmpty, setIsEmpty] = useState(props.defaultValue ? false : true)
	const [isHidden, setIsHidden] = useState(true)
	const [value, setValue] = useState<string | undefined>(undefined)
	const [display, setDisplay] = useState<string | undefined>(undefined)
	const [filteredOptions, setFilteredOptions] = useState(props.options)

	const handleInputChange: React.FormEventHandler<HTMLInputElement> = (e) => {
		if (e.currentTarget.value && e.currentTarget.value.length > 0 && isEmpty) {
			setIsEmpty(false)
		} else if (!e.currentTarget.value && !isEmpty) {
			setIsEmpty(true)
		}
		const newFilteredOptions = props.options.filter((option) =>
			option.value.includes(slugify(e.currentTarget.value, { lower: true }))
		)
		setFilteredOptions(newFilteredOptions)
	}

	return (
		<InputWrapper className={isEmpty ? "" : "whiteIcon"}>
			{props.label ? <Label text={props.label} htmlFor={props.name} /> : null}
			<DisplayInput
				id={props.name}
				placeholder={props.placeholder}
				type="text"
				className={props.iconName ? "withIcon" : ""}
				onChangeCapture={handleInputChange}
				defaultValue={props.defaultValue}
				value={display}
				onFocus={(e) => {
					e.currentTarget.select()
					setIsHidden(false)
					setDisplay(undefined)
				}}
				onBlur={() => {
					setIsHidden(true)
					if (value) {
						const correctOption = props.options.find((option) =>
							option.value.includes(value)
						)
						setDisplay(correctOption?.display)
						setIsEmpty(false)
						setFilteredOptions(props.options)
					}
				}}
			/>
			<ValueInput name={props.name} required={props.required} value={value} />
			{props.iconName ? <StyledIcon iconName={props.iconName} /> : ""}
			<OptionsPositioner>
				<Options className={isHidden ? "hidden" : ""}>
					{filteredOptions.map((option, index) => (
						<Option
							key={index}
							onMouseDown={() => {
								setValue(option.value)
								setDisplay(option.display)
								setFilteredOptions(props.options)
								setIsEmpty(false)
							}}
							className={option.value === value ? "active" : ""}
						>
							{option.display}
						</Option>
					))}
				</Options>
			</OptionsPositioner>
		</InputWrapper>
	)
}

export default Select
