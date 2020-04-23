import { Machine, assign } from 'xstate'

const counterMachine = Machine({
  id: 'counter',
  initial: 'idle',
  context: {
    counterValue: 0,
  },
  states: {
    idle: {
      on: {
        INCREMENT: {
          actions: assign({
            counterValue: context => context.counterValue + 1,
          }),
        },
        DECREMENT: {
          actions: assign({
            counterValue: context => context.counterValue - 1,
          }),
        },
      },
    },
  },
})

export default counterMachine
