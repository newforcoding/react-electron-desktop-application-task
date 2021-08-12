import reducer from './Reducer'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import logger from 'redux-logger'


//saga file
const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger.sagaMiddleware]
sagaMiddleware.run()

//root reducer
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store
