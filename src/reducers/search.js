import {ACTION_ITEMS} from '../action';
const INITIAL_STATE ={
  isLoggedIn : true,
  isLoading : false,
  isError : false,
  ErrorMessage : ""
}

export const searchReducer  =(state=INITIAL_STATE,action) =>{
  switch(action.type) {
    case ACTION_ITEMS.SEARCH_REQUEST:
      return{
        ...state,
        isLoading:true
      }
    case ACTION_ITEMS.SEARCH_SUCCESS:
      return{
        ...state,
        isLoading:false,
      }
    case ACTION_ITEMS.SEARCH_FAILURE:
      return{
        ...state,
        isError:true,
        ErrorMessage:action.payload,
      }
    default:
      return state;
  }
}