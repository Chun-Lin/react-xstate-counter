import React from 'react'
import './App.css'
import { useMachine } from '@xstate/react'
import { Flex, Button, Text } from '@chakra-ui/core'

import counterMachine from './counterMachine'

function App() {
  const [state, send] = useMachine(counterMachine)

  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="space-around"
      alignItems="center"
    >
      <Button
        height="50px"
        px="30px"
        fontSize="24px"
        variantColor="teal"
        variant="solid"
        border="none"
        cursor="pointer"
        onClick={() => send('INCREMENT')}
      >
        +
      </Button>
      <Text fontSize="6xl">{state.context.counterValue}</Text>
      <Button
        height="50px"
        px="30px"
        fontSize="24px"
        variantColor="teal"
        variant="solid"
        border="none"
        cursor="pointer"
        onClick={() => send('DECREMENT')}
      >
        -
      </Button>
    </Flex>
  )
}

export default App
