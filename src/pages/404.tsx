import type { NextPage } from "next"
import Head from "next/head"
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
			<Head>
				<title>Erro 404 - Myrna Imóveis</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>404</h1>
			<p>Página Não Encontrada</p>
			<Link href={"/"} passHref>
				<Button type="button" iconName="arrowLeft" text="Voltar ao Início" />
			</Link>
		</ErrorContainer>
	)
}

export default Sobre
