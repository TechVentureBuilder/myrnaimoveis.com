import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Button from "./Button"
import InputEmail from "./form/InputEmail"
import InputText from "./form/InputText"
import TextArea from "./form/TextArea"

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

const Contact: React.FC = () => {
	const formRef = React.useRef(null)

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		const formData = new FormData(formRef.current!)
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		}
		console.log(data)
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
	)
}

export default Contact
