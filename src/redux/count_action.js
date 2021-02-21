import { INCREMENT, DECREMENT } from './const' 

export const createIncrementAction = (data) => ({type: INCREMENT, data})
export const createDecrementAction = (data) => ({type: DECREMENT, data})
