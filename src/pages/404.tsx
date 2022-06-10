import type { NextPage } from "next"
import Link from "next/link"
import styled from "styled-components"
import Button from "../components/Button"
import Container from "../components/Container"

const ErrorContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	justify-content: center;
	align-items: center;
	margin-bottom: ${(props) => props.theme.sizes.l};
`

const Sobre: NextPage = (props) => {
	return (
		<ErrorContainer>
			<h1>404</h1>
			<p>Página Não Encontrada</p>
			<Link href={"/"} passHref>
				<Button type="button" iconName="arrowLeft" text="Voltar ao Início" />
			</Link>
		</ErrorContainer>
	)
}

export default Sobre
