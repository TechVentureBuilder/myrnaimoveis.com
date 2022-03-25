import React from 'react'
import styled from 'styled-components'

type Props = {
  internal?: boolean
}

const NavWrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  padding: ${props => props.theme.sizes.s} 0;
  display: flex;
  justify-content: center;
`

const StyledNav = styled.nav`
  width: ${props => props.theme.screens.xxl};
  padding: 0 ${props => props.theme.sizes.m};
  background-color: red;
  height: 13px;
`

const NavBar = (props: Props) => {
  return (
    <NavWrapper>
      <StyledNav>

      </StyledNav>
    </NavWrapper>
  )
}

export default NavBar