export const weights = (state = {}, action) => {
  const { weights } = action

  switch (action.type) {
    case "GET_WEIGHTS":
      return weights
  
    default:
      return state
  }
}