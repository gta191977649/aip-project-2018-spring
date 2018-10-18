import { toast } from "mdbreact";

import isEmpty from "../Utils/isEmpty";
import { GET_ERRORS } from "../Actions/Types";
import * as Msg from "../Utils/Constants";

export const handleError = (error, dispatch) => {
  if (isEmpty(error.response)) {
    return toast.error(
      Msg.SERVER_API_ERROR
    );
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors
    });
  }
};
