import {ACTION_ITEMS} from '../action';
const INITIAL_STATE = {
  isLoggedIn : false,
  isLoading : false,
  isError : false,
  ErrorMessage : "",
}
export const loginReducer = (state=INITIAL_STATE,action) =>{
  switch(action.type) {
    case ACTION_ITEMS.LOGIN_REQUEST:
      return {
        ...state,
        isLoading:true,
      }
      case ACTION_ITEMS.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isLoggedIn:true,
        }
      case ACTION_ITEMS.LOGIN_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError :true,
          ErrorMessage:action.payload
        }
      case ACTION_ITEMS.LOGOUT: 
        return {
          ...state,
          isLoggedIn : false,
        }
        default :
        return  state;
        
      
  }

}