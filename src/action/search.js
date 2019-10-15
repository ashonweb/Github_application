import {ACTION_ITEMS} from './index';
import {store} from '../store';

export const searchUserAction = (username) =>{
  store.dispatch({
    type:ACTION_ITEMS.SEARCH_REQUEST
  })
  const endpoint = "https://api.github.com/search/users\?q="+username
  const response = fetch (endpoint)
  .then(data=>data.json())
  .then((data)=>{
    console.log(data)
    console.log(data.items)
    if(data) {
      store.dispatch({
        type:ACTION_ITEMS.SEARCH_SUCCESS,
        payload: data.items,
      });
    }   
    else {
      store.dispatch({
        type:ACTION_ITEMS.SEARCH_FAILURE,
        payload:"user not found"
      })
      const msg = store.getState().searchReducer.ErrorMessage;
      alert(msg)
    } 
  })
  
  
}