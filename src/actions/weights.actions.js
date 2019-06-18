import toast from '../utils/toast'
import { 
  GET_WEIGHTS,
  POST_WEIGHT, 
  DELETE_WEIGHT 
} from '../constants'
import { weights } from '../api'

export const getWeights = () => {
  return async dispatch => {
    try {

      const response = await weights.getWeights()

      dispatch({
        type: GET_WEIGHTS,
        weights: response.data
      })
    } catch (e) {
      toast({
        title: 'Erro ao carregar as pesos',
        type: 'error'
      })

    }
    return true
  }
}

export const deleteWeight = (id) => {
  return async dispatch => {
    try {
      await weights.deleteWeight(id)
      dispatch({
        type: DELETE_WEIGHT,
        weight: { id }
      })
    } catch (e) {
      toast({
        title: e.message,
        type: 'error'
      })
    }

  } 
}

export const newWeight = values => {
  return async dispatch => {
    try {
      const response = await weights.newWeights(values)
      dispatch({
        type: POST_WEIGHT,
        weight: response.data
      })
    } catch (e) {
      toast({
        title: 'Algo de errado não está certo!',
        type: 'error'
      })
    } 
  }
}