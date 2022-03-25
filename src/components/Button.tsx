import React from 'react'
import styled from 'styled-components'
import Icon from './Icon';

type Props = {
  text?: string;
  iconName?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
}

const StyledButton = styled.button`
  padding: ${props => props.theme.sizes.m};
  font-size: ${props => props.theme.font.sizes.s};
  font-family: ${props => props.theme.font.families.sans};
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.text};
  border: ${props => `${props.theme.border.width} solid`};
  border-color: ${props => props.theme.colors.main};
  display: flex;
  align-items: center;
  column-gap: ${props => props.theme.sizes.xs};
  transition: ${props => props.theme.transitions.fast};
  text-decoration: none !important;
  width: fit-content;
  cursor: pointer;
  &.fill {
    width: 100%;
  }
  svg {
    display: block;
    height: ${props => props.theme.sizes.m};
  }
  &.onlyIcon {
    padding: ${props => props.theme.sizes.s};
  }
  :hover {
    background-color: ${props => props.theme.colors.primary.dark};
    border-color: ${props => props.theme.colors.main};
  }

  /* Variants */
  &.secondary {
    background-color:  ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.main};
    :hover {
      background-color: ${props => props.theme.colors.primary.dark};
      color: ${props => props.theme.colors.white};
    }
  }
  &.tertiary {
    background-color: ${props => props.theme.colors.darker};
    color: ${props => props.theme.colors.text};
    border-color: ${props => props.theme.colors.darker};
    :hover {
      border-color: ${props => props.theme.colors.darker};
      background-color: ${props => props.theme.colors.dark};
    }
  }
  &.danger {
    background-color: red;
    color: ${props => props.theme.colors.text};
    border-color: red;
    :hover {
      border-color: red;
      background-color: darkred;
    }
  }
`

const Button = (props: Props) => {

  const className = `
    ${!props.text && props.iconName ? 'onlyIcon' : ''}
    ${props.variant !== 'primary' ? props.variant : ''}
  `;
  
  return (
    <StyledButton className={className}>
      {props.iconName ? <Icon iconName={props.iconName}></Icon> : ''}
      {props.text ? props.text : ''}
    </StyledButton>
  )
}

export default Button;