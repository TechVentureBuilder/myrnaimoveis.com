import React from 'react'
import slugify from 'slugify'
import styled from 'styled-components'
import Label from './Label'

type Props = {
    label: string
    placeholder: string
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: ${props => props.theme.sizes.s} ${props => props.theme.sizes.m};
    display: block;
`

const TextInput = (props: Props) => {
    const inputId = slugify(props.label)
    return (
        <InputWrapper>
            <Label text={props.label} htmlFor={inputId}/>
            <Input id={inputId} placeholder={props.placeholder} type='text'/>
        </InputWrapper>
    )
}

export default TextInput