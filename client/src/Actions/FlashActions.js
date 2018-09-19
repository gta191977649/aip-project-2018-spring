import {FLASH_ADD, FLASH_REMOVE, FLASH_REMOVE_ALL} from './Types';

export function addFlashMessage(message){
  return {
    type: FLASH_ADD,
    message
  }
}

export function deleteFlashMessage(id){
  console.log("DELETE MESSAGE: "+id);
  return {
    type: FLASH_REMOVE_ALL,
    id
  }
}