import toast from '../utils/toast'
import { GET_WEIGHTS, POST_WEIGHT } from '../constants'
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

export const newWeight = values => {
  return async dispatch => {
    try {
      // const response = await weights.newWeights(values)

      dispatch({
        type: POST_WEIGHT,
        weight: values
      })
    } catch (e) {
      throw e
      // toast({
      //   title: 'Algo de errado não está certo!',
      //   type: 'error'
      // })
    } 
  }
}