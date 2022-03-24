import type { NextPage } from 'next'
import styled from 'styled-components'
import Button from '../components/Button'

const Home: NextPage = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Button text='Teste' iconName='myrna' />
    </div>
  )
}

export default Home
