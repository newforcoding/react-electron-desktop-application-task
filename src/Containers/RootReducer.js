import {combineReducers} from 'redux'
import reducer from './Reducer'

const rootReducer = combineReducers({
    app:reducer,
})
export default rootReducer
