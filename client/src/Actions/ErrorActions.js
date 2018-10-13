import { toast } from "mdbreact";

import isEmpty from "../Utils/isEmpty";
import { GET_ERRORS } from "../Actions/Types";

export const handleError = (error, dispatch) => {
  if (isEmpty(error.response)) {
    return toast.error(
      "Server Error: No connection to API Server could be made!"
    );
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors
    });
  }
};
