import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

type Props = {
	text?: string
	iconName?: string
	variant?: "primary" | "secondary" | "tertiary" | "danger"
	className?: string
	fill?: boolean
	type: "button" | "submit" | "reset" | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button`
	padding: ${(props) => props.theme.sizes.m};
	font-size: ${(props) => props.theme.font.sizes.s};
	font-family: ${(props) => props.theme.font.families.sans};
	background-color: ${(props) => props.theme.colors.main};
	color: ${(props) => props.theme.colors.text};
	border: ${(props) => `${props.theme.border.width} solid`};
	border-color: ${(props) => props.theme.colors.main};
	display: flex;
	align-items: center;
	column-gap: ${(props) => props.theme.sizes.xs};
	transition: ${(props) => props.theme.transitions.fast};
	text-decoration: none;
	width: max-content;
	cursor: pointer;
	&.fill {
		width: 100%;
		justify-content: center;
	}
	svg {
		display: block;
		height: ${(props) => props.theme.sizes.m};
	}
	&.onlyIcon {
		padding: ${(props) => props.theme.sizes.s};
	}
	:hover {
		border-color: ${(props) => props.theme.colors.primary.light};
		background-color: ${(props) => props.theme.colors.main};
	}

	/* Variants */
	&.secondary {
		background-color: ${(props) => props.theme.colors.card};
		color: ${(props) => props.theme.colors.text};
		border-color: ${(props) => props.theme.colors.card};
		:hover {
			background-color: ${(props) => props.theme.colors.dark};
			border-color: ${(props) => props.theme.colors.darker};
			color: ${(props) => props.theme.colors.text};
		}
	}
	&.tertiary {
		background-color: ${(props) => props.theme.colors.bg};
		color: ${(props) => props.theme.colors.text};
		border-color: ${(props) => props.theme.colors.bg};
		:hover {
			border-color: ${(props) => props.theme.colors.darker};
		}
	}
	&.danger {
		background-color: darkred;
		color: ${(props) => props.theme.colors.text};
		border-color: darkred;
		:hover {
			border-color: red;
		}
	}
`

const Button = (props: Props) => {
	const className = `
    ${!props.text && props.iconName ? "onlyIcon" : ""}
    ${props.variant !== "primary" ? props.variant : ""}
		${props.fill == true ? "fill" : ""}
  `

	return (
		<StyledButton
			className={className + (props.className ? " " + props.className : "")}
			onClick={props.onClick}
			type={props.type}
		>
			{props.iconName ? <Icon iconName={props.iconName}></Icon> : ""}
			{props.text ? props.text : ""}
		</StyledButton>
	)
}

export default Button
