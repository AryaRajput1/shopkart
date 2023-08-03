const initialState = {
    items:[]
}

const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART': return {...state,items:[...state.items,action.payload]}
    }

    return initialState
}

export default cartReducer;