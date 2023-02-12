import Icon from "./Icon"
import Link from "next/link"
import React from "react"
import styled from "styled-components"
import api from "../api"
import { usePopup } from "../contexts/PopupContext"
import Button from "./Button"
import InputEmail from "./form/InputEmail"
import InputText from "./form/InputText"
import TextArea from "./form/TextArea"

const StyledForm = styled.form`
	margin-top: ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
	@media (max-width: ${(props) => props.theme.screens.s}) {
		margin-top: auto;
	}
`

const OtherContacts = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${(props) => props.theme.sizes.m};
	a {
		width: 100%;
		text-decoration: none;
	}
	@media (max-width: ${(props) => props.theme.screens.s}) {
		flex-direction: column;
	}
`

const CenteredParagraph = styled.p`
	text-align: center;
`

const LoadingWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Loading = styled.div`
	height: ${(props) => props.theme.sizes.l};
	width: ${(props) => props.theme.sizes.l};
	background-color: ${(props) => props.theme.colors.primary.default};
	@keyframes loading {
		0% {
			opacity: 0;
			transform: scale(0.5) rotate(-45deg);
			filter: none;
		}
		25% {
			filter: blur(2px);
		}
		50% {
			opacity: 1;
			transform: scale(1) rotate(45deg);
			filter: none;
		}
		75% {
			filter: blur(2px);
		}
		100% {
			opacity: 0;
			transform: scale(0.5) rotate(135deg);
			filter: none;
		}
	}
	animation-name: loading;
	animation-duration: 1s;
	animation-iteration-count: infinite;
`

const Contact: React.FC = () => {
	const { opened, setOpened, content, setContent } = usePopup()
	const formRef = React.useRef(null)

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()

		if (opened == false) {
			setOpened(true)
		}
		setContent(
			<LoadingWrapper>
				<Loading></Loading>
			</LoadingWrapper>
		)

		const formData = new FormData(formRef.current!)
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		}
		api
			.post("/email", data)
			.then(() => {
				if (!opened) {
					setOpened(true)
				}
				setContent(
					<>
						<h3>Recebemos sua mensagem!</h3>
						<br />
						<p>
							Agora é só aguardar um de nossos corretores entrar em contato pelo
							seu email.
						</p>
						<br />
						<small>
							Nosso atendimento funciona das 09:00 às 21:00, todos os dias da
							semana.
						</small>
						<br />
						<br />
						<small>Normalmente levamos até 30 minutos para responder.</small>
						<br />
						<br />
						<Button
							iconName="check"
							type="button"
							text="Ok"
							onClick={() => {
								setOpened(false)
							}}
						></Button>
					</>
				)
			})
			.catch((err) => {
				if (!opened) {
					setOpened(true)
				}
				setContent(
					<>
						<h2>Erro no envio!</h2>
						<br />
						<p>
							Houve um erro ao enviar seu contato, tente novamente e caso o
							problema persista, favor entrar em contato pelos outros canais.
						</p>
						<br />
						<small>
							Nosso atendimento funciona das 09:00 às 21:00, todos os dias da
							semana.
						</small>
						<br />
						<br />
						<Button
							iconName="check"
							type="button"
							text="Ok"
							onClick={() => {
								setOpened(false)
							}}
						></Button>
					</>
				)
			})
	}

	return (
		<StyledForm action="" target="" ref={formRef} onSubmit={handleSubmit}>
			<h3>Entrar em contato</h3>
			<InputText
				label="Nome"
				placeholder="Digite seu nome"
				name="name"
				iconName="person"
			/>
			<InputEmail label="Email" placeholder="Digite seu email" name="email" />
			<TextArea
				label="Mensagem"
				name="message"
				placeholder="Digite aqui sua mensagem"
			/>
			<Button
				variant="primary"
				iconName="send"
				text="Enviar Email"
				fill={true}
				type="submit"
			/>
			<OtherContacts>
				<Link href={"tel:+5511999204878"} passHref={true}>
					<Button
						type="button"
						variant="secondary"
						text="Ligar"
						iconName="telephone"
						fill={true}
					/>
				</Link>
				<Link href={"https://wa.me/+5511999204878"} passHref={true}>
					<Button
						type="button"
						variant="secondary"
						text="WhatsApp"
						iconName="whatsapp"
						fill={true}
					/>
				</Link>
			</OtherContacts>
		</StyledForm>
	)
}

export default Contact
