export const addToCard = (data)=>{
    return{
        type:'ADD_TO_CARD',
        payload:{
            id:new Date().getTime().toString(),
            data:data
     }
    }
}

export const removeToCard = ()=>{
    return{
        type:'REMOVE_TO_CARD'
    }     
}

export const deleteToCard = (id)=>{
    return{
        type:'DELETE_TO_CARD',
        id
    }
}

export const editToCard = (data) =>{
    return {
        type:'EDIT_TO_CARD',
        payload:data
    }
}
export const addToCardSaga = (data)=>{
    return{
        type:'ADD_TO_CARD_SAGA',
        payload:data
    }
}


export const removeToCardSaga = ()=>{
    return{
        type:'REMOVE_TO_CARD_SAGA'
    }
}


export const deleteToCardSaga = (data)=>{
    return{
        type:'DELETE_TO_CARD_SAGA',
        payload:data
    }
}
