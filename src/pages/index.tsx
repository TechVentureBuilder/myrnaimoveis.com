import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from '../components/Button'
import Container from '../components/Container'
import TextInput from '../components/form/TextInput'

const Home: NextPage = (props) => {
  return (
    <Container>
      <h1>Início</h1>
      <Button text='Botão Primário' iconName='myrna' /><br />
      <Button text='Botão Secundário' iconName='myrna' variant='secondary'/><br />
      <Button text='Botão Terciário' iconName='myrna' variant='tertiary'/><br />
      <Button text='Botão Perigo' iconName='myrna' variant='danger'/><br />
      <TextInput label='Email' placeholder='type your email here'/><br />
      <TextInput label='Email' placeholder='type your email here' iconName='envelope'/><br />
    </Container>
  )
}

export default Home
