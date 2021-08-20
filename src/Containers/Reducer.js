import { 
        ADD_TO_CARD_SAGA,
        DELETE_TO_CARD_SAGA, 
        REMOVE_TO_CARD_SAGA,
     } from './Constant'

const initialData = {
     card:[]
}
const reducer = (state=initialData,action) =>{
    switch(action.type){
        
    case ADD_TO_CARD_SAGA:
     const {id,data} = action.payload
     return {
         ...state,
         card:[
             ...state.card,
             {
                 id:id,
                 data:data
             }
         ]
     }

     case REMOVE_TO_CARD_SAGA:     
             return{
                 ...state,
                 card:[]
             }  
     default: return state
        }
       }
  export default reducer
       
  

