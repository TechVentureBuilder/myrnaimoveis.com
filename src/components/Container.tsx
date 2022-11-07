import React from "react"
import styled from "styled-components"

type Props = {
	children: JSX.Element | JSX.Element[]
	className?: string
}

const StyledDiv = styled.div`
	width: 100%;
	max-width: ${(props) => props.theme.screens.xxl};
	padding: 0 ${(props) => props.theme.sizes.m};
	margin: auto;
	@media (max-width: ${(props) => props.theme.screens.xxl}) {
		max-width: ${(props) => props.theme.screens.xl};
	}
	@media (max-width: ${(props) => props.theme.screens.xl}) {
		max-width: ${(props) => props.theme.screens.l};
	}
	@media (max-width: ${(props) => props.theme.screens.l}) {
		max-width: ${(props) => props.theme.screens.m};
	}
	@media (max-width: ${(props) => props.theme.screens.m}) {
		max-width: ${(props) => props.theme.screens.s};
	}
`

const Container = (props: Props) => {
	return <StyledDiv className={props.className}>{props.children}</StyledDiv>
}

export default Container
