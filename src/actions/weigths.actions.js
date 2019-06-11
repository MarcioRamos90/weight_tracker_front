import toast from '../utils/toast'

import { weights } from '../api'

export const getWeights = () => {
  return async dispatch => {
    try {
      const response = await weights.getWeights()

      dispatch({
        type: "GET_WEIGHTS",
        weights: response.data
      })

    } catch (e) {
      toast({
        title: 'Erro ao carregar as pesos',
        type: 'error'
      })
    }
  }
}