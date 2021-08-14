import rootReducer from '../src/Containers/Reducer'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import logger from 'redux-logger' 
import {card} from '../src/Containers/Saga'

//saga file
const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger,sagaMiddleware]

//root reducer
const store = createStore(rootReducer,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLs_EXTENSION__ && window.REDUX_DEVTOOLs_EXTENSION__(),)
    
sagaMiddleware.run(card)

export default store
