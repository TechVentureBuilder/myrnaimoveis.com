import type { NextPage } from 'next'
import styled from 'styled-components'

const StyledHome = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Home: NextPage = () => {
  return (
    <StyledHome>
      <h1>Home</h1>
    </StyledHome>
  )
}

export default Home
