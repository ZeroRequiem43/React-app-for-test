import { createStore, combineReducers } from 'redux'
import loginReducer from './loginReducer'

let rootReducer = combineReducers({
   loginPage: loginReducer
})

let store = createStore(rootReducer)

window.store = store

export default store