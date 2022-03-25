import React from 'react'
import styled from 'styled-components'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const StyledDiv = styled.div`
  width: ${props => props.theme.sizes.interaction};
  padding: 0 ${props => props.theme.sizes.m};
`

const Container = (props: Props) => {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

export default Container