import {FETCH_PRODUCTS,NEW_PRODUCT} from "./Types";
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
}