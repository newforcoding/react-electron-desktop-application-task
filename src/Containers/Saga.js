import {put,call,takeLatest,all} from 'redux-saga/effects'
import { removeToCardSaga,
         addToCardSaga,
        } from './Action'

export function* onAddToCardSaga({payload}){
  yield put(addToCardSaga(payload))
}

export function* onRemoveToCardSaga(){
  yield put(removeToCardSaga())
}


export function* onAdd(){
  yield takeLatest('ADD_TO_CARD',onAddToCardSaga) 
}

export function* onRemove(){
  yield takeLatest('REMOVE_TO_CARD',onRemoveToCardSaga) 
}


export function* card(){
   yield all([call(onAdd),call(onRemove)])
}