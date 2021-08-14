import {put,call,takeLatest,all} from 'redux-saga/effects'
import {deleteToCardSaga,addToCardSaga,updateToCardSaga} from './Action'

export function* onAddToCardSaga(payload){
  yield put(addToCardSaga(payload))
}
 
export function* onUpdateToCardSaga(payload){
  yield put(updateToCardSaga(payload))
}

export function* onDeleteToCardSaga({payload:{id}}){
yield put(deleteToCardSaga(id))
}

export function* onDelete(){
  yield takeLatest('DELETE_TO_CARD',onDeleteToCardSaga) 
}

export function* onAdd(){
  yield takeLatest('ADD_TO_CARD',onAddToCardSaga) 
}

export function* onUpdate(){
  yield takeLatest('UPDATE_TO_CARD',onUpdateToCardSaga) 
}

export function* card(){
   yield all([call(onDelete),call(onAdd),call(onUpdate)])
}