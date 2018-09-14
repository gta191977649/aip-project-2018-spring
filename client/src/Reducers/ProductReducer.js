import {FETCH_PRODUCTS,NEW_PRODUCT} from "../Actions/Types";

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState,action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
        default: return state;
    }
}
