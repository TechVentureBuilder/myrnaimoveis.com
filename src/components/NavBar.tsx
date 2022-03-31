import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import Button from "./Button"

type Props = {
	internal?: boolean
}

const NavWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.bg};
	padding: ${(props) => props.theme.sizes.xs} 0;
	display: flex;
	justify-content: center;
	border-bottom: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.card};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`

const StyledNav = styled.nav`
	width: ${(props) => props.theme.screens.xxl};
	padding: 0 ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const LinksWrapper = styled.div`
	width: fit-content;
	box-sizing: content-box;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		transition: ${(props) => props.theme.transitions.fast};
		width: fit-content;
		text-decoration: none;
		padding: ${(props) => props.theme.sizes.m} ${(props) => props.theme.sizes.m};
		display: flex;
		justify-content: center;
		position: relative;
		color: ${(props) => props.theme.colors.text};
		:hover {
			color: ${(props) => props.theme.colors.primary.light};
		}
		&.active {
			color: ${(props) => props.theme.colors.main};
		}
	}
	.logoLink {
		padding: 0;
		margin-right: ${(props) => props.theme.sizes.m};
		svg {
			display: block;
			height: 24px;
			width: auto;
		}
	}
`

const ButtonsWrapper = styled.div`
	display: flex;
	gap: ${(props) => props.theme.sizes.m};
	align-items: center;
`

const NavSpace = styled.div<{ height: number }>`
	width: 100%;
	height: ${(props) => props.height}px;
`

const NavBar = (props: Props) => {
	const [navRef, setNavRef] = useState<HTMLDivElement | null>(null)
	const [navHeight, setNavHeight] = useState<number>(0)

	useEffect(() => {
		if (navRef && navRef.clientHeight !== navHeight) {
			setNavHeight(navRef!.clientHeight)
		}
		const handleNavResize = () => {
			setNavHeight(navRef!.clientHeight)
		}
		window.addEventListener("resize", handleNavResize)
		return () => {
			window.removeEventListener("resize", handleNavResize)
		}
	}, [navHeight, navRef])

	const router = useRouter()

	return (
		<>
			<NavSpace height={navHeight!}>{navHeight!}</NavSpace>
			<NavWrapper
				ref={(navEl) => {
					setNavRef(navEl)
				}}
			>
				<StyledNav>
					<LinksWrapper>
						<Link passHref={true} href={"/"}>
							<a className="logoLink">
								<ReactSVG src="assets/logo/logoLightHorizontal.svg" />
							</a>
						</Link>
						<Link href={"/"}>
							<a className={router.pathname == "/" ? "active" : ""}>Início</a>
						</Link>
						<Link href={"/catalogo"}>
							<a className={router.pathname == "/catalogo" ? "active" : ""}>
								Catálogo
							</a>
						</Link>
						<Link href={"/sobre"}>
							<a className={router.pathname == "/sobre" ? "active" : ""}>
								Sobre Nós
							</a>
						</Link>
					</LinksWrapper>

					<ButtonsWrapper>
						<Button iconName="search" variant="secondary" />
						<Button iconName="chat" variant="primary" text="Fale Conosco" />
					</ButtonsWrapper>
				</StyledNav>
			</NavWrapper>
		</>
	)
}

export default NavBar
