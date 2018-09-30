import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS,
  FETCH_PRODUCT_ID,
  FETCH_PRODUCT_USER_ID,
  ADD_PRUDUCT
} from "./Types";

import axios from "axios";
const productRestURI = "http://127.0.0.1:3000/api/Products";
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

export const fetchProductByUserId = (userid) => dispatch =>{
    console.log("Recieved filter:" ,userid);
    const filter = {"where": {"userId": userid}};
    axios.get(productRestURI,{params: { filter: filter} }).then(
        response => {
            dispatch({
                type:FETCH_PRODUCT_USER_ID,
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

export const addProduct = (productData) => dispatch =>{
    console.log("Recieved filter:" ,productData);
    axios.post(productRestURI, productData).then(
      response => {
        dispatch({
          type:ADD_PRUDUCT,
          payload: true
        })
      }
    )
    .catch(error=>{
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: false
      })
    })
}
