export const addToList = (todo)=>{
    return{
        type:'ADD_TO_LIST',
        payload:todo
    }
}

export const EditToList = (todo)=>{
    return{
        type:'EDIT_TO_LIST',
        payload:todo
    }
}
export const deleteToList = (todo)=>{
    return{
        type:'DELETE_TO_LIST',
        payload:todo
    }
}
export const updateToList = (todo)=>{
    return{
        type:'UPDATE_TO_LIST',
        payload:todo
    }
}

