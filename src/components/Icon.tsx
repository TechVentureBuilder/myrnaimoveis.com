import React from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"

type Props = {
	iconName: string
	className?: string
	size?: "small" | "big"
}

const StyledIcon = styled(ReactSVG)`
	max-height: ${(props) => props.theme.sizes.icon.small};
	max-width: ${(props) => props.theme.sizes.icon.small};
	&.big {
		max-height: ${(props) => props.theme.sizes.icon.big};
		max-width: ${(props) => props.theme.sizes.icon.big};
		svg {
			height: ${(props) => props.theme.sizes.icon.big};
			width: ${(props) => props.theme.sizes.icon.big};
		}
	}
`

const Icon = (props: Props) => {
	return (
		<StyledIcon
			src={`/assets/icons/${props.iconName}.svg`}
			className={`${props.className} ${props.size == "big" ? "big" : ""}`}
		/>
	)
}

export default Icon
