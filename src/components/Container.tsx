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
`

const Container = (props: Props) => {
	return <StyledDiv className={props.className}>{props.children}</StyledDiv>
}

export default Container
