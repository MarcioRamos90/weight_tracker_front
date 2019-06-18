
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

export const newWeights = values => {
  return new Promise((resolve) => setTimeout(() => resolve({
    data: values
  }), 1500))
}

export const deleteWeight = id => {
  return new Promise((resolve, reject) => {
    if(!!id){
      setTimeout(() => {
        return resolve({data: true})
      }, 1500)
    } else {
      setTimeout(() => {
        return reject({message: "Sem o ID fica difícil!"})
      }, 1500)
    }
  })
}