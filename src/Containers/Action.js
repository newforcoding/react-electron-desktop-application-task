export const addToCard = (todo)=>{
    return{
        type:'ADD_TO_CARD',
        payload:{
            todo:todo,
            id:new Date().getTime().toString()
     }
    }
}

export const EditToCard = (todo)=>{
    return{
        type:'EDIT_TO_CARD',
        payload:todo
    }
}
export const deleteToCard = (todo)=>{
    return{
        type:'DELETE_TO_CARD',
        payload:todo
    }
}
export const updateToCard = (todo)=>{
    return{
        type:'UPDATE_TO_CARD',
        payload:todo
    }     
}

export const addToCardSaga = (todo)=>{
    return{
        type:'ADD_TO_CARD_SAGA',
        payload:todo
    }
}

export const editToCardSaga = (todo)=>{
    return{
        type:'EDIT_TO_CARD_SAGA',
        payload:todo
    }
}
export const updateToCardSaga = (todo)=>{
    return{
        type:'UPDATE_TO_CARD_SAGA',
        payload:todo
    }
}

export const deleteToCardSaga = (todo)=>{
    return{
        type:'DELETE_TO_CARD_SAGA',
        payload:todo
    }
}