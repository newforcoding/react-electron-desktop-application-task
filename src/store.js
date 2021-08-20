import rootReducer from '../src/Containers/Reducer'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import logger from 'redux-logger' 
import {card} from '../src/Containers/Saga'
import { composeWithDevTools } from 'redux-devtools-extension';

//saga file
const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger,sagaMiddleware]

//root reducer
const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    ))

sagaMiddleware.run(card)

// const store = createStore(rootReducer,composeWithDevTools())

export default store
