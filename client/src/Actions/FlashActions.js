import {FLASH_ADD, FLASH_REMOVE} from './Types';

export function addFlashMessage(message){
  return {
    type: FLASH_ADD,
    message
  }
}
