import {FLASH_ADD, FLASH_REMOVE, FLASH_REMOVE_ALL} from '../Actions/Types';
import shortid from 'shortid';


export default function(state = [], action){
  switch(action.type){

    case FLASH_ADD:
      return [
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case FLASH_REMOVE:
    const index = state.indexOf(action.id);
      if(index >=0){
        state.splice(index,1);
        console.log(index);
      }
      return [
        ...state
      ];
    case FLASH_REMOVE_ALL:
      return [];
      
    default:
      return state;
  }
}