import CounterReducer from './CounterReducer'
import LoggerReducer from './islogged'
import { combineReducers } from 'redux'   
const RootReducers = combineReducers({
   CounterReducer,
   LoggerReducer
})
export default RootReducers;