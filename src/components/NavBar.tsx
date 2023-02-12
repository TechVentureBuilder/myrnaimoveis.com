import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import { usePopup } from "../contexts/PopupContext"
import Button from "./Button"
import Contact from "./Contact"
import Container from "./Container"
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
		${(props) => props.theme.colors.light};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
`

const StyledNav = styled(Container)`
	width: ${(props) => props.theme.screens.xxl};
	padding: 0 ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.mobile-contact-button {
		display: none;
		@media (max-width: ${(props) => props.theme.screens.m}) {
			display: block;
		}
	}
	.desktop-contact-button {
		display: inherit;
		@media (max-width: ${(props) => props.theme.screens.m}) {
			display: none;
		}
	}
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
		padding: ${(props) => props.theme.sizes.s} ${(props) => props.theme.sizes.m};
		display: flex;
		justify-content: center;
		position: relative;
		color: ${(props) => props.theme.colors.text};
		border-radius: ${(props) => props.theme.border.radius};
		:hover {
			color: ${(props) => props.theme.colors.main};
		}
		&.active {
			color: ${(props) => props.theme.colors.main};
			background-color: ${(props) => props.theme.colors.card};
		}
		@media (max-width: ${(props) => props.theme.screens.s}) {
			display: none;
		}
	}
	.logoLink {
		@media (max-width: ${(props) => props.theme.screens.s}) {
			display: block;
		}
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
	gap: ${(props) => props.theme.sizes.s};
	align-items: center;
`

const NavSpace = styled.div<{ height: number }>`
	width: 100%;
	height: ${(props) => props.height}px;
`

const MobileMenuButton = styled(Button)`
	display: none;
	@media (max-width: ${(props) => props.theme.screens.s}) {
		display: block;
		margin-right: ${(props) => props.theme.sizes.s};
	}
`

const MobileMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: ${(props) => props.theme.sizes.xl};
	a {
		font-size: ${(props) => props.theme.font.sizes.h3};
		text-decoration: none;
		color: ${(props) => props.theme.colors.text};
		&.active {
			color: ${(props) => props.theme.colors.main};
		}
	}
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
						<MobileMenuButton
							type="button"
							className="mobile-menu"
							iconName="menu"
							variant="tertiary"
							onClick={() => {
								setOpened(true)
								setContent(
									<MobileMenu
										onClick={() => {
											setOpened(false)
										}}
									>
										<Link
											href={"/"}
											className={router.pathname == "/" ? "active" : ""}
											scroll={false}
										>
											Início
										</Link>
										<Link
											href={"/catalogo"}
											className={router.pathname == "/catalogo" ? "active" : ""}
											scroll={false}
										>
											Catálogo
										</Link>
										<Link
											href={"/sobre"}
											className={router.pathname == "/sobre" ? "active" : ""}
											scroll={false}
										>
											Sobre Nós
										</Link>
									</MobileMenu>
								)
							}}
						/>
						<Link
							passHref={true}
							href={"/"}
							className="logoLink"
							scroll={false}
						>
							<ReactSVG src="/assets/logo/logoDarkHorizontal.svg" />
						</Link>
						<Link
							href={"/"}
							className={router.pathname == "/" ? "active" : ""}
							scroll={false}
						>
							Início
						</Link>
						<Link
							href={"/catalogo"}
							className={router.pathname == "/catalogo" ? "active" : ""}
							scroll={false}
						>
							Catálogo
						</Link>
						<Link
							href={"/sobre"}
							className={router.pathname == "/sobre" ? "active" : ""}
							scroll={false}
						>
							Sobre Nós
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
							className={"desktop-contact-button"}
						/>
						<Button
							iconName="chat"
							variant="primary"
							type="button"
							onClick={() => {
								setContent(<Contact />)
								setOpened(true)
							}}
							className={"mobile-contact-button"}
						/>
					</ButtonsWrapper>
				</StyledNav>
			</NavWrapper>
			<Popup opened={opened}>{content}</Popup>
		</>
	)
}

export default NavBar
