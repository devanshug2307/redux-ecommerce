import { ActionTypes } from "../constants/action-types";


const initialState={


    products:[{
        id:1 , title:"Devanshu",category:"programmer"
    }]
}


export const productReducer=( state=initialState ,{type ,payload})=>{
//destructuring action.type==type
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
        
     

    default:
        return state;
        
}

}