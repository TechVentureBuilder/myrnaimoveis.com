import React from 'react'
import { ReactSVG } from 'react-svg'

type Props = {
	iconName: string
	className?: string
}

const Icon = (props: Props) => {
	return (
		<ReactSVG
			src={`/assets/icons/${props.iconName}.svg`}
			className={props.className}
		/>
	)
}

export default Icon
