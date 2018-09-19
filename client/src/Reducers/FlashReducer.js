import {FLASH_ADD, FLASH_REMOVE} from '../Actions/Types';
import shortid from 'shortid';


export default function(state = [], action){
  switch(action.type){

    case FLASH_ADD:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case FLASH_REMOVE:
      return {
        ...state,
        flash: action.payload
      }
    default:
      return state;
  }
};