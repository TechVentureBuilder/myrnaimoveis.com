import React from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"

type Props = {
	iconName: string
	className?: string
	size?: "small" | "big"
}

const StyledIcon = styled(ReactSVG)`
	&.big {
		svg {
			height: ${(props) => props.theme.sizes.l};
			width: ${(props) => props.theme.sizes.l};
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
