import React from 'react'
import {ReactSVG} from 'react-svg'

type Props = {
    iconName: string
}

const Icon = (props: Props) => {
    return (
    <ReactSVG src={`/assets/icons/${props.iconName}.svg`} />
  )
}

export default Icon