import { 
  GET_WEIGHTS,
  POST_WEIGHT, 
  DELETE_WEIGHT 
} from '../constants'

export const weights = (state = {}, action) => {
  const { weights, weight } = action

  switch (action.type) {

    case GET_WEIGHTS:
      return weights

    case DELETE_WEIGHT:
      return [...state.filter(item => item.id !== weight.id)]
  
    case POST_WEIGHT:
      return [...state, { id: state.length + 1, ...weight }]
      
    default:
      return state
  }
}