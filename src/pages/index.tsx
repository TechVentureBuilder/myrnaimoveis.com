import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from '../components/Button'
import TextInput from '../components/form/form/TextInput'

const Home: NextPage = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Button text='Teste' iconName='myrna' />
      <TextInput label='Email' placeholder='type your email here'/>
    </div>
  )
}

export default Home
