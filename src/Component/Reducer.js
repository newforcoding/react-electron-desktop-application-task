const reducer = (state=todo,action) =>{
 switch(action.type){
     case ADD_TO_LIST:
     case EDIT_TO_LIST:
     case DELELTE_TO_LIST:
     case UPDATE_TO_LIST:   
     default: return state
 }
}