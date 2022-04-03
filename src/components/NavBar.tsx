import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import { usePopup } from "../contexts/PopupContext"
import Button from "./Button"
import Contact from "./Contact"
import Popup from "./Popup"
import Search from "./Search"

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
	z-index: 2;
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
			height: ${(props) => props.theme.sizes.l};
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
	const navRef = useRef<HTMLDivElement>(null)
	const [navHeight, setNavHeight] = useState<number>(0)

	useEffect(() => {
		if (navRef.current && navRef.current.clientHeight !== navHeight) {
			setNavHeight(navRef.current.clientHeight)
		}
		const handleNavResize = () => {
			setNavHeight(navRef.current!.clientHeight)
		}
		window.addEventListener("resize", handleNavResize)
		return () => {
			window.removeEventListener("resize", handleNavResize)
		}
	}, [navHeight, navRef])

	const router = useRouter()

	const { opened, setOpened, content, setContent } = usePopup()

	return (
		<>
			<NavSpace height={navHeight!}>{navHeight!}</NavSpace>
			<NavWrapper ref={navRef}>
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
						<Button
							iconName="search"
							variant="secondary"
							type="button"
							onClick={() => {
								setContent(<Search />)
								setOpened(true)
							}}
						/>
						<Button
							iconName="chat"
							variant="primary"
							type="button"
							text="Fale Conosco"
							onClick={() => {
								setContent(<Contact />)
								setOpened(true)
							}}
						/>
					</ButtonsWrapper>
				</StyledNav>
			</NavWrapper>
			<Popup opened={opened}>{content}</Popup>
		</>
	)
}

export default NavBar
