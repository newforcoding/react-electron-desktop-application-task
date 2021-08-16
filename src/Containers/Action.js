export const addToCard = (data)=>{
    return{
        type:'ADD_TO_CARD',
        payload:{
            id:new Date().getTime().toString(),
            data:data
     }
    }
}

export const EditToCard = (data)=>{
    return{
        type:'EDIT_TO_CARD',
        payload:data
    }
}
export const deleteToCard = (id)=>{
    return{
        type:'DELETE_TO_CARD',
        id
    }
}
export const updateToCard = (data)=>{
    return{
        type:'UPDATE_TO_CARD',
        payload:data
    }     
}

export const addToCardSaga = (data)=>{
    return{
        type:'ADD_TO_CARD_SAGA',
        payload:data
    }
}

export const editToCardSaga = (data)=>{
    return{
        type:'EDIT_TO_CARD_SAGA',
        payload:data
    }
}
export const updateToCardSaga = (data)=>{
    return{
        type:'UPDATE_TO_CARD_SAGA',
        payload:data
    }
}

export const deleteToCardSaga = (data)=>{
    return{
        type:'DELETE_TO_CARD_SAGA',
        payload:data
    }
}