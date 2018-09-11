import { UPDATE_USRR } from "../actions/user.actions";

export default function userReducer(state ='', action) {
    switch (action.type) {
        case UPDATE_USRR:
            return action.payload.user;
        default:
            return state;
    }
}
