import {FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR,SEARCH_PRODUCTS} from "./Types";
import axios from "axios";

export const fetchProducts = () => dispatch =>{
    let poductRestURI = "http://localhost:3000/api/Products";
    
    axios.get(poductRestURI).then(
        response => {
            dispatch({
                type:FETCH_PRODUCTS,
                payload: response.data
            })
        }
    )
    .catch(error=>{
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      })
    })
}
export const searchProducts = (filter) => dispatch =>{
    let poductRestURI = "http://localhost:3000/api/Products";
    console.log("Recieved filter:" ,filter);
    axios.get(poductRestURI,{params: { filter: filter} }).then(
        response => {
            dispatch({
                type:SEARCH_PRODUCTS,
                payload: response.data
            })
        }
    )
    .catch(error=>{
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      })
    })
}
