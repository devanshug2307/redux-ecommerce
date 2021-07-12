
import { ActionTypes } from "../constants/action-types"

export const setProducts=(products)=>{

return{

    type:ActionTypes.SET_PRODUCTS,
    payload:products,
    //payload is data
}}
export const selectedProduct=(product)=>{

    return{
    
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
        //payload is data
    }
}