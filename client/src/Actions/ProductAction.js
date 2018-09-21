import {FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR} from "./Types";
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
