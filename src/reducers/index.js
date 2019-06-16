import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { weights } from './weights.reducer'
export default combineReducers({
  weights,
  form: formReducer
})