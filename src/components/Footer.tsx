import Link from "next/link"
import React from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"
import { usePopup } from "../contexts/PopupContext"
import Container from "./Container"
import Contact from "./Contact"

type Props = {
	children?: React.ReactNode
	className?: string
}

const Footer: React.FC<Props> = (props) => {
	const { opened, setOpened, content, setContent } = usePopup()

	return (
		<footer className={props.className}>
			<Container className="footer-container">
				<div className="footer-primary">
					<ReactSVG
						className="footer-logo"
						src="assets/logo/logoLightVertical.svg"
					></ReactSVG>
					<div className="footer-links">
						<h3>Páginas</h3>
						<Link href={"/"}>Pagina Inicial</Link>
						<Link href={"/catalogo"}>Catálogo</Link>
						<Link href={"/sobre"}>Sobre Nós</Link>
					</div>
					<div className="footer-links">
						<h3>Atendimento</h3>
						<a
							onClick={() => {
								setOpened(true)
								setContent(<Contact></Contact>)
							}}
						>
							Fale Conosco
						</a>
						<Link href={"tel:+5511998502662"}>{"(11) 99920-4878"}</Link>
						<Link
							href={
								"https://api.whatsapp.com/send/?phone=%2B5511998502662&text&app_absent=0"
							}
						>
							WhatsApp
						</Link>
					</div>
				</div>
				<div className="footer-secondary">
					<div className="footer-links cookies">
						<p>
							Não coletamos cookies, optamos por preservar a sua privacidade.
						</p>
						<p>Guardamos apenas os dados que você nos fornece.</p>
					</div>
					<div className="footer-links info">
						<p>CRECI: 54346-J</p>
						<p>CNPJ: 40.841.676/0001-22</p>
						<p>Myrna Imóveis ® 2022</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

const StyledFooter = styled(Footer)`
	width: 100%;
	border-top: ${(props) => props.theme.border.width} solid
		${(props) => props.theme.colors.card};
	.footer-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: ${(props) => props.theme.sizes.xxl};
		.footer-primary {
			width: auto;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: ${(props) => props.theme.sizes.xxl};
		}
		.footer-secondary {
			width: auto;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: ${(props) => props.theme.sizes.xxl};
		}
		svg {
			justify-self: flex-start;
			align-self: flex-start;
			width: calc(${(props) => props.theme.sizes.xxl} * 2);
		}
		.footer-links {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: ${(props) => props.theme.sizes.m};
			h3 {
				color: ${(props) => props.theme.colors.primary.default};
			}
			a {
				color: ${(props) => props.theme.colors.text};
				font-size: ${(props) => props.theme.font.sizes.p};
				text-decoration: none;
				transition: ${(props) => props.theme.transitions.fast};
				white-space: nowrap;
				cursor: pointer;
				:hover {
					color: ${(props) => props.theme.colors.primary.light};
				}
			}
			p {
				color: ${(props) => props.theme.colors.lighter};
			}
			&.info {
				white-space: nowrap;
				text-align: right;
			}
		}
		@media (max-width: ${(props) => props.theme.screens.l}) {
			flex-direction: column;
			.footer-secondary {
				padding: 0 0 ${(props) => props.theme.sizes.m} 0;
			}
		}
		@media (max-width: ${(props) => props.theme.screens.s}) {
			.footer-primary {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				svg {
					padding: ${(props) => props.theme.sizes.xxl} 0 0 0;
					height: fit-content;
				}
			}
			.footer-secondary {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
			}
			.footer-links {
				justify-content: center;
				align-items: center;
			}
		}
	}
`

export default StyledFooter
