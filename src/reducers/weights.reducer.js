import { GET_WEIGHTS, POST_WEIGHT } from '../constants'

export const weights = (state = {}, action) => {
  const { weights, weight } = action

  switch (action.type) {
    case GET_WEIGHTS:
      return weights
  
    case POST_WEIGHT:
      const newState = [...state, {id:state.length + 1, ...weight}]
      return newState
      
    default:
      return state
  }
}