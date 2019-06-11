
const weights = [
  {id:1, date: '11/09/2019', weight: 79.4},
  {id:2, date: '11/09/2019', weight: 79.4},
  {id:3, date: '11/09/2019', weight: 79.4},
  {id:4, date: '11/09/2019', weight: 79.4}
]

export const getWeights = () => {
  return new Promise((resolve) => setTimeout(() => resolve({
    data: weights
  }), 1500))
}