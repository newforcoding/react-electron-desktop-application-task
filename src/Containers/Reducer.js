import { ADD_TO_CARD, 
        ADD_TO_CARD_SAGA,
        DELELTE_TO_CARD_SAGA, 
        UPDATE_TO_CARD_SAGA} from './Constant'

const initialData = {
     card:[]
}
const reducer = (state=initialData,action) =>{
    let newToDos;
    switch(action.type){
    case ADD_TO_CARD:
        const {id,todo} = action.payload 
        return {
            ...state,
            card:[
                ...state.card,
                {
                   id:id, 
                  todo:todo
               }]
        }   
    case ADD_TO_CARD_SAGA:
         newToDos=[...state]
         newToDos.push(action.payload)
         return newToDos
     case DELELTE_TO_CARD_SAGA:
        newToDos=[...state]
        newToDos=newToDos.filter((todo)=>todo.id !==action.payload)
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


