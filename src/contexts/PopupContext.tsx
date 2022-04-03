import React, { useContext, useState } from "react"

type PopupProps = {
	opened: boolean
	setOpened: Function
	content: React.ReactNode
	setContent: Function
}

const PopupContext = React.createContext<PopupProps>({} as PopupProps)

type Props = {
	children: any
}

const PopupProvider = (props: Props) => {
	const [opened, setOpened] = useState(false)
	const [content, setContent] = useState(null)

	return (
		<PopupContext.Provider value={{ opened, setOpened, content, setContent }}>
			{props.children}
		</PopupContext.Provider>
	)
}

export default PopupProvider

export const usePopup = () => useContext(PopupContext)
