import {ACTION_ITEMS} from './index';
import {store} from '../store';

export const loginUserAction = (username,password,history) =>{
  store.dispatch({
    type : ACTION_ITEMS.LOGIN_REQUEST
  })
  if(username === "bhagya@gmail.com" && password === "Password123"){
    store.dispatch ({
      type :ACTION_ITEMS.LOGIN_SUCCESS
    })
    console.log("success");
    const loggedIn = {
      isLoggedIn: true,
    }
    localStorage.setItem('loggedIn',JSON.stringify(loggedIn));
    history.push('/githubsearch')
  }
  else {
    store.dispatch ({
      type : ACTION_ITEMS.LOGIN_FAILURE,
      payload :"invalid credentials,Please try again"
    })
    const msg = store.getState().loginReducer.ErrorMessage;
    alert(msg);
  }
}

export const logoutAction = () =>{
  store.dispatch ({
    type : ACTION_ITEMS.LOGOUT
  })
  localStorage.removeItem('loggedIn');
}
