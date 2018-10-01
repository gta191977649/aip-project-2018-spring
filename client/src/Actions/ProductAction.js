import {FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR,SEARCH_PRODUCTS,FETCH_PRODUCT_ID} from "./Types";

import axios from "axios";
const productRestURI = "http://localhost:3000/api/Products";
export const fetchProducts = () => dispatch =>{
  
  axios.get(productRestURI)
    .then(
      response => {
        dispatch({
          type:FETCH_PRODUCTS,
          payload: response.data
        })
      },
    )
    .catch(error=>{
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      })
    })
}

export const fetchProductById = (id) => dispatch =>{
    
    axios.get(productRestURI+id)
        .then(
            response => {
                dispatch({
                    type:FETCH_PRODUCT_ID,
                    payload: response.data
                })
            },
        )
        .catch(error=>{
            
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                payload: error.message
            })
        })
}

export const searchProducts = (filter) => dispatch =>{
    console.log("Recieved filter:" ,filter);
    axios.get(productRestURI,{params: { filter: filter} }).then(
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

