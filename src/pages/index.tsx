import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from '../components/Button'
import Container from '../components/Container'
import TextInput from '../components/form/form/TextInput'

const Home: NextPage = (props) => {
  return (
    <Container>
      <Button text='Teste' iconName='myrna' />
      <TextInput label='Email' placeholder='type your email here'/>
    </Container>
  )
}

export default Home
