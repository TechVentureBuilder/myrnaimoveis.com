import type { NextPage } from "next"
import styled from "styled-components"
import Container from "../components/Container"
import Search from "../components/Search"

const StyledHome = styled.div``

const Hero = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.card};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	padding: ${(props) => props.theme.sizes.m};
	h1 {
		text-align: center;
	}
`

const SearchCard = styled.div`
	background-color: ${(props) => props.theme.colors.bg};
	padding: ${(props) => props.theme.sizes.m};
`

const Home: NextPage = (props) => {
	return (
		<StyledHome>
			<Hero>
				<h1>Sonhos para chamar de lar</h1>
				<SearchCard>
					<Search direction="row" />
				</SearchCard>
			</Hero>
		</StyledHome>
	)
}

export default Home
