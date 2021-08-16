import { 
    // ADD_TO_CARD, 
    // DELETE_TO_CARD,
        ADD_TO_CARD_SAGA,
        DELETE_TO_CARD_SAGA, 
        UPDATE_TO_CARD_SAGA
     } from './Constant'

const initialData = {
     card:[]
}
const reducer = (state=initialData,action) =>{
    let newToDos;
    switch(action.type){
    // case ADD_TO_CARD:
    //     const {id,data} = action.payload 
    //     return {
    //         ...state,
    //         card:[
    //             ...state.card,
    //             {
    //                id:id, 
    //                data:data
    //            }]
    //     }   
    
    //     case DELETE_TO_CARD:
    //     const deleteCard=state.card.filter((card)=>card.id !== action.id)   
    //     console.log('delete',deleteCard)
  
    //     return {
    //         ...state,
    //         card:deleteCard
    //         }   
    
    case ADD_TO_CARD_SAGA:
         newToDos=[...state]
         newToDos.push(action.payload)
         return newToDos
     case DELETE_TO_CARD_SAGA:
        newToDos=[...state]
        newToDos=newToDos.filter((card)=>card.id !==action.payload)
        return newToDos
     case UPDATE_TO_CARD_SAGA:
         newToDos= [...state]
         let index = -1
         for(let i=0;i<newToDos.length;i++){
             index++
             if(newToDos[i].id === action.payload.id){
                 break;
             }
         }   
     if(index !== -1){
         newToDos[index] = action.payload
     }    
     return newToDos;
     default: return state
 }
}
export default reducer


