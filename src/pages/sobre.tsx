import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import Container from "../components/Container"

const StyledContainer = styled(Container)`
	padding: ${(props) => props.theme.sizes.m} ${(props) => props.theme.sizes.m};
	padding-bottom: ${(props) => props.theme.sizes.xl};
	max-width: ${(props) => props.theme.screens.m};
	h1 {
		text-align: center;
	}
	.centered {
		text-align: center;
	}
`

const Sobre: NextPage = (props) => {
	return (
		<StyledContainer>
			<Head>
				<title>Sobre Nós - Myrna Imóveis</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Sobre Nós</h1>
			<br />
			<h2>Quem Somos</h2>
			<br />
			<p>
				A Myrna Imóveis é uma empresa do ramo imobiliário sediada na cidade de
				São Paulo que busca oferecer os melhores preços e as melhores
				oportunidades do mercado, com atendimento especializado para quem busca
				realizar o sonho da casa própria ou mudar de vida investindo em imóveis.
				<br />
				<br />
				Fundada por Myrna, que atua como corretora imobiliária há mais de 20
				anos, a empresa busca sempre garantir em seu atendimento, todas as
				qualidades conhecidas e atribuídas à sua fundadora, como carisma,
				personalidade amigável e foco em um só objetivo, clientes e investidores
				satisfeitos.
			</p>
			<br />
			<br />
			<p className="centered">
				<Image
					alt=""
					src="/assets/img/fundadora.jpg"
					width={220}
					height={360}
				/>
				<br />
				<small>Nossa fundadora</small>
			</p>
			<br />
			<br />
			<h2>Nossa História</h2>
			<br />
			<p>
				A Myrna nunca se contentou em trabalhar da forma imposta por outros
				gerentes e diretores do ramo imobiliário, pois seu método de atendimento
				era sempre focado no lado humano, em ajudar pessoas a alcançarem seus
				sonhos, e por meio de uma relação de respeito e parceria entre corretor
				e cliente, sempre se destacou dentre os players.
				<br />
				<br />
				Clientes não são uma forma de fazer dinheiro, como a maioria das outras
				empresas pensa. Para nós o cliente é, antes de tudo, alguém com desejos,
				sonhos, objetivos e dores.
				<br />
				<br />
				Baseando-nos em toda a experiência adquirida com os mais de 20 anos de
				mercado de nossa fundadora, nosso atendimento sempre será eficiente,
				pessoal e, o mais importante, humano.
			</p>
			<br />
			<h2>Informações Legais</h2>
			<br />
			<p>
				<b>CNPJ</b>
				<br />
				40.841.676/0001-22
			</p>
			<br />
			<p>
				<b>Nome da Empresa</b>
				<br />
				Myrna Negócios Imóbiliátios LTDA.
			</p>
			<br />
			<p>
				<b>CRECI</b>
				<br />
				54346-J
			</p>
		</StyledContainer>
	)
}

export default Sobre
