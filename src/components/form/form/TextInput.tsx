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
    background-color: transparent;
    border: ${props => props.theme.border.width} solid ${props => props.theme.colors.placeholder};
    font-size: ${props=>props.theme.font.sizes.p};
    transition: ${props=>props.theme.transitions.fast};
    ::placeholder {
        font-size: ${props=>props.theme.font.sizes.s};
        color: ${props=>props.theme.colors.placeholder};
        opacity: 1;
    }
    :hover {
        border-color: ${props=>props.theme.colors.main};
    }
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