import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import InputEmail from "./form/InputEmail"
import InputText from "./form/InputText"
import TextArea from "./form/TextArea"
import Popup from "./Popup"

type Props = {}

const StyledForm = styled.form`
	margin-top: ${(props) => props.theme.sizes.m};
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.sizes.m};
`

const OtherContacts = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${(props) => props.theme.sizes.m};
`

const ContactPopup = (props: Props) => {
	return (
		<Popup>
			<h3>Entrar em contato</h3>
			<StyledForm action="" target="">
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
					<Link href={"tel:+5511998502662"} passHref={true}>
						<Button
							type="button"
							variant="secondary"
							text="Ligar"
							iconName="telephone"
							fill={true}
						/>
					</Link>
					<Link href={"https://wa.me/+5511998502662"} passHref={true}>
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
		</Popup>
	)
}

export default ContactPopup
